'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, Eye, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 site-background text-slate-800">
      {/* Apple Liquid Caustic Light Orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--site-bg-end)]/40 via-[var(--site-bg-middle)]/30 to-[var(--button-start)]/30 rounded-full blur-[100px] liquid-morph-1 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-[var(--site-bg-middle)]/35 via-[var(--site-bg-start)]/30 to-[var(--site-bg-end)]/30 rounded-full blur-[110px] liquid-morph-2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Product Discovery Journey Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Apple-style Capsule Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-pill text-primary text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--button-middle)]" />
              <span className="tracking-wide uppercase font-semibold">Thương Hiệu Tròng Kính Canada Opticians</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.15] text-heading">
              Nhà phân phối tròng kính <br className="hidden sm:inline" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">nhập khẩu từ Canada</span>
            </h1>

            {/* Subheadline */}
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Rocky Lens mang đến các giải pháp tròng kính đa dạng, đáp ứng nhu cầu của hệ thống cửa hàng mắt kính và người sử dụng. Khám phá công nghệ, đặc điểm sản phẩm và những lựa chọn phù hợp với từng nhu cầu thị giác.
            </p>

            {/* 3 Apple Liquid Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-4 rounded-2xl liquid-card">
                <div className="text-xs font-bold text-primary uppercase">Mitsui Monomer MR™</div>
                <div className="text-sm font-black text-heading mt-1">Trong Suốt 99.8%</div>
                <div className="text-[11px] text-brand-muted mt-0.5">Truyền quang cao, quang sai cực thấp</div>
              </div>

              <div className="p-4 rounded-2xl liquid-card">
                <div className="text-xs font-bold text-[var(--button-end)] uppercase">Nano Sapphire 9H</div>
                <div className="text-sm font-black text-heading mt-1">Trượt Nước &gt;115°</div>
                <div className="text-[11px] text-brand-muted mt-0.5">Kháng trầy xước, không đọng nước mưa</div>
              </div>

              <div className="p-4 rounded-2xl liquid-card">
                <div className="text-xs font-bold text-heading uppercase">CanRx Freeform 4K</div>
                <div className="text-sm font-black text-heading mt-1">Sai Số &lt; 0.01 Diop</div>
                <div className="text-[11px] text-brand-muted mt-0.5">Gia công kỹ thuật số cá nhân hóa</div>
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
                className="liquid-btn-secondary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer"
              >
                <span>Nhận Báo Giá Đại Lý</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-brand-muted font-medium">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary" />
                <span>Ontario Opticians No. 6181</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ISO 13485:2016 Medical Quality</span>
              </span>
              <span>&bull;</span>
              <span>Bảo hành điện tử 1 đổi 1 24T</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (Gần lại nội dung bên trái, thu hẹp khoảng cách) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start lg:-ml-4">
            
            {/* Ambient Caustic Halo */}
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-teal-200/50 via-cyan-100/40 to-sky-200/50 blur-3xl absolute liquid-morph-1 pointer-events-none" />

            <div className="relative z-10 w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
              
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/assets/h-lens3.png"
                  alt="Tròng kính quang học Rocky Lens Canada"
                  fill
                  priority
                  className="object-contain p-2 transition-transform duration-700 hover:scale-105 drop-shadow-[0_20px_35px_rgba(11,123,138,0.22)]"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
