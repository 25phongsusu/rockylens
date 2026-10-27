'use client';

import React from 'react';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';
import { siteConfig } from '@/config/site';

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export default function ContactCTA({
  title = 'Bạn Là Cửa Hàng Mắt Kính Muốn Trở Thành Đại Lý Rocky Lens?',
  description = 'Kết nối ngay với bộ phận phát triển đại lý để nhận chính sách chiết khấu sỉ độc quyền, tài trợ kệ POSM trưng bày, máy test tròng và hỗ trợ gia công Lab RX chuẩn xác.',
}: ContactCTAProps) {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[var(--site-bg-start)] p-8 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-[var(--color-border)] shadow-xs">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              {title}
            </h2>
            <p className="text-brand-muted text-sm sm:text-base max-w-xl leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              type="button"
              onClick={openB2BQuoteModal}
              className="button-primary px-7 py-3.5 rounded-full text-base text-center cursor-pointer shadow-xs"
            >
              Nhận Báo Giá Cho Đại Lý
            </button>
            <a
              href={siteConfig.zalo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary px-7 py-3.5 rounded-full text-base text-center shadow-xs"
            >
              Zalo B2B Đại Lý
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
