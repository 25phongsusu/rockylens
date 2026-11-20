import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Store,
  Phone,
  ShieldCheck,
  Award,
  FileCheck,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { constructMetadata } from '@/lib/seo/metadata';
import { assetUrl } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Về Chúng Tôi — Rocky - Canada Opticians',
  description:
    'Rocky – Thương hiệu tròng kính phát triển bởi chuyên gia khúc xạ Canada, mang đến giải pháp thị lực chất lượng cao cho người Việt và giá trị cốt lõi R-O-C-K-Y.',
  path: '/ve-chung-toi/',
});

function MapleLeafIcon({ className = 'w-6 h-6 text-[#D81E27]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 1.5l1.9 4.7 3.8-1.4-1.2 4.3 4.1 1-1.3 2.5 2.4 1.6-4.4 2.1.6 2.2-4.8-.8V22.5h-2.2v-4.8l-4.8.8.6-2.2-4.4-2.1 2.4-1.6-1.3-2.5 4.1-1-1.2-4.3 3.8 1.4L12 1.5z" />
    </svg>
  );
}

const rockyValues = [
  {
    letter: 'R',
    title: 'Reliability',
    desc: 'Uy tín, nhất quán trong sản phẩm và dịch vụ.',
  },
  {
    letter: 'O',
    title: 'Optics - Excellence',
    desc: 'Tiêu chuẩn quang học Canada vượt trội.',
  },
  {
    letter: 'C',
    title: 'Customer - Centricity',
    desc: 'Đồng hành cùng khách hàng và đối tác B2B.',
  },
  {
    letter: 'K',
    title: 'Knowledge-Driven',
    desc: 'Đổi mới từ chuyên môn và nghiên cứu sâu.',
  },
  {
    letter: 'Y',
    title: 'YOU MATTER',
    desc: 'Đây là năm giá trị cùng định hình tinh thần, bản sắc và hành trình phát triển của chúng tôi.',
  },
];

const strategicPartnerships = [
  {
    src: '/images/company/partner-satisloh-canrx-2026.jpg',
    badge: 'Wetzlar, Germany • 26/10/2026',
    title: 'Hợp Tác Chiến Lược Satisloh (EssilorLuxottica) & Rocky',
    desc: 'Chuyển giao công nghệ sản xuất tròng kính và ra mắt Trung tâm Công nghệ Canada RX Freeform (CanRx).',
  },
  {
    src: '/images/company/partner-ioves-2026.jpg',
    badge: 'TP. Hồ Chí Minh • 2026',
    title: 'Lễ Ký Kết Hợp Tác Chiến Lược Rocky & IOVES (Italy)',
    desc: 'Hợp tác sản xuất & mang tinh hoa kính mắt Châu Âu đến thị trường Việt Nam.',
  },
];

const certImages = [
  { src: '/images/company/cert-1.jpg', title: 'ISO 9001:2015', desc: 'Quản lý Chất lượng Quang học Quốc tế' },
  { src: '/images/company/cert-2.jpg', title: 'CE Marking', desc: 'Tiêu chuẩn An toàn Y tế Châu Âu' },
  { src: '/images/company/cert-3.jpg', title: 'FDA Standard', desc: 'Tiêu chuẩn Vật liệu Y tế Bắc Mỹ' },
  { src: '/images/company/cert-4.jpg', title: 'Kiểm Định Quang Sai', desc: 'Chứng chỉ Khúc xạ & Độ Truyền Quang' },
];

export default function AboutUsPage() {
  return (
    <div className="site-background min-h-screen text-slate-800">
      <Breadcrumbs items={[{ label: 'Về chúng tôi', href: '/ve-chung-toi/' }]} />

      {/* =========================================================
          1. HERO BANNER: ROCKY - CANADA OPTICIANS + MOUNTAINS
          ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF8FC] via-[#F4FCFE] to-white">
        {/* Top Title Area */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-4 relative z-20">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#165166] uppercase">
              ROCKY - CANADA OPTICIANS
            </h1>
            <MapleLeafIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#D81E27] shrink-0" />
          </div>
          <p className="mt-1.5 text-sm sm:text-lg font-medium italic text-[#2B677B] uppercase tracking-wide">
            ĐƯỢC PHÁT TRIỂN BỞI CHUYÊN GIA NHÃN KHOA CANADA
          </p>
        </div>

        {/* Panoramic Mountain + Maple Leaf + 7 Colorful Lenses Banner */}
        <div className="relative w-full max-w-7xl mx-auto px-0 sm:px-6 -mt-4 sm:-mt-8">
          <div className="relative w-full aspect-[16/8.2] sm:aspect-[16/7.2] overflow-hidden sm:rounded-3xl">
            <Image
              src={assetUrl('/images/banners/about-rocky-mountains.jpg')}
              alt="Rocky Canada Opticians - Dãy núi Rocky và bộ sưu tập tròng kính quang học"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Soft top & bottom blend */}
            <div className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#EBF8FC] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#F4FCFE] via-[#F4FCFE]/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* =========================================================
          2. BRAND STORY & 2x2 PHOTO COLLAGE
          ========================================================= */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Logo + Brand Introduction */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={assetUrl('/assets/logo_rocky_transparent.png')}
                  alt="Rocky Lens Canada Opticians"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#165166]">
                  <span>Canada Opticians</span>
                  <MapleLeafIcon className="w-4 h-4 text-[#D81E27]" />
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-700 font-medium">
                <p>
                  <strong className="text-[#165166] font-bold">Rocky</strong> – Thương hiệu tròng kính phát triển bởi chuyên gia khúc xạ Canada, mang đến giải pháp thị lực chất lượng cao cho người Việt.
                </p>
                <p>
                  Tiên phong ứng dụng công nghệ sản xuất hiện đại và cá nhân hóa tròng kính, hướng đến trải nghiệm thị giác tối ưu cho từng khách hàng.
                </p>
              </div>
            </div>

            {/* Right Column: 2 Strategic Partnership Photos */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {strategicPartnerships.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md shadow-[0_12px_32px_rgba(11,123,138,0.12)] border border-white/90 flex flex-col group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={assetUrl(item.src)}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                        {item.badge}
                      </span>
                      <h3 className="text-sm font-extrabold text-[#165166] leading-snug mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. GIÁ TRỊ CỐT LÕI CỦA R-O-C-K-Y
          ========================================================= */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative background optical lens on bottom-right */}
        <div className="hidden lg:block absolute -right-10 bottom-0 w-72 h-72 opacity-80 pointer-events-none select-none">
          <Image
            src={assetUrl('/assets/h-lens3.png')}
            alt=""
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#165166] mb-8 tracking-tight">
            Giá trị cốt lõi của <span className="tracking-wider">R-O-C-K-Y</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {rockyValues.map((item) => (
              <div
                key={item.letter}
                className="rounded-2xl bg-white/85 backdrop-blur-md border border-cyan-100/90 shadow-[0_12px_32px_rgba(0,115,153,0.08)] p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,115,153,0.14)]"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#1A627D] leading-none mb-2">
                  {item.letter}
                </div>
                <div className="text-sm sm:text-[15px] font-extrabold text-[#0B3B4E] mb-3 min-h-[2.25rem] flex items-center justify-center">
                  {item.title}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. CHỨNG NHẬN CHẤT LƯỢNG QUỐC TẾ (GỌN GÀNG, ĐỒNG BỘ)
          ========================================================= */}
      <section id="chung-nhan" className="py-12 sm:py-16 px-4 sm:px-6 bg-white/70 border-t border-cyan-100/70">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                <FileCheck className="w-4 h-4" />
                <span>Chứng Nhận Chất Lượng</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#165166]">
                Tiêu Chuẩn Quang Học Quốc Tế
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#165166]">
                <Award className="w-3.5 h-3.5" /> ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#165166]">
                <ShieldCheck className="w-3.5 h-3.5" /> CE & FDA Standard
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certImages.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[3/4] bg-slate-50">
                  <Image
                    src={assetUrl(cert.src)}
                    alt={cert.title}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
                <div className="p-3.5 border-t border-slate-100 text-center">
                  <div className="text-sm font-bold text-[#165166]">{cert.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CTA FOOTER BANNER
          ========================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-[#007A99] to-[#003B50] text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black">
              Trải Nghiệm Tròng Kính Rocky Lens Chuẩn Canada
            </h2>
            <p className="text-sm sm:text-base text-cyan-100">
              Khám phá danh mục sản phẩm chính hãng hoặc tìm cửa hàng đại lý gần bạn nhất.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/trong-kinh/"
              className="px-6 py-3 rounded-full bg-white text-[#003B50] font-bold text-sm hover:bg-cyan-50 transition-all flex items-center gap-2"
            >
              <Store className="w-4 h-4" />
              <span>Xem Sản Phẩm</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lien-he/"
              className="px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Tìm Đại Lý / Liên Hệ</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
