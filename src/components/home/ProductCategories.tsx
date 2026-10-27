import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const discoverySolutions = [
  {
    id: 'driveshield',
    name: 'Rocky DriveShield Ruby AR',
    tag: 'Lái Xe Ban Đêm & Mưa',
    categorySlug: 'kinh-lai-xe',
    index: 'Chiết suất 1.60 & 1.67',
    image: '/images/real/driveshield_night.jpg',
    heading: 'Hỗ trợ tầm nhìn khi lái xe ban đêm và trời mưa',
    description: 'Hạn chế cảm giác chói lóa từ đèn xe ngược chiều và tăng độ tương phản khi mặt đường ướt hoặc sương mù.',
    opticalFeature: 'Quang phổ ấm hạn chế chói',
    coating: 'Kỵ nước, trượt hạt mưa',
    durability: 'Chống nứt vỡ và dẻo dai',
  },
  {
    id: 'bluecut',
    name: 'Rocky BlueCut UV420 Defender',
    tag: 'Văn Phòng & Thiết Bị Số',
    categorySlug: 'loc-anh-sang-xanh',
    index: 'Chiết suất 1.56 - 1.74',
    image: '/images/products/category-solution-1.png',
    heading: 'Dễ chịu hơn khi làm việc cùng máy tính và điện thoại',
    description: 'Lựa chọn phù hợp khi làm việc với thiết bị số nhiều giờ, giúp mắt dễ chịu hơn mà vẫn giữ trọn màu sắc tự nhiên.',
    opticalFeature: 'Ngăn ánh sáng xanh tím',
    coating: 'Nano Sapphire chống trầy',
    durability: 'Chịu va đập chuẩn quốc tế',
  },
  {
    id: 'photochromic',
    name: 'Rocky Fast-Change Spin-Coat',
    tag: 'Đổi Màu Ngoài Trời',
    categorySlug: 'trong-doi-mau',
    index: 'Chiết suất 1.56 / 1.60 / 1.67',
    image: '/images/products/category-solution-8.png',
    heading: 'Tự động đổi màu theo cường độ ánh sáng mặt trời',
    description: 'Tròng kính tự động đậm màu khi ra ngoài trời nắng và trong suốt trở lại khi bạn bước vào bóng râm, tiện lợi mọi lúc.',
    opticalFeature: 'Đổi màu theo tia UV',
    coating: 'Phủ ly tâm Spin-Coating',
    durability: 'Bền bỉ hoạt động ngoài trời',
  },
  {
    id: 'ultra-thin',
    name: 'Rocky Ultra-Thin Aspheric 1.74',
    tag: 'Cận Nặng & Gọng Mỏng',
    categorySlug: 'trong-don-trong',
    index: 'Siêu mỏng 1.67 & 1.74',
    image: '/images/company/about-6.jpg',
    heading: 'Mỏng nhẹ hơn cho người có độ khúc xạ cao',
    description: 'Tối ưu về độ mỏng và độ dẻo dai cao, giữ dáng kính thanh thoát và mở rộng sự lựa chọn cho các kiểu gọng khoan ốc hoặc nửa viền.',
    opticalFeature: 'Phi cầu giảm biến dạng rìa',
    coating: 'Siêu trượt nước và bụi bẩn',
    durability: 'Dẻo dai cho gọng khoan ốc',
  },
  {
    id: 'defocus',
    name: 'Rocky Defocus 360° MyoControl',
    tag: 'Chăm Sóc Thị Lực Trẻ Em',
    categorySlug: 'kiem-soat-can-thi',
    index: 'Phôi an toàn chịu lực',
    image: '/images/real/myopia_defocus_diagram.png',
    heading: 'Đồng hành cùng thị lực học đường',
    description: 'Thiết kế quang học hỗ trợ chăm sóc thị lực cho học sinh, sinh viên trong giai đoạn học tập với cường độ cao.',
    opticalFeature: 'Phân bổ tiêu cự chu biên',
    coating: 'Chống bám bẩn, dễ vệ sinh',
    durability: 'Chống va đập an toàn học đường',
  },
  {
    id: 'freeform',
    name: 'CanRx Ultraview Freeform',
    tag: 'Đa Tròng Cho Người Trên 40',
    categorySlug: 'trong-da-trong',
    index: 'Đặt mài Rx cá nhân hóa',
    image: '/images/products/category-solution-2.png',
    heading: 'Chuyển tiếp êm dịu giữa nhìn xa, trung gian và đọc sách',
    description: 'Hỗ trợ bạn nhìn rõ mọi khoảng cách sinh hoạt thường ngày mà không cần phải đổi kính liên tục hay cảm giác bỡ ngỡ.',
    opticalFeature: 'Đa tiêu cự kỹ thuật số',
    coating: 'Trong suốt, chuyển tiếp êm',
    durability: 'Tiêu chuẩn quang học Canada',
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

              {/* Layer 3 - Technical details on hover with WHITE BACKGROUND */}
              <div className="absolute inset-0 bg-white/98 backdrop-blur-md p-5 sm:p-6 rounded-3xl text-[#0E253A] flex flex-col justify-between opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10 border border-slate-200/90 shadow-2xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-xs font-bold border border-teal-200/60">
                      Thông Tin Sản Phẩm
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      Bảo Hành Chính Hãng
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-[#0E253A]">
                    {sol.name}
                  </h4>
                  <div className="space-y-1.5 text-xs pt-1">
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Đặc tính quang học:</span>
                      <span className="font-bold text-[#0B7B8A] text-right">{sol.opticalFeature}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Lớp phủ bề mặt:</span>
                      <span className="font-bold text-[#0E253A] text-right">{sol.coating}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Khả năng chịu lực:</span>
                      <span className="font-bold text-[#0E253A] text-right">{sol.durability}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Lựa chọn độ mỏng:</span>
                      <span className="font-bold text-[#0E253A] text-right">{sol.index}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Chính sách bảo hành:</span>
                      <span className="font-bold text-[#0B7B8A] text-right">24 tháng chính hãng</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/trong-kinh/"
                    className="w-full py-2.5 rounded-xl bg-[#0B7B8A] hover:bg-[#086370] text-white text-xs font-bold transition-colors block text-center shadow-xs"
                  >
                    Xem chi tiết dòng tròng &rarr;
                  </Link>
                </div>
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
