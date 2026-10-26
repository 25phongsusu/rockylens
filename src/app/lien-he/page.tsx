import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ArrowUpRight, Building2 } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import SectionHeading from '@/components/shared/SectionHeading';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: 'Liên Hệ & Hỗ Trợ Kỹ Thuật Rocky Lens',
  description: 'Thông tin liên hệ chính thức của Rocky Lens Việt Nam: Hotline, Zalo B2B đại lý, địa chỉ trung tâm phân phối và Lab RX tại TP. Hồ Chí Minh và Hà Nội.',
  path: '/lien-he/',
});

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Liên hệ', href: '/lien-he/' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#050E10] via-[#0A1B22] to-[#0E2A36] text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#0B7B8A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kênh Thông Tin Chính Thức</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            LIÊN HỆ VÀ KẾT NỐI DOANH NGHIỆP
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Chúng tôi luôn sẵn sàng hỗ trợ đại lý kính mắt và người tiêu dùng về kỹ thuật quang học, thông số chiết suất và giải pháp đặt tròng Lab RX.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid (NO DATABASE FORM) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Hotline Tư Vấn */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0B7B8A] mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Đường Dây Nóng Hotline</h3>
              <p className="text-xs text-slate-600 mb-4">Hỗ trợ tra cứu toa kính, tình trạng đơn hàng và tư vấn khúc xạ 24/7.</p>
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Hotline B2B / Khách lẻ:</div>
                <a href={`tel:${siteConfig.phones.hotline}`} className="text-lg font-black text-[#0B7B8A] hover:underline">
                  {siteConfig.phones.hotlineDisplay}
                </a>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <a
                href={`tel:${siteConfig.phones.hotline}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0B7B8A] hover:bg-[#096370] text-white transition-colors"
              >
                <span>Gọi Ngay</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Zalo B2B Đại Lý */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#050E10] to-[#0A1B22] text-white border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zalo Hợp Tác B2B</h3>
              <p className="text-xs text-slate-300 mb-4">Dành riêng cho các cửa hàng kính mắt và phòng khám gửi toa kính RX.</p>
              <div className="space-y-1">
                <div className="text-xs text-teal-400 font-semibold">Tài Khoản Zalo Official:</div>
                <div className="text-base font-bold text-white">{siteConfig.zalo.display}</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800 relative z-10">
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0B7B8A] hover:bg-[#096370] text-white transition-colors"
              >
                <span>Nhắn Tin Qua Zalo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Email Doanh Nghiệp */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#D97706] mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Thư Điện Tử Email</h3>
              <p className="text-xs text-slate-600 mb-4">Gửi yêu cầu hợp tác phân phối độc quyền hoặc báo giá dự án thầu.</p>
              <div className="space-y-2">
                <div>
                  <div className="text-[11px] text-slate-400">Email Đại Lý:</div>
                  <a href={`mailto:${siteConfig.emails.b2b}`} className="text-xs font-bold text-slate-800 hover:text-[#0B7B8A]">
                    {siteConfig.emails.b2b}
                  </a>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Email Hỗ Trợ Chung:</div>
                  <a href={`mailto:${siteConfig.emails.contact}`} className="text-xs font-bold text-slate-800 hover:text-[#0B7B8A]">
                    {siteConfig.emails.contact}
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200">
              <a
                href={`mailto:${siteConfig.emails.b2b}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
              >
                <span>Gửi Thư Email</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Addresses & Working Hours */}
        <div className="mt-16 bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Hệ Thống Trung Tâm Kho Vận & Lab RX
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Khách hàng và đối tác có thể trực tiếp đến các văn phòng giao dịch của Rocky Lens tại 2 miền:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.addresses.map((addr, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                <div className="flex items-center space-x-2.5 text-[#0B7B8A]">
                  <Building2 className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-sm text-slate-900">{addr.title}</h3>
                </div>
                <div className="flex items-start space-x-2 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{addr.street}, {addr.city}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Thứ 2 - Thứ 7: 08:00 - 17:30 (Chủ nhật nghỉ)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
