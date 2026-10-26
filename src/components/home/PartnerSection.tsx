import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Factory, Headphones, TrendingUp, Building2, ShieldCheck, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';

const partnerValues = [
  {
    icon: <Factory className="w-5 h-5 text-[#0B7B8A]" />,
    title: 'Phôi Tròng Sẵn Kho Giao 2H',
    description: 'Duy trì hơn 200.000 cặp phôi đủ dải độ từ 0.00 đến -16.00D tại 3 tổng kho (Hà Nội, Đà Nẵng, TP.HCM). Giao hỏa tốc 2 giờ nội thành.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
    title: 'Phòng Lab Freeform KTS 24H',
    description: 'Gia công đơn kính thuốc theo đơn bác sĩ trên hệ máy Schneider (Đức), xử lý chuẩn xác độ khó, độ lệch lớn và hoàn thiện trả đơn trong 24 giờ.',
  },
  {
    icon: <Building2 className="w-5 h-5 text-amber-600" />,
    title: 'Tài Trợ 100% Kệ Trưng Bày LED',
    description: 'Cung cấp miễn phí tủ trưng bày Rocky LED cao cấp, máy đo UV420 và đèn thử đổi màu laser, gia tăng uy tín điểm bán lập tức.',
  },
  {
    icon: <Headphones className="w-5 h-5 text-slate-800" />,
    title: 'Chính Sách Luân Chuyển Tồn Kho',
    description: 'Đổi trả các số độ chậm bán trong 90 ngày. Bảo hiểm đổi độ đa tròng miễn phí trong 30 ngày cho khách hàng nếu khó thích nghi.',
  },
];

export default function PartnerSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Values & Executive Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full liquid-pill text-[#0B7B8A] mb-3">
                Giải Pháp Cung Ứng &amp; Lab RX B2B
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Đồng Hành Phát Triển Cùng Các Cửa Hàng &amp; Phòng Khám Khúc Xạ
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Rocky Lens thiết lập giải pháp cung ứng tròng kính thuốc ổn định, cam kết chuẩn xác quang sai từng độ cầu và tối ưu hiệu quả vận hành cho đối tác khúc xạ.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {partnerValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl liquid-card flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-xs">
                      {val.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{val.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/danh-cho-doi-tac/"
                className="liquid-btn-primary px-6 py-3 text-xs sm:text-sm font-bold shadow-md flex items-center space-x-2"
              >
                <span>Xem Chi Tiết Chính Sách B2B</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-btn-secondary px-5 py-3 text-xs sm:text-sm font-bold shadow-xs hover:shadow"
              >
                <span>Tư Vấn Zalo Đại Lý (24/7)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Box with Real Store Showcase */}
          <div className="lg:col-span-5">
            <div className="liquid-panel rounded-[32px] p-6 border border-white/95 shadow-xl relative overflow-hidden">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-5">
                <Image
                  src="/images/real/rocky_store_showcase.jpg"
                  alt="Tủ trưng bày Rocky Lens tại cửa hàng"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold font-rocky-condensed">
                  Tài Trợ 100% Điểm Bán &bull; Tủ LED &bull; Bộ Test UV
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center space-x-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0B7B8A] shrink-0" />
                  <span>Sẵn kho hơn 200.000 cặp tròng tại Hà Nội, Đà Nẵng, TP.HCM</span>
                </div>
                <div className="flex items-center space-x-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0B7B8A] shrink-0" />
                  <span>Phòng Lab Freeform RX trả đơn nhanh trong 24 giờ</span>
                </div>
                <div className="flex items-center space-x-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0B7B8A] shrink-0" />
                  <span>Chính sách đổi trả số độ chậm bán trong 90 ngày</span>
                </div>
                <div className="flex items-center space-x-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0B7B8A] shrink-0" />
                  <span>Bảo hành điện tử QR chính hãng 12 - 24 tháng 1 đổi 1</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-slate-500">Hotline B2B: <strong className="text-slate-900">{siteConfig.phones.office}</strong></span>
                <span className="text-[#0B7B8A] font-bold">Clearly Vietnam Co., LTD</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
