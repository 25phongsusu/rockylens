'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  Eye,
  MessageSquare,
  RefreshCw,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Upload,
  XCircle,
} from 'lucide-react';
import { assetUrl } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { analyzeFaceFromSource } from './face-shape-analyzer';
import {
  FACE_SHAPE_ORDER,
  FACE_SHAPE_PROFILES,
  FRAME_STYLES,
  getRecommendedFrameSizeLabel,
  PRESCRIPTION_LEVELS,
  recommendProducts,
  STYLE_PREFERENCES,
  USAGE_NEEDS,
} from './frame-lens-recommendations';
import FrameTryOnCanvas from './FrameTryOnCanvas';
import type {
  FaceAnalysisResult,
  FaceShape,
  FrameStyleId,
  PrescriptionLevel,
  ProductSummary,
  StylePreference,
  UsageNeed,
} from './types';

interface FaceFinderWizardProps {
  products: ProductSummary[];
}

function FaceShapeIllustration({ shape }: { shape: FaceShape }) {
  switch (shape) {
    case 'round':
      return <circle cx="32" cy="34" r="21" fill="none" stroke="currentColor" strokeWidth="2.5" />;
    case 'square':
      return <rect x="12" y="13" width="40" height="42" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />;
    case 'heart':
      return (
        <path
          d="M12 24 C12 13, 52 13, 52 24 C52 38, 39 51, 32 56 C25 51, 12 38, 12 24 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      );
    case 'diamond':
      return (
        <path
          d="M32 10 L51 34 L32 58 L13 34 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      );
    case 'oblong':
      return <ellipse cx="32" cy="34" rx="15" ry="24" fill="none" stroke="currentColor" strokeWidth="2.5" />;
    case 'oval':
    default:
      return <ellipse cx="32" cy="34" rx="17" ry="22" fill="none" stroke="currentColor" strokeWidth="2.5" />;
  }
}

export default function FaceFinderWizard({ products }: FaceFinderWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [faceTab, setFaceTab] = useState<'ai' | 'manual'>('ai');

  const [analysis, setAnalysis] = useState<FaceAnalysisResult | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<FrameStyleId>('square');
  const [needs, setNeeds] = useState<UsageNeed[]>(['computer']);
  const [prescription, setPrescription] = useState<PrescriptionLevel>('medium');
  const [stylePref, setStylePref] = useState<StylePreference | undefined>('modern');

  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  useEffect(() => {
    if (faceTab !== 'ai' || step !== 1) {
      stopCamera();
    }
  }, [faceTab, step]);

  const applyAnalysisResult = (result: FaceAnalysisResult) => {
    setAnalysis(result);
    const profile = FACE_SHAPE_PROFILES[result.faceShape];
    setSelectedFrame(profile.defaultFrameId);
    setScanError(null);
  };

  const handleStartCamera = async () => {
    setScanError(null);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setScanError(
        'Trình duyệt hiện tại không hỗ trợ mở camera trực tiếp. Bạn hãy tải ảnh chân dung lên hoặc chọn thủ công dáng mặt nhé.'
      );
      return;
    }

    try {
      stopCamera();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 960 },
        },
        audio: false,
      });
      streamRef.current = stream;
      setCameraActive(true);

      // Attach stream once video element mounts
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }
      });
    } catch {
      setScanError(
        'Không thể truy cập camera (bạn chưa cấp quyền hoặc thiết bị không có camera). Bạn có thể tải ảnh chân dung lên để quét AI.'
      );
      stopCamera();
    }
  };

  const handleCaptureAndAnalyze = async () => {
    if (!videoRef.current) return;
    setIsScanning(true);
    setScanError(null);
    try {
      const result = await analyzeFaceFromSource(videoRef.current);
      applyAnalysisResult(result);
      stopCamera();
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Không thể phân tích khuôn mặt từ camera. Vui lòng thử lại ở nơi đủ sáng.';
      setScanError(msg);
    } finally {
      setIsScanning(false);
    }
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setScanError(null);
    setIsScanning(true);
    stopCamera();

    const objectUrl = URL.createObjectURL(file);
    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error('Không thể đọc tệp ảnh vừa chọn.'));
        el.src = objectUrl;
      });

      const result = await analyzeFaceFromSource(img);
      applyAnalysisResult(result);
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Không thể nhận diện khuôn mặt từ ảnh này. Vui lòng chọn ảnh chụp thẳng, đủ sáng.';
      setScanError(msg);
    } finally {
      URL.revokeObjectURL(objectUrl);
      setIsScanning(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleManualFaceSelect = (shape: FaceShape) => {
    const profile = FACE_SHAPE_PROFILES[shape];
    setAnalysis((prev) => ({
      faceShape: shape,
      source: prev?.imageDataUrl ? prev.source : 'manual',
      metrics: prev?.metrics,
      imageDataUrl: prev?.imageDataUrl,
      imageWidth: prev?.imageWidth,
      imageHeight: prev?.imageHeight,
    }));
    setSelectedFrame(profile.defaultFrameId);
    setScanError(null);
  };

  const toggleNeed = (needId: UsageNeed) => {
    setNeeds((prev) => {
      if (prev.includes(needId)) {
        return prev.length > 1 ? prev.filter((item) => item !== needId) : prev;
      }
      return [...prev, needId];
    });
  };

  const handleRestart = () => {
    stopCamera();
    setStep(1);
    setAnalysis(null);
    setScanError(null);
  };

  const activeFaceShape: FaceShape = analysis?.faceShape || 'oval';
  const activeProfile = FACE_SHAPE_PROFILES[activeFaceShape];
  const recommendedProducts = recommendProducts(products, needs, prescription, 4);
  const activePrescriptionInfo =
    PRESCRIPTION_LEVELS.find((p) => p.id === prescription) || PRESCRIPTION_LEVELS[1];

  const stepLabels = [
    { num: 1, label: 'Khuôn mặt' },
    { num: 2, label: 'Nhu cầu' },
    { num: 3, label: 'Độ khúc xạ' },
    { num: 4, label: 'Kết quả AI' },
  ] as const;

  return (
    <div className="space-y-8">
      {/* Stepper Progress Bar */}
      <div className="card-surface rounded-3xl p-4 sm:p-5 border border-[var(--color-border)] shadow-xs">
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {stepLabels.map((s) => {
            const isCurrent = step === s.num;
            const isCompleted = step > s.num;
            const canJump =
              s.num === 1 || (s.num <= 3 && analysis !== null) || (s.num === 4 && analysis !== null);
            return (
              <button
                key={s.num}
                type="button"
                disabled={!canJump}
                onClick={() => canJump && setStep(s.num)}
                className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 px-2 sm:px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isCurrent
                    ? 'bg-[var(--color-primary)] text-white shadow-sm'
                    : isCompleted
                      ? 'bg-[var(--site-bg-middle)] text-[var(--color-heading)] cursor-pointer hover:bg-[var(--site-bg-end)]'
                      : 'bg-slate-50 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                    isCurrent
                      ? 'bg-white text-[var(--color-primary)]'
                      : isCompleted
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {isCompleted ? <Check className="w-3.5 h-3.5" /> : s.num}
                </span>
                <span className="truncate">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 1: FACE ANALYSIS OR MANUAL SELECTION */}
      {step === 1 && (
        <div className="card-surface rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-border)] pb-5">
            <div className="space-y-1">
              <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                Bước 1 / 4 • Nhận diện dáng khuôn mặt
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-heading">
                Quét khuôn mặt bằng AI hoặc tự chọn dáng mặt
              </h2>
            </div>

            {/* Mode Switch Tabs */}
            <div className="inline-flex p-1 rounded-full bg-[var(--site-bg-middle)] border border-[var(--color-border)] self-start">
              <button
                type="button"
                onClick={() => setFaceTab('ai')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  faceTab === 'ai'
                    ? 'bg-white text-[var(--color-heading)] shadow-xs'
                    : 'text-brand-muted hover:text-heading'
                }`}
              >
                <ScanFace className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Quét AI (478 điểm)</span>
              </button>
              <button
                type="button"
                onClick={() => setFaceTab('manual')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  faceTab === 'manual'
                    ? 'bg-white text-[var(--color-heading)] shadow-xs'
                    : 'text-brand-muted hover:text-heading'
                }`}
              >
                Chọn thủ công
              </button>
            </div>
          </div>

          {faceTab === 'ai' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Capture / Upload / Preview */}
              <div className="lg:col-span-7 space-y-4">
                {!cameraActive && !analysis?.imageDataUrl && (
                  <div className="rounded-2xl border-2 border-dashed border-[var(--color-border)] bg-[var(--site-bg-middle)]/40 p-8 sm:p-10 text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-[var(--color-border)] shadow-xs flex items-center justify-center mx-auto text-[var(--color-primary)]">
                      <ScanFace className="w-9 h-9" />
                    </div>
                    <div className="space-y-1.5 max-w-md mx-auto">
                      <h3 className="text-lg font-bold text-heading">
                        Sẵn sàng phân tích tỷ lệ khuôn mặt của bạn
                      </h3>
                      <p className="text-sm text-brand-muted">
                        Mở camera chụp trực diện hoặc tải ảnh chân dung rõ mặt. Hệ thống AI đo 478 điểm mốc để gợi ý gọng kính hợp mặt nhất.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleStartCamera}
                        disabled={isScanning}
                        className="button-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Mở Camera Quét AI</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isScanning}
                        className="px-6 py-3 rounded-full text-sm font-bold bg-white text-[var(--color-heading)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <Upload className="w-4 h-4 text-[var(--color-primary)]" />
                        <span>Tải ảnh chân dung</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Active Camera Stream */}
                {cameraActive && (
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] max-h-[440px] mx-auto border border-[var(--color-border)]">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover scale-x-[-1]"
                      />
                      {/* Oval Face Guide Overlay */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="w-[52%] h-[74%] rounded-[50%] border-2 border-dashed border-[#4DC4E2] shadow-[0_0_0_9999px_rgba(15,23,42,0.35)]" />
                      </div>
                      <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-slate-900/75 text-white text-xs font-medium">
                          Căn khuôn mặt vào giữa khung hình & nhìn thẳng
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleCaptureAndAnalyze}
                        disabled={isScanning}
                        className="button-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        <Camera className="w-4 h-4" />
                        <span>{isScanning ? 'Đang quét 478 điểm...' : 'Chụp & Phân tích AI'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={stopCamera}
                        className="px-5 py-3 rounded-full text-sm font-semibold bg-white border border-[var(--color-border)] text-slate-700 hover:bg-slate-50 cursor-pointer"
                      >
                        Đóng Camera
                      </button>
                    </div>
                  </div>
                )}

                {/* AI Scanned Image + 2D Try-On */}
                {!cameraActive && analysis?.imageDataUrl && analysis.metrics && (
                  <div className="space-y-4">
                    <FrameTryOnCanvas
                      imageDataUrl={analysis.imageDataUrl}
                      imageWidth={analysis.imageWidth}
                      imageHeight={analysis.imageHeight}
                      metrics={analysis.metrics}
                      selectedFrame={selectedFrame}
                      onSelectFrame={setSelectedFrame}
                      recommendedFrames={activeProfile.recommendedFrames}
                    />
                    <div className="flex flex-wrap gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleStartCamera}
                        className="px-4 py-2 rounded-full text-xs font-bold bg-white border border-[var(--color-border)] text-[var(--color-heading)] hover:border-[var(--color-primary)] flex items-center gap-1.5 cursor-pointer"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Chụp lại bằng Camera</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 rounded-full text-xs font-bold bg-white border border-[var(--color-border)] text-[var(--color-heading)] hover:border-[var(--color-primary)] flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Đổi ảnh khác</span>
                      </button>
                    </div>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleUploadImage}
                  className="hidden"
                />

                {isScanning && (
                  <div className="p-4 rounded-2xl bg-[var(--site-bg-middle)] border border-[var(--color-primary)]/30 flex items-center gap-3 text-sm font-semibold text-[var(--color-heading)]">
                    <RefreshCw className="w-5 h-5 text-[var(--color-primary)] animate-spin shrink-0" />
                    <span>Đang nạp mô hình MediaPipe & phân tích 478 điểm mốc khuôn mặt...</span>
                  </div>
                )}

                {scanError && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold">{scanError}</p>
                      <button
                        type="button"
                        onClick={() => setFaceTab('manual')}
                        className="text-xs font-bold underline cursor-pointer"
                      >
                        Hoặc bấm sang chọn dáng khuôn mặt thủ công →
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2.5 text-xs text-brand-muted bg-slate-50/90 p-3.5 rounded-2xl border border-slate-200/70">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>
                    <strong>Bảo mật tuyệt đối:</strong> Ảnh khuôn mặt được AI xử lý trực tiếp trên trình duyệt của bạn, hoàn toàn không tải lên hay lưu trữ trên máy chủ.
                  </span>
                </div>
              </div>

              {/* Right: Live AI Result Panel */}
              <div className="lg:col-span-5 space-y-5">
                {analysis ? (
                  <div className="rounded-2xl bg-[var(--site-bg-middle)]/65 border border-[var(--color-border)] p-5 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-white text-[var(--color-primary)] text-xs font-bold border border-[var(--color-border)]">
                        {analysis.source === 'ai' ? 'Kết quả phân tích AI' : 'Đã chọn thủ công'}
                      </span>
                      {analysis.metrics && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          Độ tin cậy ~{analysis.metrics.confidence}%
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-brand-muted">Dáng khuôn mặt của bạn</div>
                      <h3 className="text-2xl font-black text-heading mt-0.5">
                        {activeProfile.nameVi}{' '}
                        <span className="text-base font-semibold text-brand-muted">
                          ({activeProfile.nameEn})
                        </span>
                      </h3>
                      <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">
                        {activeProfile.shortDesc}
                      </p>
                    </div>

                    {analysis.metrics && (
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <div className="bg-white rounded-xl p-2.5 text-center border border-[var(--color-border)]">
                          <div className="text-[11px] text-brand-muted font-medium">Dài / Rộng</div>
                          <div className="text-sm font-black text-heading">{analysis.metrics.lengthToWidth}</div>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 text-center border border-[var(--color-border)]">
                          <div className="text-[11px] text-brand-muted font-medium">Trán / Hàm</div>
                          <div className="text-sm font-black text-heading">{analysis.metrics.foreheadToJaw}</div>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 text-center border border-[var(--color-border)]">
                          <div className="text-[11px] text-brand-muted font-medium">Hàm / Gò má</div>
                          <div className="text-sm font-black text-heading">{analysis.metrics.jawToCheek}</div>
                        </div>
                      </div>
                    )}

                    {/* Allow fine-tuning shape if lighting was off */}
                    <div className="pt-2 border-t border-[var(--color-border)] space-y-2">
                      <div className="text-xs font-semibold text-brand-muted">
                        Chỉnh lại nhanh dáng mặt nếu ánh sáng chụp chưa chuẩn:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {FACE_SHAPE_ORDER.map((shape) => {
                          const p = FACE_SHAPE_PROFILES[shape];
                          const active = activeFaceShape === shape;
                          return (
                            <button
                              key={shape}
                              type="button"
                              onClick={() => handleManualFaceSelect(shape)}
                              className={`px-2.5 py-1 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
                                active
                                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                                  : 'bg-white text-slate-700 border-[var(--color-border)] hover:border-[var(--color-primary)]'
                              }`}
                            >
                              {p.nameVi}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-slate-50 border border-[var(--color-border)] p-6 space-y-4">
                    <h3 className="text-base font-bold text-heading">
                      Mẹo chụp ảnh để AI đo chính xác nhất
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span>Nhìn thẳng camera, giữ khuôn mặt ngay ngắn không nghiêng đầu.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span>Vén nhẹ tóc mái để lộ rõ vùng trán và đường gò má, xương hàm.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span>Chọn nơi đủ ánh sáng đều, tránh ngược sáng quá gắt.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Tab B: Manual 6 Face Shapes Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FACE_SHAPE_ORDER.map((shape) => {
                const profile = FACE_SHAPE_PROFILES[shape];
                const isSelected = analysis?.faceShape === shape;
                return (
                  <button
                    key={shape}
                    type="button"
                    onClick={() => handleManualFaceSelect(shape)}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[var(--site-bg-middle)] border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20 shadow-sm'
                        : 'bg-white border-[var(--color-border)] hover:border-[var(--color-primary)]/60 hover:shadow-xs'
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--site-bg-middle)] text-[var(--color-heading)]'
                      }`}
                    >
                      <FaceShapeIllustration shape={shape} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-heading">{profile.nameVi}</span>
                        <span className="text-xs font-medium text-brand-muted">({profile.nameEn})</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{profile.shortDesc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 1 Footer Actions */}
          <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-brand-muted">
              {analysis
                ? `Đã xác định: ${activeProfile.nameVi} (${activeProfile.nameEn})`
                : 'Hãy quét AI hoặc chọn thủ công dáng khuôn mặt để tiếp tục'}
            </div>
            <button
              type="button"
              disabled={!analysis}
              onClick={() => setStep(2)}
              className="button-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed"
            >
              <span>Tiếp tục: Chọn nhu cầu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: USAGE NEEDS */}
      {step === 2 && (
        <div className="card-surface rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-6">
          <div className="space-y-1 border-b border-[var(--color-border)] pb-5">
            <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
              Bước 2 / 4 • Nhu cầu sử dụng & Môi trường
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-heading">
              Bạn thường đeo kính trong những hoạt động nào?
            </h2>
            <p className="text-sm text-brand-muted">
              Có thể chọn 1 hoặc nhiều nhu cầu để hệ thống gợi ý lớp phủ và công nghệ tròng kính phù hợp nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USAGE_NEEDS.map((need) => {
              const selected = needs.includes(need.id);
              return (
                <button
                  key={need.id}
                  type="button"
                  onClick={() => toggleNeed(need.id)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    selected
                      ? 'bg-[var(--site-bg-middle)] border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20 shadow-sm'
                      : 'bg-white border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white border border-[var(--color-border)] text-[var(--color-primary)]">
                      {need.badge}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        selected
                          ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {selected && <Check className="w-3 h-3" />}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-base text-heading">{need.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{need.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-white border border-[var(--color-border)] text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>

            <button
              type="button"
              onClick={() => setStep(3)}
              className="button-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>Tiếp tục: Độ khúc xạ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: PRESCRIPTION & STYLE */}
      {step === 3 && (
        <div className="card-surface rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-8">
          <div className="space-y-1 border-b border-[var(--color-border)] pb-5">
            <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
              Bước 3 / 4 • Mức độ khúc xạ & Gu phong cách
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-heading">
              Chọn khoảng độ cận / viễn / loạn của bạn
            </h2>
            <p className="text-sm text-brand-muted">
              Thông số độ giúp Rocky Lens đề xuất chiết suất (1.56, 1.60, 1.67 hoặc 1.74) mỏng nhẹ và thẩm mỹ nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRESCRIPTION_LEVELS.map((level) => {
              const selected = prescription === level.id;
              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setPrescription(level.id)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2.5 ${
                    selected
                      ? 'bg-[var(--site-bg-middle)] border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20 shadow-sm'
                      : 'bg-white border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-white text-[var(--color-primary)] border border-[var(--color-border)]">
                      {level.range}
                    </span>
                    {selected && <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />}
                  </div>
                  <div className="font-bold text-base text-heading">{level.title}</div>
                  <div className="text-xs font-bold text-[var(--color-primary)]">
                    Gợi ý chiết suất: {level.recommendedIndex}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{level.desc}</p>
                </button>
              );
            })}
          </div>

          <div className="space-y-3">
            <div className="text-sm font-bold text-heading">
              Gu phong cách yêu thích <span className="font-normal text-brand-muted">(tùy chọn)</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {STYLE_PREFERENCES.map((st) => {
                const selected = stylePref === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setStylePref(st.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selected
                        ? 'bg-[var(--site-bg-middle)] border-[var(--color-primary)]'
                        : 'bg-white border-[var(--color-border)] hover:border-[var(--color-primary)]/40'
                    }`}
                  >
                    <div className="font-bold text-sm text-heading">{st.title}</div>
                    <p className="text-xs text-slate-600 mt-1">{st.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-white border border-[var(--color-border)] text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>

            <button
              type="button"
              onClick={() => setStep(4)}
              className="button-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Xem Kết Quả Tư Vấn AI</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: PERSONALIZED RECOMMENDATIONS */}
      {step === 4 && (
        <div className="space-y-8">
          {/* Top Summary Card: Face Profile + Frame Suggestion + Interactive 2D Try-On */}
          <div className="card-surface rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border)] pb-5">
              <div>
                <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                  Bước 4 / 4 • Hồ sơ đề xuất cá nhân hóa
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-heading mt-1">
                  Khuôn mặt {activeProfile.nameVi} • Chiết suất {activePrescriptionInfo.recommendedIndex}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleRestart}
                className="px-4 py-2 rounded-full text-xs font-bold bg-white border border-[var(--color-border)] text-heading hover:border-[var(--color-primary)] flex items-center gap-1.5 self-start cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Phân tích lại</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Face Image Try-On or Shape Visual */}
              <div className="lg:col-span-6">
                {analysis?.imageDataUrl && analysis.metrics ? (
                  <FrameTryOnCanvas
                    imageDataUrl={analysis.imageDataUrl}
                    imageWidth={analysis.imageWidth}
                    imageHeight={analysis.imageHeight}
                    metrics={analysis.metrics}
                    selectedFrame={selectedFrame}
                    onSelectFrame={setSelectedFrame}
                    recommendedFrames={activeProfile.recommendedFrames}
                  />
                ) : (
                  <div className="rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)] p-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-24 h-24 rounded-3xl bg-white border border-[var(--color-border)] text-[var(--color-primary)] flex items-center justify-center shadow-xs">
                      <FaceShapeIllustration shape={activeFaceShape} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xl font-black text-heading">
                        {activeProfile.nameVi} ({activeProfile.nameEn})
                      </div>
                      <p className="text-sm text-slate-600 max-w-sm">{activeProfile.shortDesc}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFaceTab('ai');
                        setStep(1);
                      }}
                      className="text-xs font-bold text-[var(--color-primary)] underline cursor-pointer"
                    >
                      Quay lại bước 1 để thử gọng trực tiếp lên ảnh của bạn →
                    </button>
                  </div>
                )}
              </div>

              {/* Right: Frame Style & Size Guide */}
              <div className="lg:col-span-6 space-y-5">
                {analysis?.metrics && (
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)] text-center">
                      <div className="text-xs text-brand-muted">Tỷ lệ Dài / Rộng</div>
                      <div className="text-lg font-black text-heading">{analysis.metrics.lengthToWidth}</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)] text-center">
                      <div className="text-xs text-brand-muted">Tỷ lệ Trán / Hàm</div>
                      <div className="text-lg font-black text-heading">{analysis.metrics.foreheadToJaw}</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)] text-center">
                      <div className="text-xs text-brand-muted">Size gọng gợi ý</div>
                      <div className="text-lg font-black text-[var(--color-primary)]">{analysis.metrics.frameSize}</div>
                    </div>
                  </div>
                )}

                <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Dáng gọng kính hợp mặt nhất:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProfile.recommendedFrameLabels.map((label) => (
                      <span
                        key={label}
                        className="px-3 py-1 rounded-full bg-white text-emerald-900 text-xs font-bold border border-emerald-200"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-emerald-950/90 leading-relaxed">
                    {activeProfile.fitReason}
                  </p>
                  <div className="text-xs font-semibold text-emerald-800 pt-1">
                    Kích thước đề xuất:{' '}
                    {getRecommendedFrameSizeLabel(analysis?.metrics?.frameSize || 'M')}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-4 space-y-1.5">
                  <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Dáng gọng nên cân nhắc hạn chế
                  </div>
                  <p className="text-sm text-amber-950">{activeProfile.avoidFrames.join(' • ')}</p>
                </div>

                <div className="rounded-2xl bg-white border border-[var(--color-border)] p-4 space-y-2">
                  <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                    Thông số gọng đang xem:{' '}
                    {FRAME_STYLES.find((f) => f.id === selectedFrame)?.name}
                  </div>
                  <p className="text-xs text-slate-600">
                    {FRAME_STYLES.find((f) => f.id === selectedFrame)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Rocky Lens Products */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                  Đề xuất tròng kính Rocky Lens phù hợp nhất
                </div>
                <h3 className="text-2xl font-black text-heading">
                  Top {recommendedProducts.length} giải pháp tròng kính dành cho bạn
                </h3>
              </div>
              <Link
                href="/trong-kinh/"
                className="text-sm font-bold text-[var(--color-primary)] hover:underline"
              >
                Xem toàn bộ 24 dòng tròng kính →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {recommendedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/trong-kinh/${product.slug}/`}
                  className="card-surface rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-md transition-all flex flex-col justify-between group bg-white"
                >
                  <div>
                    <div className="aspect-[4/3] w-full bg-slate-50 relative overflow-hidden p-4 flex items-center justify-center">
                      <img
                        src={assetUrl(product.featuredImage)}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.refractiveIndex && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 border border-[var(--color-border)] text-[11px] font-black text-[var(--color-heading)]">
                          Chiết suất {product.refractiveIndex}
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-bold text-base text-heading group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-[var(--color-primary)]">
                      {product.formattedPrice || 'Xem bảng giá'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-heading group-hover:translate-x-0.5 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Chi tiết</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div
            className="rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
            style={{ background: 'var(--gradient-b2b)' }}
          >
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black">
                Sẵn sàng đo cắt tròng kính Rocky Lens chuẩn Canada?
              </h3>
              <p className="text-cyan-50/90 text-sm max-w-2xl">
                Mang kết quả gợi ý này tới cửa hàng mắt kính đối tác chính hãng của Rocky Lens hoặc nhắn Zalo để được chuyên viên khúc xạ tư vấn trực tiếp.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/lien-he/"
                className="px-6 py-3 rounded-full bg-white text-[var(--b2b-end)] font-bold text-sm hover:bg-cyan-50 transition-all shadow-md"
              >
                Tìm đại lý Rocky Lens gần nhất
              </Link>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[var(--button-start)] text-slate-950 font-bold text-sm hover:brightness-105 transition-all flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Tư vấn qua Zalo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
