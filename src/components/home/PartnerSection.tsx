import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Factory, Headphones, TrendingUp, FileSpreadsheet, Building2, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteConfig } from '@/config/site';

const partnerValues = [
  {
    icon: <Factory className="w-5 h-5 text-[#0B7B8A]" />,
    title: 'Hệ Thống Lab RX Kỹ Thuật Số',
    description: 'Chủ động gia công độ khó, độ loạn cao và đa tròng Freeform với thời gian hoàn thiện chỉ từ 24 - 48 giờ.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#D97706]" />,
    title: 'Biên Độ Chiết Khấu Hấp Dẫn',
    description: 'Chính sách đại lý linh hoạt theo bậc doanh số, bảo vệ vùng thị trường và hỗ trợ công nợ minh bạch.',
  },
  {
    icon: <Building2 className="w-5 h-5 text-teal-600" />,
    title: 'Trọn Bộ POSM & Khay Trưng Bày',
    description: 'Cung cấp kệ mica cao cấp, khay demo đổi màu nhanh, đèn test ánh sáng xanh UV420 và catalogue in màu.',
  },
  {
    icon: <Headphones className="w-5 h-5 text-indigo-600" />,
    title: 'Hỗ Trợ Đào Tạo Kỹ Thuật Bác Sĩ & KTV',
    description: 'Tập huấn kỹ năng tư vấn đa tròng, đo khoảng cách đồng tử PD, ráp kính gọng khoan không nứt mẻ.',
  },
];

export default function PartnerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-teal-50 text-[#0B7B8A] border border-teal-200">
                Giải Pháp Doanh Nghiệp B2B
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Đồng Hành Cùng Các Cửa Hàng & Chuỗi Kính Mắt Toàn Quốc
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Rocky Lens thiết lập mạng lưới cung ứng tròng kính thuốc ổn định, cam kết chuẩn xác quang sai từng độ cầu và hỗ trợ tối đa doanh thu cho đối tác quang học.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {partnerValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-teal-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-xs">
                    {val.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/danh-cho-doi-tac/"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#0B7B8A] hover:bg-[#096370] text-white shadow-md transition-all"
              >
                <span>Tìm Hiểu Chính Sách Hợp Tác B2B</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all"
              >
                <span>Tư Vấn Zalo Đại Lý</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Box */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#050E10] to-[#0A1B22] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B7B8A]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <div className="text-xs text-teal-400 font-bold uppercase tracking-wider">Mạng Lưới Đối Tác</div>
                    <div className="text-lg font-bold text-white">Canada Opticians Network</div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-[#D97706]" />
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Hơn 500+ đại lý và phòng khám khúc xạ hợp tác</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Kho vận trung tâm tại TP.HCM & Hà Nội giao nhanh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Gia công phay mặt sau Freeform chuẩn xác đến 0.01D</span>
                  </div>
                </div>

                {/* Partner Logo Marquee / Grid Sample */}
                <div className="pt-2">
                  <div className="text-[11px] text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                    Đối tác chuỗi bệnh viện & nhãn khoa
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center p-2"
                      >
                        <Image
                          src={`/images/brands/partner_1.png`}
                          alt={`Đối tác Rocky Lens ${i}`}
                          width={80}
                          height={30}
                          className="object-contain filter grayscale invert opacity-70 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
