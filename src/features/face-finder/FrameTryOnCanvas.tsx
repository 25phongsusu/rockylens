'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Grid3X3 } from 'lucide-react';
import { FRAME_COLORS, FRAME_STYLES } from './frame-lens-recommendations';
import type { FaceMetrics, FrameStyleId } from './types';

interface FrameTryOnCanvasProps {
  imageDataUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  metrics: FaceMetrics;
  selectedFrame: FrameStyleId;
  onSelectFrame: (frame: FrameStyleId) => void;
  recommendedFrames?: FrameStyleId[];
}

function renderFrameVector(
  frameId: FrameStyleId,
  stroke: string,
  accent: string | undefined,
  lensTint: string
) {
  const strokeMain = stroke;
  const strokeBridge = accent || stroke;

  switch (frameId) {
    case 'round':
      return (
        <>
          <circle cx="62" cy="36" r="32" fill={lensTint} stroke={strokeMain} strokeWidth="5" />
          <circle cx="158" cy="36" r="32" fill={lensTint} stroke={strokeMain} strokeWidth="5" />
          <path d="M94 34 Q110 26 126 34" fill="none" stroke={strokeBridge} strokeWidth="4.5" strokeLinecap="round" />
          <line x1="12" y1="32" x2="30" y2="34" stroke={strokeMain} strokeWidth="5" strokeLinecap="round" />
          <line x1="190" y1="34" x2="208" y2="32" stroke={strokeMain} strokeWidth="5" strokeLinecap="round" />
        </>
      );
    case 'oval':
      return (
        <>
          <ellipse cx="62" cy="36" rx="36" ry="25" fill={lensTint} stroke={strokeMain} strokeWidth="4.5" />
          <ellipse cx="158" cy="36" rx="36" ry="25" fill={lensTint} stroke={strokeMain} strokeWidth="4.5" />
          <path d="M98 33 Q110 27 122 33" fill="none" stroke={strokeBridge} strokeWidth="4" strokeLinecap="round" />
          <line x1="12" y1="32" x2="26" y2="34" stroke={strokeMain} strokeWidth="4.5" strokeLinecap="round" />
          <line x1="194" y1="34" x2="208" y2="32" stroke={strokeMain} strokeWidth="4.5" strokeLinecap="round" />
        </>
      );
    case 'rectangle':
      return (
        <>
          <rect x="24" y="14" width="74" height="42" rx="8" fill={lensTint} stroke={strokeMain} strokeWidth="5.5" />
          <rect x="122" y="14" width="74" height="42" rx="8" fill={lensTint} stroke={strokeMain} strokeWidth="5.5" />
          <path d="M98 28 Q110 23 122 28" fill="none" stroke={strokeBridge} strokeWidth="5" strokeLinecap="round" />
          <line x1="12" y1="24" x2="24" y2="26" stroke={strokeMain} strokeWidth="5.5" strokeLinecap="round" />
          <line x1="196" y1="26" x2="208" y2="24" stroke={strokeMain} strokeWidth="5.5" strokeLinecap="round" />
        </>
      );
    case 'cat-eye':
      return (
        <>
          <path
            d="M18 14 C40 12, 86 18, 96 32 C98 48, 82 60, 58 60 C34 60, 22 44, 18 14 Z"
            fill={lensTint}
            stroke={strokeMain}
            strokeWidth="5.5"
            strokeLinejoin="round"
          />
          <path
            d="M202 14 C180 12, 134 18, 124 32 C122 48, 138 60, 162 60 C186 60, 198 44, 202 14 Z"
            fill={lensTint}
            stroke={strokeMain}
            strokeWidth="5.5"
            strokeLinejoin="round"
          />
          <path d="M96 30 Q110 24 124 30" fill="none" stroke={strokeBridge} strokeWidth="4.5" strokeLinecap="round" />
          <line x1="10" y1="16" x2="20" y2="18" stroke={strokeMain} strokeWidth="5" strokeLinecap="round" />
          <line x1="200" y1="18" x2="210" y2="16" stroke={strokeMain} strokeWidth="5" strokeLinecap="round" />
        </>
      );
    case 'aviator':
      return (
        <>
          <path
            d="M22 14 L96 16 C98 44, 84 68, 56 66 C30 64, 20 42, 22 14 Z"
            fill={lensTint}
            stroke={strokeMain}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M198 14 L124 16 C122 44, 136 68, 164 66 C190 64, 200 42, 198 14 Z"
            fill={lensTint}
            stroke={strokeMain}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <line x1="94" y1="15" x2="126" y2="15" stroke={strokeBridge} strokeWidth="3.5" />
          <path d="M96 26 Q110 21 124 26" fill="none" stroke={strokeBridge} strokeWidth="3.5" />
          <line x1="12" y1="18" x2="22" y2="18" stroke={strokeMain} strokeWidth="4" strokeLinecap="round" />
          <line x1="198" y1="18" x2="208" y2="18" stroke={strokeMain} strokeWidth="4" strokeLinecap="round" />
        </>
      );
    case 'browline':
      return (
        <>
          <path d="M22 24 C34 10, 82 10, 96 24" fill="none" stroke={strokeMain} strokeWidth="8" strokeLinecap="round" />
          <path d="M124 24 C138 10, 186 10, 198 24" fill="none" stroke={strokeMain} strokeWidth="8" strokeLinecap="round" />
          <rect x="24" y="16" width="72" height="44" rx="14" fill={lensTint} stroke={strokeBridge} strokeWidth="2.5" />
          <rect x="124" y="16" width="72" height="44" rx="14" fill={lensTint} stroke={strokeBridge} strokeWidth="2.5" />
          <path d="M96 25 Q110 20 124 25" fill="none" stroke={strokeBridge} strokeWidth="4" strokeLinecap="round" />
        </>
      );
    case 'rimless':
      return (
        <>
          <rect x="24" y="14" width="74" height="42" rx="10" fill={lensTint} stroke="rgba(148,163,184,0.6)" strokeWidth="1.8" strokeDasharray="none" />
          <rect x="122" y="14" width="74" height="42" rx="10" fill={lensTint} stroke="rgba(148,163,184,0.6)" strokeWidth="1.8" />
          <path d="M98 28 Q110 24 122 28" fill="none" stroke={strokeBridge} strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="94" cy="28" r="2.2" fill={strokeMain} />
          <circle cx="126" cy="28" r="2.2" fill={strokeMain} />
          <line x1="12" y1="26" x2="26" y2="28" stroke={strokeMain} strokeWidth="3.2" strokeLinecap="round" />
          <line x1="194" y1="28" x2="208" y2="26" stroke={strokeMain} strokeWidth="3.2" strokeLinecap="round" />
        </>
      );
    case 'square':
    default:
      return (
        <>
          <rect x="24" y="10" width="74" height="52" rx="11" fill={lensTint} stroke={strokeMain} strokeWidth="6" />
          <rect x="122" y="10" width="74" height="52" rx="11" fill={lensTint} stroke={strokeMain} strokeWidth="6" />
          <path d="M98 26 Q110 21 122 26" fill="none" stroke={strokeBridge} strokeWidth="5" strokeLinecap="round" />
          <line x1="12" y1="22" x2="24" y2="24" stroke={strokeMain} strokeWidth="5.5" strokeLinecap="round" />
          <line x1="196" y1="24" x2="208" y2="22" stroke={strokeMain} strokeWidth="5.5" strokeLinecap="round" />
        </>
      );
  }
}

export default function FrameTryOnCanvas({
  imageDataUrl,
  imageWidth = 960,
  imageHeight = 720,
  metrics,
  selectedFrame,
  onSelectFrame,
  recommendedFrames = [],
}: FrameTryOnCanvasProps) {
  const [showFrame, setShowFrame] = useState(true);
  const [showLandmarks, setShowLandmarks] = useState(true);
  const [colorId, setColorId] = useState<string>(FRAME_COLORS[0].id);

  const activeColor = FRAME_COLORS.find((c) => c.id === colorId) || FRAME_COLORS[0];

  // Calculate 2D glasses transform aligned to eye centers & nose bridge
  const leftPx = { x: metrics.leftEye.x * imageWidth, y: metrics.leftEye.y * imageHeight };
  const rightPx = { x: metrics.rightEye.x * imageWidth, y: metrics.rightEye.y * imageHeight };
  const eyeDistPx = Math.hypot(rightPx.x - leftPx.x, rightPx.y - leftPx.y);
  const angleDeg =
    (Math.atan2(rightPx.y - leftPx.y, rightPx.x - leftPx.x) * 180) / Math.PI;

  const centerPctX = ((metrics.leftEye.x + metrics.rightEye.x) / 2) * 100;
  const centerPctY = ((metrics.leftEye.y + metrics.rightEye.y) / 2) * 100;

  // Frame total width is roughly 2.15x eye-to-eye distance (SVG viewBox width 220, lens center distance 96)
  const glassesWidthPx = eyeDistPx * (220 / 96);
  const glassesWidthPct = Math.min(92, Math.max(24, (glassesWidthPx / imageWidth) * 100));

  const kp = metrics.keyPoints;

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFrame((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
              showFrame
                ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                : 'bg-white text-slate-700 border-[var(--color-border)]'
            }`}
          >
            {showFrame ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>{showFrame ? 'Đang bật thử gọng 2D' : 'Bật thử gọng 2D'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowLandmarks((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
              showLandmarks
                ? 'bg-[var(--site-bg-middle)] text-[var(--color-heading)] border-[var(--color-primary)]/40'
                : 'bg-white text-slate-600 border-[var(--color-border)]'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>{showLandmarks ? 'Ẩn lưới đo AI' : 'Hiện lưới đo AI'}</span>
          </button>
        </div>

        {/* Frame colors */}
        {showFrame && (
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-brand-muted mr-1">Màu gọng:</span>
            {FRAME_COLORS.map((color) => (
              <button
                key={color.id}
                type="button"
                title={color.name}
                onClick={() => setColorId(color.id)}
                className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                  colorId === color.id
                    ? 'border-[var(--color-primary)] scale-110 shadow-sm'
                    : 'border-white shadow-xs opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: color.stroke }}
                aria-label={`Chọn màu gọng ${color.name}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Canvas Container */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-slate-900/5 shadow-sm">
        <img
          src={imageDataUrl}
          alt="Ảnh phân tích khuôn mặt AI"
          className="w-full h-auto block max-h-[460px] object-contain mx-auto"
        />

        {/* SVG Measurement Landmarks Overlay */}
        {showLandmarks && (
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {/* Vertical face length line */}
            <line
              x1={kp.foreheadTop.x * 100}
              y1={kp.foreheadTop.y * 100}
              x2={kp.chin.x * 100}
              y2={kp.chin.y * 100}
              stroke="#4DC4E2"
              strokeWidth="0.4"
              strokeDasharray="1.5 1"
            />
            {/* Forehead width */}
            <line
              x1={kp.foreheadLeft.x * 100}
              y1={kp.foreheadLeft.y * 100}
              x2={kp.foreheadRight.x * 100}
              y2={kp.foreheadRight.y * 100}
              stroke="#38bdf8"
              strokeWidth="0.45"
            />
            {/* Cheekbone width */}
            <line
              x1={kp.cheekLeft.x * 100}
              y1={kp.cheekLeft.y * 100}
              x2={kp.cheekRight.x * 100}
              y2={kp.cheekRight.y * 100}
              stroke="#1D7E9A"
              strokeWidth="0.55"
            />
            {/* Jaw width */}
            <line
              x1={kp.jawLeft.x * 100}
              y1={kp.jawLeft.y * 100}
              x2={kp.jawRight.x * 100}
              y2={kp.jawRight.y * 100}
              stroke="#2dd4bf"
              strokeWidth="0.45"
            />
            {/* Anchor dots */}
            {[
              kp.foreheadTop,
              kp.chin,
              kp.foreheadLeft,
              kp.foreheadRight,
              kp.cheekLeft,
              kp.cheekRight,
              kp.jawLeft,
              kp.jawRight,
              metrics.leftEye,
              metrics.rightEye,
            ].map((p, idx) => (
              <circle
                key={idx}
                cx={p.x * 100}
                cy={p.y * 100}
                r="0.7"
                fill="#4DC4E2"
                stroke="#ffffff"
                strokeWidth="0.25"
              />
            ))}
          </svg>
        )}

        {/* 2D Virtual Glasses Overlay */}
        {showFrame && (
          <div
            className="absolute pointer-events-none origin-center transition-all duration-200"
            style={{
              left: `${centerPctX}%`,
              top: `${centerPctY}%`,
              width: `${glassesWidthPct}%`,
              transform: `translate(-50%, -47%) rotate(${angleDeg}deg)`,
            }}
          >
            <svg viewBox="0 0 220 74" className="w-full h-auto drop-shadow-[0_4px_8px_rgba(15,76,94,0.3)]">
              {renderFrameVector(
                selectedFrame,
                activeColor.stroke,
                activeColor.accent,
                activeColor.lensTint
              )}
            </svg>
          </div>
        )}
      </div>

      {/* Frame Style Selector Pills */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-heading uppercase tracking-wider">
          Thử nhanh các dáng gọng trên ảnh của bạn:
        </div>
        <div className="flex flex-wrap gap-2">
          {FRAME_STYLES.map((frame) => {
            const isRecommended = recommendedFrames.includes(frame.id);
            const isSelected = selectedFrame === frame.id;
            return (
              <button
                key={frame.id}
                type="button"
                onClick={() => {
                  onSelectFrame(frame.id);
                  if (!showFrame) setShowFrame(true);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                    : isRecommended
                      ? 'bg-[var(--site-bg-middle)] text-[var(--color-heading)] border-[var(--color-primary)]/40 hover:border-[var(--color-primary)]'
                      : 'bg-white text-slate-600 border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
                }`}
              >
                <span>{frame.name}</span>
                {isRecommended && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-white/25 text-white'
                        : 'bg-[var(--button-start)]/25 text-[var(--color-heading)]'
                    }`}
                  >
                    Hợp mặt
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
