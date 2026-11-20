import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import homeContent from '@/../content/home_content.json';
import { assetUrl } from '@/lib/utils';

export default function HeroSection() {
  const hero = homeContent.hero;

  return (
    <section
      id="brand-hero"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20 min-h-[420px] lg:min-h-[460px] flex flex-col justify-center site-background text-slate-800"
    >
      {/* Banner Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none contrast-[1.08] brightness-[0.95]"
        style={{
          backgroundImage: `url('${assetUrl('/images/banners/banner_hero_mode.jpg')}')`,
          backgroundPosition: 'right 20% center',
        }}
      >
        {/* Soft gradient overlay on left for typography readability, keeping right side rich and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--site-bg-start)] via-[var(--site-bg-start)]/80 sm:via-[var(--site-bg-start)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg-middle)]/20 via-transparent to-[var(--site-bg-start)]/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] text-heading">
              {hero.headlinePrefix} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
                {hero.headlineHighlight}
              </span>
            </h1>

            {hero.subheadline && (
              <p className="text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed text-brand-muted">
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
                className="liquid-btn-secondary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer transition-all rounded-full"
              >
                <span>{hero.ctaSecondary.text}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
