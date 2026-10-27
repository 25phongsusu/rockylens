import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const techPillars = [
  {
    title: 'Lựa Chọn Vật Liệu Phù Hợp',
    badge: 'Phôi Monomer Quang Học',
    image: '/images/company/about-1.jpg',
    description: 'Vật liệu và cấu trúc phôi quyết định độ trong suốt, trọng lượng nhẹ và độ bền cơ học của tròng kính, mang lại cảm giác thoải mái khi bạn đeo kính suốt ngày dài.',
  },
  {
    title: 'Công Nghệ Xử Lý Bề Mặt',
    badge: 'Phủ Chân Không Nano',
    image: '/images/technologies/bui.png',
    description: 'Các lớp phủ bề mặt chuyên biệt giúp hạn chế trầy xước trong quá trình lau chùi, trượt hạt nước mưa khi đi đường và giúp bạn dễ dàng làm sạch tròng kính.',
  },
  {
    title: 'Thiết Kế Quang Học Cá Nhân Hóa',
    badge: 'Gia Công KTS Freeform',
    image: '/images/technologies/do-kinh.jpg',
    description: 'Công nghệ gia công kỹ thuật số tính toán mài vi điểm theo từng số độ và thông số gọng thực tế, mở rộng vùng nhìn rõ và giúp đôi mắt thích nghi tự nhiên hơn.',
  },
  {
    title: 'Quy Trình Kiểm Định Tiêu Chuẩn',
    badge: 'Kiểm Định KCS Tiêu Chuẩn',
    image: '/images/company/about-3.jpg',
    description: 'Mỗi sản phẩm đều trải qua các bước kiểm soát chất lượng từ độ khúc xạ, quang sai đến độ hoàn thiện của từng bề mặt trước khi đến tay người tiêu dùng.',
  },
];

export default function TechnologyHighlights() {
  return (
    <section id="cong-nghe" className="relative py-24 px-6 bg-gradient-to-b from-[#F5F5F7] via-white via-50% to-[#F5F5F7] overflow-hidden">
      {/* Ambient Blur Caustic Overlays (Smooth Section Blending) */}
      <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-[#F5F5F7] to-transparent blur-xl pointer-events-none opacity-80" />
      <div className="absolute -top-24 left-10 w-96 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 -bottom-12 h-24 bg-gradient-to-t from-[#F5F5F7] to-transparent blur-xl pointer-events-none opacity-80" />
      <div className="absolute -bottom-24 right-10 w-96 h-48 bg-[#0B7B8A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Công nghệ và tiêu chuẩn chất lượng
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Đằng sau mỗi tròng kính là những lựa chọn về vật liệu, thiết kế và công nghệ chế tác. Hãy khám phá cách các yếu tố đó tạo nên những đặc tính khác nhau của tròng kính Rocky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-xs font-bold">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0E253A]">
                  {pillar.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 4 CTA */}
        <div className="text-center pt-4">
          <Link
            href="/kham-pha-trong-kinh/"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#0E253A] hover:bg-[#1A365D] text-white font-bold text-base transition-colors"
          >
            <span>Tìm hiểu công nghệ Rocky</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
