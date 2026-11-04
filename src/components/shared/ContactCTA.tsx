'use client';

import React from 'react';
import Link from 'next/link';
import {
  Glasses,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

interface ContactCTAProps {
  variant?: 'split' | 'b2b-only';
  title?: string;
  description?: string;
}

export default function ContactCTA({
  variant = 'split',
  title,
  description,
}: ContactCTAProps) {
  // B2B Only Mode (Used on Partner / B2B landing pages)
  if (variant === 'b2b-only') {
    return (
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--site-bg-start)] p-8 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-[var(--color-border)] shadow-xs">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200/70 w-fit mx-auto lg:mx-0">
                <Building2 className="w-3.5 h-3.5" />
                <span>Dành Cho Cửa Hàng &amp; Lab RX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
                {title || 'Bạn Là Cửa Hàng Mắt Kính Muốn Trở Thành Đại Lý Rocky Lens?'}
              </h2>
              <p className="text-brand-muted text-sm sm:text-base max-w-xl leading-relaxed">
                {description ||
                  'Kết nối ngay với bộ phận phát triển đại lý để nhận chính sách phân phối, tài trợ kệ POSM trưng bày, máy test tròng và hỗ trợ gia công Lab RX chuẩn xác.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                href="/danh-cho-doi-tac/"
                className="button-primary px-7 py-3.5 rounded-full text-base text-center cursor-pointer shadow-xs flex items-center gap-2"
              >
                <span>Xem Chính Sách Đại Lý</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary px-7 py-3.5 rounded-full text-base text-center shadow-xs flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Liên Hệ Zalo Đối Tác</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Dual-Audience Split Box Mode (Default: bridges End-users & B2B Partners)
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header: Unifying context */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hệ Sinh Thái Quang Học Rocky Lens Canada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-heading tracking-tight">
            Kết Nối Đúng Nhu Cầu Của Bạn
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-2.5 leading-relaxed">
            Dù bạn là người đeo kính tìm kiếm giải pháp thị lực phù hợp hay cửa hàng quang học muốn gia tăng uy tín và chất lượng phục vụ, Rocky Lens luôn sẵn sàng đồng hành.
          </p>
        </div>

        {/* 2-Column Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column: B2C Consumers */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[var(--color-border)] shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            {/* Ambient soft glow */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-sky-100/50 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-200/50 transition-colors" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200/80 w-fit mb-4">
                <Glasses className="w-3.5 h-3.5" />
                <span>Dành Cho Khách Hàng Cá Nhân</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-heading tracking-tight mb-3">
                Tìm Cặp Tròng Kính Cho Riêng Bạn
              </h3>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
                Khám phá 12 dòng sản phẩm Rocky Lens chuẩn quang học Canada đáp ứng mọi sinh hoạt: chống mỏi mắt văn phòng, an toàn lái xe ban đêm, đổi màu tiện lợi hay kiểm soát cận thị học đường.
              </p>

              {/* Quick highlights */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>100% tròng đạt chuẩn UV400, chống chói &amp; hạn chế trầy xước</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Tư vấn độ chiết suất 1.56 - 1.74 siêu mỏng theo từng số độ cận</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-100 relative z-10">
              <Link
                href="/lien-he/"
                className="button-primary px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-xs flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Tìm Đại Lý Gần Bạn</span>
              </Link>
              <Link
                href="/trong-kinh/"
                className="button-secondary px-5 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5"
              >
                <span>Xem Catalogue Tròng Kính</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: B2B Stores & Lab RX */}
          <div className="b2b-gradient rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#00516c]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden group text-white">
            {/* Ambient soft glow */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#00A2CC]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00A2CC]/25 transition-colors" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-500/30 w-fit mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>Dành Cho Cửa Hàng &amp; Lab RX</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
                Hợp Tác Phân Phối Cùng Rocky Lens
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                Chính sách đối tác minh bạch, tài trợ tủ kệ POSM trưng bày, bộ thử tròng quang học và giải pháp gia công Lab RX chuẩn xác từ Clearly Vietnam.
              </p>

              {/* Quick highlights */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Hỗ trợ đại lý tận tâm &amp; chính sách bảo hành 12 tháng chính hãng</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Cung cấp tài liệu marketing, bộ thử tròng &amp; máy test UV/Bluecut</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/10 relative z-10">
              <Link
                href="/danh-cho-doi-tac/"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#00A2CC] hover:bg-[#00b4e3] text-slate-950 transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Xem Chính Sách Đại Lý</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Zalo Đối Tác</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
