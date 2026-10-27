import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';

const discoverySolutions = [
  {
    id: 'driveshield',
    name: 'Rocky DriveShield Ruby AR',
    tag: 'Lái Xe Ban Đêm & Trời Mưa',
    categorySlug: 'kinh-lai-xe',
    tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
    index: 'Chiết suất 1.56 / 1.60',
    image: '/images/real/driveshield_night.jpg',
    heading: 'Hỗ trợ tầm nhìn khi lái xe ban đêm và trời mưa',
    description: 'Hạn chế cảm giác chói lóa từ đèn xe ngược chiều và tăng độ tương phản khi mặt đường ướt hoặc sương mù.',
    techSpec: 'Lớp phủ phản xạ chuyên biệt cho quang phổ đèn xe ban đêm, tối ưu độ trong suốt mặt đường.',
  },
  {
    id: 'bluecut',
    name: 'Rocky BlueCut UV420 Defender',
    tag: 'Văn Phòng & Thiết Bị Số',
    categorySlug: 'loc-anh-sang-xanh',
    tagColor: 'text-teal-700 bg-teal-50 border-teal-200',
    index: 'Chiết suất 1.56 / 1.60 / 1.67 / 1.74',
    image: '/images/products/category-solution-1.png',
    heading: 'Dễ chịu hơn khi làm việc cùng máy tính và điện thoại',
    description: 'Lựa chọn phù hợp khi làm việc với thiết bị số nhiều giờ, giúp mắt dễ chịu hơn mà vẫn giữ trọn màu sắc tự nhiên.',
    techSpec: 'Công nghệ ngăn chọn lọc năng lượng ánh sáng bước sóng ngắn từ lõi phôi kết hợp màng lọc nano.',
  },
  {
    id: 'photochromic',
    name: 'Rocky Fast-Change Spin-Coat',
    tag: 'Đổi Màu Ngoài Trời',
    categorySlug: 'trong-doi-mau',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    index: 'Chiết suất 1.56 / 1.60 / 1.67',
    image: '/images/products/category-solution-8.png',
    heading: 'Tự động đổi màu theo cường độ ánh sáng mặt trời',
    description: 'Tròng kính tự động đậm màu khi ra ngoài trời nắng và trong suốt trở lại khi bạn bước vào bóng râm, tiện lợi mọi lúc.',
    techSpec: 'Lớp phủ phân tử quang học ly tâm Spin-Coating đồng đều trên bề mặt tròng kính.',
  },
  {
    id: 'ultra-thin',
    name: 'Rocky Ultra-Thin Aspheric 1.74',
    tag: 'Cận Nặng & Gọng Mỏng',
    categorySlug: 'trong-don-trong',
    tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
    index: 'Chiết suất cao 1.67 / 1.74',
    image: '/images/company/about-6.jpg',
    heading: 'Mỏng nhẹ hơn cho người có độ khúc xạ cao',
    description: 'Tối ưu về độ mỏng và độ dẻo dai cao, giữ dáng kính thanh thoát và mở rộng sự lựa chọn cho các kiểu gọng khoan ốc hoặc nửa viền.',
    techSpec: 'Thiết kế bề mặt phi cầu Aspheric chuẩn xác, hạn chế hiện tượng thu nhỏ mắt qua kính.',
  },
  {
    id: 'defocus',
    name: 'Rocky Defocus 360° MyoControl',
    tag: 'Chăm Sóc Thị Lực Trẻ Em',
    categorySlug: 'kiem-soat-can-thi',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    index: 'Vật liệu an toàn chịu lực',
    image: '/images/real/myopia_defocus_diagram.png',
    heading: 'Đồng hành cùng thị lực học đường',
    description: 'Thiết kế quang học hỗ trợ chăm sóc thị lực cho học sinh, sinh viên trong giai đoạn học tập với cường độ cao.',
    techSpec: 'Công nghệ phân bổ tiêu cự chu biên quang học, đồng hành cùng định kỳ đo khám của bác sĩ nhãn khoa.',
  },
  {
    id: 'freeform',
    name: 'CanRx Ultraview Freeform',
    tag: 'Đa Tròng Cho Người Trên 40',
    categorySlug: 'trong-da-trong',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    index: 'Cá nhân hóa kỹ thuật số',
    image: '/images/products/category-solution-2.png',
    heading: 'Chuyển tiếp êm dịu giữa nhìn xa, trung gian và đọc sách',
    description: 'Hỗ trợ bạn nhìn rõ mọi khoảng cách sinh hoạt thường ngày mà không cần phải đổi kính liên tục hay cảm giác bỡ ngỡ.',
    techSpec: 'Gia công kỹ thuật số mặt sau Back-Surface Freeform, mở rộng vùng nhìn trung gian tự nhiên.',
  },
];

export default function ProductCategories() {
  return (
    <section id="san-pham" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading focused on consumer wear needs */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Mỗi nhu cầu, một lựa chọn phù hợp
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Dù bạn lái xe nhiều, thường xuyên làm việc trước màn hình hay cần giải pháp cho cả nhìn gần và xa — Rocky phát triển các dòng tròng kính đáp ứng nhu cầu thị giác thực tế của bạn.
          </p>
        </div>

        {/* 6 Customer Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoverySolutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                  <Image
                    src={sol.image}
                    alt={sol.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-xs font-bold">
                    {sol.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0E253A] leading-snug">
                    {sol.heading}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>

              {/* Layer 3 - Technical details on hover */}
              <div className="absolute inset-0 bg-[#0E253A]/95 p-6 rounded-3xl text-white flex flex-col justify-between opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs uppercase font-bold text-teal-400">
                    {sol.tag}
                  </div>
                  <div className="text-xl font-bold">{sol.name}</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {sol.techSpec}
                  </p>
                  <div className="text-xs text-teal-300 font-medium">
                    {sol.index}
                  </div>
                </div>

                <Link
                  href="/trong-kinh/"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-teal-400 hover:text-white transition-colors"
                >
                  <span>Tìm hiểu thêm về dòng tròng này</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B7B8A]">
                  {sol.name}
                </span>
                <span className="text-xs font-bold text-slate-400 group-hover:text-[#0B7B8A] transition-colors">
                  Chi tiết &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 3 CTA */}
        <div className="text-center pt-4">
          <Link
            href="/trong-kinh/"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors"
          >
            <span>Khám phá tất cả tròng kính Rocky</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
