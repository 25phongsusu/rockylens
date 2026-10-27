'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const allCerts = [
  // Group 1: Canada
  { src: '/images/bangkhen/11.jpg', title: 'The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Thao Nguyen)', group: 'Đội ngũ chuyên gia Canada' },
  { src: '/images/bangkhen/12.jpg', title: 'The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Ha Vu)', group: 'Đội ngũ chuyên gia Canada' },
  { src: '/images/bangkhen/13.jpg', title: 'The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Tan Dang)', group: 'Đội ngũ chuyên gia Canada' },
  { src: '/images/bangkhen/14.jpg', title: 'The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Tiep Truong)', group: 'Đội ngũ chuyên gia Canada' },
  { src: '/images/bangkhen/15.jpg', title: 'Georgian College of Applied Arts and Technology - Bằng tốt nghiệp Optician Canada', group: 'Đội ngũ chuyên gia Canada' },
  { src: '/images/bangkhen/16.jpg', title: 'National Association of Canadian Optician Regulators (NACOR Certificate)', group: 'Đội ngũ chuyên gia Canada' },
  // Group 2: International & Asia
  { src: '/images/bangkhen/1.jpg', title: 'Giấy chứng nhận ISO 13485:2016 - Hệ thống quản lý chất lượng thiết bị y tế quốc tế', group: 'Tiêu chuẩn quốc tế' },
  { src: '/images/bangkhen/2.jpg', title: 'Diễn đàn hợp tác kinh tế Việt Nam - Asia 2024: Thương hiệu uy tín hội nhập Châu Á', group: 'Giải thưởng chất lượng Châu Á' },
  { src: '/images/bangkhen/3.jpg', title: 'Chứng nhận Sản phẩm & Dịch vụ chất lượng Châu Á 2024 (Asia Quality Products & Services)', group: 'Giải thưởng chất lượng Châu Á' },
  { src: '/images/bangkhen/4.jpg', title: 'The Best of Vietnam 2024 - Top 20 Sản phẩm dịch vụ chất lượng tốt nhất Việt Nam', group: 'Giải thưởng Việt Nam' },
  // Group 3: Community
  { src: '/images/bangkhen/31.jpg', title: 'Giấy khen Hội cứu trợ trẻ em tàn tật Việt Nam - Tích cực vì sức khỏe thị lực trẻ em', group: 'Hoạt động cộng đồng' },
  { src: '/images/bangkhen/32.jpg', title: 'Giấy khen Hội nạn nhân chất độc da cam / Dioxin Việt Nam - Hoạt động thiện nguyện', group: 'Hoạt động cộng đồng' },
  { src: '/images/bangkhen/33.jpg', title: 'Kỷ niệm chương Tấm lòng nhân ái vì sự nghiệp chăm sóc sức khỏe cộng đồng', group: 'Hoạt động cộng đồng' },
];

const partnerLogos = [
  { src: '/uploads/partners/partner_1.png', alt: 'Đối tác CARAS Eyewear' },
  { src: '/uploads/partners/partner_2.png', alt: 'Đối tác LB Luxury Eyewear' },
  { src: '/uploads/partners/partner_3.png', alt: 'Đối tác ZE Eyewear' },
  { src: '/uploads/partners/partner_4.png', alt: 'Đối tác Mắt Kính Ngọc Sáng' },
  { src: '/uploads/partners/partner_5.png', alt: 'Đối tác Mắt Kính Uy Tín' },
  { src: '/uploads/partners/partner_6.png', alt: 'Đối tác Mắt Kính Phân Phối' },
  { src: '/uploads/partners/partner_8.png', alt: 'Đối tác Mắt Kính Khúc Xạ' },
  { src: '/uploads/partners/partner_9.png', alt: 'Đối tác Chuỗi Cửa Hàng Kính' },
  { src: '/uploads/partners/partner_10.png', alt: 'Đối tác Nhãn Khoa Đối Tác' },
];

const brandValues = [
  'Tính năng ưu việt bảo vệ mắt toàn diện',
  'Đáp ứng toàn diện mọi nhu cầu thị lực',
  'Giải pháp thị lực ở mọi phân khúc giá',
  'Sản phẩm đạt chất lượng quốc tế',
];

export default function WhyRockySection() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex - 1 + allCerts.length) % allCerts.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex + 1) % allCerts.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCertIndex === null) return;
      if (e.key === 'Escape') setSelectedCertIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertIndex]);

  return (
    <section id="vi-sao-rocky" className="relative py-24 px-6 bg-gradient-to-b from-[var(--site-bg-start)] via-white via-50% to-[var(--site-bg-middle)] overflow-hidden">
      {/* Subtle Ambient Caustic Light Orbs */}
      <div className="absolute -top-24 right-1/3 w-[500px] h-48 bg-[var(--site-bg-end)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[500px] h-48 bg-[var(--button-start)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Part A: Rocky Canada Opticians & Bằng chứng thương hiệu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight">
              Rocky Canada Opticians
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Được phát triển bởi đội ngũ chuyên gia khúc xạ tại Canada, Rocky mang tinh hoa quang học Canada về phục vụ cộng đồng Việt Nam. Chúng tôi kết hợp nền tảng chuyên môn vững chắc với khát vọng nâng cao sức khỏe thị lực, mang đến những giải pháp tròng kính đạt chuẩn quốc tế, phù hợp với nhu cầu và điều kiện sống của người Việt.
              </p>
              <p>
                Hiện Rocky đã có mặt tại 34 tỉnh thành với hệ thống phân phối rộng khắp, cam kết mang lại trải nghiệm dịch vụ nhanh chóng, chính xác và tận tâm.
              </p>
            </div>

            {/* 4 Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {brandValues.map((val, idx) => (
                <div key={idx} className="p-4 rounded-2xl card-surface flex items-center gap-3 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--button-middle)] shrink-0" />
                  <span className="text-sm font-bold text-heading">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certificates & Awards */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Group 1: Canada Optician Certificates (Indices 0 - 5) */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {allCerts.slice(0, 6).map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCertIndex(idx)}
                    className="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.title}
                      fill
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm font-bold text-heading">
                Đội ngũ nhân sự tốt nghiệp và có chứng chỉ hành nghề tại Canada (Bấm vào để xem lớn)
              </p>
            </div>

            {/* Group 2: International & Asia Awards (Indices 6 - 9) */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {allCerts.slice(6, 10).map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCertIndex(idx + 6)}
                    className="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.title}
                      fill
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm font-bold text-heading">
                Sản phẩm đạt Tiêu chuẩn quốc tế và vinh dự đạt giải thưởng chất lượng châu Á
              </p>
            </div>

            {/* Group 3: Community Activities (Indices 10 - 12) */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {allCerts.slice(10, 13).map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCertIndex(idx + 10)}
                    className="rounded-2xl shadow-xs aspect-[4/3] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.title}
                      fill
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm font-bold text-heading">
                Tích cực tham gia hoạt động vì cộng đồng
              </p>
            </div>

          </div>

        </div>

        {/* Part B: Đối tác của chúng tôi */}
        <div className="pt-12 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              Đối tác của chúng tôi
            </h3>
            <p className="text-brand-muted text-sm max-w-xl mx-auto">
              Đồng hành cùng hệ thống các chuỗi mắt kính và phòng khám khúc xạ uy tín trên toàn quốc
            </p>
          </div>

          {/* Infinite Marquee Track Moving Slowly from Right to Left */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--site-bg-middle)] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--site-bg-middle)] to-transparent z-10" />

            <div className="flex items-center gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
              {/* Set 1 */}
              {partnerLogos.map((p, idx) => (
                <div
                  key={`p1-${idx}`}
                  className="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0 border border-[var(--color-border)]/60"
                >
                  <div className="relative w-36 sm:w-44 h-14 sm:h-16">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      sizes="200px"
                    />
                  </div>
                </div>
              ))}
              {/* Set 2 (Duplicate for seamless infinite loop) */}
              {partnerLogos.map((p, idx) => (
                <div
                  key={`p2-${idx}`}
                  className="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0 border border-[var(--color-border)]/60"
                >
                  <div className="relative w-36 sm:w-44 h-14 sm:h-16">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      sizes="200px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {selectedCertIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[var(--b2b-end)]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedCertIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedCertIndex(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 shadow-lg"
            aria-label="Bằng khen trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 shadow-lg"
            aria-label="Bằng khen tiếp theo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4 max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-auto max-w-full rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center p-2 shadow-2xl">
              <img
                src={allCerts[selectedCertIndex].src}
                alt={allCerts[selectedCertIndex].title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
            <div className="text-center space-y-1">
              <div className="text-base sm:text-lg font-bold text-white max-w-2xl px-4">
                {allCerts[selectedCertIndex].title}
              </div>
              <div className="text-sm font-semibold text-[var(--button-start)]">
                Chứng nhận {selectedCertIndex + 1} / {allCerts.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
