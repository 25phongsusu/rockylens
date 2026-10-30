'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const productSolutions = [
  {
    num: '01 / 09',
    category: 'DÂN VĂN PHÒNG & NĂNG ĐỘNG (2 TRONG 1)',
    filter: 'Làm việc',
    title: 'Văn Phòng Hay Ra Nắng (Lọc Ánh Sáng Xanh + CÓ ĐỔI MÀU)',
    desc: 'Trong phòng làm việc lọc ánh sáng xanh máy tính êm dịu mắt, khi ra nắng tròng tự động đổi màu râm chống chói và cản 100% tia UV tiện lợi 2 trong 1.',
    image: '/uploads/solutions/sol_doi_mau.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-trendy-photochromic-grey/',
    productName: 'Rocky Trendy Smart BlueCut Photo',
    subTag: 'Lọc Ánh Sáng Xanh & Đổi Màu Nắng 2-in-1',
    keyFeature: 'Lọc ánh sáng xanh trong nhà, ra nắng đổi màu râm tức thì',
    techProcess: 'Phủ xoay Spin-Coat nhạy sáng + Phôi BlueCut UV420',
    visionExperience: 'Bảo vệ mắt toàn diện: vừa làm việc số vừa chống nắng',
    indexOption: '1.56 | 1.60 | 1.67',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '02 / 09',
    category: 'DÀNH CHO DESIGNER & ĐỒ HỌA MÁY TÍNH',
    filter: 'Làm việc',
    title: 'Ngồi Máy Tính Đồ Họa (Lọc Ánh Sáng Xanh - KHÔNG Đổi Màu)',
    desc: 'Dành cho designer, lập trình viên: tròng trong suốt 99.8% chuẩn màu 100% không ngả vàng, lọc ánh sáng xanh tím có hại giúp giảm mỏi và khô rát mắt.',
    image: '/uploads/solutions/sol_chong_tia_uv.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-156-bluecut-shmc/',
    productName: 'Rocky BlueCut UV420 Pure Clear',
    subTag: 'Trong Suốt 99.8% & Chuẩn Màu 100%',
    keyFeature: 'Lọc ánh sáng xanh màn hình, không ngả vàng, không đổi màu',
    techProcess: 'Phôi Monomer UV420 hấp thụ sâu khử tia bức xạ',
    visionExperience: 'Mắt êm dịu, không mỏi, hình ảnh chuẩn xác tuyệt đối',
    indexOption: '1.56 | 1.60 | 1.67 | 1.74',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '03 / 09',
    category: 'HOẠT ĐỘNG NGOÀI TRỜI & THỂ THAO',
    filter: 'Ngoài trời',
    title: 'Người Hoạt Động Ngoài Trời (Chống Tia UV400 / UV420 Tối Đa)',
    desc: 'Ngăn chặn triệt để 100% tia cực tím độc hại UV400 và UV420, phòng ngừa thoái hóa điểm vàng, lớp phủ Nano Sapphire chống trầy xước và bám bụi.',
    image: '/uploads/solutions/sol_chong_uv.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-167-ultra-thin-bluecut/',
    productName: 'Rocky UV420 MaxShield Protect',
    subTag: 'Ngăn 100% Bức Xạ Cực Tím & Bảo Vệ Giác Mạc',
    keyFeature: 'Cản triệt để tia cực tím UV400/UV420, chống trầy và đọng nước',
    techProcess: 'Phôi hấp thụ quang phổ độc hại + Phủ Nano Sapphire 9H',
    visionExperience: 'Thị lực sáng rõ ngoài trời, bảo vệ võng mạc dài lâu',
    indexOption: '1.56 | 1.60 | 1.67 ASP',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '04 / 09',
    category: 'DÀNH CHO TÀI XẾ & DI CHUYỂN ĐÊM',
    filter: 'Ngoài trời',
    title: 'Lái Xe Ban Đêm & Đi Mưa (Chống Chói Đèn Pha LED)',
    desc: 'Triệt tiêu quầng sáng chói lóa từ đèn pha LED đối diện, tăng cường độ tương phản nhìn rõ biển báo và vạch đường ban đêm, trượt nước mưa tối đa.',
    image: '/uploads/solutions/sol_kinh_lai_xe.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-driveshield-night-vision/',
    productName: 'Rocky DriveShield Ruby AR',
    subTag: 'Tầm Nhìn Lái Xe An Toàn Đêm & Mưa',
    keyFeature: 'Chống chói đèn pha LED & trượt nước mưa nhanh chóng',
    techProcess: 'Phủ Ruby AR Multi-Matrix & lọc phổ quang sai lóa',
    visionExperience: 'Dịu mắt, nhìn rõ vạch đường và biển báo trong đêm',
    indexOption: '1.56 | 1.60 | 1.67',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '05 / 09',
    category: 'NGƯỜI LỚN TUỔI & TRUNG NIÊN (40+)',
    filter: 'Làm việc',
    title: 'Người Lớn Tuổi Nhìn Xa - Trung - Gần (Đa Tròng Liền Mạch)',
    desc: 'Xóa bỏ ranh giới đường lằn hai tròng, chuyển tiếp mượt mà mọi cự ly: đọc sách báo, xem điện thoại, nhìn máy tính đến đi lại lái xe trong 1 cặp kính.',
    image: '/uploads/solutions/sol_da_trong.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-freeform-progressive-hd/',
    productName: 'CanRx Freeform HD Progressive',
    subTag: 'Đa Tròng Kỹ Thuật Số Liền Mạch',
    keyFeature: 'Nhìn rõ mọi cự ly Xa - Trung - Gần không cần tháo kính',
    techProcess: 'Mài kỹ thuật số vi điểm Freeform HD mặt sau',
    visionExperience: 'Thích nghi dễ dàng, xóa bỏ cảm giác choáng váng lắc đầu',
    indexOption: '1.56 | 1.60 | 1.67',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '06 / 09',
    category: 'TRẺ EM & HỌC SINH CẬN THỊ',
    filter: 'Chuyên biệt',
    title: 'Trẻ Em & Học Sinh (Kiểm Soát Tăng Độ Cận Học Đường)',
    desc: 'Ứng dụng công nghệ vi thấu kính Defocus 360° làm chậm tốc độ tăng độ cận học đường đến 60%, giúp bảo vệ trục nhãn cầu và giữ gìn thị lực cho bé.',
    image: '/uploads/solutions/sol_kiem_soat_can_thi.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-myocontrol-dims-kids/',
    productName: 'Defocus MyoControl Kids HD',
    subTag: 'Kiểm Soát Cận Thị Tiến Triển',
    keyFeature: 'Làm chậm tiến triển độ cận, chống va đập an toàn cho trẻ',
    techProcess: 'Mảng vi thấu kính phân kỳ chu biên Defocus D.I.M.S.',
    visionExperience: 'Tâm nhìn sắc nét khi học bài, giảm áp lực điều tiết mắt',
    indexOption: '1.56 | 1.60',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '07 / 09',
    category: 'THỜI TRANG & PHONG CÁCH XU HƯỚNG',
    filter: 'Ngoài trời',
    title: 'Kính Cận Đổi Màu Thời Trang (Bộ Sưu Tập Màu Cá Tính)',
    desc: 'Biến chiếc kính cận thành kính râm sành điệu với bộ sưu tập màu sắc xu hướng: Khói Titan, Trà Hổ Phách, Xanh Sapphire... đổi màu nhạy sáng khi ra nắng.',
    image: '/uploads/solutions/sol_thoi_trang_doi_mau.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-chameleon-photochromic/',
    productName: 'Rocky Trendy Style Photochromic',
    subTag: 'Bộ Sưu Tập Màu Đổi Thời Thượng',
    keyFeature: 'Đổi màu nhanh nhạy theo cường độ tia UV, đa sắc phong cách',
    techProcess: 'Lớp phủ xoay ma trận màu Spin-Coat + Váng dầu SHMC',
    visionExperience: 'Thời trang cá tính, bảo vệ mắt chống chói lóa ngoài trời',
    indexOption: '1.56 | 1.60 Trendy',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '08 / 09',
    category: 'GỌNG KHOAN & KÍNH KHÔNG VIỀN',
    filter: 'Chuyên biệt',
    title: 'Gọng Khoan Bắt Ốc & Kính Không Viền (Chất Liệu Siêu Dai MR-8)',
    desc: 'Chất liệu Mitsui MR-8 Nhật Bản siêu dẻo dai và chịu lực uốn đỉnh cao, bắt ốc khoan chắc chắn không lo rạn nứt mép kính, thanh thoát và sang trọng.',
    image: '/uploads/solutions/sol_kinh_khoan_va_dap.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-160-mr8-aspheric/',
    productName: 'Rocky MR-8 Tough Rimless Drill',
    subTag: 'Phôi Mitsui MR-8 Bắt Ốc Chống Mẻ',
    keyFeature: 'Độ dai cơ học tuyệt hảo, chuyên dụng cho gọng khoan ốc',
    techProcess: 'Monomer Mitsui MR-8 Nhật Bản liên kết phân tử chịu lực',
    visionExperience: 'Kính nhẹ tênh, diện mạo doanh nhân tinh tế và sang trọng',
    indexOption: '1.60 | 1.67 MR Series',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '09 / 09',
    category: 'CẬN VIỄN NẶNG & SIÊU MỎNG NHẸ',
    filter: 'Chuyên biệt',
    title: 'Độ Cận Viễn Nặng (Tròng Siêu Mỏng Chiết Suất 1.67 - 1.74)',
    desc: 'Chiết suất cao 1.67 và 1.74 mỏng nhẹ hơn đến 45%, triệt tiêu độ dày đáy chai ở mép tròng, mắt nhìn tự nhiên không bị thu nhỏ khi lên gọng kính.',
    image: '/uploads/solutions/sol_sieu_mong_do_cao.png',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-174-ultra-high-index/',
    productName: 'Rocky Ultra Thin 1.74 Aspheric',
    subTag: 'Mỏng Hơn Đến 45% & Triệt Tiêu Đáy Chai',
    keyFeature: 'Chiết suất siêu mỏng 1.67 - 1.74, thiết kế phẳng phi cầu ASP',
    techProcess: 'Phôi Monomer chiết suất cao + Thiết kế quang học Aspheric',
    visionExperience: 'Đôi mắt tự nhiên không bị thu nhỏ, tròng nhẹ êm trên sống mũi',
    indexOption: '1.67 | 1.74 Ultra Thin',
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

        {/* 9 Solution Cards Grid */}
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="w-full card-surface rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[var(--button-middle)] transition-all duration-300 flex flex-col justify-between h-full border border-[var(--color-border)]/50 group bg-white relative overflow-hidden"
              >
                {/* Default Front View */}
                <div>
                  <div className="space-y-1.5 pb-2">
                    <div className="text-xs font-bold text-primary tracking-wide uppercase line-clamp-1">
                      {item.category}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-heading leading-snug h-14 flex items-start line-clamp-2">
                      <Link href={item.link} className="hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-brand-muted text-xs sm:text-sm leading-relaxed line-clamp-2 h-10">
                      {item.desc}
                    </p>
                  </div>

                  <div className={`h-44 sm:h-48 w-full rounded-xl overflow-hidden relative my-2.5 flex items-center justify-center ${item.imageFit === 'cover' ? 'bg-slate-900/10' : 'bg-slate-50/50 p-2'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${item.imageFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                    />
                  </div>
                </div>

                <div className="pt-3.5 mt-auto border-t border-slate-100 flex items-center">
                  <Link
                    href={item.link}
                    className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Xem giải pháp</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
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
