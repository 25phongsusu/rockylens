'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const productSolutions = [
  {
    num: '01 / 06',
    category: 'DI CHUYỂN',
    filter: 'Ngoài trời',
    title: 'Khi lái xe & ban đêm',
    desc: 'Tìm hiểu các đặc điểm tròng kính liên quan đến ánh sáng chói và nhu cầu di chuyển.',
    image: '/uploads/solutions/sol_kinh_lai_xe.png',
    link: '/trong-kinh/rocky-driveshield-night-vision/',
  },
  {
    num: '02 / 06',
    category: 'HỌC TẬP & LÀM VIỆC',
    filter: 'Làm việc',
    title: 'Làm việc với màn hình',
    desc: 'Tìm hiểu lớp phủ, các lựa chọn tròng kính và thói quen sử dụng thiết bị số.',
    image: '/uploads/solutions/sol_chong_tia_uv.png',
    link: '/trong-kinh/rocky-156-bluecut-shmc/',
  },
  {
    num: '03 / 06',
    category: 'NGOÀI TRỜI',
    filter: 'Ngoài trời',
    title: 'Tròng kính đổi màu',
    desc: 'Khám phá sự thay đổi sắc độ của tròng trong các điều kiện ánh sáng phù hợp.',
    image: '/uploads/solutions/sol_doi_mau.png',
    link: '/trong-kinh/rocky-trendy-photochromic-grey/',
  },
  {
    num: '04 / 06',
    category: 'THẨM MỸ & ĐỘ MỎNG',
    filter: 'Chuyên biệt',
    title: 'Mỏng nhẹ & gọng không viền',
    desc: 'Tìm hiểu vật liệu, chiết suất và cách chọn tròng theo cấu trúc gọng.',
    image: '/uploads/solutions/sol_kinh_khoan_va_dap.png',
    link: '/trong-kinh/rocky-160-mr8-aspheric/',
  },
  {
    num: '05 / 06',
    category: 'NHIỀU KHOẢNG NHÌN',
    filter: 'Làm việc',
    title: 'Nhu cầu nhìn xa & gần',
    desc: 'Tìm hiểu tròng đa tròng và yếu tố cần cân nhắc khi nhìn ở nhiều khoảng cách.',
    image: '/uploads/solutions/sol_da_trong.png',
    link: '/trong-kinh/rocky-freeform-progressive-hd/',
  },
  {
    num: '06 / 06',
    category: 'TRẺ EM & HỌC ĐƯỜNG',
    filter: 'Chuyên biệt',
    title: 'Thị lực học đường',
    desc: 'Khám phá các thiết kế tròng dành cho trẻ và lưu ý khi lựa chọn.',
    image: '/uploads/solutions/sol_kiem_soat_can_thi.png',
    link: '/trong-kinh/rocky-myocontrol-dims-kids/',
  },
];

export default function ProductCategories() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const filtered = activeFilter === 'Tất cả'
    ? productSolutions
    : productSolutions.filter(item => item.filter === activeFilter);

  return (
    <section id="trong-kinh" className="relative py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Top Header Row matching preview.png Section 01 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2.5">
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
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
              Từ nhu cầu nhìn thường ngày đến những yêu cầu chuyên biệt, mỗi nhóm tròng kính có những đặc điểm và công nghệ riêng.
            </p>
          </div>
          <div className="shrink-0 pb-1">
            <Link
              href="/trong-kinh/"
              className="text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 transition-colors"
            >
              <span>Xem các nhóm sản phẩm</span>
              <span>&#8599;</span>
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
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[var(--b2b-end)] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 6 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="card-surface rounded-[28px] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white"
            >
              <div>
                <div className="space-y-1.5 pb-3">
                  <div className="text-xs font-bold text-primary tracking-wide uppercase">
                    {item.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-heading leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-50/50 relative my-2 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center">
                <Link
                  href={item.link}
                  className="text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Xem giải pháp</span>
                  <span>&#8599;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-xs text-slate-500 pt-2 text-center sm:text-left">
          Thông số kỹ thuật và các lựa chọn cụ thể có thể khác nhau theo từng sản phẩm. Vui lòng tham khảo trang chi tiết hoặc liên hệ để xác nhận.
        </div>

      </div>
    </section>
  );
}
