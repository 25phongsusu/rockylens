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
  title: 'Về Chúng Tôi — Hành Trình Rocky - Canada Opticians',
  description:
    'Khám phá hành trình thương hiệu tròng kính Rocky (Canada Opticians) tại Việt Nam, các cột mốc hợp tác chiến lược cùng Satisloh (EssilorLuxottica) và IOVES (Italy), cùng 5 giá trị cốt lõi R-O-C-K-Y.',
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

const journeyStories = [
  {
    chapter: 'CÂU CHUYỆN 01',
    location: 'Wetzlar, Germany • 26/10/2026',
    title: 'Bước Ngoặt Công Nghệ Cùng Satisloh (EssilorLuxottica) — Ra Mắt Trung Tâm CanRx',
    paragraphs: [
      'Không dừng lại ở việc phân phối tròng kính chất lượng cao, hành trình của Rocky luôn hướng tới mục tiêu đưa công nghệ gia công quang học đỉnh cao thế giới về phục vụ trực tiếp cho thị lực người Việt.',
      'Tại thành phố Wetzlar (Đức) — cái nôi của ngành công nghệ quang học chính xác toàn cầu, Rocky (Canada Opticians) đã chính thức ký kết hợp tác chiến lược và chuyển giao công nghệ sản xuất tròng kính cùng Satisloh (thuộc tập đoàn EssilorLuxottica), đánh dấu sự ra đời của Trung tâm Công nghệ Canada RX Freeform (CanRx).',
      'Cột mốc này mở ra kỷ nguyên mới cho tròng kính cá nhân hóa tại Việt Nam: mỗi cặp tròng được tính toán và mài phay kỹ thuật số theo từng thông số độ khúc xạ, độ cong gọng và thói quen nhìn riêng biệt của từng người đeo.',
    ],
    image: '/images/company/partner-satisloh-canrx-2026.jpg',
    imageAlt: 'Lễ ký kết hợp tác chiến lược và chuyển giao công nghệ giữa Satisloh (EssilorLuxottica) và Rocky (Canada Opticians)',
    reverse: false,
  },
  {
    chapter: 'CÂU CHUYỆN 02',
    location: 'TP. Hồ Chí Minh • 2026',
    title: 'Kết Nối Tinh Hoa Kính Mắt Châu Âu Cùng IOVES (Italy)',
    paragraphs: [
      'Một cặp kính hoàn hảo là sự kết hợp hài hòa giữa thấu kính chuẩn xác và chiếc gọng kính tinh tế, bền bỉ. Trên hành trình hoàn thiện trải nghiệm thị giác toàn diện, Rocky đã chính thức ký kết hợp tác chiến lược cùng IOVES — nhà thiết kế và sản xuất mắt kính danh tiếng từ Ý.',
      'Sự đồng hành này đưa những dòng gọng kính mang đậm tinh thần chế tác Châu Âu như Orisee, Ossé, Mustang, Amarcord và West hòa quyện cùng công nghệ tròng kính Rocky chuẩn Canada tại thị trường Việt Nam.',
      'Đây không chỉ là bước tiến mở rộng hệ sinh thái sản phẩm cho hệ thống 500+ đối tác cửa hàng mắt kính trên toàn quốc, mà còn là cam kết của Rocky trong việc mang đến những sản phẩm chuẩn quốc tế với giá trị bền vững cho người tiêu dùng Việt.',
    ],
    image: '/images/company/partner-ioves-2026.jpg',
    imageAlt: 'Lễ ký kết hợp tác chiến lược giữa Rocky (Canada Opticians) và IOVES (Italy) tại TP. Hồ Chí Minh',
    reverse: true,
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-4 relative z-20">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#12566A] uppercase">
              ROCKY - CANADA OPTICIANS
            </h1>
            <MapleLeafIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#D81E27] shrink-0" />
          </div>
          <p className="mt-1.5 text-sm sm:text-lg font-medium italic text-[#2B677B] uppercase tracking-wide">
            ĐƯỢC PHÁT TRIỂN BỞI CHUYÊN GIA NHÃN KHOA CANADA
          </p>
        </div>

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
            <div className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#EBF8FC] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* =========================================================
          2. KHỞI NGUỒN & HÀNH TRÌNH PHÁT TRIỂN TẠI VIỆT NAM (ROCKY CANADA OPTICIANS)
          ========================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Logo Rocky Canada Opticians */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end lg:pr-4">
              <img
                src={assetUrl('/assets/logo_rocky_transparent.png')}
                alt="Rocky Canada Opticians"
                className="h-28 sm:h-36 w-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Narrative & 4 Feature Cards */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5 text-base sm:text-[17px] leading-relaxed text-slate-700">
              <h2 className="text-3xl sm:text-4xl font-black text-[#12566A] tracking-tight">
                Rocky Canada Opticians
              </h2>
              <p>
                Được phát triển bởi đội ngũ chuyên gia khúc xạ tại Canada, Rocky mang tinh hoa quang học Canada về phục vụ cộng đồng Việt Nam. Chúng tôi kết hợp nền tảng chuyên môn vững chắc với khát vọng nâng cao sức khỏe thị lực, mang đến những giải pháp tròng kính đạt chuẩn quốc tế, phù hợp với nhu cầu và điều kiện sống của người Việt.
              </p>
              <p>
                Hiện Rocky đã có mặt tại 34 tỉnh thành với hệ thống phân phối rộng khắp, cam kết mang lại trải nghiệm dịch vụ nhanh chóng, chính xác và tận tâm.
              </p>

              {/* 4 Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-2">
                {[
                  'Tính năng ưu việt bảo vệ mắt toàn diện',
                  'Đáp ứng toàn diện mọi nhu cầu thị lực',
                  'Giải pháp thị lực ở mọi phân khúc giá',
                  'Sản phẩm đạt chất lượng quốc tế',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border border-[#BEE1EC] bg-white/80 backdrop-blur-sm shadow-[0_2px_8px_rgba(18,86,106,0.04)] hover:border-[#12566A]/40 transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#12566A] shrink-0" />
                    <span className="text-[15px] sm:text-[16px] font-bold text-[#12566A] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MỖI HÌNH ẢNH LÀ MỘT CÂU CHUYỆN CHIẾN LƯỢC (LARGE FORMAT)
          ========================================================= */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 space-y-16 sm:space-y-24">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
          {journeyStories.map((story, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Large Standalone Image (No Card Wrapper) */}
              <div
                className={`lg:col-span-7 ${
                  story.reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(13,70,87,0.16)]">
                  <Image
                    src={assetUrl(story.image)}
                    alt={story.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                </div>
              </div>

              {/* Story Narrative */}
              <div
                className={`lg:col-span-5 space-y-4 ${
                  story.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <h3 className="text-2xl sm:text-[26px] font-black text-[#12566A] leading-snug">
                  {story.title}
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {story.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          4. GIÁ TRỊ CỐT LÕI CỦA R-O-C-K-Y
          ========================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="hidden lg:block absolute -right-10 bottom-0 w-72 h-72 opacity-80 pointer-events-none select-none">
          <Image
            src={assetUrl('/assets/h-lens3.png')}
            alt=""
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#12566A] mb-8 tracking-tight">
            Giá trị cốt lõi của <span className="tracking-wider">R-O-C-K-Y</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {rockyValues.map((item) => (
              <div
                key={item.letter}
                className="rounded-2xl bg-white/85 backdrop-blur-md border border-[var(--color-border)] shadow-[0_12px_32px_rgba(13,70,87,0.07)] p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(13,70,87,0.12)]"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#156074] leading-none mb-2">
                  {item.letter}
                </div>
                <div className="text-sm sm:text-[15px] font-extrabold text-[#0D4657] mb-3 min-h-[2.25rem] flex items-center justify-center">
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
          5. CHỨNG NHẬN CHẤT LƯỢNG QUỐC TẾ
          ========================================================= */}
      <section id="chung-nhan" className="py-12 sm:py-16 px-4 sm:px-6 bg-white/75 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                <FileCheck className="w-4 h-4" />
                <span>Chứng Nhận Chất Lượng</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#12566A]">
                Tiêu Chuẩn Quang Học Quốc Tế
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F1FAFD] border border-[var(--color-border)] text-[#12566A]">
                <Award className="w-3.5 h-3.5" /> ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F1FAFD] border border-[var(--color-border)] text-[#12566A]">
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
                  <div className="text-sm font-bold text-[#12566A]">{cert.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. CTA FOOTER BANNER
          ========================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-[#156074] to-[#0D4657] text-white">
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
              className="px-6 py-3 rounded-full bg-white text-[#0D4657] font-bold text-sm hover:bg-[#F1FAFD] transition-all flex items-center gap-2"
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
