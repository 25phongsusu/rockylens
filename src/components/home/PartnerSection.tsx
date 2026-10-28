'use client';

import React from 'react';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';

export const partnerFeatures = [
  {
    num: '01',
    title: 'Tư vấn danh mục',
    desc: 'Trao đổi nhu cầu của cửa hàng để tìm hiểu dòng tròng phù hợp.',
  },
  {
    num: '02',
    title: 'Tài liệu kỹ thuật',
    desc: 'Thông số, tính năng và phạm vi ứng dụng theo từng sản phẩm.',
  },
  {
    num: '03',
    title: 'Giải pháp trưng bày',
    desc: 'Tìm hiểu tài liệu và hình ảnh hỗ trợ giới thiệu sản phẩm.',
  },
  {
    num: '04',
    title: 'Hỗ trợ & hậu mãi',
    desc: 'Liên hệ để nhận thông tin về chính sách hiện hành.',
  },
];

export default function PartnerSection() {
  return (
    <section id="doi-tac" className="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Deep Navy Box matching preview.png Section 05 */}
        <div className="rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden" style={{ background: 'var(--gradient-b2b)' }}>
          
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[var(--button-start)]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Eyebrow + Heading + CTA Button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
            <div className="max-w-2xl space-y-2.5">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                DÀNH CHO ĐỐI TÁC
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Cùng RockyLens mở rộng giá trị cho cửa hàng mắt kính.
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed pt-1">
                Không chỉ là một danh mục tròng kính, RockyLens hướng đến hỗ trợ cửa hàng bằng thông tin sản phẩm dễ sử dụng, tài liệu kỹ thuật và kênh trao đổi trực tiếp.
              </p>
            </div>

            <div className="shrink-0 pb-1">
              <button
                type="button"
                onClick={openB2BQuoteModal}
                className="px-6 py-3 rounded-full bg-white text-[#003B50] font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer shadow-md inline-flex items-center gap-1.5 active:scale-95"
              >
                <span>Liên hệ hợp tác</span>
                <span>&#8599;</span>
              </button>
            </div>
          </div>

          {/* 4 Feature Columns in Divided Box */}
          <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15 gap-6 sm:gap-0 relative z-10">
            {partnerFeatures.map((item, idx) => (
              <div key={idx} className="sm:px-6 first:pl-0 last:pr-0 pt-4 sm:pt-0 first:pt-0">
                <div className="text-xs font-mono font-bold text-cyan-300">
                  {item.num}
                </div>
                <h3 className="text-base font-bold text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Info Strip: Direct Connect + Phone + Email */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-300">
              KẾT NỐI TRỰC TIẾP
            </span>
            <a
              href="tel:0933102653"
              className="font-bold text-white hover:text-cyan-200 transition-colors"
            >
              0933 102 653
            </a>
            <a
              href="mailto:b2b@rockylens.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              b2b@rockylens.com
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
