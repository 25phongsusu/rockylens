import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Factory,
  TrendingUp,
  Building2,
  Headphones,
  Download,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Award,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactCTA from '@/components/shared/ContactCTA';
import B2BQuoteButton from '@/components/common/B2BQuoteButton';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';
import { CATEGORIES } from '@/features/products/product-types';

export const metadata: Metadata = constructMetadata({
  title: 'Dành Cho Đối Tác & Đại Lý Kính Mắt B2B',
  description: 'Giải pháp cung ứng tròng kính quang học toàn diện cho cửa hàng kính mắt, phòng khám nhãn khoa và chuỗi bán lẻ. Gia công Lab RX Freeform, hỗ trợ POSM và chiết khấu hấp dẫn.',
  path: '/danh-cho-doi-tac/',
});

const partnerFaqs = [
  {
    question: 'Thời gian gia công các toa kính Lab RX phức tạp là bao lâu?',
    answer: 'Với hệ thống máy mài phay kỹ thuật số Schneider đặt tại tổng kho TP.HCM và Hà Nội, thời gian hoàn thiện các toa kính đặt đặc biệt (độ cận cao, loạn cao, đa tròng cá nhân hóa) chỉ từ 24 đến 48 giờ làm việc trước khi giao cho đối tác.',
  },
  {
    question: 'Rocky Lens có hỗ trợ thiết bị demo và vật phẩm POSM tại điểm bán không?',
    answer: 'Có. Tất cả đại lý chính thức đều được trang bị trọn bộ vật phẩm quảng bá bao gồm: Khay trưng bày tròng mẫu, đèn thử nghiệm ánh sáng xanh UV420, máy kiểm tra tròng đổi màu nhanh, bảng tra độ dày chiết suất và tài liệu catalogue in màu chuyên nghiệp.',
  },
  {
    question: 'Chính sách bảo hành lớp phủ cho khách hàng của đại lý thế nào?',
    answer: 'Tất cả các dòng tròng kính phủ váng Nano SHMC của Rocky Lens đều được áp dụng chính sách bảo hành bong tróc váng 12 tháng chính hãng Canada Opticians, tạo sự yên tâm tuyệt đối cho cửa hàng khi tư vấn cho người tiêu dùng.',
  },
  {
    question: 'Cửa hàng mới mở có được hướng dẫn kỹ thuật mài lắp tròng không?',
    answer: 'Đội ngũ chuyên viên kỹ thuật của Rocky Lens luôn sẵn sàng tập huấn trực tiếp hoặc từ xa về kỹ thuật mài lắp gọng khoan ốc (vật liệu MR-8), cách lấy tâm đồng tử PD chuẩn xác và quy trình tư vấn kính đa tròng cho người mới đeo.',
  },
];

export default function PartnerPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Dành cho đối tác B2B', href: '/danh-cho-doi-tac/' }]} />

      {/* 1. Hero — Giải pháp tròng kính dành cho cửa hàng mắt kính */}
      <section className="bg-gradient-to-br from-[#050E10] via-[#0A1B22] to-[#0E2A36] text-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#0B7B8A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 text-teal-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Chính Sách Hợp Tác Phân Phối B2B</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              GIẢI PHÁP TRÒNG KÍNH CHO CỬA HÀNG & PHÒNG KHÁM MẮT
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Thiết lập chuỗi cung ứng quang học tin cậy, chuẩn xác quang học từng micromet cùng dịch vụ Lab RX kỹ thuật số tốc độ cao, giúp đối tác gia tăng doanh thu và uy tín thương hiệu.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <B2BQuoteButton />

              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
              >
                <span>Nhắn Zalo Đại Lý</span>
                <ArrowUpRight className="w-4 h-4 text-teal-300" />
              </a>

              <a
                href="/documents/Rocky_Lens_Catalogue_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
              >
                <Download className="w-4 h-4 text-[#D97706]" />
                <span>Tải Bảng Giá &amp; Catalogue 2025</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Giới thiệu định hướng hợp tác */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-[#0B7B8A] font-extrabold text-3xl mb-2">01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Nguồn Hàng Ổn Định</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kho vận trung tâm lưu trữ đầy đủ dải công suất SPH từ -15.00 đến +8.00 và CYL đến -4.00, hạn chế tối đa tình trạng đứt hàng gãy size.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-[#0B7B8A] font-extrabold text-3xl mb-2">02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Minh Bạch & Chuẩn Mực</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đầy đủ hóa đơn chứng từ hải quan, chứng nhận chất lượng ISO 9001 và chứng nhận vật liệu phôi Mitsui Chemicals Nhật Bản.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-[#0B7B8A] font-extrabold text-3xl mb-2">03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Bảo Vệ Thị Trường Đại Lý</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chính sách phân vùng khu vực rõ ràng, không cạnh tranh bán phá giá, hỗ trợ tối đa lợi nhuận biên cho cửa hàng đối tác.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Các nhóm tròng kính phân phối */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Danh Mục Bán Sỉ"
            title="Các Dòng Tròng Kính Trọng Tâm Dành Cho Đại Lý"
            description="Được phân loại khoa học theo chiết suất và công năng để cửa hàng dễ dàng tư vấn theo ngân sách và độ khúc xạ của từng khách hàng."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 text-[#0B7B8A]">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Sẵn hàng kho</span>
                  <Link href={`/trong-kinh/?category=${cat.id}`} className="font-semibold text-[#0B7B8A] hover:underline">
                    Xem mẫu →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Giá trị doanh nghiệp mang lại cho đối tác */}
      <section id="lab-rx" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading
            badge="Giá Trị Hợp Tác"
            title="Hệ Thống Dịch Vụ Hậu Cần & Kỹ Thuật Toàn Diện"
            description="Rocky Lens không chỉ cung cấp tròng kính, chúng tôi là đối tác kỹ thuật đứng sau thành công của cửa hàng bạn."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <Factory className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Gia Công Lab RX 24h</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Máy phay kỹ thuật số mặt sau Freeform gia công chuẩn xác toa kính phức tạp trong 24h.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <TrendingUp className="w-8 h-8 text-[#D97706] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Chính Sách Chiết Khấu</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bảng giá sỉ bậc thang linh hoạt theo sản lượng tháng, thưởng quý và hỗ trợ công nợ đối tác uy tín.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700" id="ho-tro">
              <Building2 className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Gói Tài Trợ POSM</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cung cấp trọn bộ khay tròng mẫu, đèn test UV, máy kích hoạt đổi màu và biển hiệu điểm bán.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <Headphones className="w-8 h-8 text-[#D97706] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Đào Tạo Khúc Xạ</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tập huấn kỹ năng tư vấn đa tròng và kỹ thuật ráp kính gọng bắt ốc không nứt vỡ từ các chuyên gia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Giải đáp các câu hỏi hợp tác phổ biến */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Hỏi Đáp B2B"
            title="Câu Hỏi Phổ Biến Của Các Cửa Hàng Kính Mắt"
            description="Những thắc mắc thường gặp về quy trình đặt hàng, tiến độ gia công Lab RX và chính sách bảo hành."
          />

          <div className="space-y-4">
            {partnerFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-start space-x-2">
                  <span className="text-[#0B7B8A] font-bold">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA liên hệ trực tiếp */}
      <ContactCTA
        title="Đăng Ký Nhận Bảng Giá Sỉ & Mẫu Tròng Kính Thử Nghiệm"
        description="Kết nối ngay với phòng phát triển kinh doanh B2B của Rocky Lens qua Hotline hoặc Zalo để được tư vấn chính sách đại lý phù hợp nhất."
      />
    </div>
  );
}
