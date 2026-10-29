import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Droplets,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Công Nghệ Tròng Kính & Kiến Thức Quang Học Rocky Canada',
  description: 'Khám phá công nghệ thiết kế phi cầu Aspheric, lớp phủ chống chói đa tầng SHMC, màng siêu trượt nước Super Hydrophobic và lớp phủ khử bức xạ EMI của Rocky Lens Canada.',
  path: '/cong-nghe/',
});

interface AdvancedTechItem {
  id: string;
  badge: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  tag: string;
  linkSlug?: string;
}

const advancedTechnologies: AdvancedTechItem[] = [
  {
    id: 'aspheric',
    badge: 'Thiết Kế Quang Học Tiên Tiến',
    icon: Eye,
    title: 'Thiết Kế Aspheric (Phi Cầu)',
    subtitle: 'Aspheric Design (SPH)',
    description:
      'Thiết kế Aspheric (phi cầu) ứng dụng công nghệ quang học tiên tiến, tối ưu hóa độ cong bề mặt tròng để triệt tiêu hiện tượng quang sai cầu biên. So với tròng cầu thông thường, tròng kính phẳng hơn, mỏng nhẹ hơn và tăng tính thẩm mỹ rõ rệt, đồng thời mở rộng tầm nhìn chân thực, sắc nét và hạn chế tối đa cảm giác biến dạng méo hình khi liếc nhìn về hai bên.',
    benefits: [
      'Giảm thiểu hiện tượng quang sai và méo hình vùng rìa',
      'Tròng kính phẳng, mỏng nhẹ hơn từ 10% đến 15% so với tròng cầu',
      'Hạn chế tình trạng thu nhỏ mắt (độ cận cao) hoặc phóng đại mắt (độ viễn)',
    ],
    image: '/images/technologies/tech_aspheric_design.png',
    imageAlt: 'Sơ đồ so sánh tròng kính cầu thông thường và thiết kế phi cầu Aspheric SPH',
    tag: 'Ứng dụng trên các dòng tròng Aspheric 1.60, 1.67, 1.74',
    linkSlug: 'rocky-160-mr8-aspheric',
  },
  {
    id: 'shmc',
    badge: 'Xử Lý Chống Phản Quang Đa Tầng',
    icon: Layers,
    title: 'Lớp Phủ Chống Chói Cao Cấp SHMC',
    subtitle: 'Super Hydrophobic Multi-Coating',
    description:
      'Hệ thống phủ chân không đa tầng SHMC tích hợp nhiều lớp màng nano quang học siêu mỏng trên cả hai mặt tròng kính. Công nghệ này triệt tiêu đến 99.8% các tia phản xạ ngoại vi gây chói lóa từ đèn xe đối diện, đèn huỳnh quang văn phòng và màn hình số, đem lại trải nghiệm thị giác trong suốt, êm dịu và sắc nét trong mọi điều kiện ánh sáng.',
    benefits: [
      'Độ truyền quang đạt 99.8%, loại bỏ bóng ma và phản xạ sáng gây mỏi mắt',
      'Tăng độ tương phản thị giác trong điều kiện thiếu sáng và khi lái xe ban đêm',
      'Tăng cường độ cứng bề mặt, hạn chế xước dăm gấp 3 lần tròng tiêu chuẩn',
    ],
    image: '/images/technologies/tech_shmc_multilayer.png',
    imageAlt: 'Cấu trúc đa tầng lớp phủ chống chói phản quang SHMC cao cấp',
    tag: 'Tiêu chuẩn phủ trên toàn bộ hệ thống sản phẩm Rocky Lens',
    linkSlug: 'rocky-156-bluecut-shmc',
  },
  {
    id: 'super-hydrophobic',
    badge: 'Màng Bảo Vệ Bề Mặt Trơn Trượt',
    icon: Droplets,
    title: 'Lớp Phủ Siêu Trượt Nước (Super Hydrophobic)',
    subtitle: 'Super Hydrophobic Layer',
    description:
      'Lớp phủ Super Hydrophobic tạo hiệu ứng lá sen siêu trơn trên bề mặt tròng kính với góc tiếp xúc hạt nước lớn hơn 115°. Nước mưa, hơi ẩm sương mù và các hạt dầu mỡ sẽ tự động gom thành hạt tròn và trượt tuột tức thì thay vì bám dính lại. Kính luôn sạch sẽ, hạn chế bám bụi và vết ố bẩn, duy trì tầm nhìn thông suốt và lau chùi dễ dàng như lụa.',
    benefits: [
      'Hạt nước mưa và hơi sương trôi tuột tức thì, không gây mờ nhòe khi đi mưa',
      'Kháng bám bụi bẩn, dấu vân tay và vết ố mờ lên đến 90%',
      'Bảo dưỡng và vệ sinh tròng cực kỳ êm ái, kéo dài tuổi thọ lớp phủ',
    ],
    image: '/images/technologies/tech_super_hydrophobic.png',
    imageAlt: 'Hiệu ứng trượt nước siêu trơn Super Hydrophobic Layer khi đi mưa',
    tag: 'Tối ưu cho người thường xuyên di chuyển ngoài trời & lái xe',
    linkSlug: 'rocky-driveshield-night-vision',
  },
  {
    id: 'emi',
    badge: 'Màng Chắn Khử Tĩnh Điện & Bức Xạ',
    icon: ShieldCheck,
    title: 'Lớp Phủ Chống Nhiễu & Bức Xạ EMI',
    subtitle: 'Electro-Magnetic Interference Coating',
    description:
      'Công nghệ phủ EMI tạo một màng chắn bảo vệ có khả năng trung hòa tĩnh điện và hấp thụ bức xạ sóng điện từ phát ra từ máy tính, màn hình LED, điện thoại thông minh và thiết bị Wi-Fi. Lớp phủ này triệt tiêu hiện tượng tĩnh điện hút bụi mịn trong không khí, đồng thời giảm căng thẳng thị giác, đem lại đôi mắt thoải mái cho người làm việc liên tục trong môi trường số.',
    benefits: [
      'Khử tĩnh điện bề mặt, tròng kính hoàn toàn không hút bụi mịn và xơ vải',
      'Giảm thiểu tác động tiêu cực của sóng bức xạ điện từ lên vùng võng mạc',
      'Giảm nhức mỏi và hội chứng thị lực màn hình máy tính (CVS) hiệu quả',
    ],
    image: '/images/technologies/tech_emi_coating.png',
    imageAlt: 'Công nghệ lớp phủ EMI chống nhiễu sóng điện từ và khử tĩnh điện bề mặt',
    tag: 'Khuyên dùng cho lập trình viên, nhân viên văn phòng & game thủ',
    linkSlug: 'rocky-antifatigue-relax',
  },
];

const faqs = [
  {
    question: 'Chiết suất tròng kính bao nhiêu là phù hợp với độ cận của tôi?',
    answer: 'Nếu độ cận dưới -3.00 Diop, chiết suất 1.56 hoặc 1.60 là lựa chọn cân đối. Với độ cận từ -3.25 đến -5.50 Diop, nên chọn chiết suất 1.60 hoặc 1.67 để tròng mỏng nhẹ và đẹp mắt. Với độ cận trên -6.00 Diop, chiết suất 1.67 hoặc 1.74 là giải pháp tối ưu giúp mép kính không bị dày cộm.',
  },
  {
    question: 'Tròng kính đổi màu có thay thế hoàn toàn kính râm được không?',
    answer: 'Tròng đổi màu Rocky Trendy Smart chuyển màu đậm tương đương kính râm CAT 3 khi ra nắng ngoài trời. Tuy nhiên, khi ngồi trong ô tô, do kính chắn gió đã chặn hầu hết tia UV nên tròng sẽ chỉ đổi màu nhẹ. Nếu bạn thường xuyên lái xe đường dài dưới nắng gắt, nên kết hợp kính phân cực Rocky Polarized.',
  },
  {
    question: 'Đeo kính đa tròng lần đầu có bị chóng mặt không?',
    answer: 'Với công nghệ phay mặt sau kỹ thuật số Freeform HD của Rocky Lens, vùng mép quang sai được mở rộng và làm mềm mại hơn 40% so với đa tròng truyền thống. Đa số khách hàng chỉ mất từ 1 đến 3 ngày để làm quen hoàn toàn với tầm nhìn xa - trung - gần.',
  },
  {
    question: 'Làm thế nào để phân biệt tròng kính lọc ánh sáng xanh chất lượng?',
    answer: 'Tròng lọc ánh sáng xanh tốt (như Rocky BlueCut UV420) sử dụng phôi monomer hấp thụ thay vì phủ phản xạ bề mặt. Nhờ đó, tròng không bị ánh phản chiếu màu xanh tím lòe loẹt và đặc biệt là không làm hình ảnh cảnh vật bị ám vàng lệch màu khi nhìn thực tế.',
  },
];

export default function CongNghePage() {
  return (
    <div className="bg-[var(--site-bg-start)] min-h-screen">
      <Breadcrumbs items={[{ label: 'Công nghệ & Kiến thức', href: '/cong-nghe/' }]} />

      {/* 1. Hero giới thiệu công nghệ quang học */}
      <section className="b2b-gradient text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-[var(--button-end)]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full mb-4 bg-white/10 text-[var(--button-start)] border border-white/20 shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Hệ Sinh Thái Công Nghệ Quang Học Canada</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl">
            Khoa Học Quang Học &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              Công Nghệ Tròng Kính Rocky
            </span>
          </h1>

          <p className="mt-4 text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            Hội tụ tinh hoa nghiên cứu nhãn khoa từ Canada: từ thiết kế phi cầu Aspheric tối ưu độ phẳng, hệ thống lớp váng phủ đa tầng SHMC siêu trượt nước đến màng chắn khử bức xạ EMI bảo vệ đôi mắt toàn diện trong kỷ nguyên số.
          </p>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/15 max-w-3xl text-left">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">99.8%</div>
              <div className="text-xs text-slate-300">Độ truyền quang SHMC</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-[var(--button-middle)]">&gt;115°</div>
              <div className="text-xs text-slate-300">Góc trượt nước lá sen</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">Abbe 42</div>
              <div className="text-xs text-slate-300">Chuẩn sắc nét phôi MR-8</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-[var(--button-end)]">&lt; 0.01D</div>
              <div className="text-xs text-slate-300">Sai số phay Freeform 4K</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-20">

        {/* ========================================================= */}
        {/* 2. CÔNG NGHỆ BỀ MẶT & LỚP PHỦ TIÊN TIẾN (4 SLIDES USER CUNG CẤP) */}
        {/* ========================================================= */}
        <section id="cong-nghe-be-mat" className="space-y-10 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/50 text-primary text-xs font-bold border border-[var(--color-border)]/60">
              <Layers className="w-3.5 h-3.5" />
              <span>Công Nghệ Bề Mặt &amp; Lớp Phủ Tiên Tiến</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-heading tracking-tight">
              Đột Phá Thiết Kế &amp; Xử Lý Màng Phủ Quang Học
            </h2>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
              Mỗi chiếc tròng kính Rocky Lens là một tác phẩm cơ khí chính xác, kết hợp giữa hình học phi cầu tối ưu và công nghệ lắng đọng màng mỏng đa tầng tiêu chuẩn quốc tế ISO 13485.
            </p>
          </div>

          {/* 4 Featured Technology Cards (Alternating Grid) */}
          <div className="space-y-8">
            {advancedTechnologies.map((tech, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={tech.id}
                  className="card-surface rounded-3xl p-6 sm:p-10 border border-[var(--color-border)]/70 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Visual Graphic Column (40-45% width on desktop) */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative aspect-[5/4] w-full rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/80 shadow-inner flex items-center justify-center p-3 group-hover:border-[var(--button-middle)]/60 transition-colors">
                        <Image
                          src={tech.image}
                          alt={tech.imageAlt}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 480px"
                        />
                      </div>
                    </div>

                    {/* Content Narrative Column (55-60% width on desktop) */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Category Badge & Subtitle */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[var(--site-bg-middle)]/60 text-primary border border-[var(--color-border)]/50">
                          <tech.icon className="w-3.5 h-3.5" />
                          <span>{tech.badge}</span>
                        </span>
                        <span className="text-xs font-semibold text-[var(--button-start)] uppercase tracking-wider">
                          {tech.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight leading-snug">
                        {tech.title}
                      </h3>

                      {/* Accent Gradient Line (matching slide style) */}
                      <div className="h-1 w-16 bg-gradient-to-r from-[var(--button-start)] to-[var(--button-middle)] rounded-full" />

                      {/* Detailed Description */}
                      <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                        {tech.description}
                      </p>

                      {/* Benefit Bullets */}
                      <div className="pt-2 space-y-2.5">
                        {tech.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-heading">
                            <CheckCircle2 className="w-4 h-4 text-[var(--button-middle)] shrink-0 mt-0.5" />
                            <span className="leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Application Footer */}
                      <div className="pt-4 mt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-medium text-slate-500 italic">
                          {tech.tag}
                        </span>
                        {tech.linkSlug && (
                          <Link
                            href={`/trong-kinh/${tech.linkSlug}/`}
                            className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                          >
                            <span>Xem sản phẩm ứng dụng</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. KIẾN THỨC QUANG HỌC CỐT LÕI (CHIẾT SUẤT, ABBE, DIMS)   */}
        {/* ========================================================= */}
        <section id="kien-thuc" className="space-y-8 scroll-mt-24">
          <div className="border-b border-slate-200/80 pb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-heading tracking-tight">
              Kiến Thức Quang Học Cốt Lõi
            </h2>
            <p className="text-brand-muted text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Hiểu rõ nguyên lý khúc xạ ánh sáng, ý nghĩa của các chỉ số chiết suất và Abbe giúp bạn không bị bối rối trước hàng chục thông số khi đo mắt và chọn tròng kính phù hợp.
            </p>
          </div>

          {/* 3 Khối Tóm Tắt Khoa Học Trực Quan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-[var(--color-border)]/60 shadow-xs">
              <div>
                <span className="px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/40 text-primary text-xs font-bold border border-[var(--color-border)]">
                  Chỉ Số Chiết Suất
                </span>
                <h3 className="text-xl font-bold text-heading mt-3 mb-2">
                  1.56 &bull; 1.60 &bull; 1.67 &bull; 1.74
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Chiết suất càng cao, tròng kính càng mỏng và nhẹ hơn ở cùng một số độ cận. Ví dụ, chiết suất 1.74 giúp giảm độ dày viền tới 35-40% so với tròng tiêu chuẩn 1.56.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)] text-xs font-semibold text-slate-500">
                Lựa chọn theo số độ: &lt;3 Diop (1.56/1.60), 3-6 Diop (1.60/1.67), &gt;6 Diop (1.67/1.74)
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-[var(--color-border)]/60 shadow-xs">
              <div>
                <span className="px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/40 text-primary text-xs font-bold border border-[var(--color-border)]">
                  Độ Sắc Nét Màu Sắc
                </span>
                <h3 className="text-xl font-bold text-heading mt-3 mb-2">
                  Chỉ Số Abbe (Sắc Sai)
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Chỉ số Abbe đo lường độ tán sắc màu sắc. Abbe càng cao thì viền hình ảnh càng sắc sảo, mắt không bị mỏi hay thấy viền cầu vồng khi liếc nhìn về phía rìa thấu kính.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)] text-xs font-semibold text-slate-500">
                Vật liệu MR-8 (1.60) đạt Abbe 42 – mức cân bằng lý tưởng nhất giữa độ mỏng và độ sắc nét
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-[var(--color-border)]/60 shadow-xs">
              <div>
                <span className="px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/40 text-primary text-xs font-bold border border-[var(--color-border)]">
                  Y Khoa Khúc Xạ
                </span>
                <h3 className="text-xl font-bold text-heading mt-3 mb-2">
                  Kiểm Soát Trục Nhãn Cầu
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Cơ chế phân tán tiêu cự chu biên (Defocus D.I.M.S) tạo tín hiệu ức chế nhãn cầu dài ra quá mức, hỗ trợ giảm đến 60% tốc độ tăng độ cận ở lứa tuổi học đường.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)] text-xs font-semibold text-slate-500">
                Ứng dụng trên dòng tròng chuyên biệt Rocky MyoControl Kids
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CÁC CÔNG NGHỆ CHUYÊN BIỆT THEO NHU CẦU                  */}
        {/* ========================================================= */}
        <section id="cong-nghe-chuyen-biet" className="space-y-8 scroll-mt-24">
          <div className="border-b border-[var(--color-border)]/40 pb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-heading tracking-tight">
              Giải Pháp Công Nghệ Phôi &amp; Chức Năng Quang Học
            </h2>
            <p className="text-[var(--color-muted)] text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Từ phôi monomer lọc ánh sáng xanh đến công nghệ gia công kỹ thuật số Freeform 4K, đáp ứng chính xác từng nhu cầu thị lực khắt khe.
            </p>
          </div>

          {/* 4 Trụ Cột Công Nghệ Mũi Nhọn */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-surface rounded-3xl p-6 border border-[var(--color-border)]/50 shadow-xs flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--site-bg-middle)]/60 text-heading flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="font-extrabold text-heading text-lg mb-2">
                  Phôi Monomer BlueCut UV420
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Lọc ánh sáng xanh có hại ngay từ trong phôi nhựa monomer, triệt tiêu phản xạ xanh tím lòe loẹt và giữ trọn sắc màu cảnh vật tự nhiên, không bị ám vàng.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--color-border)]/30 text-xs font-bold text-[var(--color-primary)]">
                Bảo vệ võng mạc tối đa
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6 border border-[var(--color-border)]/50 shadow-xs flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="font-extrabold text-heading text-lg mb-2">
                  DriveShield Lọc Chói Đêm
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Lớp phủ quang học hấp thụ các dải ánh sáng chói lóa từ đèn pha LED/Xenon ngược chiều, tăng tương phản trong bóng tối và cải thiện tầm nhìn khi lái xe trời mưa.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--color-border)]/30 text-xs font-bold text-[var(--color-primary)]">
                An tâm trên mọi cung đường
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6 border border-[var(--color-border)]/50 shadow-xs flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="font-extrabold text-heading text-lg mb-2">
                  Spin-Coat Photochromic
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Công nghệ phủ ly tâm phân tử nhạy sáng ma trận, đổi màu râm sẫm đều chuẩn CAT 3 chỉ trong 30 giây ngoài trời nắng và trả lại độ trong suốt nhanh chóng khi vào nhà.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--color-border)]/30 text-xs font-bold text-[var(--color-primary)]">
                Tiện lợi 2 trong 1
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6 border border-[var(--color-border)]/50 shadow-xs flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  04
                </div>
                <h3 className="font-extrabold text-heading text-lg mb-2">
                  Freeform HD Đa Điểm
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Phay mặt sau kỹ thuật số chính xác đến từng điểm ảnh với sai số dưới 0.01 Diop, mở rộng trường nhìn xa - trung - gần mềm mại và không gây cảm giác chòng chành.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--color-border)]/30 text-xs font-bold text-[var(--color-primary)]">
                Thị lực cá nhân hóa 4K
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. CẨM NANG HƯỚNG DẪN & TƯ VẤN TỪ CHUYÊN GIA              */}
        {/* ========================================================= */}
        <section id="huong-dan" className="space-y-8 scroll-mt-24">
          <div className="border-b border-[var(--color-border)]/40 pb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-heading tracking-tight">
              Cẩm Nang Hướng Dẫn &amp; Tư Vấn
            </h2>
            <p className="text-[var(--color-muted)] text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Các chỉ dẫn thực tế giúp bạn nhận biết thời điểm cần nâng cấp tròng kính, thích nghi êm dịu với kính đa tròng và bảo quản tròng luôn sáng bóng như mới.
            </p>
          </div>

          {/* 3 Lời khuyên Chuyên Gia */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface rounded-3xl p-6 sm:p-7 border border-[var(--color-border)]/50 shadow-xs flex flex-col justify-between bg-white">
              <div>
                <span className="px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-heading text-xs font-bold border border-[var(--color-border)]/50">
                  Lựa Chọn Theo Nghề Nghiệp
                </span>
                <h3 className="text-xl font-bold text-heading mt-3 mb-2">
                  Đúng Tròng Cho Nhu Cầu
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Dân IT / văn phòng nên ưu tiên dòng chống mỏi BlueCut UV420 Relax. Người thường xuyên di chuyển ngoài trời nên chọn Tròng Đổi Màu Trendy. Doanh nhân &amp; người trên 40 tuổi nên chọn Kính Đa Tròng Freeform HD.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]/30 text-xs font-semibold text-[var(--color-muted)]">
                Tối ưu sự thoải mái theo môi trường sinh hoạt thực tế
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6 sm:p-7 border border-[var(--color-border)]/50 shadow-xs flex flex-col justify-between bg-white">
              <div>
                <span className="px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-heading text-xs font-bold border border-[var(--color-border)]/50">
                  Thói Quen Sử Dụng
                </span>
                <h3 className="text-xl font-bold text-heading mt-3 mb-2">
                  Bảo Quản Chuẩn Quang Học
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Luôn xả sạch bụi dưới vòi nước trước khi lau bằng khăn vi sợi. Tuyệt đối không để kính trong cốp xe máy, taplo xe hơi dưới trời nắng vì nhiệt độ cao có thể gây nứt lớp váng phủ nano AR.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]/30 text-xs font-semibold text-[var(--color-muted)]">
                Tăng tuổi thọ lớp phủ từ 2 lên đến 3 - 5 năm sử dụng
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6 sm:p-7 border border-[var(--color-border)]/50 shadow-xs flex flex-col justify-between bg-white">
              <div>
                <span className="px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-heading text-xs font-bold border border-[var(--color-border)]/50">
                  Thời Điểm Thay Kính
                </span>
                <h3 className="text-xl font-bold text-heading mt-3 mb-2">
                  Khi Nào Cần Thay Tròng Kính?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  Nên kiểm tra định kỳ mỗi 12 tháng. Thay tròng ngay khi thấy mắt hay mỏi, nheo mắt nhìn xa, hoặc bề mặt tròng kính có nhiều vết xước dăm gây lóa mắt khó chịu khi lái xe ban đêm.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]/30 text-xs font-semibold text-[var(--color-muted)]">
                Bảo vệ sức khỏe nhãn khoa và an toàn sinh hoạt mỗi ngày
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. CÁC CÂU HỎI THƯỜNG GẶP (FAQ)                           */}
        {/* ========================================================= */}
        <section className="card-surface rounded-3xl p-8 sm:p-10 border border-[var(--color-border)]/50 shadow-xs bg-white">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/50 px-3.5 py-1.5 rounded-full mb-2 border border-[var(--color-border)]/50">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Hỏi Đáp Thường Gặp</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Giải Đáp Thắc Mắc Về Tròng Kính
            </h2>
            <p className="text-[var(--color-muted)] text-xs sm:text-sm mt-2">
              Những thắc mắc phổ biến nhất của người dùng khi tìm hiểu và chọn mua tròng kính chính hãng Rocky Lens.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-[var(--color-border)]/50 space-y-2.5 shadow-2xs"
              >
                <h3 className="font-bold text-heading text-sm flex items-start space-x-2">
                  <span className="text-[var(--color-primary)] font-black shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. KẾT NỐI NHU CẦU: B2C CATALOGUE & B2B ĐẠI LÝ            */}
        {/* ========================================================= */}
        <ContactCTA />

      </div>
    </div>
  );
}
