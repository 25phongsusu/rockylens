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
    subTag: 'Tầm Nhìn Lái Xe',
    image: '/images/real/driveshield_night.jpg',
    heading: 'Hỗ trợ tầm nhìn khi lái xe ban đêm và trời mưa',
    description: 'Hạn chế cảm giác chói lóa từ đèn xe ngược chiều và tăng độ tương phản khi mặt đường ướt hoặc sương mù.',
    keyFeature: 'Giảm chói đèn xe & trượt nước mưa',
    techProcess: 'Phủ phân cực lọc ánh sáng chói',
    visionExperience: 'Tầm nhìn êm dịu, tăng tương phản đêm',
    indexOption: '1.56 | 1.60 | 1.67',
  },
  {
    id: 'bluecut',
    name: 'Rocky BlueCut UV420 Relax',
    tag: 'Cho Ngày Dài Làm Việc',
    categorySlug: 'loc-anh-sang-xanh',
    subTag: 'Bảo Vệ Mắt Điện Tử',
    image: '/images/products/category-solution-1.png',
    heading: 'Dễ chịu hơn khi làm việc cùng máy tính và điện thoại',
    description: 'Lựa chọn phù hợp khi làm việc với thiết bị số nhiều giờ, giúp mắt dễ chịu hơn mà vẫn giữ trọn màu sắc tự nhiên.',
    keyFeature: 'Ngăn ánh sáng xanh màn hình số',
    techProcess: 'Phủ chân không Nano BlueCut UV420',
    visionExperience: 'Màu sắc tự nhiên, giảm mỏi mắt',
    indexOption: '1.56 | 1.60 | 1.67 | 1.74',
  },
  {
    id: 'photochromic',
    name: 'Rocky Fast-Change Spin-Coat',
    tag: 'Cho Những Ngày Đầy Nắng',
    categorySlug: 'trong-doi-mau',
    subTag: 'Đổi Màu Tiện Lợi',
    image: '/images/products/category-solution-8.png',
    heading: 'Tự động đổi màu theo cường độ ánh sáng mặt trời',
    description: 'Tròng kính tự động đậm màu khi ra ngoài trời nắng và trong suốt trở lại khi bạn bước vào bóng râm, tiện lợi mọi lúc.',
    keyFeature: 'Đổi màu râm linh hoạt khi ra nắng',
    techProcess: 'Phủ đổi màu bề mặt Spin-Coat UV',
    visionExperience: 'Dịu mắt ngoài trời, trong suốt trong nhà',
    indexOption: '1.56 | 1.60 | 1.67',
  },
  {
    id: 'ultra-thin',
    name: 'Rocky Tough Aspheric MR Series',
    tag: 'Gọn Nhẹ & Bền Bỉ',
    categorySlug: 'trong-don-trong',
    subTag: 'Gọn Nhẹ & Bền Bỉ',
    image: '/images/company/about-6.jpg',
    heading: 'Mỏng nhẹ hơn cho người có độ khúc xạ cao',
    description: 'Tối ưu về độ mỏng và độ dẻo dai cao, giữ dáng kính thanh thoát và mở rộng sự lựa chọn cho các kiểu gọng khoan ốc hoặc nửa viền.',
    keyFeature: 'Tối ưu độ mỏng & chịu lực va đập',
    techProcess: 'Phôi vật liệu dẻo dai MR Series',
    visionExperience: 'Nhẹ nhàng, triệt tiêu quang sai biên',
    indexOption: '1.60 | 1.67 | 1.74 siêu mỏng',
  },
  {
    id: 'freeform',
    name: 'CanRx Freeform HD',
    tag: 'Nhìn Rõ Nhiều Khoảng Cách',
    categorySlug: 'trong-da-trong',
    subTag: 'Đa Khoảng Cách',
    image: '/images/products/category-solution-2.png',
    heading: 'Chuyển tiếp êm dịu giữa nhìn xa, trung gian và đọc sách',
    description: 'Hỗ trợ bạn nhìn rõ mọi khoảng cách sinh hoạt thường ngày mà không cần phải đổi kính liên tục hay cảm giác bỡ ngỡ.',
    keyFeature: 'Nhìn rõ mọi cự ly Xa - Trung - Gần',
    techProcess: 'Mài vi điểm kỹ thuật số Freeform HD',
    visionExperience: 'Vùng nhìn liền mạch, thích nghi nhanh',
    indexOption: '1.56 | 1.60 | 1.67',
  },
  {
    id: 'defocus',
    name: 'Defocus MyoControl HD',
    tag: 'Học Sinh & Trẻ Em',
    categorySlug: 'kiem-soat-can-thi',
    subTag: 'Thị Lực Học Đường',
    image: '/images/real/myopia_defocus_diagram.png',
    heading: 'Đồng hành cùng thị lực học đường',
    description: 'Thiết kế quang học hỗ trợ chăm sóc thị lực cho học sinh, sinh viên trong giai đoạn học tập với cường độ cao.',
    keyFeature: 'Chăm sóc thị lực lứa tuổi học sinh',
    techProcess: 'Vi thấu kính phân tán chu biên hội tụ',
    visionExperience: 'Sắc nét trung tâm, giảm mỏi điều tiết',
    indexOption: '1.56 | 1.60 | 1.67',
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
            Rocky tin rằng việc lựa chọn tròng kính không chỉ dựa trên số độ, mà còn cần cân nhắc nhu cầu và thói quen trong cuộc sống hằng ngày của bạn.
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
                      {sol.subTag}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-[#0E253A]">
                    {sol.name}
                  </h4>
                  <div className="space-y-1.5 text-xs pt-1">
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Tính năng nổi bật:</span>
                      <span className="font-bold text-[#0B7B8A] text-right ml-2">{sol.keyFeature}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Công nghệ xử lý:</span>
                      <span className="font-bold text-[#0E253A] text-right ml-2">{sol.techProcess}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Trải nghiệm thị giác:</span>
                      <span className="font-bold text-[#0E253A] text-right ml-2">{sol.visionExperience}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Tùy chọn chiết suất:</span>
                      <span className="font-bold text-[#0E253A] text-right ml-2">{sol.indexOption}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                      <span className="text-slate-600 font-medium">Chính sách bảo hành:</span>
                      <span className="font-bold text-[#0E253A] text-right ml-2">24 tháng chính hãng</span>
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
