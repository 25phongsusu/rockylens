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
    heading: 'Làm Chủ Mọi Cung Đường Đêm & Mưa.',
    description: 'Chấm dứt nỗi ám ảnh chói đèn pha và nhòe sương kính. DriveShield mang lại tầm nhìn sắc nét, êm dịu, giúp bạn vững tay lái và an tâm về nhà trong mọi điều kiện thời tiết.',
    keyFeature: 'Chống chói pha LED & trượt nước mưa',
    techProcess: 'Lọc quang phổ chọn lọc Multi-Matrix',
    visionExperience: 'Tầm nhìn êm dịu, vững vàng tay lái',
    indexOption: '1.56 | 1.60 | 1.67',
  },
  {
    id: 'bluecut',
    name: 'Rocky BlueCut UV420 Relax',
    tag: 'Cho Ngày Dài Làm Việc',
    categorySlug: 'loc-anh-sang-xanh',
    subTag: 'Bảo Vệ Mắt Điện Tử',
    image: '/images/products/category-solution-1.png',
    heading: 'Tạm Biệt Nhức Mỏi Mắt Mùa Chạy Deadline.',
    description: '8 tiếng nhìn màn hình không còn là rào cản. Tròng kính BlueCut chặn đứng ánh sáng xanh có hại, giữ màu sắc chân thực để đôi mắt luôn thư giãn dù bạn làm việc hay giải trí trọn ngày dài.',
    keyFeature: 'Chặn ánh sáng xanh tím màn hình số',
    techProcess: 'Phôi Monomer BlueCut UV420',
    visionExperience: 'Màu sắc trung thực, mắt luôn thư giãn',
    indexOption: '1.56 | 1.60 | 1.67 | 1.74',
  },
  {
    id: 'photochromic',
    name: 'Rocky Fast-Change Spin-Coat',
    tag: 'Cho Những Ngày Đầy Nắng',
    categorySlug: 'trong-doi-mau',
    subTag: 'Đổi Màu Tiện Lợi',
    image: '/images/products/category-solution-8.png',
    heading: '1 Chiếc Kính. 2 Phong Cách. Tiện Lợi Tối Đa.',
    description: 'Trong suốt khi ở nhà, tự động chuyển màu râm sành điệu khi ra nắng. Bảo vệ mắt toàn diện khỏi tia UV mà không cần lỉnh kỉnh đổi qua lại giữa kính cận và kính mát.',
    keyFeature: 'Đổi màu râm sành điệu chuẩn CAT 3',
    techProcess: 'Phủ ly tâm Spin-Coat Photochromic',
    visionExperience: 'Tiện lợi 2 trong 1, bảo vệ UV tối đa',
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
    <section id="san-pham" className="relative py-24 px-6 section-background overflow-hidden">
      {/* Ambient Blur Caustic Overlays (Smooth Section Blending) */}
      <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-[var(--site-bg-start)] to-transparent blur-xl pointer-events-none opacity-80" />
      <div className="absolute -top-24 left-1/3 w-[500px] h-48 bg-[var(--site-bg-end)]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Heading focused on consumer wear needs */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight">
            Mỗi nhu cầu, một lựa chọn phù hợp
          </h2>
          <p className="text-brand-muted text-base sm:text-lg mt-3">
            Từ những khoảnh khắc đời thường giản dị đến những chân trời rộng mở, tầm nhìn luôn là chiếc cầu nối để bạn trọn vẹn cảm nhận vẻ đẹp của thế giới.
          </p>
        </div>

        {/* 6 Customer Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoverySolutions.map((sol) => (
            <div
              key={sol.id}
              className="card-surface rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
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
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-heading text-xs font-bold">
                    {sol.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-heading leading-snug">
                    {sol.heading}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>

              {/* Layer 3 - Technical details on hover with WHITE BACKGROUND */}
              <div className="absolute inset-0 bg-white/98 backdrop-blur-md p-5 sm:p-6 rounded-3xl text-heading flex flex-col justify-between opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10 border border-[var(--color-border)] shadow-2xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/50 text-primary text-xs font-bold border border-[var(--color-border)]">
                      Thông Tin Sản Phẩm
                    </span>
                    <span className="text-xs text-brand-muted font-semibold">
                      {sol.subTag}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-heading">
                    {sol.name}
                  </h4>
                  <div className="space-y-1.5 text-xs pt-1">
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[var(--site-bg-start)]">
                      <span className="text-brand-muted font-medium">Tính năng nổi bật:</span>
                      <span className="font-bold text-primary text-right ml-2">{sol.keyFeature}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[var(--site-bg-start)]">
                      <span className="text-brand-muted font-medium">Công nghệ xử lý:</span>
                      <span className="font-bold text-heading text-right ml-2">{sol.techProcess}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[var(--site-bg-start)]">
                      <span className="text-brand-muted font-medium">Trải nghiệm thị giác:</span>
                      <span className="font-bold text-heading text-right ml-2">{sol.visionExperience}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[var(--site-bg-start)]">
                      <span className="text-brand-muted font-medium">Tùy chọn chiết suất:</span>
                      <span className="font-bold text-heading text-right ml-2">{sol.indexOption}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-[var(--site-bg-start)]">
                      <span className="text-brand-muted font-medium">Chính sách bảo hành:</span>
                      <span className="font-bold text-heading text-right ml-2">24 tháng chính hãng</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/trong-kinh/"
                    className="button-primary w-full py-2.5 rounded-xl text-xs font-bold transition-colors block text-center shadow-xs"
                  >
                    Xem chi tiết dòng tròng &rarr;
                  </Link>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">
                  {sol.name}
                </span>
                <span className="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
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
            className="button-primary inline-flex items-center space-x-2 px-8 py-4 rounded-full text-base transition-colors"
          >
            <span>Khám phá tất cả tròng kính Rocky</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
