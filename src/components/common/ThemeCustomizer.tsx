'use client';

import React, { useState, useEffect } from 'react';
import { Palette, X, RotateCcw, Copy, Check, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';

export interface ThemeColors {
  siteBgStart: string;
  siteBgMiddle: string;
  siteBgEnd: string;
  buttonStart: string;
  buttonMiddle: string;
  buttonEnd: string;
  b2bStart: string;
  b2bMiddle: string;
  b2bEnd: string;
}

export const DEFAULT_THEME: ThemeColors = {
  siteBgStart: '#F4FCFE',
  siteBgMiddle: '#D7F4FA',
  siteBgEnd: '#A2E2EE',
  buttonStart: '#5BCDE5',
  buttonMiddle: '#00A2CC',
  buttonEnd: '#317F93',
  b2bStart: '#00A2CC',
  b2bMiddle: '#007A99',
  b2bEnd: '#003B50',
};

export const THEME_PRESETS: { name: string; desc: string; colors: ThemeColors }[] = [
  {
    name: 'Rocky Canada Cyan',
    desc: 'Bản sắc quang học nguyên bản thanh khiết',
    colors: DEFAULT_THEME,
  },
  {
    name: 'Deep Sapphire Ocean',
    desc: 'Xanh biển sâu sapphire sang trọng & công nghệ',
    colors: {
      siteBgStart: '#F0F7FF',
      siteBgMiddle: '#D0E5FF',
      siteBgEnd: '#8EC1FF',
      buttonStart: '#38BDF8',
      buttonMiddle: '#0284C7',
      buttonEnd: '#0369A1',
      b2bStart: '#0284C7',
      b2bMiddle: '#0369A1',
      b2bEnd: '#082F49',
    },
  },
  {
    name: 'Emerald Optical Health',
    desc: 'Xanh ngọc lục bảo y khoa dịu mát & an tâm',
    colors: {
      siteBgStart: '#F0FDF4',
      siteBgMiddle: '#DCFCE7',
      siteBgEnd: '#86EFAC',
      buttonStart: '#34D399',
      buttonMiddle: '#059669',
      buttonEnd: '#065F46',
      b2bStart: '#059669',
      b2bMiddle: '#065F46',
      b2bEnd: '#064E3B',
    },
  },
  {
    name: 'Royal Amethyst',
    desc: 'Tím quang phổ thấu kính tinh tế & độc đáo',
    colors: {
      siteBgStart: '#FAF5FF',
      siteBgMiddle: '#F3E8FF',
      siteBgEnd: '#D8B4FE',
      buttonStart: '#C084FC',
      buttonMiddle: '#7E22CE',
      buttonEnd: '#581C87',
      b2bStart: '#7E22CE',
      b2bMiddle: '#581C87',
      b2bEnd: '#3B0764',
    },
  },
  {
    name: 'Titanium Apple Slate',
    desc: 'Xám bạc tối giản, trung tính hiện đại chuẩn Apple',
    colors: {
      siteBgStart: '#F8FAFC',
      siteBgMiddle: '#E2E8F0',
      siteBgEnd: '#CBD5E1',
      buttonStart: '#64748B',
      buttonMiddle: '#334155',
      buttonEnd: '#1E293B',
      b2bStart: '#334155',
      b2bMiddle: '#1E293B',
      b2bEnd: '#0F172A',
    },
  },
];

const STORAGE_KEY = 'rockylens_custom_theme_colors';

export function applyThemeToDocument(colors: ThemeColors) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  // Background
  root.style.setProperty('--site-bg-start', colors.siteBgStart);
  root.style.setProperty('--site-bg-middle', colors.siteBgMiddle);
  root.style.setProperty('--site-bg-end', colors.siteBgEnd);

  // Button
  root.style.setProperty('--button-start', colors.buttonStart);
  root.style.setProperty('--button-middle', colors.buttonMiddle);
  root.style.setProperty('--button-end', colors.buttonEnd);

  // B2B & Semantic
  root.style.setProperty('--b2b-start', colors.b2bStart);
  root.style.setProperty('--b2b-middle', colors.b2bMiddle);
  root.style.setProperty('--b2b-end', colors.b2bEnd);

  root.style.setProperty('--color-heading', colors.b2bEnd);
  root.style.setProperty('--color-text', colors.b2bEnd);
  root.style.setProperty('--color-border', colors.siteBgEnd);
  root.style.setProperty('--color-primary', colors.buttonMiddle);
  root.style.setProperty('--color-primary-hover', colors.buttonEnd);
  root.style.setProperty('--color-primary-light', colors.siteBgStart);

  // Gradients
  root.style.setProperty(
    '--gradient-site',
    `linear-gradient(135deg, ${colors.siteBgStart} 0%, ${colors.siteBgMiddle} 55%, ${colors.siteBgEnd} 100%)`
  );
  root.style.setProperty(
    '--gradient-button',
    `linear-gradient(110deg, ${colors.buttonStart} 0%, ${colors.buttonMiddle} 50%, ${colors.buttonEnd} 100%)`
  );
  root.style.setProperty(
    '--gradient-b2b',
    `linear-gradient(120deg, ${colors.b2bStart} 0%, ${colors.b2bMiddle} 50%, ${colors.b2bEnd} 100%)`
  );
}

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState<ThemeColors>(DEFAULT_THEME);
  const [activeTab, setActiveTab] = useState<'bg' | 'btn' | 'b2b' | 'presets'>('presets');
  const [copied, setCopied] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setColors(parsed);
        applyThemeToDocument(parsed);
      } else {
        applyThemeToDocument(DEFAULT_THEME);
      }
    } catch {
      applyThemeToDocument(DEFAULT_THEME);
    }
  }, []);

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    const updated = { ...colors, [key]: value };
    setColors(updated);
    applyThemeToDocument(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  const handlePresetSelect = (preset: ThemeColors) => {
    setColors(preset);
    applyThemeToDocument(preset);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preset));
    } catch {
      // Ignore storage errors
    }
  };

  const handleReset = () => {
    setColors(DEFAULT_THEME);
    applyThemeToDocument(DEFAULT_THEME);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const handleCopyCSS = () => {
    const cssCode = `:root {
  /* Website Background */
  --site-bg-start: ${colors.siteBgStart};
  --site-bg-middle: ${colors.siteBgMiddle};
  --site-bg-end: ${colors.siteBgEnd};

  /* Button Colors */
  --button-start: ${colors.buttonStart};
  --button-middle: ${colors.buttonMiddle};
  --button-end: ${colors.buttonEnd};

  /* B2B & Semantic */
  --b2b-start: ${colors.b2bStart};
  --b2b-middle: ${colors.b2bMiddle};
  --b2b-end: ${colors.b2bEnd};

  --color-heading: var(--b2b-end);
  --color-text: var(--b2b-end);
  --color-muted: #476773;
  --color-surface: #FFFFFF;
  --color-border: var(--site-bg-end);
  --color-primary: var(--button-middle);
  --color-primary-hover: var(--button-end);
  --color-primary-light: var(--site-bg-start);

  --gradient-site: linear-gradient(135deg, var(--site-bg-start) 0%, var(--site-bg-middle) 55%, var(--site-bg-end) 100%);
  --gradient-button: linear-gradient(110deg, var(--button-start) 0%, var(--button-middle) 50%, var(--button-end) 100%);
  --gradient-b2b: linear-gradient(120deg, var(--b2b-start) 0%, var(--b2b-middle) 50%, var(--b2b-end) 100%);
}`;

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40 print:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center space-x-2.5 px-4 py-3 rounded-full bg-white text-slate-900 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          title="Tùy biến bảng màu giao diện (Color Customizer)"
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ background: 'var(--gradient-button)' }}>
            <Palette className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-800 tracking-wide">
            {isOpen ? 'Đóng Bảng Màu' : 'Tùy Biến Màu Sắc'}
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </button>
      </div>

      {/* Floating Customizer Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-22 right-6 z-50 w-[360px] sm:w-[420px] max-w-[calc(100vw-2rem)] max-h-[80vh] flex flex-col bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-xs" style={{ background: 'var(--gradient-button)' }}>
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Tùy Biến Màu Giao Diện</h3>
                <p className="text-[11px] text-slate-500">Kéo thanh màu hoặc nhập mã HEX trực tiếp</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Live Gradient Preview Banner */}
          <div className="p-4 bg-slate-50 border-b border-slate-100 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span>Xem Trước Hiệu Ứng Trực Tiếp:</span>
              </span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Live Active</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="h-10 rounded-xl flex items-center justify-center text-slate-800 font-bold border border-slate-200/60 shadow-2xs text-[11px]" style={{ background: 'var(--gradient-site)' }}>
                Nền Website
              </div>
              <div className="h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-2xs text-[11px]" style={{ background: 'var(--gradient-button)' }}>
                Nút Bấm CTA
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-slate-100 bg-white text-xs font-bold text-slate-600">
            <button
              type="button"
              onClick={() => setActiveTab('presets')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeTab === 'presets' ? 'border-primary text-primary font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              Mẫu Sẵn
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('bg')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeTab === 'bg' ? 'border-primary text-primary font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              Nền Site
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('btn')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeTab === 'btn' ? 'border-primary text-primary font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              Nút Bấm
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('b2b')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeTab === 'b2b' ? 'border-primary text-primary font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              B2B
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-4 overflow-y-auto flex-1 space-y-3.5">
            {/* Presets Tab */}
            {activeTab === 'presets' && (
              <div className="space-y-2.5">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Chọn Bảng Màu Mẫu Thiết Kế Sẵn:
                </div>
                {THEME_PRESETS.map((preset, idx) => {
                  const isCurrent =
                    colors.buttonMiddle === preset.colors.buttonMiddle &&
                    colors.siteBgStart === preset.colors.siteBgStart;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handlePresetSelect(preset.colors)}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-primary bg-primary/5 shadow-xs ring-1 ring-primary'
                          : 'border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <span>{preset.name}</span>
                          {isCurrent && <Check className="w-3.5 h-3.5 text-primary" />}
                        </div>
                        <div className="text-[11px] text-slate-500">{preset.desc}</div>
                      </div>
                      <div className="flex items-center -space-x-1.5 shrink-0 pl-3">
                        <div className="w-5 h-5 rounded-full border border-white shadow-2xs" style={{ backgroundColor: preset.colors.siteBgMiddle }} />
                        <div className="w-5 h-5 rounded-full border border-white shadow-2xs" style={{ backgroundColor: preset.colors.buttonMiddle }} />
                        <div className="w-5 h-5 rounded-full border border-white shadow-2xs" style={{ backgroundColor: preset.colors.b2bEnd }} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Background Colors Tab */}
            {activeTab === 'bg' && (
              <div className="space-y-3">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  3 Màu Gradient Nền Website:
                </div>
                <ColorInputRow
                  label="Điểm bắt đầu (Start)"
                  cssVar="--site-bg-start"
                  value={colors.siteBgStart}
                  onChange={(val) => handleColorChange('siteBgStart', val)}
                />
                <ColorInputRow
                  label="Điểm ở giữa (Middle)"
                  cssVar="--site-bg-middle"
                  value={colors.siteBgMiddle}
                  onChange={(val) => handleColorChange('siteBgMiddle', val)}
                />
                <ColorInputRow
                  label="Điểm kết thúc (End)"
                  cssVar="--site-bg-end"
                  value={colors.siteBgEnd}
                  onChange={(val) => handleColorChange('siteBgEnd', val)}
                />
              </div>
            )}

            {/* Button Colors Tab */}
            {activeTab === 'btn' && (
              <div className="space-y-3">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  3 Màu Gradient Nút Bấm &amp; CTA:
                </div>
                <ColorInputRow
                  label="Điểm bắt đầu (Start)"
                  cssVar="--button-start"
                  value={colors.buttonStart}
                  onChange={(val) => handleColorChange('buttonStart', val)}
                />
                <ColorInputRow
                  label="Màu chủ đạo (Middle / Brand Solid)"
                  cssVar="--button-middle"
                  value={colors.buttonMiddle}
                  onChange={(val) => handleColorChange('buttonMiddle', val)}
                />
                <ColorInputRow
                  label="Điểm kết thúc (End / Hover State)"
                  cssVar="--button-end"
                  value={colors.buttonEnd}
                  onChange={(val) => handleColorChange('buttonEnd', val)}
                />
              </div>
            )}

            {/* B2B Colors Tab */}
            {activeTab === 'b2b' && (
              <div className="space-y-3">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  3 Màu Phân Hệ B2B &amp; Heading:
                </div>
                <ColorInputRow
                  label="Điểm bắt đầu (Start)"
                  cssVar="--b2b-start"
                  value={colors.b2bStart}
                  onChange={(val) => handleColorChange('b2bStart', val)}
                />
                <ColorInputRow
                  label="Điểm ở giữa (Middle)"
                  cssVar="--b2b-middle"
                  value={colors.b2bMiddle}
                  onChange={(val) => handleColorChange('b2bMiddle', val)}
                />
                <ColorInputRow
                  label="Đậm nhất (End / Heading Color)"
                  cssVar="--b2b-end"
                  value={colors.b2bEnd}
                  onChange={(val) => handleColorChange('b2bEnd', val)}
                />
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer"
              title="Khôi phục màu mặc định ban đầu"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span>Mặc Định</span>
            </button>

            <button
              type="button"
              onClick={handleCopyCSS}
              className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[var(--b2b-end)] text-white hover:opacity-95 transition-opacity shadow-xs cursor-pointer"
              title="Sao chép mã CSS :root để lưu cấu hình"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Đã Sao Chép :root!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-300" />
                  <span>Sao Chép Mã CSS</span>
                </>
              )}
            </button>
          </div>

        </div>
      )}
    </>
  );
}

function ColorInputRow({
  label,
  cssVar,
  value,
  onChange,
}: {
  label: string;
  cssVar: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
      <div className="space-y-0.5 flex-1 min-w-0">
        <div className="text-xs font-bold text-slate-900 truncate">{label}</div>
        <div className="text-[10px] text-slate-400 font-mono truncate">{cssVar}</div>
      </div>

      <div className="flex items-center space-x-2 shrink-0">
        {/* Native Color Picker (Click / drag slider) */}
        <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value.toUpperCase())}
            className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0"
            title="Nhấp để kéo thanh màu"
          />
        </div>

        {/* Direct Hex Input */}
        <input
          type="text"
          value={value}
          maxLength={7}
          onChange={(e) => {
            let val = e.target.value;
            if (!val.startsWith('#')) val = '#' + val;
            onChange(val.toUpperCase());
          }}
          className="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="#000000"
        />
      </div>
    </div>
  );
}
