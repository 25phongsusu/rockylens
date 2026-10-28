'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const productSolutions = [
  {
    num: '01 / 06',
    category: 'DI CHUYỂN',
    filter: 'Ngoài trời',
    title: 'Khi lái xe & ban đêm',
    desc: 'Tìm hiểu các đặc điểm tròng kính liên quan đến ánh sáng chói và nhu cầu di chuyển.',
    image: '/uploads/solutions/sol_kinh_lai_xe.png',
    link: '/trong-kinh/rocky-driveshield-night-vision/',
    productName: 'Rocky DriveShield Ruby AR',
    subTag: 'Tầm Nhìn Lái Xe',
    keyFeature: 'Chống chói pha LED & trượt nước mưa',
    techProcess: 'Lọc quang phổ Multi-Matrix & phủ Ruby AR',
    visionExperience: 'Tầm nhìn êm dịu, vững vàng tay lái đêm',
    indexOption: '1.56 | 1.60 | 1.67',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '02 / 06',
    category: 'HỌC TẬP & LÀM VIỆC',
    filter: 'Làm việc',
    title: 'Làm việc với màn hình',
    desc: 'Tìm hiểu lớp phủ, các lựa chọn tròng kính và thói quen sử dụng thiết bị số.',
    image: '/uploads/solutions/sol_chong_tia_uv.png',
    link: '/trong-kinh/rocky-156-bluecut-shmc/',
    productName: 'Rocky BlueCut UV420 Relax',
    subTag: 'Bảo Vệ Mắt Điện Tử',
    keyFeature: 'Chặn ánh sáng xanh tím màn hình số',
    techProcess: 'Phôi Monomer BlueCut UV420',
    visionExperience: 'Màu sắc trung thực, mắt luôn thư giãn',
    indexOption: '1.56 | 1.60 | 1.67 | 1.74',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '03 / 06',
    category: 'NGOÀI TRỜI',
    filter: 'Ngoài trời',
    title: 'Tròng kính đổi màu',
    desc: 'Khám phá sự thay đổi sắc độ của tròng trong các điều kiện ánh sáng phù hợp.',
    image: '/uploads/solutions/sol_doi_mau.png',
    link: '/trong-kinh/rocky-trendy-photochromic-grey/',
    productName: 'Rocky Fast-Change Spin-Coat',
    subTag: 'Đổi Màu Tiện Lợi',
    keyFeature: 'Đổi màu râm sành điệu chuẩn CAT 3',
    techProcess: 'Phủ ly tâm Spin-Coat Photochromic',
    visionExperience: 'Tiện lợi 2 trong 1, bảo vệ UV tối đa',
    indexOption: '1.56 | 1.60 | 1.67',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '04 / 06',
    category: 'THẨM MỸ & ĐỘ MỎNG',
    filter: 'Chuyên biệt',
    title: 'Mỏng nhẹ & gọng không viền',
    desc: 'Tìm hiểu vật liệu, chiết suất và cách chọn tròng theo cấu trúc gọng.',
    image: '/uploads/solutions/sol_kinh_khoan_va_dap.png',
    link: '/trong-kinh/rocky-160-mr8-aspheric/',
    productName: 'Rocky Tough Aspheric MR Series',
    subTag: 'Gọn Nhẹ & Bền Bỉ',
    keyFeature: 'Tối ưu độ mỏng & chịu lực va đập gọng khoan',
    techProcess: 'Phôi vật liệu dẻo dai Mitsui MR Series',
    visionExperience: 'Nhẹ nhàng, triệt tiêu quang sai biên',
    indexOption: '1.60 | 1.67 | 1.74 siêu mỏng',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '05 / 06',
    category: 'NHIỀU KHOẢNG NHÌN',
    filter: 'Làm việc',
    title: 'Nhu cầu nhìn xa & gần',
    desc: 'Tìm hiểu tròng đa tròng và yếu tố cần cân nhắc khi nhìn ở nhiều khoảng cách.',
    image: '/uploads/solutions/sol_da_trong.png',
    link: '/trong-kinh/rocky-freeform-progressive-hd/',
    productName: 'CanRx Freeform HD Progressive',
    subTag: 'Đa Khoảng Cách',
    keyFeature: 'Nhìn rõ mọi cự ly Xa - Trung - Gần',
    techProcess: 'Mài vi điểm kỹ thuật số Freeform HD',
    visionExperience: 'Vùng nhìn liền mạch, thích nghi nhanh',
    indexOption: '1.56 | 1.60 | 1.67',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '06 / 06',
    category: 'TRẺ EM & HỌC ĐƯỜNG',
    filter: 'Chuyên biệt',
    title: 'Thị lực học đường',
    desc: 'Khám phá các thiết kế tròng dành cho trẻ và lưu ý khi lựa chọn.',
    image: '/uploads/solutions/sol_kiem_soat_can_thi.png',
    link: '/trong-kinh/rocky-myocontrol-dims-kids/',
    productName: 'Defocus MyoControl Kids HD',
    subTag: 'Thị Lực Học Đường',
    keyFeature: 'Chăm sóc thị lực, làm chậm tiến triển cận',
    techProcess: 'Vi thấu kính phân tán chu biên hội tụ D.I.M.S.',
    visionExperience: 'Sắc nét trung tâm, giảm mỏi điều tiết',
    indexOption: '1.56 | 1.60',
    warranty: '24 tháng chính hãng',
  },
];

export default function ProductCategories() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const filtered = activeFilter === 'Tất cả'
    ? productSolutions
    : productSolutions.filter(item => item.filter === activeFilter);

  return (
    <section id="trong-kinh" className="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Top Header Row matching preview.png Section 01 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold text-primary tracking-wider uppercase">
              DANH MỤC SẢN PHẨM
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
              Khám phá các giải pháp{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
                tròng kính
              </span>{' '}
              RockyLens.
            </h2>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
              Từ nhu cầu nhìn thường ngày đến những yêu cầu chuyên biệt, mỗi nhóm tròng kính có những đặc điểm và công nghệ riêng.
            </p>
          </div>
          <div className="shrink-0 pb-1">
            <Link
              href="/trong-kinh/"
              className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 transition-colors"
            >
              <span>Xem các nhóm sản phẩm</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {['Tất cả', 'Làm việc', 'Ngoài trời', 'Chuyên biệt'].map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[var(--b2b-end)] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 6 Solution Cards Grid - Reduced 30% dimensions */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="card-surface rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white relative overflow-hidden"
              >
                {/* Default Front View */}
                <div>
                  <div className="space-y-1 pb-2">
                    <div className="text-[11px] font-bold text-primary tracking-wide uppercase">
                      {item.category}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-heading leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full rounded-xl overflow-hidden bg-slate-50/50 relative my-2 flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center">
                  <Link
                    href={item.link}
                    className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Xem giải pháp</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Technical specifications hover overlay */}
                <div className="absolute inset-0 bg-white/98 backdrop-blur-md p-4 sm:p-5 rounded-2xl text-heading flex flex-col justify-between opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-20 border border-[var(--color-border)] shadow-xl pointer-events-none group-hover:pointer-events-auto">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--site-bg-middle)]/60 text-primary text-[10px] font-bold border border-[var(--color-border)]">
                        Thông Số Kỹ Thuật
                      </span>
                      <span className="text-[11px] text-brand-muted font-semibold">
                        {item.subTag}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-heading line-clamp-1">
                      {item.productName}
                    </h4>
                    <div className="space-y-1 text-[11px] pt-0.5">
                      <div className="flex justify-between items-center py-1 px-2.5 rounded-lg bg-[var(--site-bg-start)]">
                        <span className="text-brand-muted font-medium shrink-0">Tính năng:</span>
                        <span className="font-bold text-primary text-right ml-2 line-clamp-1">{item.keyFeature}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-2.5 rounded-lg bg-[var(--site-bg-start)]">
                        <span className="text-brand-muted font-medium shrink-0">Công nghệ:</span>
                        <span className="font-bold text-heading text-right ml-2 line-clamp-1">{item.techProcess}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-2.5 rounded-lg bg-[var(--site-bg-start)]">
                        <span className="text-brand-muted font-medium shrink-0">Trải nghiệm:</span>
                        <span className="font-bold text-heading text-right ml-2 line-clamp-1">{item.visionExperience}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-2.5 rounded-lg bg-[var(--site-bg-start)]">
                        <span className="text-brand-muted font-medium shrink-0">Chiết suất:</span>
                        <span className="font-bold text-heading text-right ml-2">{item.indexOption}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-2.5 rounded-lg bg-[var(--site-bg-start)]">
                        <span className="text-brand-muted font-medium shrink-0">Bảo hành:</span>
                        <span className="font-bold text-heading text-right ml-2">{item.warranty}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={item.link}
                      className="button-primary w-full py-2 rounded-xl text-xs font-bold transition-colors block text-center shadow-xs"
                    >
                      Xem chi tiết dòng tròng &rarr;
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button: Xem thêm */}
        <div className="text-center pt-3">
          <Link
            href="/trong-kinh/"
            className="button-primary inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Xem thêm giải pháp tròng kính</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Footnote */}
        <div className="text-[11px] sm:text-xs text-slate-500 pt-1 text-center">
          Thông số kỹ thuật và các lựa chọn cụ thể có thể khác nhau theo từng sản phẩm. Vui lòng tham khảo trang chi tiết hoặc liên hệ để xác nhận.
        </div>

      </div>
    </section>
  );
}
