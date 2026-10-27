'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle, Building } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';

export default function ContactSection() {
  return (
    <section className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-pill text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>Kênh Tiếp Nhận Đại Lý &amp; Hợp Tác B2B</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-heading tracking-tight uppercase">
            LIÊN HỆ PHÒNG PHÁT TRIỂN ĐẠI LÝ ROCKY LENS
          </h2>

          <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed">
            Dành riêng cho các cửa hàng mắt kính, chuỗi phòng khám khúc xạ và đại lý phân phối toàn quốc. Chúng tôi đồng hành cùng sự tăng trưởng doanh số của quý đối tác.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Box 1: B2B Tiếp Nhận Đại Lý Mới (Liquid Card) */}
          <div className="card-surface rounded-[32px] p-8 border border-[var(--color-border)]/50 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)]/50 flex items-center justify-center text-[var(--color-primary)] mb-6">
                <Building className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-heading mb-2">
                Tiếp Nhận Đăng Ký Đại Lý Mới
              </h3>

              <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Tư vấn chính sách chiết khấu sỉ, bảng giá mở đại lý, tài trợ kệ trưng bày POSM, máy test tròng và đào tạo kiến thức sản phẩm chuyên sâu cho nhân sự cửa hàng.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[var(--color-muted)]">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Hotline B2B Đại Lý: <strong className="text-heading">{siteConfig.phones.hotlineDisplay}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Email Hợp Tác: <strong className="text-heading">{siteConfig.emails.b2b}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[var(--color-border)]/30">
              <button
                type="button"
                onClick={openB2BQuoteModal}
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full font-bold text-xs button-primary cursor-pointer shadow-xs"
              >
                <span>Nhận Báo Giá Cho Đại Lý</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Box 2: B2B Lab RX & Toa Kính Sỉ (Liquid Dark Panel) */}
          <div className="b2b-gradient rounded-[32px] p-8 text-white border border-[var(--color-border)]/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--button-start)]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Kỹ Thuật Lab RX &amp; Toa Kính Sỉ
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                Kênh xử lý đơn hàng sỉ, gửi file toa kính Freeform kỹ thuật số, xử lý độ khó, độ cao và duyệt đơn hàng hỏa tốc trong 24 giờ cho các đối tác quang học.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-white/85">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span>Kỹ Thuật Lab RX: <strong>{siteConfig.phones.office}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Zalo Đại Lý &amp; Toa Kính: <strong>{siteConfig.zalo.display}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/20 relative z-10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={openB2BQuoteModal}
                className="flex-1 py-3 px-4 rounded-full button-primary font-bold text-xs inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Nhận Báo Giá Cho Đại Lý</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors border border-white/20"
              >
                <span>Zalo B2B</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
