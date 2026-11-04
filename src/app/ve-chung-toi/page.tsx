import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  ShieldCheck,
  Factory,
  HeartHandshake,
  CheckCircle2,
  Globe,
  Users,
  Eye,
  Layers,
  Sparkles,
  MapPin,
  ArrowRight,
  Heart,
  Cpu,
  Glasses,
  Check,
  Store,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: 'Về Chúng Tôi — Rocky Lens Canada • Sáng Mắt Sáng Lòng',
  description:
    'Tìm hiểu lịch sử thương hiệu Rocky Lens (Canada Opticians), triết lý "Sáng mắt sáng lòng", tiêu chuẩn quang học Bắc Mỹ, năng lực sản xuất Lab RX Freeform và hệ thống 500+ đại lý toàn quốc.',
  path: '/ve-chung-toi/',
});

const certImages = [
  { src: '/images/company/cert-1.jpg', title: 'ISO 9001:2015', desc: 'Hệ thống Quản lý Chất lượng Quang học Quốc tế' },
  { src: '/images/company/cert-2.jpg', title: 'CE Marking', desc: 'Tiêu chuẩn An toàn Y tế & Khúc xạ Liên minh Châu Âu' },
  { src: '/images/company/cert-3.jpg', title: 'FDA Standard', desc: 'Tiêu chuẩn An toàn Vật liệu Y tế & Mắt kính Bắc Mỹ' },
  { src: '/images/company/cert-4.jpg', title: 'Kiểm Định Quang Sai', desc: 'Chứng chỉ Khúc xạ & Độ Truyền Quang Chuẩn Y Khoa' },
];

const companyPhotos = [
  { src: '/images/company/about-1.jpg', caption: 'Đội ngũ chuyên viên kỹ thuật khúc xạ Rocky Lens giàu kinh nghiệm' },
  { src: '/images/company/about-2.jpg', caption: 'Hệ thống buồng phủ chân không Nano AR đa tầng gia tăng độ truyền quang' },
  { src: '/images/company/about-3.jpg', caption: 'Hội nghị nhãn khoa và chuyển giao công nghệ khúc xạ định kỳ' },
  { src: '/images/company/about-4.jpg', caption: 'Quy trình kiểm định quang học từng cặp tròng trước khi xuất xưởng' },
];

const csrPhotos = [
  {
    src: '/images/events/kham-mat-can-tho-trao-kinh.jpg',
    title: 'Chương Trình Mắt Sáng Học Đường',
    desc: 'Trao tặng hàng trăm cặp tròng kính Rocky Lens miễn phí cho học sinh có hoàn cảnh khó khăn tại Cần Thơ.',
  },
  {
    src: '/images/events/kham-mat-can-tho-do-thi-luc.jpg',
    title: 'Khám Đo Khúc Xạ Học Đường',
    desc: 'Bác sĩ chuyên khoa và chuyên viên Rocky Lens trực tiếp thăm khám, sàng lọc tật khúc xạ cho các em nhỏ.',
  },
  {
    src: '/images/events/nhan-khoa-2023-bac-si-chuyen-gia.jpg',
    title: 'Đồng Hành Cùng Hội Nhãn Khoa',
    desc: 'Chia sẻ nghiên cứu lâm sàng về kiểm soát tiến triển cận thị Defocus cùng các chuyên gia khúc xạ đầu ngành.',
  },
];

const coreValues = [
  {
    icon: Award,
    title: 'Chuẩn Mực Bắc Mỹ',
    tag: 'Canada Opticians Standards',
    description:
      'Kế thừa nguyên bản quy chuẩn quang học khắt khe từ Canada. Độ chính xác sai số chỉ ±0.01 Diop, kiểm tra quang sai vi sai trên toàn bộ diện tích bề mặt thấu kính.',
  },
  {
    icon: Cpu,
    title: 'Đột Phá Công Nghệ',
    tag: 'Pioneering Technology',
    description:
      'Dẫn đầu các giải pháp thị lực hiện đại: BlueCut lọc ánh sáng xanh thông minh, Fast Photochromic đổi màu nhanh theo tia UV, DriveShield an toàn ban đêm và MyoControl kiểm soát cận thị học đường.',
  },
  {
    icon: Heart,
    title: 'Sáng Mắt Sáng Lòng',
    tag: 'Human-Centric Spirit',
    description:
      'Triết lý kinh doanh bằng sự tử tế và tinh thần phụng sự. Minh bạch tuyệt đối về thông số kỹ thuật, mang lại giải pháp kính mắt chất lượng cao với chi phí dễ tiếp cận cho mọi gia đình Việt.',
  },
  {
    icon: HeartHandshake,
    title: 'Đồng Hành Bền Vững',
    tag: 'B2B Long-Term Partnership',
    description:
      'Đồng hành cùng hơn 500+ đại lý cửa hàng kính mắt và phòng khám nhãn khoa toàn quốc. Cung ứng thần tốc qua 2 tổng kho Hà Nội & TP.HCM cùng hỗ trợ kỹ thuật Lab RX chuyên sâu.',
  },
];

const labHighlights = [
  {
    title: 'Gia Công Freeform 3D Mặt Sau',
    desc: 'Thiết kế kỹ thuật số mài phay điểm ảnh theo thông số độ cong gọng kính, khoảng cách đỉnh và góc nghiêng của từng người đeo.',
  },
  {
    title: 'Phủ Chân Không Nano AR Đa Tầng',
    desc: 'Tỷ lệ truyền quang đạt trên 99.2%, triệt tiêu tối đa hiện tượng phản xạ ánh đèn xe chói lóa và tăng cường độ trong suốt.',
  },
  {
    title: 'Lớp Váng Phủ Chống Bám & Chống Trầy',
    desc: 'Hệ thống lớp phủ Ruby, Sapphire, Crystal Sapphire, Elite và Nano SHMC siêu trượt nước, chống bám bụi bẩn và chống trầy xước vượt trội.',
  },
  {
    title: 'Quy Trình Mài Nước Hydro-Grinding',
    desc: 'Làm mát bề mặt liên tục trong suốt quá trình định hình phôi kính, bảo vệ cấu trúc phân tử polymer của tròng khỏi sốc nhiệt.',
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Về chúng tôi', href: '/ve-chung-toi/' }]} />

      {/* =========================================================
          1. HERO BANNER: HERITAGE & SLOGAN
          ========================================================= */}
      <section className="b2b-gradient text-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 -bottom-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-xs">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Canada Opticians Heritage • Tiêu Chuẩn Bắc Mỹ</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white uppercase">
              SÁNG MẮT SÁNG LÒNG — NÂNG TẦM THỊ LỰC NGƯỜI VIỆT
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Rocky Lens được cố vấn và chuyển giao công nghệ trực tiếp từ đội ngũ chuyên gia khúc xạ tại Canada. Chúng tôi kết hợp chuẩn mực quang học Bắc Mỹ với tinh thần phụng sự nhân văn, hướng tới kiến tạo một cộng đồng <strong className="text-amber-300 font-bold">nhìn rõ – sống đẹp – nghĩ tử tế</strong>.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-300">20+</div>
                <div className="text-xs text-white/70 mt-1">Năm Kinh Nghiệm Khúc Xạ</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-300">500+</div>
                <div className="text-xs text-white/70 mt-1">Đại Lý Mắt Kính Toàn Quốc</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-300">100.000+</div>
                <div className="text-xs text-white/70 mt-1">Cặp Tròng Phục Vụ Hàng Năm</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">ISO 9001</div>
                <div className="text-xs text-white/70 mt-1">&amp; Tiêu Chuẩn CE Châu Âu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. BRAND STORY & PHILOSOPHY ("SÁNG MẮT SÁNG LÒNG")
          ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/60 px-3 py-1 rounded-full border border-[var(--color-border)]/40">
                Câu Chuyện Thương Hiệu
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading tracking-tight leading-snug">
                Hành Trình Mang Chuẩn Mực Quang Học Canada Về Việt Nam
              </h2>

              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                Được sáng lập với sự cố vấn từ các chuyên gia quang học Canada Opticians, thương hiệu Rocky Lens chính thức hiện diện tại Việt Nam nhằm giải quyết một trăn trở lớn: người tiêu dùng xứng đáng có được những cặp tròng kính chất lượng y tế quốc tế với mức chi phí minh bạch, chuẩn xác và đúng giá trị thực.
              </p>

              <div className="p-5 rounded-2xl bg-[var(--site-bg-start)] border border-[var(--color-border)]/60 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-heading">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Triết Lý &quot;Sáng Mắt Sáng Lòng&quot;</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Chúng tôi tin rằng đôi mắt là cửa sổ tâm hồn. Khi đôi mắt nhìn thấy thế giới rõ nét, không mỏi mệt và được che chở trước các tia có hại, con người ta dễ dàng cảm nhận sự ấm áp của cuộc sống, mở rộng lòng mình và cùng nhau nghĩ những điều thiện lành, tử tế.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                Không chỉ dừng lại ở các dòng tròng kính đơn thông thường, Rocky Lens đã xây dựng năng lực phòng Lab RX kỹ thuật số, áp dụng công nghệ Freeform 3D để cá nhân hóa thông số khúc xạ riêng biệt cho từng người đeo, tối ưu hóa theo thể trạng khuôn mặt và thói quen sinh hoạt của người Việt.
              </p>

              <div className="pt-2">
                <Link
                  href="/trong-kinh/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:underline"
                >
                  <span>Khám phá 12 dòng sản phẩm tròng kính Rocky</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Story Visual */}
            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-border)]/60 group">
                <Image
                  src="/images/banners/about-banner.png"
                  alt="Trụ sở và nhà máy Rocky Lens Canada Opticians"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="inline-block px-3 py-1 rounded-md bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                    Canada Opticians Official
                  </div>
                  <p className="text-white text-base sm:text-lg font-bold">
                    Tiêu chuẩn kiểm soát chất lượng quang học nghiêm ngặt theo chuẩn Bắc Mỹ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. 4 CORE VALUES (GIÁ TRỊ CỐT LÕI)
          ========================================================= */}
      <section className="py-20 section-background border-t border-b border-[var(--color-border)]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Giá Trị Cốt Lõi"
            title="4 Trụ Cột Vững Chắc Xây Dựng Niềm Tin"
            description="Mỗi sản phẩm tròng kính Rocky Lens xuất xưởng là kết tinh của khoa học chính xác, công nghệ tiên tiến và lương tâm người làm nghề quang học."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="card-surface p-6 sm:p-7 rounded-2xl border border-[var(--color-border)]/60 shadow-xs hover:shadow-md hover:border-[var(--color-primary)] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--site-bg-middle)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                        {val.tag}
                      </span>
                      <h3 className="text-lg font-bold text-heading">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. NĂNG LỰC LAB RX FREEFORM & CÔNG NGHỆ QUANG HỌC
          ========================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-8 rounded-3xl b2b-gradient text-white shadow-xl relative overflow-hidden space-y-6">
                <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold border border-white/15">
                  <Factory className="w-3.5 h-3.5" />
                  <span>Năng Lực Sản Xuất RX Lab</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  Gia Công Kỹ Thuật Số Chuẩn Xác Từng Micro
                </h3>

                <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                  Hệ thống máy mài phay kỹ thuật số nhập khẩu đồng bộ, cho phép xử lý các dải độ phức tạp: độ cận viễn cao, độ loạn cao và đa tròng lũy tiến theo từng chuyển động thị giác thực tế.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Dung sai công suất cực tiểu &plusmn;0.01D</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Bảo hành váng phủ 12 tháng chính hãng</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Cá nhân hóa theo thông số gọng kính cá nhân</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/rx-lab/"
                    className="button-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold"
                  >
                    <span>Tìm hiểu quy trình Lab RX</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/60 px-3 py-1 rounded-full border border-[var(--color-border)]/40">
                Công Nghệ Sản Xuất
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight leading-snug">
                Nền Tảng Công Nghệ Lớp Phủ &amp; Thiết Kế Kính Đỉnh Cao
              </h2>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Rocky Lens trang bị buồng mạ chân không ion hóa tiên tiến, kết hợp các thế hệ lớp phủ độc quyền giúp tròng kính trong suốt hơn, bền bỉ hơn và mang lại tầm nhìn dễ chịu suốt ngày dài.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {labHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--color-border)]/60 bg-white shadow-2xs hover:border-[var(--color-primary)] transition-colors"
                  >
                    <div className="flex items-center gap-2 font-bold text-sm text-heading mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-[var(--site-bg-middle)] text-[var(--color-primary)] flex items-center justify-center text-xs font-black shrink-0">
                        {idx + 1}
                      </span>
                      <span>{hl.title}</span>
                    </div>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed pl-8">
                      {hl.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. GALLERY: ĐỘI NGŨ CHUYÊN VIÊN & HOẠT ĐỘNG
          ========================================================= */}
      <section className="py-20 section-background border-t border-b border-[var(--color-border)]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Hình Ảnh Thực Tế"
            title="Đội Ngũ Chuyên Viên & Cơ Sở Hoạt Động"
            description="Những hình ảnh chân thực ghi lại quy trình kiểm định quang học và các hoạt động chuyên môn nhãn khoa của Rocky Lens."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="card-surface rounded-2xl overflow-hidden shadow-xs border border-[var(--color-border)]/50 group"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-heading font-medium leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. CSR: TRÁCH NHIỆM XÃ HỘI & HOẠT ĐỘNG THIỆN NGUYỆN
          ========================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Trách Nhiệm Xã Hội"
            title="Lan Tỏa Ánh Sáng — Phụng Sự Cộng Đồng"
            description="Đúng với tinh thần 'Sáng mắt sáng lòng', Rocky Lens thường xuyên tổ chức các chương trình khám mắt học đường và trao tặng kính miễn phí cho trẻ em."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {csrPhotos.map((item, idx) => (
              <div
                key={idx}
                className="card-surface rounded-2xl overflow-hidden border border-[var(--color-border)]/60 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-heading group-hover:text-[var(--color-primary)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-border)]/30 text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>Vì ánh mắt trẻ thơ Việt Nam</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/su-kien/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:underline"
            >
              <span>Xem tất cả tin tức sự kiện &amp; hội nghị nhãn khoa</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. CERTIFICATIONS & ACCREDITATIONS (ISO, CE, FDA)
          ========================================================= */}
      <section id="chung-nhan" className="py-20 section-background border-t border-b border-[var(--color-border)]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Kiểm Định Quốc Tế"
            title="Chứng Nhận Tiêu Chuẩn Chất Lượng & Y Tế"
            description="Tất cả các dòng tròng kính Rocky Lens đều vượt qua các bài kiểm tra quang sai và được cấp chứng chỉ kiểm định chất lượng theo chuẩn quốc tế."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certImages.map((cert, idx) => (
              <div
                key={idx}
                className="card-surface rounded-2xl p-4 border border-[var(--color-border)]/60 flex flex-col items-center justify-between text-center shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all group"
              >
                <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden mb-3 bg-slate-50 border border-slate-100">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 220px"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-heading">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-[var(--color-muted)] mt-1 line-clamp-2">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. DISTRIBUTION HUBS: VĂN PHÒNG & KHO VẬN 2 MIỀN
          ========================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Mạng Lưới Vận Hành"
            title="Hệ Thống Tổng Kho Phân Phối 2 Đầu Bắc — Nam"
            description="Đảm bảo tốc độ giao hàng nhanh chóng cho hơn 500+ đại lý cửa hàng mắt kính và bệnh viện nhãn khoa trên khắp 63 tỉnh thành."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chi nhánh Miền Bắc */}
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--color-border)]/60 bg-white shadow-xs space-y-4 hover:border-[var(--color-primary)] transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
                <Store className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span>Tổng Kho &amp; Văn Phòng Miền Bắc</span>
              </div>
              <h3 className="text-xl font-black text-heading">
                Trung Tâm Phân Phối Hà Nội
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[var(--color-muted)]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>90A Đặng Tiến Đông, Phường Ô Chợ Dừa, Quận Đống Đa, Hà Nội</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <span>Thời gian làm việc: 08:00 – 17:30 (Thứ 2 – Thứ 7)</span>
                </div>
              </div>
            </div>

            {/* Chi nhánh Miền Nam */}
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--color-border)]/60 bg-white shadow-xs space-y-4 hover:border-[var(--color-primary)] transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
                <Store className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span>Tổng Kho &amp; Văn Phòng Miền Nam</span>
              </div>
              <h3 className="text-xl font-black text-heading">
                Trung Tâm Phân Phối TP. Hồ Chí Minh
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[var(--color-muted)]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>324/1 Lý Thường Kiệt, Phường Diên Hồng (Tân Bình), TP. Hồ Chí Minh</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <span>Thời gian làm việc: 08:00 – 17:30 (Thứ 2 – Thứ 7)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          9. CONTACT CTA: DẪN DẮT NGƯỜI ĐEO & ĐẠI LÝ
          ========================================================= */}
      <ContactCTA />
    </div>
  );
}
