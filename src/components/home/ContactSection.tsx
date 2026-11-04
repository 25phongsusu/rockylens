'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle, Building, Store } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactSection() {
  return (
    <section className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-pill text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>Hệ Thống Phân Phối &amp; Chăm Sóc Khách Hàng</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-heading tracking-tight uppercase">
            KẾT NỐI VỚI HỆ THỐNG ROCKY LENS VIỆT NAM
          </h2>

          <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed">
            Dù bạn là người tiêu dùng cần chỉ dẫn cửa hàng cắt kính chính hãng hay đại lý quang học tìm hiểu giải pháp tròng kính, Rocky Lens luôn sẵn sàng lắng nghe và đồng hành tận tâm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Box 1: Dành Cho Khách Hàng & Người Đeo Kính */}
          <div className="card-surface rounded-[32px] p-8 border border-[var(--color-border)]/50 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)]/50 flex items-center justify-center text-[var(--color-primary)] mb-6">
                <Store className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-heading mb-2">
                Tư Vấn &amp; Tìm Điểm Bán Gần Nhất
              </h3>

              <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Hỗ trợ tra cứu cửa hàng mắt kính ủy quyền gần bạn, giải đáp thắc mắc về tính năng tròng kính, tư vấn chiết suất và kiểm tra xác thực tròng kính chính hãng Rocky Lens.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[var(--color-muted)]">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Hotline Hỗ Trợ: <strong className="text-heading">{siteConfig.phones.hotlineDisplay}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Zalo Tư Vấn Điểm Bán: <strong className="text-heading">{siteConfig.zalo.display}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Email: <strong className="text-heading">{siteConfig.emails.contact}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[var(--color-border)]/30">
              <Link
                href="/lien-he/"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full font-bold text-xs button-primary cursor-pointer"
              >
                <span>Tìm Cửa Hàng Cắt Kính Gần Bạn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Box 2: Dành Cho Cửa Hàng & Đối Tác Kỹ Thuật Lab RX */}
          <div className="b2b-gradient rounded-[32px] p-8 text-white border border-[var(--color-border)]/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--button-start)]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Building className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Hợp Tác Phân Phối &amp; Kỹ Thuật Lab RX
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                Cung cấp tài liệu sản phẩm, hỗ trợ kỹ thuật khúc xạ chuyên sâu, giải pháp gia công Freeform 3D và giao hàng hỏa tốc trong 24 giờ cho các đối tác quang học trên toàn quốc.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-white/85">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span>Hotline Đối Tác: <strong>{siteConfig.phones.office}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Zalo Đối Tác &amp; Toa Kính: <strong>{siteConfig.zalo.display}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white" />
                  <span>Email Hợp Tác: <strong>{siteConfig.emails.b2b}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/20 relative z-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/danh-cho-doi-tac/"
                className="flex-1 py-3 px-4 rounded-full button-primary font-bold text-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Xem Chính Sách Đối Tác</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors border border-white/20"
              >
                <span>Zalo Đối Tác</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
