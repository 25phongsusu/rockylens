'use client';

import React from 'react';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';

export default function FindStoreSection() {
  return (
    <section id="tim-dai-ly" className="relative py-24 px-6 bg-gradient-to-b from-[var(--site-bg-start)] via-white via-50% to-[var(--b2b-end)] overflow-hidden">
      {/* Ambient Blur Caustic Overlays (Smooth Section Blending) */}
      <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-[var(--site-bg-start)] to-transparent blur-xl pointer-events-none opacity-80" />
      <div className="absolute -top-24 left-1/4 w-96 h-48 bg-[var(--button-start)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight">
            Tìm tròng kính Rocky gần bạn
          </h2>
          <p className="text-[var(--color-muted)] text-base sm:text-lg mt-3">
            Tròng kính Rocky được phân phối và đo lắp chính hãng tại các cửa hàng mắt kính và phòng khám khúc xạ đối tác trên toàn quốc.
          </p>
        </div>

        {/* 3 Steps to Experience Rocky */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="card-surface p-8 rounded-3xl border border-[var(--color-border)]/50 space-y-4 shadow-xs">
            <h3 className="text-xl font-bold text-heading">
              Bước 1: Tìm Điểm Bán Gần Bạn
            </h3>
            <p className="text-[var(--color-muted)] text-base leading-relaxed">
              Tra cứu cửa hàng mắt kính hoặc phòng khám đối tác Rocky gần khu vực bạn sinh sống, hoặc liên hệ trực tiếp để được chỉ dẫn địa chỉ thuận tiện nhất.
            </p>
          </div>

          <div className="card-surface p-8 rounded-3xl border border-[var(--color-border)]/50 space-y-4 shadow-xs">
            <h3 className="text-xl font-bold text-heading">
              Bước 2: Đo Khám Thị Lực &amp; Tư Vấn
            </h3>
            <p className="text-[var(--color-muted)] text-base leading-relaxed">
              Kỹ thuật viên khúc xạ sẽ kiểm tra độ mắt, trao đổi về thói quen sinh hoạt và tư vấn dòng tròng kính có tính năng phù hợp nhất với nhu cầu của bạn.
            </p>
          </div>

          <div className="card-surface p-8 rounded-3xl border border-[var(--color-border)]/50 space-y-4 shadow-xs">
            <h3 className="text-xl font-bold text-heading">
              Bước 3: Hoàn Thiện Kính &amp; Đồng Hành
            </h3>
            <p className="text-[var(--color-muted)] text-base leading-relaxed">
              Tròng kính được mài lắp chuẩn xác theo tâm mắt và dáng gọng bạn chọn, đi kèm hướng dẫn sử dụng và chính sách bảo hành chính hãng từ Rocky.
            </p>
          </div>

        </div>

        {/* Direct Dealer Partnership Box */}
        <div className="section-background p-8 sm:p-10 rounded-3xl border border-[var(--color-border)]/60 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-2xl sm:text-3xl font-black text-heading">
              Bạn Là Cửa Hàng Mắt Kính Muốn Trở Thành Đại Lý Rocky Lens?
            </div>
            <p className="text-[var(--color-muted)] text-base max-w-xl">
              Kết nối ngay với bộ phận phát triển đại lý để nhận chính sách chiết khấu sỉ độc quyền, tài trợ kệ POSM trưng bày, máy test tròng và hỗ trợ gia công Lab RX chuẩn xác.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              type="button"
              onClick={openB2BQuoteModal}
              className="button-primary font-bold text-base text-center cursor-pointer shadow-xs"
            >
              Nhận Báo Giá Cho Đại Lý
            </button>
            <a
              href="https://zalo.me/0933102653"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary font-bold text-base text-center shadow-xs"
            >
              Zalo B2B Đại Lý
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500">
          * Rocky Lens phân phối độc quyền cho các cửa hàng mắt kính &amp; phòng khám nhãn khoa. Không bán lẻ trực tuyến.
        </div>

      </div>
    </section>
  );
}
