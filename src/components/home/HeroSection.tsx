'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Image as ImageIcon,
} from 'lucide-react';

export default function HeroSection() {
  const [mode, setMode] = useState<'standard' | 'banner'>('standard');

  useEffect(() => {
    // Check URL query param ?mode=banner or ?view=banner
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const modeParam = params.get('mode') || params.get('view');
      if (modeParam === 'banner') {
        setMode('banner');
      } else {
        const saved = localStorage.getItem('rocky_hero_mode');
        if (saved === 'banner') {
          setMode('banner');
        }
      }
    }
  }, []);

  const switchMode = (newMode: 'standard' | 'banner') => {
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rocky_hero_mode', newMode);
      const url = new URL(window.location.href);
      if (newMode === 'banner') {
        url.searchParams.set('mode', 'banner');
      } else {
        url.searchParams.delete('mode');
        url.searchParams.delete('view');
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  const isBanner = mode === 'banner';
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (typeof window !== 'undefined' && window.location.pathname.startsWith('/rockylens') ? '/rockylens' : '');

  return (
    <section
      id="brand-hero"
      className={`relative overflow-hidden py-20 sm:py-28 lg:py-36 min-h-[780px] lg:min-h-[860px] flex flex-col justify-center transition-all duration-700 ${
        isBanner ? 'bg-[#001722] text-white' : 'site-background text-slate-800'
      }`}
    >
      {/* ========================================================= */}
      {/* CHẾ ĐỘ 2: CINEMATIC CANADIAN OPTICAL BANNER BACKGROUND   */}
      {/* ========================================================= */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 pointer-events-none ${
          isBanner ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${basePath}/images/banners/banner_hero_mode.jpg')`,
          backgroundPosition: 'right 30% center',
        }}
      >
        {/* Optical gradient overlay ensuring 100% typography contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001722]/98 via-[#002433]/85 to-transparent sm:to-[#002433]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001722] via-transparent to-[#001722]/60" />
      </div>

      {/* ========================================================= */}
      {/* CHẾ ĐỘ 1: APPLE LIQUID CAUSTIC LIGHT ORBS                */}
      {/* ========================================================= */}
      {!isBanner && (
        <>
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--site-bg-end)]/40 via-[var(--site-bg-middle)]/30 to-[var(--button-start)]/30 rounded-full blur-[100px] liquid-morph-1 pointer-events-none" />
          <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-[var(--site-bg-middle)]/35 via-[var(--site-bg-start)]/30 to-[var(--site-bg-end)]/30 rounded-full blur-[110px] liquid-morph-2 pointer-events-none" />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ========================================================= */}
        {/* SEGMENTED MODE SWITCHER: CHẾ ĐỘ 1 vs CHẾ ĐỘ 2            */}
        {/* ========================================================= */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center p-1 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-300/70 shadow-sm transition-all">
            <button
              type="button"
              onClick={() => switchMode('standard')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                !isBanner
                  ? 'bg-[var(--b2b-end)] text-white shadow-xs'
                  : 'text-slate-600 hover:text-heading'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chế độ 1: Tối giản</span>
            </button>
            <button
              type="button"
              onClick={() => switchMode('banner')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isBanner
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-600 hover:text-heading'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Chế độ 2: Nền Banner</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Product Discovery Journey Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Apple-style Capsule Badge */}
            <div
              className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs transition-colors ${
                isBanner
                  ? 'bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md'
                  : 'liquid-pill text-primary'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--button-middle)]" />
              <span className="tracking-wide uppercase font-semibold">Thương Hiệu Tròng Kính Canada Opticians</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] transition-colors ${
                isBanner ? 'text-white' : 'text-heading'
              }`}
            >
              Rocky Lens - <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
                nhà phân phối tròng kính từ Canada
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors ${
                isBanner ? 'text-slate-200' : 'text-brand-muted'
              }`}
            >
              Rocky Lens tự hào là đơn vị phân phối tròng kính B2B và gia công Lab công nghệ quốc tế tại Việt Nam. Với hệ sinh thái sản phẩm toàn diện - từ tròng kính cận, tròng kính đổi màu đến tròng kính chống ánh sáng xanh - chúng tôi mang đến giải pháp nguồn hàng trọn gói, ổn định, đồng hành cùng sự phát triển bền vững của các hệ thống cửa hàng kính mắt trên toàn quốc.
            </p>

            {/* 3 Apple Liquid Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div
                className={`p-4 rounded-2xl transition-all ${
                  isBanner
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                    : 'liquid-card'
                }`}
              >
                <div className="text-xs font-bold text-cyan-400 uppercase">Mitsui Monomer MR™</div>
                <div className={`text-sm font-black mt-1 ${isBanner ? 'text-white' : 'text-heading'}`}>
                  Trong Suốt 99.8%
                </div>
                <div className={`text-[11px] mt-0.5 ${isBanner ? 'text-slate-300' : 'text-brand-muted'}`}>
                  Truyền quang cao, quang sai cực thấp
                </div>
              </div>

              <div
                className={`p-4 rounded-2xl transition-all ${
                  isBanner
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                    : 'liquid-card'
                }`}
              >
                <div className="text-xs font-bold text-teal-300 uppercase">Nano Sapphire 9H</div>
                <div className={`text-sm font-black mt-1 ${isBanner ? 'text-white' : 'text-heading'}`}>
                  Trượt Nước &gt;115°
                </div>
                <div className={`text-[11px] mt-0.5 ${isBanner ? 'text-slate-300' : 'text-brand-muted'}`}>
                  Kháng trầy xước, không đọng nước mưa
                </div>
              </div>

              <div
                className={`p-4 rounded-2xl transition-all ${
                  isBanner
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                    : 'liquid-card'
                }`}
              >
                <div className={`text-xs font-bold uppercase ${isBanner ? 'text-white' : 'text-heading'}`}>
                  CanRx Freeform 4K
                </div>
                <div className={`text-sm font-black mt-1 ${isBanner ? 'text-white' : 'text-heading'}`}>
                  Sai Số &lt; 0.01 Diop
                </div>
                <div className={`text-[11px] mt-0.5 ${isBanner ? 'text-slate-300' : 'text-brand-muted'}`}>
                  Gia công kỹ thuật số cá nhân hóa
                </div>
              </div>
            </div>

            {/* Action Buttons: Tìm Tròng Kính Phù Hợp Với Bạn & Nhận Báo Giá Đại Lý */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="#trong-kinh"
                className="liquid-btn-primary px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md flex items-center space-x-2"
              >
                <span>Tìm Tròng Kính Phù Hợp Với Bạn</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-b2b-modal'));
                  }
                }}
                className={`px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer transition-all rounded-full ${
                  isBanner
                    ? 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md'
                    : 'liquid-btn-secondary'
                }`}
              >
                <span>Nhận Báo Giá Đại Lý</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div
              className={`pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium transition-colors ${
                isBanner ? 'text-slate-300' : 'text-brand-muted'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Ontario Opticians No. 6181</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 13485:2016 Medical Quality</span>
              </span>
              <span>&bull;</span>
              <span>Bảo hành điện tử 1 đổi 1 24T</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start lg:-ml-4">
            
            {/* Ambient Caustic Halo */}
            <div
              className={`w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full blur-3xl absolute liquid-morph-1 pointer-events-none transition-opacity duration-700 ${
                isBanner
                  ? 'bg-gradient-to-tr from-cyan-500/20 via-teal-500/20 to-blue-500/10'
                  : 'bg-gradient-to-tr from-teal-200/50 via-cyan-100/40 to-sky-200/50'
              }`}
            />

            <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-square flex items-center justify-center">
              
              <div
                className={`relative w-full h-full flex items-center justify-center transition-all duration-700 ${
                  isBanner ? 'scale-95 drop-shadow-[0_25px_50px_rgba(0,162,204,0.45)]' : ''
                }`}
              >
                <Image
                  src="/assets/h-lens3.png"
                  alt="Tròng kính quang học Rocky Lens Canada"
                  fill
                  priority
                  className="object-contain p-2 transition-transform duration-700 hover:scale-105 drop-shadow-[0_25px_45px_rgba(11,123,138,0.28)]"
                  sizes="(max-width: 1024px) 100vw, 580px"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
