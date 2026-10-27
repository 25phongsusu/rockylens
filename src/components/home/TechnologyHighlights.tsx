import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const techPillars = [
  {
    title: 'Lựa Chọn Vật Liệu Phù Hợp',
    description: 'Vật liệu và cấu trúc phôi quyết định độ trong suốt, trọng lượng nhẹ và độ bền cơ học của tròng kính, mang lại cảm giác thoải mái khi bạn đeo kính suốt ngày dài.',
  },
  {
    title: 'Công Nghệ Xử Lý Bề Mặt',
    description: 'Các lớp phủ tính năng hỗ trợ bảo vệ tròng kính trước trầy xước, giảm bám nước mưa, hạn chế bám bụi bẩn và giúp việc vệ sinh kính hằng ngày trở nên dễ dàng hơn.',
  },
  {
    title: 'Thiết Kế Quang Học Cá Nhân Hóa',
    description: 'Ứng dụng tính toán quang học kỹ thuật số để tối ưu hóa trường nhìn theo từng đơn kính và kiểu dáng gọng kính, mang lại tầm nhìn tự nhiên và êm dịu.',
  },
  {
    title: 'Quy Trình Kiểm Định Tiêu Chuẩn',
    description: 'Mỗi sản phẩm đều trải qua các bước kiểm soát chất lượng từ độ khúc xạ, quang sai đến độ hoàn thiện của từng bề mặt trước khi đến tay người tiêu dùng.',
  },
];

export default function TechnologyHighlights() {
  return (
    <section id="cong-nghe" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
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
            <div key={idx} className="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
              <h3 className="text-xl font-bold text-[#0E253A]">
                {pillar.title}
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section 4 CTA */}
        <div className="text-center pt-4">
          <Link
            href="/cong-nghe/"
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
