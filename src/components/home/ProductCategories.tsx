'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';

export const productSolutions = [
  {
    num: '01 / 09',
    category: 'THIẾT BỊ SỐ & CHUẨN MÀU 100%',
    filter: 'Làm việc',
    title: 'Dành cho thiết kế đồ họa & ngồi máy tính (Trong suốt không ngả vàng)',
    desc: 'Dành cho designer, lập trình viên: tròng trong suốt 99.8% chuẩn màu 100% không ngả vàng, lọc ánh sáng xanh tím có hại giúp giảm mỏi mắt.',
    image: '/uploads/solutions/trong-kinh-do-hoa-designer-chuan-mau.png',
    alt: 'Tròng kính thiết kế đồ họa designer chuẩn màu 100% không ngả vàng Rocky BlueCut UV420',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-156-bluecut-shmc/',
    productName: 'Rocky BlueCut UV420 Pure Clear',
    subTag: 'Trong Suốt 99.8% & Chuẩn Màu 100%',
    keyFeature: 'Lọc ánh sáng xanh màn hình, không ngả vàng, chuẩn màu đồ họa',
    techProcess: 'Phôi Monomer UV420 hấp thụ sâu khử tia bức xạ',
    visionExperience: 'Mắt êm dịu, không mỏi, hình ảnh chuẩn xác tuyệt đối',
    indexOption: '1.56 | 1.60 | 1.67 | 1.74',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '02 / 09',
    category: 'TIỆN LỢI VĂN PHÒNG & RA NẮNG (2-IN-1)',
    filter: 'Làm việc',
    title: 'Dành cho dân văn phòng & làm việc máy tính (Lọc ASX + Đổi màu)',
    desc: 'Trong phòng làm việc lọc ánh sáng xanh máy tính êm dịu mắt, bước ra nắng tròng tự động đổi màu râm chống chói và cản 100% tia UV tiện lợi 2 trong 1.',
    image: '/uploads/solutions/trong-kinh-van-phong-chong-asx-doi-mau.png',
    alt: 'Tròng kính dân văn phòng lọc ánh sáng xanh máy tính và tự đổi màu khi ra nắng Rocky Trendy Smart BlueCut Photo',
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
    num: '03 / 09',
    category: 'BẢO VỆ MẮT NGOÀI TRỜI GẮT',
    filter: 'Ngoài trời',
    title: 'Dành cho người hay hoạt động ngoài trời (Chống UV400 / UV420 tối đa)',
    desc: 'Tự động chuyển màu râm mát khi ra nắng, ngăn chặn triệt để 100% tia cực tím độc hại UV400 và UV420, phòng ngừa thoái hóa điểm vàng, chống chói lóa ngoài trời.',
    image: '/uploads/solutions/trong-kinh-ngoai-troi-chong-tia-uv.png',
    alt: 'Tròng kính hoạt động ngoài trời chống tia cực tím UV400 UV420 tối đa Rocky MaxShield Protect',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-167-ultra-thin-bluecut/',
    productName: 'Rocky UV420 MaxShield Protect',
    subTag: 'Ngăn 100% Bức Xạ Cực Tím & Chống Chói Nắng',
    keyFeature: 'Cản triệt để tia cực tím UV400/UV420, tự đổi màu râm chống chói',
    techProcess: 'Phôi hấp thụ quang phổ độc hại + Phủ Nano Sapphire 9H',
    visionExperience: 'Dịu mát tức thì khi ra nắng gắt, bảo vệ võng mạc dài lâu',
    indexOption: '1.56 | 1.60 | 1.67 ASP',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '04 / 09',
    category: 'LÁI XE ĐÊM & ĐI MƯA AN TOÀN',
    filter: 'Ngoài trời',
    title: 'Dành cho tài xế & người hay lái xe ban đêm (Chống chói đèn pha LED)',
    desc: 'Triệt tiêu quầng sáng chói lóa từ đèn pha LED đối diện, tăng cường độ tương phản nhìn rõ biển báo và vạch đường ban đêm, trượt nước mưa tối đa.',
    image: '/uploads/solutions/trong-kinh-lai-xe-ban-dem-driveshield.png',
    alt: 'Tròng kính lái xe ban đêm chống chói đèn pha LED và trượt nước mưa Rocky DriveShield Ruby AR',
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
    category: 'THỊ LỰC TOÀN DIỆN MỌI CỰ LY',
    filter: 'Làm việc',
    title: 'Dành cho người lớn tuổi & lão thị (Đa tròng nhìn Xa - Trung - Gần)',
    desc: 'Xóa bỏ đường lằn hai tròng, chuyển tiếp êm ái mọi cự ly: đọc sách báo, xem điện thoại, làm việc máy tính đến đi lại lái xe trong 1 cặp kính duy nhất.',
    image: '/uploads/solutions/trong-kinh-da-trong-xa-trung-gan.png',
    alt: 'Tròng kính đa tròng kỹ thuật số nhìn rõ 3 cự ly Xa Trung Gần liền mạch CanRx Freeform HD Progressive',
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
    category: 'BẢO VỆ MẮT HỌC ĐƯỜNG',
    filter: 'Chuyên biệt',
    title: 'Dành cho trẻ em & học sinh cận thị (Kiểm soát tăng độ cận)',
    desc: 'Ứng dụng công nghệ vi thấu kính Defocus 360° làm chậm tốc độ tăng độ cận học đường đến 60%, giúp bảo vệ trục nhãn cầu và giữ gìn thị lực cho bé.',
    image: '/uploads/solutions/trong-kinh-kiem-soat-can-thi-tre-em.png',
    alt: 'Tròng kính kiểm soát tiến triển độ cận thị cho trẻ em học sinh Defocus MyoControl Kids HD',
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
    category: 'PHONG CÁCH XU HƯỚNG CÁ TÍNH',
    filter: 'Ngoài trời',
    title: 'Dành cho tín đồ thời trang (Kính cận đổi màu đa sắc cá tính)',
    desc: 'Biến chiếc kính cận thành kính râm sành điệu với bộ sưu tập 7 sắc màu xu hướng: Khói Titan, Trà Hổ Phách, Xanh Sapphire... đổi màu nhạy sáng khi ra nắng.',
    image: '/uploads/solutions/trong-kinh-doi-mau-thoi-trang-trendy.png',
    alt: 'Tròng kính cận đổi màu thời trang 7 sắc màu cá tính nhạy sáng ngoài trời Rocky Trendy Style Photochromic',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-chameleon-photochromic/',
    productName: 'Rocky Trendy Style Photochromic',
    subTag: 'Bộ Sưu Tập Màu Đổi Thời Thượng',
    keyFeature: 'Đổi màu nhanh nhạy theo tia UV, 7 sắc màu thời thượng',
    techProcess: 'Lớp phủ xoay ma trận màu Spin-Coat + Váng dầu SHMC',
    visionExperience: 'Thời trang cá tính, bảo vệ mắt chống chói lóa ngoài trời',
    indexOption: '1.56 | 1.60 Trendy',
    warranty: '24 tháng chính hãng',
  },
  {
    num: '08 / 09',
    category: 'CHUYÊN GỌNG KHOAN BẮT ỐC',
    filter: 'Chuyên biệt',
    title: 'Dành cho người đeo gọng khoan, không viền (Siêu dai MR-8 chống vỡ)',
    desc: 'Chất liệu Mitsui MR-8 Nhật Bản siêu dẻo dai và chịu lực uốn đỉnh cao, khoan bắt ốc chắc chắn không lo rạn nứt mép kính, thanh thoát và sang trọng.',
    image: '/uploads/solutions/trong-kinh-gong-khoan-chong-vo-mr8.png',
    alt: 'Tròng kính chuyên gọng khoan bắt ốc không viền phôi Mitsui MR-8 dẻo dai chống mẻ vỡ',
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
    category: 'CẬN VIỄN NẶNG & TRÒNG MỎNG NHẸ',
    filter: 'Chuyên biệt',
    title: 'Độ Cận Viễn Nặng (Tròng Mỏng Chiết Suất 1.67 - 1.74)',
    desc: 'Chiết suất cao 1.67 và 1.74 mỏng nhẹ hơn đến 45%, triệt tiêu độ dày đáy chai ở mép tròng, mắt nhìn tự nhiên không bị thu nhỏ khi lên gọng kính.',
    image: '/uploads/solutions/trong-kinh-mong-chiet-suat-cao-167-174.png',
    alt: 'Tròng kính mỏng chiết suất cao 1.67 và 1.74 triệt tiêu mép dày độ cận viễn nặng Rocky Ultra Thin',
    imageFit: 'cover' as const,
    link: '/trong-kinh/rocky-174-ultra-high-index/',
    productName: 'Rocky Ultra Thin 1.74 Aspheric',
    subTag: 'Chiết Suất 1.67 & 1.74 Mỏng Nhẹ',
    keyFeature: 'Chiết suất siêu mỏng 1.67 - 1.74, triệt tiêu viền dày đáy chai',
    techProcess: 'Phôi Monomer chiết suất cao + Thiết kế quang học Aspheric',
    visionExperience: 'Đôi mắt tự nhiên không bị thu nhỏ, tròng nhẹ êm trên sống mũi',
    indexOption: '1.67 | 1.74 Ultra Thin',
    warranty: '24 tháng chính hãng',
  },
];


export const essilorShowcaseProducts = [
  {
    brand: 'Rocky.',
    subBrand: 'BlueCut',
    series: 'UV420 Start Clear',
    headline: 'Kính đơn tròng thế hệ mới trong suốt 99.8% chuẩn màu cho dân thiết kế & văn phòng',
    image: '/uploads/solutions/trong-kinh-do-hoa-designer-chuan-mau.png',
    link: '/trong-kinh/rocky-156-bluecut-shmc/',
  },
  {
    brand: 'Rocky.',
    subBrand: 'Trendy',
    series: 'Smart Photochromic',
    headline: 'Người bạn đồng hành tốt nhất lọc ánh sáng xanh và đổi màu râm tức thì ra nắng',
    image: '/uploads/solutions/trong-kinh-van-phong-chong-asx-doi-mau.png',
    link: '/trong-kinh/rocky-trendy-photochromic-grey/',
  },
  {
    brand: 'Rocky.',
    subBrand: 'DriveShield',
    series: 'Ruby AR Night Vision',
    headline: 'Sắc nét tức thì ngay cả khi di chuyển, chống chói đèn pha LED và trượt nước mưa',
    image: '/uploads/solutions/trong-kinh-lai-xe-ban-dem-driveshield.png',
    link: '/trong-kinh/rocky-driveshield-night-vision/',
  },
  {
    brand: 'CanRx.',
    subBrand: 'Freeform',
    series: 'Progressive HD Series',
    headline: 'Cảm giác thoải mái cho mắt cả ngày dài, nhìn rõ liền mạch mọi cự ly Xa - Gần',
    image: '/uploads/solutions/trong-kinh-da-trong-xa-trung-gan.png',
    link: '/trong-kinh/rocky-freeform-progressive-hd/',
  },
  {
    brand: 'Defocus.',
    subBrand: 'MyoControl',
    series: 'Kids DIMS HD',
    headline: 'Giải pháp khoa học tiên tiến giúp kiểm soát và làm chậm tiến triển độ cận ở trẻ em',
    image: '/uploads/solutions/trong-kinh-kiem-soat-can-thi-tre-em.png',
    link: '/trong-kinh/rocky-myocontrol-dims-kids/',
  },
  {
    brand: 'Rocky.',
    subBrand: 'Chameleon',
    series: 'Trendy 7 Colors',
    headline: 'Biến chiếc kính cận thành kính râm sành điệu với bộ sưu tập 7 sắc màu cá tính',
    image: '/uploads/solutions/trong-kinh-doi-mau-thoi-trang-trendy.png',
    link: '/trong-kinh/rocky-chameleon-photochromic/',
  },
  {
    brand: 'Rocky.',
    subBrand: 'MR-8',
    series: 'Tough Rimless Drill',
    headline: 'Phôi siêu dẻo dai chịu lực uốn đỉnh cao, bắt ốc chắc chắn cho gọng không viền',
    image: '/uploads/solutions/trong-kinh-gong-khoan-chong-vo-mr8.png',
    link: '/trong-kinh/rocky-160-mr8-aspheric/',
  },
  {
    brand: 'Rocky.',
    subBrand: 'UltraThin',
    series: '1.74 High Index',
    headline: 'Thẩm mỹ mỏng nhẹ tối ưu, triệt tiêu độ dày đáy chai cho mắt có độ cận viễn nặng',
    image: '/uploads/solutions/trong-kinh-mong-chiet-suat-cao-167-174.png',
    link: '/trong-kinh/rocky-174-ultra-high-index/',
  },
  {
    brand: 'Rocky.',
    subBrand: 'MaxShield',
    series: 'UV420 Solar Guard',
    headline: 'Bảo vệ võng mạc tối đa, ngăn chặn 100% tia cực tím độc hại UV400 và UV420 ngoài trời',
    image: '/uploads/solutions/trong-kinh-ngoai-troi-chong-tia-uv.png',
    link: '/trong-kinh/rocky-167-ultra-thin-bluecut/',
  },
];

export default function ProductCategories() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [displayMode, setDisplayMode] = useState<'essilor' | 'grid'>('essilor');
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const mode = (params.get('product_style') || params.get('style') || params.get('view') || '').toLowerCase();
      if (mode === 'grid' || mode === 'standard') {
        setDisplayMode('grid');
      } else if (mode === 'essilor') {
        setDisplayMode('essilor');
      } else {
        const saved = localStorage.getItem('rocky_product_mode');
        if (saved === 'grid') setDisplayMode('grid');
        else if (saved === 'essilor') setDisplayMode('essilor');
      }
    } catch {}
  }, []);

  const handleModeChange = (mode: 'essilor' | 'grid') => {
    setDisplayMode(mode);
    try {
      localStorage.setItem('rocky_product_mode', mode);
    } catch {}
  };

  const scrollCarousel = (direction: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

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
        {/* Mode Switcher Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-1 border-b border-slate-200/60 dark:border-white/10">
          <div className="inline-flex p-1 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200/90 dark:border-white/15 shadow-xs">
            <button
              type="button"
              onClick={() => handleModeChange('essilor')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                displayMode === 'essilor'
                  ? 'bg-gradient-to-r from-[var(--button-start)] to-[var(--button-middle)] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phong Cách Essilor (Showcase)</span>
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold ${
                displayMode === 'essilor' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800 dark:bg-white/15 dark:text-cyan-300'
              }`}>
                HOT
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                displayMode === 'grid'
                  ? 'bg-gradient-to-r from-[var(--button-start)] to-[var(--button-middle)] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Lưới Danh Mục Tiêu Chuẩn (Grid)</span>
            </button>
          </div>

          <div className="text-xs text-brand-muted">
            {displayMode === 'essilor' ? 'Chế độ Showcase 4 cột phong cách Essilor quốc tế' : 'Chế độ lưới lọc theo nhóm nhu cầu'}
          </div>
        </div>

        {/* VIEW 1: ESSILOR SHOWCASE CAROUSEL */}
        {displayMode === 'essilor' && (
          <div className="relative max-w-[1340px] mx-auto py-2">
            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200/90 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:text-primary hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Xem sản phẩm trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200/90 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:text-primary hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Xem sản phẩm tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 no-scrollbar"
            >
              {essilorShowcaseProducts.map((p, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[300px] lg:w-[295px] shrink-0 snap-start transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Top Lifestyle Photo */}
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-square relative mb-4 bg-slate-100">
                      <img
                        src={p.image}
                        alt={p.headline}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold shadow-xs tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>Rocky Canada</span>
                      </div>
                    </div>

                    {/* Brand Title */}
                    <div className="space-y-0.5">
                      <div className="text-xl font-black text-slate-900 tracking-tight flex items-baseline gap-1">
                        <span>{p.brand}</span>
                        <span className="text-base font-medium text-primary">{p.subBrand}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {p.series}
                      </div>
                    </div>

                    {/* Punchy 2-line Headline */}
                    <p className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 min-h-[2.5rem] mt-2 mb-4">
                      {p.headline}
                    </p>
                  </div>

                  {/* Full-width Solid Pill Button */}
                  <Link
                    href={p.link}
                    className="w-full py-2.5 px-6 rounded-full font-bold text-sm text-white bg-[var(--button-middle)] hover:bg-[var(--button-end)] transition-all text-center flex items-center justify-center shadow-xs group-hover:shadow-md"
                  >
                    <span>Khám phá ngay</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: STANDARD GRID WITH CATEGORY TABS */}
        {displayMode === 'grid' && (
          <div className="space-y-6">
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
                    className="product-sol-card group flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      {/* Hình ảnh */}
                      <div className={`h-48 sm:h-54 w-full rounded-2xl overflow-hidden relative ${item.imageFit === 'cover' ? 'bg-slate-900/10' : 'bg-white/10 backdrop-blur-xs p-2'}`}>
                        <img
                          src={item.image}
                          alt={(item as { alt?: string }).alt || item.title}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${item.imageFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                        />
                      </div>

                      {/* Text */}
                      <h3 className="text-base sm:text-lg font-bold text-heading group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[3rem] flex items-start">
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>

                    {/* Xem Giá */}
                    <div className="pt-2 mt-auto flex items-center">
                      <Link
                        href={item.link}
                        className="card-price-btn -ml-1 text-xs sm:text-sm"
                      >
                        <span>Xem Giá</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

                


        {/* Bottom CTA Button: Xem thêm */}
        <div className="text-center pt-3">
          <Link
            href="/trong-kinh/"
            className="button-primary border-0 inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300"
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
