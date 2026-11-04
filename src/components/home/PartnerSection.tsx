'use client';

import React from 'react';
import Link from 'next/link';

export const partnerFeatures = [
  {
    num: '01',
    title: 'Tư vấn danh mục',
    desc: 'Trao đổi nhu cầu thực tế của cửa hàng để tìm hiểu và xây dựng dòng tròng phù hợp.',
    icon: (
      <svg className="w-5 h-5 text-cyan-300/60 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Tài liệu kỹ thuật',
    desc: 'Thông số chi tiết, dải độ mở rộng và tính năng ứng dụng theo từng sản phẩm.',
    icon: (
      <svg className="w-5 h-5 text-cyan-300/60 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Giải pháp trưng bày',
    desc: 'Cung cấp tài liệu, hình ảnh và bộ POSM chuyên nghiệp hỗ trợ giới thiệu tròng kính.',
    icon: (
      <svg className="w-5 h-5 text-cyan-300/60 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Hỗ trợ & hậu mãi',
    desc: 'Kênh hỗ trợ nhanh chóng từ Clearly Vietnam về chính sách bảo hành và gia công RX.',
    icon: (
      <svg className="w-5 h-5 text-cyan-300/60 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function PartnerSection() {
  return (
    <section id="doi-tac" className="relative py-16 sm:py-24 w-full text-white shadow-2xl overflow-hidden" style={{ background: 'var(--gradient-b2b)' }}>
      {/* Subtle background glow */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--button-start)]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Row: Eyebrow + Heading + CTA Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              DÀNH CHO ĐỐI TÁC
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Cùng RockyLens mở rộng giá trị cho cửa hàng mắt kính.
            </h2>
            <p className="text-cyan-50/80 text-sm sm:text-base leading-relaxed pt-1">
              Không chỉ là một danh mục tròng kính, RockyLens hướng đến hỗ trợ cửa hàng bằng thông tin sản phẩm dễ sử dụng, tài liệu kỹ thuật chuẩn xác và kênh trao đổi trực tiếp.
            </p>
          </div>

          <div className="shrink-0 pb-1">
            <Link
              href="/danh-cho-doi-tac/"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#003B50] font-bold text-sm hover:bg-cyan-50 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all shadow-md"
            >
              <span>Tìm hiểu chính sách đối tác</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 4 Feature Columns in Modern Glass Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {partnerFeatures.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/30">
                    {item.num}
                  </span>
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-50/75 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info Strip: Direct Connect + Phone + Email + Zalo */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm relative z-10">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              KẾT NỐI TRỰC TIẾP
            </span>
            <a href="tel:0933102653" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-cyan-200 transition-colors">
              <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0933 102 653</span>
            </a>
            <a href="mailto:b2b@rockylens.com" className="inline-flex items-center gap-1.5 text-cyan-100 hover:text-white transition-colors">
              <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>b2b@rockylens.com</span>
            </a>
          </div>

          <a
            href="https://zalo.me/0933102653"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
          >
            <span>Nhắn Zalo B2B</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
