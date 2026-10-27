import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, Eye, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-[#F5F5F7] text-slate-800">
      {/* Apple Liquid Caustic Light Orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-teal-200/40 via-cyan-100/30 to-sky-200/40 rounded-full blur-[100px] liquid-morph-1 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-teal-100/35 via-cyan-100/30 to-blue-100/30 rounded-full blur-[110px] liquid-morph-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product Discovery Journey Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Apple-style Capsule Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-pill text-[#0B7B8A] text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0B7B8A]" />
              <span className="tracking-wide uppercase font-semibold">Thương Hiệu Tròng Kính Canada Opticians</span>
            </div>

            {/* Main Headline (User's Exact Proposed Headline) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900">
              Rõ tầm nhìn, <br className="hidden sm:inline" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B7B8A] to-teal-600">trọn cuộc sống.</span>
            </h1>

            {/* Subheadline (User's Exact Proposed Narrative) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Mỗi góc nhìn mở ra một trải nghiệm khác biệt. Rocky hướng đến những giải pháp tròng kính đáp ứng nhu cầu thị giác trong cuộc sống hiện đại.
            </p>

            {/* 3 Apple Liquid Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-4 rounded-2xl liquid-card">
                <div className="text-xs font-bold text-[#0B7B8A] uppercase">Mitsui Monomer MR™</div>
                <div className="text-sm font-black text-slate-900 mt-1">Trong Suốt 99.8%</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Truyền quang cao, quang sai cực thấp</div>
              </div>

              <div className="p-4 rounded-2xl liquid-card">
                <div className="text-xs font-bold text-teal-700 uppercase">Nano Sapphire 9H</div>
                <div className="text-sm font-black text-slate-900 mt-1">Trượt Nước &gt;115°</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Kháng trầy xước, không đọng nước mưa</div>
              </div>

              <div className="p-4 rounded-2xl liquid-card">
                <div className="text-xs font-bold text-slate-800 uppercase">CanRx Freeform 4K</div>
                <div className="text-sm font-black text-slate-900 mt-1">Sai Số &lt; 0.01 Diop</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Gia công kỹ thuật số cá nhân hóa</div>
              </div>
            </div>

            {/* Action Buttons: Khám phá tròng kính & Tìm đại lý */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="#trong-kinh"
                className="liquid-btn-primary px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md flex items-center space-x-2"
              >
                <span>Khám Phá Tròng Kính</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#tim-dai-ly"
                className="liquid-btn-secondary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2"
              >
                <span>Tìm Đại Lý</span>
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#0B7B8A]" />
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

          {/* Right Column: Hero Visual Asset with Apple Liquid Frosted Depth */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Caustic Halo */}
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-teal-200/50 via-cyan-100/40 to-sky-200/50 blur-3xl absolute liquid-morph-1 pointer-events-none" />

            <div className="relative z-10 w-full max-w-md aspect-square rounded-[36px] liquid-panel p-6 border border-white/95 shadow-xl flex items-center justify-center">
              
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/banners/hero-banner.png"
                  alt="Tròng kính quang học Rocky Lens Canada"
                  fill
                  priority
                  className="object-contain p-2 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>

              {/* Floating Apple Liquid Pill Badges */}
              <div className="absolute -bottom-3 -left-4 liquid-pill px-4 py-2 shadow-md flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#0B7B8A] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Chiết Suất Siêu Mỏng</div>
                  <div className="text-[10px] text-slate-500">1.56 &bull; 1.60 &bull; 1.67 &bull; 1.74</div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 liquid-pill px-3.5 py-1.5 shadow-md flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span className="text-[11px] font-bold text-slate-900">Canada Certified</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
