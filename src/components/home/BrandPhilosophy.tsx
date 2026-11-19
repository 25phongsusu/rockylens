import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Monitor, Sun, Eye } from 'lucide-react';
import homeContent from '@/../content/home_content.json';
import { assetUrl } from '@/lib/utils';

const PILLAR_ICONS = [Monitor, Sun, Eye];

export default function BrandPhilosophy() {
  const { philosophy } = homeContent;

  return (
    <section id="triet-ly" className="relative py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Art */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-sm bg-slate-100 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full relative">
                <Image
                  src={assetUrl('/images/company/t.png')}
                  alt="Trải nghiệm thị giác tròng kính Rocky"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-heading text-xs font-bold shadow-xs">
                  Trải Nghiệm Thị Giác &bull; Canada Standards
                </span>
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700">
                <span>Tối ưu trường nhìn tự nhiên</span>
                <span className="text-primary font-bold">Thích nghi êm dịu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.18]">
              {philosophy.title} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
                {philosophy.highlight}
              </span>
            </h2>

            <div className="space-y-4 text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
              <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
                {philosophy.desc}
              </p>
            </div>

            {/* 3 Needs-Based Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {philosophy.pillars.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
                return (
                  <div
                    key={pillar.title}
                    className="card-surface p-5 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon className="w-6 h-6 text-primary mb-3" />
                    <div className="text-base font-bold text-heading">{pillar.title}</div>
                    <p className="text-xs text-brand-muted mt-1.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col items-center justify-center text-center">
              <Link
                href="/trong-kinh/"
                className="inline-flex items-center gap-2 text-primary hover:text-[var(--color-primary-hover)] font-bold text-base transition-colors group"
              >
                <span>Khám phá giải pháp tròng kính</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
