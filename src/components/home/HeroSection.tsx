'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  Image as ImageIcon,
} from 'lucide-react';
import homeContent from '@/../content/home_content.json';
import { assetUrl } from '@/lib/utils';

export default function HeroSection() {
  const [mode, setMode] = useState<'standard' | 'banner'>('standard');
  const hero = homeContent.hero;

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const modeParam = params.get('mode') || params.get('view');
      const saved = localStorage.getItem('rocky_hero_mode');
      if (modeParam === 'banner' || (!modeParam && saved === 'banner')) {
        setMode('banner');
      }
    } catch {}
  }, []);

  const switchMode = (newMode: 'standard' | 'banner') => {
    setMode(newMode);
    try {
      localStorage.setItem('rocky_hero_mode', newMode);
      const url = new URL(window.location.href);
      if (newMode === 'banner') {
        url.searchParams.set('mode', 'banner');
      } else {
        url.searchParams.delete('mode');
        url.searchParams.delete('view');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {}
  };

  const isBanner = mode === 'banner';

  return (
    <section
      id="brand-hero"
      className={`relative overflow-hidden py-10 sm:py-14 lg:py-16 min-h-[420px] lg:min-h-[460px] flex flex-col justify-center transition-all duration-700 ${
        isBanner ? 'bg-[#001722] text-white' : 'site-background text-slate-800'
      }`}
    >
      {/* Banner Mode Background */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 pointer-events-none ${
          isBanner ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${assetUrl('/images/banners/banner_hero_mode.jpg')}')`,
          backgroundPosition: 'right 30% center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001722]/98 via-[#002433]/85 to-transparent sm:to-[#002433]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001722] via-transparent to-[#001722]/60" />
      </div>

      {/* Liquid Caustic Light Orbs */}
      {!isBanner && (
        <>
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--site-bg-end)]/40 via-[var(--site-bg-middle)]/30 to-[var(--button-start)]/30 rounded-full blur-[100px] liquid-morph-1 pointer-events-none" />
          <div className="absolute top-1/4 -right-32 w-[380px] h-[380px] bg-gradient-to-bl from-[var(--site-bg-middle)]/35 via-[var(--site-bg-start)]/30 to-[var(--site-bg-end)]/30 rounded-full blur-[110px] liquid-morph-2 pointer-events-none" />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Segmented Mode Switcher */}
        <div className="flex items-center justify-center lg:justify-start mb-4">
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
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div
              className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs transition-colors ${
                isBanner
                  ? 'bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md'
                  : 'liquid-pill text-primary'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--button-middle)]" />
              <span className="tracking-wide uppercase font-semibold">{hero.badge}</span>
            </div>

            <h1
              className={`text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] transition-colors ${
                isBanner ? 'text-white' : 'text-heading'
              }`}
            >
              {hero.headlinePrefix} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
                {hero.headlineHighlight}
              </span>
            </h1>

            {hero.subheadline && (
              <p className={`text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed ${isBanner ? 'text-slate-200' : 'text-brand-muted'}`}>
                {hero.subheadline}
              </p>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <Link
                href={hero.ctaPrimary.link}
                className="liquid-btn-primary px-7 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2"
              >
                <span>{hero.ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={hero.ctaSecondary.link}
                className={`px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer transition-all rounded-full ${
                  isBanner
                    ? 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md'
                    : 'liquid-btn-secondary'
                }`}
              >
                <span>{hero.ctaSecondary.text}</span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start lg:-ml-4">
            <div
              className={`w-72 h-72 sm:w-[360px] sm:h-[360px] rounded-full blur-3xl absolute liquid-morph-1 pointer-events-none transition-opacity duration-700 ${
                isBanner
                  ? 'bg-gradient-to-tr from-cyan-500/20 via-teal-500/20 to-blue-500/10'
                  : 'bg-gradient-to-tr from-teal-200/50 via-cyan-100/40 to-sky-200/50'
              }`}
            />

            <div
              id="hero-lens-wrap"
              className={`relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-[380px] aspect-square flex items-center justify-center transition-all duration-700 ${
                isBanner ? 'lg:-translate-x-3 lg:-translate-y-2 scale-[1.02]' : ''
              }`}
            >
              <div
                className={`relative w-full h-full flex items-center justify-center transition-all duration-700 ${
                  isBanner ? 'drop-shadow-[0_25px_50px_rgba(0,162,204,0.45)]' : ''
                }`}
              >
                <Image
                  src={assetUrl(hero.heroImage)}
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
