import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, Eye, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#050E10] via-[#081C24] to-[#0A2631] text-white overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Background Optical Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0B7B8A]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D97706]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 text-teal-300 text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Tiêu Chuẩn Quang Học Canada Opticians</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15]">
              GIẢI PHÁP TRÒNG KÍNH CHO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-100 to-amber-200">TẦM NHÌN HIỆN ĐẠI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Khám phá các dòng tròng kính kỹ thuật số và công nghệ quang học tiên tiến, đồng thời kết nối giải pháp sản phẩm và dịch vụ Lab RX chuyên nghiệp dành cho đối tác ngành mắt kính.
            </p>

            {/* Dual CTAs (B2C & B2B) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/trong-kinh/"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#0B7B8A] hover:bg-[#096370] text-white shadow-lg shadow-[#0B7B8A]/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Khám Phá Sản Phẩm</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/danh-cho-doi-tac/"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-xs transition-all"
              >
                <span>Dành Cho Đối Tác B2B</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-lg sm:text-xl font-bold text-teal-400">100%</div>
                <div className="text-[11px] text-slate-400">Phôi MR Nhập Khẩu</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-teal-400">Freeform 3D</div>
                <div className="text-[11px] text-slate-400">Công Nghệ Gia Công Lab</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-teal-400">ISO 9001</div>
                <div className="text-[11px] text-slate-400">Kiểm Định Quốc Tế</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-[#0B7B8A]/20 via-slate-800/30 to-amber-500/10 p-4 border border-teal-500/20 backdrop-blur-xs shadow-2xl flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/banners/hero-banner.png"
                  alt="Tròng kính quang học Rocky Lens Canada"
                  fill
                  priority
                  className="object-contain p-4 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>

              {/* Floating feature pills */}
              <div className="absolute -bottom-4 -left-4 bg-[#050E10]/90 border border-teal-500/40 px-4 py-2.5 rounded-xl shadow-lg backdrop-blur-md flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Nano SHMC</div>
                  <div className="text-[10px] text-slate-400">Chống bám nước & tia UV</div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-[#050E10]/90 border border-amber-500/40 px-3.5 py-2 rounded-xl shadow-lg backdrop-blur-md flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span className="text-xs font-bold text-amber-200">Canada Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
