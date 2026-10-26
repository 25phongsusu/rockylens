import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle, Building } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-pill text-[#0B7B8A] text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-[#0B7B8A]" />
            <span>Kênh Kết Nối Trực Tiếp</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Liên Hệ Và Hỗ Trợ Kỹ Thuật Rocky Lens
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Đội ngũ chuyên viên tư vấn quang học và phòng phát triển thị trường luôn sẵn sàng giải đáp mọi thắc mắc của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Box 1: B2C Tư Vấn Sản Phẩm (Liquid Card) */}
          <div className="liquid-panel rounded-[32px] p-8 border border-white/95 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0B7B8A] mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Tư Vấn Sản Phẩm Cho Người Dùng
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Bạn cần tìm hiểu tròng kính phù hợp với độ cận, công việc văn phòng hoặc chọn tròng kính đổi màu? Chuyên viên khúc xạ của chúng tôi sẽ hướng dẫn chi tiết.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#0B7B8A]" />
                  <span>Hotline: <strong>{siteConfig.phones.hotlineDisplay}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#0B7B8A]" />
                  <span>Email: {siteConfig.emails.contact}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-200/80">
              <a
                href={`tel:${siteConfig.phones.hotline}`}
                className="liquid-btn-secondary w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full font-bold text-xs"
              >
                <span>Gọi Hotline Tư Vấn Ngay</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Box 2: B2B Hợp Tác Phân Phối Đại Lý (Liquid Dark Panel) */}
          <div className="bg-gradient-to-br from-[#050E10] to-[#0A1B22] rounded-[32px] p-8 text-white border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0B7B8A]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 mb-6">
                <Building className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Hợp Tác Phân Phối &amp; Đại Lý B2B
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Dành cho cửa hàng kính thuốc, chuỗi phòng khám mắt và đối tác y khoa. Nhận ngay chính sách chiết khấu, gói tài trợ POSM và dịch vụ Lab RX.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Phòng Kinh Doanh B2B: <strong>{siteConfig.phones.office}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>Email Đại Lý: {siteConfig.emails.b2b}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 relative z-10">
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-btn-primary w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full font-bold text-xs"
              >
                <span>Kết Nối Trực Tiếp Qua Zalo B2B</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
