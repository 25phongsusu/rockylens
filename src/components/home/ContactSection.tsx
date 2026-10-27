'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle, Building } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-pill text-[#0B7B8A] text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-[#0B7B8A]" />
            <span>Kênh Tiếp Nhận Đại Lý &amp; Hợp Tác B2B</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            LIÊN HỆ PHÒNG PHÁT TRIỂN ĐẠI LÝ ROCKY LENS
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Dành riêng cho các cửa hàng mắt kính, chuỗi phòng khám khúc xạ và đại lý phân phối toàn quốc. Chúng tôi đồng hành cùng sự tăng trưởng doanh số của quý đối tác.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Box 1: B2B Tiếp Nhận Đại Lý Mới (Liquid Card) */}
          <div className="liquid-panel rounded-[32px] p-8 border border-white/95 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0B7B8A] mb-6">
                <Building className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Tiếp Nhận Đăng Ký Đại Lý Mới
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Tư vấn chính sách chiết khấu sỉ, bảng giá mở đại lý, tài trợ kệ trưng bày POSM, máy test tròng và đào tạo kiến thức sản phẩm chuyên sâu cho nhân sự cửa hàng.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#0B7B8A]" />
                  <span>Hotline B2B Đại Lý: <strong>{siteConfig.phones.hotlineDisplay}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#0B7B8A]" />
                  <span>Email Hợp Tác: <strong>{siteConfig.emails.b2b}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-200/80">
              <button
                type="button"
                onClick={openB2BQuoteModal}
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full font-bold text-xs bg-[#0B7B8A] hover:bg-[#086370] text-white transition-colors cursor-pointer shadow-xs"
              >
                <span>Nhận Báo Giá Cho Đại Lý</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Box 2: B2B Lab RX & Toa Kính Sỉ (Liquid Dark Panel) */}
          <div className="bg-gradient-to-br from-[#050E10] to-[#0A1B22] rounded-[32px] p-8 text-white border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0B7B8A]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Kỹ Thuật Lab RX &amp; Toa Kính Sỉ
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Kênh xử lý đơn hàng sỉ, gửi file toa kính Freeform kỹ thuật số, xử lý độ khó, độ cao và duyệt đơn hàng hỏa tốc trong 24 giờ cho các đối tác quang học.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Kỹ Thuật Lab RX: <strong>{siteConfig.phones.office}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-teal-400" />
                  <span>Zalo Đại Lý &amp; Toa Kính: <strong>{siteConfig.zalo.display}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 relative z-10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={openB2BQuoteModal}
                className="flex-1 py-3 px-4 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-xs inline-flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
              >
                <span>Nhận Báo Giá Cho Đại Lý</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors"
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
