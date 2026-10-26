import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const discoverySolutions = [
  {
    id: 'driveshield',
    name: 'Rocky DriveShield Ruby AR',
    tag: 'Lái Xe Đêm & Mưa',
    categorySlug: 'kinh-lai-xe',
    tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
    index: '1.56 / 1.60',
    image: '/images/real/driveshield_night.jpg',
    description: 'Váng phủ Ruby Anti-Glare cắt 85% lóa đèn pha LED ngược chiều, tăng 35% độ tương phản mặt đường khi trời mưa đêm.',
    bullets: ['Triệt tiêu lóa đèn xe đối diện', 'Trượt nước tức thì không nhòe kính', 'Phôi monomer Mitsui độ bền cao'],
  },
  {
    id: 'bluecut',
    name: 'Rocky BlueCut UV420 Defender',
    tag: 'Văn Phòng & Thiết Bị Số',
    categorySlug: 'loc-anh-sang-xanh',
    tagColor: 'text-teal-700 bg-teal-50 border-teal-200',
    index: '1.56 / 1.60 / 1.67 / 1.74',
    image: '/images/products/category-solution-1.png',
    description: 'Lọc 98% bước sóng HEV 420nm có hại từ máy tính và điện thoại. Bảo vệ hoàng điểm, chống khô mỏi mắt mà không ám vàng hình ảnh.',
    bullets: ['Lọc ánh sáng xanh từ lõi phôi', 'Màu sắc trung thực cho dân thiết kế', 'Váng Nano Sapphire chống trầy 9H'],
  },
  {
    id: 'photochromic',
    name: 'Rocky Fast-Change Spin-Coat',
    tag: 'Đổi Màu Ngoài Trời',
    categorySlug: 'trong-doi-mau',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    index: '1.56 / 1.60 / 1.67',
    image: '/images/products/category-solution-8.png',
    description: 'Công nghệ phủ ly tâm Spin-Coating chuyển màu râm chuẩn Cat.3 trong 15 giây khi gặp tia UV và nhả màu trong suốt tức thì trong nhà.',
    bullets: ['5 màu: Khói, Nâu trà, Xanh rêu, Sapphire, Tím', 'Đổi màu nhanh nhạy cả khi lái xe', 'Chống 100% tia UV400'],
  },
  {
    id: 'ultra-thin',
    name: 'Rocky Ultra-Thin Aspheric 1.74',
    tag: 'Cận Nặng Siêu Mỏng',
    categorySlug: 'trong-don-trong',
    tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
    index: 'Index 1.74 Mitsui MR-174',
    image: '/images/company/about-6.jpg',
    description: 'Mỏng hơn 45% so với tròng tiêu chuẩn, thiết kế phi cầu Aspheric triệt tiêu quang sai rìa và giải phóng trọng lượng tì đè sống mũi.',
    bullets: ['Cận độ cao từ -4.00 đến -16.00D', 'Không thu nhỏ mắt kính khi nhìn từ ngoài', 'Bề mặt phẳng thẩm mỹ cao'],
  },
  {
    id: 'defocus',
    name: 'Rocky Defocus 360° MyoControl',
    tag: 'Kiểm Soát Cận Trẻ Em',
    categorySlug: 'kiem-soat-can-thi',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    index: 'MR-8 Tough Chống Vỡ',
    image: '/images/real/myopia_defocus_diagram.png',
    description: 'Ma trận 1.164 vi thấu kính phân tán chu biên làm chậm tiến triển độ cận học đường 59%. Phôi MR-8 an toàn tuyệt đối khi vận động.',
    bullets: ['Công nghệ vi thấu kính D.I.M.S', 'Chậm tăng độ cận từ 59% - 67%', 'Tặng kèm sổ theo dõi khúc xạ học đường'],
  },
  {
    id: 'freeform',
    name: 'CanRx Ultraview Freeform 4K',
    tag: 'Đa Tròng Lão Thị',
    categorySlug: 'trong-da-trong',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    index: 'Back-Surface Freeform 0.01D',
    image: '/images/products/category-solution-2.png',
    description: 'Đa tròng Freeform kỹ thuật số mặt sau cá nhân hóa cho người trên 40 tuổi. Chuyển tiếp êm dịu 3 khoảng cách Xa - Trung Gian - Gần không chao đảo.',
    bullets: ['Mở rộng 40% hành lang nhìn trung gian', 'Khắc phục hiện tượng say sóng đa tròng', 'Bảo hiểm thích nghi đổi số độ trong 30 ngày'],
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-[#F5F5F7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading focused on the Product Discovery Journey */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-pill text-[#0B7B8A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Hành Trình Khám Phá Giải Pháp Thị Lực</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Mỗi Đôi Mắt, Một Giải Pháp Quang Học Hoàn Hảo
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Rocky Lens cung cấp hệ sinh thái tròng kính quang học toàn diện được tối ưu hóa cho từng lối sống, lứa tuổi và nhu cầu bảo vệ thị giác chuyên biệt.
          </p>
        </div>

        {/* 6 Discovery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoverySolutions.map((sol) => (
            <div
              key={sol.id}
              className="liquid-card rounded-[28px] overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image with Real Authentic Photo */}
                <div className="aspect-16/10 w-full overflow-hidden bg-slate-900 relative">
                  <Image
                    src={sol.image}
                    alt={sol.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge & Index Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 text-[10px] font-bold uppercase tracking-wider">
                    {sol.tag}
                  </span>
                  <span className="absolute bottom-2.5 left-3 text-white font-bold text-xs">
                    {sol.index}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {sol.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-1.5 text-[11px] text-slate-600">
                    {sol.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B7B8A] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={`/trong-kinh/?category=${sol.categorySlug}`}
                  className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-[#0B7B8A] text-white font-bold text-xs transition-colors shadow-xs flex items-center justify-center space-x-1.5"
                >
                  <span>Khám Phá Chi Tiết Dòng Tròng</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global Catalog Action */}
        <div className="mt-12 text-center">
          <Link
            href="/trong-kinh/"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full liquid-btn-secondary text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all"
          >
            <span>Xem Tất Cả 12+ Dòng Tròng Kính Rocky Lens</span>
            <ArrowRight className="w-4 h-4 text-[#0B7B8A]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
