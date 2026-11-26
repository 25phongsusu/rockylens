'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Camera,
  CameraOff,
  Check,
  ChevronRight,
  Download,
  Eye,
  MessageSquare,
  RefreshCw,
  Sparkles,
  Upload,
} from 'lucide-react';
import { assetUrl } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { getFaceLandmarker } from './face-shape-analyzer';
import {
  FACE_SHAPE_PROFILES,
  FRAME_STYLES,
  LENS_TINTS,
  recommendProducts,
} from './frame-lens-recommendations';
import type {
  FaceShape,
  FrameStyleId,
  LensTintOption,
  Point2D,
  ProductSummary,
} from './types';

interface LiveVirtualTryOnProps {
  products: ProductSummary[];
}

interface SmoothTrackData {
  centerX: number;
  centerY: number;
  glassesWidthPct: number;
  angleDeg: number;
  faceShape: FaceShape;
  confidence: number;
  detected: boolean;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'Tất Cả Gọng' },
  { id: 'rimless', label: 'Gọng Khoan Bắt Ốc' },
  { id: 'tinted', label: 'Đổi Màu / Râm' },
  { id: 'work', label: 'Văn Phòng & Máy Tính' },
  { id: 'driving', label: 'Lái Xe Ban Đêm' },
];

export default function LiveVirtualTryOn({ products }: LiveVirtualTryOnProps) {
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [selectedFrameId, setSelectedFrameId] = useState<FrameStyleId>('rimless');
  const [selectedTint, setSelectedTint] = useState<LensTintOption>(LENS_TINTS[2]); // Default Polarized Nâu
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showProductDrawer, setShowProductDrawer] = useState(false);

  // Smooth live tracking state
  const [tracking, setTracking] = useState<SmoothTrackData>({
    centerX: 50,
    centerY: 44,
    glassesWidthPct: 48,
    angleDeg: 0,
    faceShape: 'oval',
    confidence: 90,
    detected: false,
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Smooth tracking ref for lerp without React re-render lag
  const smoothRef = useRef<SmoothTrackData>({
    centerX: 50,
    centerY: 44,
    glassesWidthPct: 48,
    angleDeg: 0,
    faceShape: 'oval',
    confidence: 90,
    detected: false,
  });

  const selectedFrame =
    FRAME_STYLES.find((f) => f.id === selectedFrameId) || FRAME_STYLES[0];
  const detectedProfile = FACE_SHAPE_PROFILES[tracking.faceShape];

  const stopCamera = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
    setCameraLoading(false);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    setErrorMsg(null);
    setCameraLoading(true);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setErrorMsg(
        'Trình duyệt hiện tại không hỗ trợ WebRTC Camera. Bạn có thể sử dụng ảnh demo hoặc tải ảnh chân dung lên nhé.'
      );
      setCameraLoading(false);
      return;
    }

    try {
      stopCamera();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      streamRef.current = stream;
      setCameraActive(true);

      // Pre-warm MediaPipe in VIDEO mode
      const landmarker = await getFaceLandmarker('VIDEO');

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().catch(() => {});
          setCameraLoading(false);
          startTrackingLoop(landmarker);
        };
      }
    } catch {
      setErrorMsg(
        'Không thể mở camera (vui lòng cho phép quyền truy cập camera trong trình duyệt hoặc kiểm tra thiết bị).'
      );
      stopCamera();
    }
  };

  const startTrackingLoop = (
    landmarker: Awaited<ReturnType<typeof getFaceLandmarker>>
  ) => {
    let lastVideoTime = -1;

    const loop = () => {
      if (
        videoRef.current &&
        videoRef.current.readyState >= 2 &&
        !videoRef.current.paused
      ) {
        const currentTime = videoRef.current.currentTime;
        if (currentTime !== lastVideoTime) {
          lastVideoTime = currentTime;
          try {
            const results = landmarker.detectForVideo(
              videoRef.current,
              performance.now()
            );
            const landmarks = results.faceLandmarks?.[0];

            if (landmarks && landmarks.length >= 455) {
              const videoW = videoRef.current.videoWidth || 1280;
              const videoH = videoRef.current.videoHeight || 720;

              // Left Eye (iris 468 or eye center), Right Eye (iris 473 or eye center)
              const leftPt = landmarks.length >= 474 ? landmarks[468] : landmarks[33];
              const rightPt = landmarks.length >= 474 ? landmarks[473] : landmarks[362];

              // In mirrored video (scale-x-[-1]), x is inverted: (1 - x)
              const rawCenterX = (leftPt.x + rightPt.x) / 2;
              const rawCenterY = (leftPt.y + rightPt.y) / 2;
              const targetCenterX = (1 - rawCenterX) * 100;
              const targetCenterY = (rawCenterY + 0.02) * 100;

              // Eye distance in pixel coordinates
              const dx = (rightPt.x - leftPt.x) * videoW;
              const dy = (rightPt.y - leftPt.y) * videoH;
              const eyeDistPx = Math.hypot(dx, dy);

              // In mirrored video, rotation angle is negated
              const rawAngleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
              const targetAngleDeg = -rawAngleDeg;

              // Glasses width calculation: standard optical frame is ~2.2x pupillary distance
              const targetGlassesWidthPx = eyeDistPx * 2.18;
              const targetGlassesWidthPct = Math.min(
                85,
                Math.max(22, (targetGlassesWidthPx / videoW) * 100)
              );

              // Quick face shape estimation
              const chin = landmarks[152];
              const forehead = landmarks[10];
              const cheekL = landmarks[234];
              const cheekR = landmarks[454];
              const faceLen = Math.hypot(
                (forehead.x - chin.x) * videoW,
                (forehead.y - chin.y) * videoH
              ) * 1.14;
              const cheekW = Math.hypot(
                (cheekL.x - cheekR.x) * videoW,
                (cheekL.y - cheekR.y) * videoH
              );
              const ratio = faceLen / Math.max(1, cheekW);

              let detectedShape: FaceShape = 'oval';
              if (ratio >= 1.48) detectedShape = 'oblong';
              else if (ratio <= 1.22) detectedShape = 'round';
              else if (ratio <= 1.34) detectedShape = 'square';
              else detectedShape = 'oval';

              // Smooth lerp (0.35 factor) for buttery smooth AR motion without lag
              const curr = smoothRef.current;
              curr.centerX += (targetCenterX - curr.centerX) * 0.35;
              curr.centerY += (targetCenterY - curr.centerY) * 0.35;
              curr.glassesWidthPct += (targetGlassesWidthPct - curr.glassesWidthPct) * 0.35;
              curr.angleDeg += (targetAngleDeg - curr.angleDeg) * 0.35;
              curr.faceShape = detectedShape;
              curr.confidence = 94;
              curr.detected = true;

              setTracking({ ...curr });
            } else {
              smoothRef.current.detected = false;
              setTracking((prev) => ({ ...prev, detected: false }));
            }
          } catch {
            // continue next frame
          }
        }
      }
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
  };

  const handleCaptureSnapshot = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    const v = videoRef.current;
    canvas.width = v.videoWidth || 1280;
    canvas.height = v.videoHeight || 720;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw mirrored video frame
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(v, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();

    // Trigger download
    const link = document.createElement('a');
    link.download = `rocky-lens-tryon-${Date.now()}.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  };

  // Filtered frames by category
  const filteredFrames = FRAME_STYLES.filter((frame) => {
    if (activeCategory === 'rimless') return frame.isRimless || frame.id === 'rimless';
    if (activeCategory === 'tinted') return frame.id === 'rectangle' || frame.id === 'square';
    if (activeCategory === 'work') return frame.id === 'square' || frame.id === 'browline';
    if (activeCategory === 'driving') return frame.id === 'rectangle' || frame.id === 'aviator';
    return true;
  });

  const matchedProducts = recommendProducts(products, ['computer', 'outdoor'], 'medium', 4);

  return (
    <div className="space-y-6">
      {/* Top Banner Notice */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-slate-900 to-[var(--b2b-end)] text-white text-xs sm:text-sm font-medium shadow-md">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold tracking-wide uppercase text-[11px] sm:text-xs text-[var(--button-start)]">
            AR Virtual Try-On Live
          </span>
          <span className="hidden md:inline text-slate-300">•</span>
          <span className="text-slate-200 hidden md:inline">
            Thử kính trực tiếp theo chuyển động khuôn mặt như filter TikTok/Instagram
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!cameraActive ? (
            <button
              type="button"
              onClick={startCamera}
              disabled={cameraLoading}
              className="px-4 py-1.5 rounded-full bg-[var(--button-start)] text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{cameraLoading ? 'Đang mở Camera...' : 'Bật Camera Thử Live'}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={stopCamera}
              className="px-3.5 py-1.5 rounded-full bg-white/20 text-white font-semibold text-xs hover:bg-white/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CameraOff className="w-3.5 h-3.5" />
              <span>Tắt Camera</span>
            </button>
          )}
        </div>
      </div>

      {/* MAIN AR MIRROR / VIEWPORT CONTAINER (Full Screen Feel) */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] flex flex-col justify-between">
        {/* Layer 1: Live Video Feed or Demo Model Face */}
        <div className="absolute inset-0 w-full h-full">
          {cameraActive ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover scale-x-[-1]"
            />
          ) : (
            /* Interactive Demo Face when camera is off */
            <div className="w-full h-full relative bg-radial from-slate-800 to-slate-950 flex items-center justify-center">
              <div className="text-center space-y-4 max-w-md px-6 z-10">
                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto text-[var(--button-start)] shadow-lg animate-pulse">
                  <Camera className="w-10 h-10" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Trải Nghiệm Thử Kính Live Bằng Camera
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Bật camera để kính tự động căn vào mắt theo thời gian thực. Bạn có thể đổi dáng gọng và màu tròng ngay bên dưới.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={startCamera}
                    disabled={cameraLoading}
                    className="button-primary px-7 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Bật Camera Live Ngay</span>
                  </button>
                </div>
              </div>

              {/* Decorative Subtle Face Silhouette Behind */}
              <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                <div className="w-[340px] h-[460px] rounded-[50%] border-2 border-dashed border-cyan-400" />
              </div>
            </div>
          )}
        </div>

        {/* Layer 2: Live Glasses AR Overlay (Follows Face in Real-Time!) */}
        {cameraActive && (
          <div
            className="absolute pointer-events-none origin-center transition-all duration-75 z-20"
            style={{
              left: `${tracking.centerX}%`,
              top: `${tracking.centerY}%`,
              width: `${tracking.glassesWidthPct}%`,
              transform: `translate(-50%, -48%) rotate(${tracking.angleDeg}deg)`,
            }}
          >
            {/* If PNG model exists, render photorealistic PNG with lens tint */}
            {selectedFrame.imageSrc ? (
              <div className="relative w-full">
                <img
                  src={assetUrl(selectedFrame.imageSrc)}
                  alt={selectedFrame.name}
                  className="w-full h-auto block drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                />
                {/* Dynamic Tint Lens Overlay for Rimless/Sunglasses */}
                <div
                  className="absolute inset-0 rounded-xl mix-blend-multiply pointer-events-none transition-colors duration-300"
                  style={{
                    backgroundColor: selectedTint.tintRgba,
                    maskImage: `url('${assetUrl(selectedFrame.imageSrc)}')`,
                    WebkitMaskImage: `url('${assetUrl(selectedFrame.imageSrc)}')`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </div>
            ) : (
              /* Fallback Crisp SVG Frame */
              <svg
                viewBox="0 0 220 74"
                className="w-full h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
              >
                <rect
                  x="24"
                  y="12"
                  width="74"
                  height="48"
                  rx="10"
                  fill={selectedTint.tintRgba}
                  stroke="#1e293b"
                  strokeWidth="5"
                />
                <rect
                  x="122"
                  y="12"
                  width="74"
                  height="48"
                  rx="10"
                  fill={selectedTint.tintRgba}
                  stroke="#1e293b"
                  strokeWidth="5"
                />
                <path d="M98 26 Q110 20 122 26" fill="none" stroke="#64748b" strokeWidth="5" />
              </svg>
            )}
          </div>
        )}

        {/* Layer 3: Top Floating Info Overlay (Matching Screenshot) */}
        <div className="relative z-30 p-4 sm:p-6 flex flex-wrap items-start justify-between gap-3 pointer-events-none">
          <div className="space-y-1.5 pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-[var(--button-start)] px-2.5 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md border border-cyan-500/30">
                VIRTUAL TRY-ON
              </span>
              <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight drop-shadow-md">
                {selectedFrame.name} • 1.56 / 1.60 MR-8
              </span>
            </div>

            {/* Live Status Pill */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-2 shadow-md">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: selectedTint.color }}
                />
                <span>Màu tròng: {selectedTint.name}</span>
              </span>

              {cameraActive && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dáng mặt: {detectedProfile.nameVi}</span>
                </span>
              )}
            </div>
          </div>

          {/* Top-Right Action: Snapshot */}
          {cameraActive && (
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                onClick={handleCaptureSnapshot}
                title="Chụp ảnh snapshot"
                className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Chụp ảnh với kính"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Layer 4: Bottom Controls Dock (Exact layout as screenshot) */}
        <div className="relative z-30 p-4 sm:p-6 space-y-3.5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-12">
          {/* Row 1: Lens Color Palette Swatches (12+ Colors like screenshot) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--button-start)]" />
                <span>Màu sắc & lớp phủ tròng kính (Chọn để đổi màu trực tiếp):</span>
              </span>
              <span className="text-[var(--button-start)]">{selectedTint.lensType}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-700">
              {LENS_TINTS.map((tint) => {
                const isSelected = selectedTint.id === tint.id;
                return (
                  <button
                    key={tint.id}
                    type="button"
                    title={`${tint.name} — ${tint.description}`}
                    onClick={() => setSelectedTint(tint)}
                    className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-white scale-110 ring-4 ring-cyan-400/50 shadow-lg'
                        : 'border-white/40 opacity-80 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{ backgroundColor: tint.color }}
                    aria-label={`Chọn màu tròng ${tint.name}`}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                    active
                      ? 'bg-white text-slate-950 shadow-md'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Row 3: Horizontal Carousel of Glasses Frame Models */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-700">
            {filteredFrames.map((frame) => {
              const isSelected = selectedFrameId === frame.id;
              const isRecommended = detectedProfile.recommendedFrames.includes(frame.id);

              return (
                <button
                  key={frame.id}
                  type="button"
                  onClick={() => setSelectedFrameId(frame.id)}
                  className={`group relative min-w-[130px] sm:min-w-[150px] p-2.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-950/80 to-slate-900 border-[var(--button-start)] ring-2 ring-cyan-400/40 shadow-xl'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  {isRecommended && (
                    <span className="absolute -top-2 px-2 py-0.5 rounded-full bg-[var(--button-start)] text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                      Hợp bạn
                    </span>
                  )}

                  <div className="w-full h-14 flex items-center justify-center p-1">
                    {frame.imageSrc ? (
                      <img
                        src={assetUrl(frame.imageSrc)}
                        alt={frame.name}
                        className="max-h-full w-auto object-contain transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-16 h-7 rounded-md border-2 border-slate-500/80 flex items-center justify-center text-[10px] text-slate-400 font-bold">
                        {frame.name}
                      </div>
                    )}
                  </div>

                  <div className="space-y-0.5 w-full">
                    <div
                      className={`text-xs font-bold truncate ${
                        isSelected ? 'text-[var(--button-start)]' : 'text-white'
                      }`}
                    >
                      {frame.name}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {frame.isRimless ? 'Không viền' : 'Nguyên khung'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Row 4: View Matching Rocky Lenses CTA */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
            <div className="text-xs text-slate-300">
              Đang chọn: <strong className="text-white">{selectedFrame.name}</strong> •{' '}
              <span className="text-[var(--button-start)]">{selectedTint.name}</span>
            </div>

            <button
              type="button"
              onClick={() => setShowProductDrawer((v) => !v)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--button-start)] hover:text-white transition-colors cursor-pointer"
            >
              <span>{showProductDrawer ? 'Ẩn bảng tròng kính' : 'Xem tròng kính Rocky Lens cho mẫu này'}</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${showProductDrawer ? 'rotate-90' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* MATCHING ROCKY LENSES DRAWER / SECTION */}
      {showProductDrawer && (
        <div className="card-surface rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-md space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                Gợi ý chuyên gia Rocky Lens Canada
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-heading">
                Tròng kính phù hợp nhất với {selectedFrame.name} ({selectedTint.name})
              </h3>
            </div>
            <Link
              href="/trong-kinh/"
              className="text-xs font-bold text-[var(--color-primary)] hover:underline self-start"
            >
              Xem toàn bộ 24 dòng tròng kính →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {matchedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/trong-kinh/${p.slug}/`}
                className="card-surface rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-md transition-all flex flex-col justify-between group bg-white p-3.5"
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] w-full bg-slate-50 rounded-xl relative overflow-hidden p-3 flex items-center justify-center">
                    <img
                      src={assetUrl(p.featuredImage)}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                    {p.refractiveIndex && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 border border-[var(--color-border)] text-[10px] font-black text-[var(--color-heading)]">
                        Chiết suất {p.refractiveIndex}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-heading group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                      {p.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{p.shortDescription}</p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[var(--color-primary)]">
                    {p.formattedPrice || 'Xem giá chi tiết'}
                  </span>
                  <span className="text-xs font-bold text-heading group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Xem</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: 'var(--gradient-b2b)' }}
          >
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-black text-base">Cần tư vấn chính xác độ cận & chiết suất?</h4>
              <p className="text-xs text-cyan-50/80">
                Gặp chuyên viên khúc xạ tại đại lý chính hãng hoặc liên hệ Zalo hỗ trợ.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                href="/lien-he/"
                className="px-5 py-2.5 rounded-full bg-white text-[var(--b2b-end)] text-xs font-bold hover:bg-cyan-50 transition-all"
              >
                Tìm đại lý gần nhất
              </Link>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[var(--button-start)] text-slate-950 text-xs font-bold hover:brightness-105 transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Nhắn Zalo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
