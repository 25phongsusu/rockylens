'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowUpRight, ShieldCheck, Download, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';

interface ContactCTAProps {
  title?: string;
  description?: string;
  showDownloadCatalog?: boolean;
}

export default function ContactCTA({
  title = 'Kết Nối Trực Tiếp Bộ Phận Hợp Tác Đại Lý Rocky Lens',
  description = 'Dành riêng cho các cửa hàng mắt kính, chuỗi phòng khám khúc xạ và đại lý phân phối tìm kiếm nguồn hàng ổn định, chính sách chiết khấu sỉ độc quyền và hỗ trợ kỹ thuật Lab RX chuyên sâu.',
  showDownloadCatalog = true,
}: ContactCTAProps) {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100/60 text-slate-800 py-16 px-4 sm:px-6 relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0B7B8A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-[#0B7B8A] border border-teal-200/60 mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Kênh Tiếp Nhận Đại Lý &amp; Hợp Tác B2B</span>
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0E253A] max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={openB2BQuoteModal}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0B7B8A] hover:bg-[#086370] text-white shadow-md shadow-[#0B7B8A]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Nhận Báo Giá Cho Đại Lý</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={siteConfig.zalo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-[#0E253A] border border-slate-200 hover:border-teal-300 shadow-xs transition-all"
          >
            <span>Nhắn Zalo Đại Lý</span>
            <ArrowUpRight className="w-4 h-4 text-[#0B7B8A]" />
          </a>

          <a
            href={`tel:${siteConfig.phones.hotline}`}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-[#0E253A] border border-slate-200 hover:border-teal-300 shadow-xs transition-all"
          >
            <Phone className="w-4 h-4 text-[#0B7B8A]" />
            <span>Hotline B2B: {siteConfig.phones.hotlineDisplay}</span>
          </a>

          {showDownloadCatalog && (
            <a
              href="/documents/Rocky_Lens_Catalogue_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-xs transition-all"
            >
              <Download className="w-4 h-4 text-[#D97706]" />
              <span>Tải Báo Giá Sỉ &amp; Catalogue 2025</span>
            </a>
          )}
        </div>

        {/* Small reassurance notes */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span>✓ Báo giá chiết khấu sỉ trong 15 phút</span>
          <span>✓ Tài trợ trọn bộ tủ mẫu, đèn test UV &amp; POSM đại lý</span>
          <span>✓ Hỗ trợ xử lý toa kính khó &amp; gia công Lab RX 24h</span>
        </div>
      </div>
    </section>
  );
}
