import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  Cpu,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Công Nghệ Tròng Kính & Kiến Thức Quang Học - Rocky Lens Canada',
  description: 'Khám phá 3 trụ cột công nghệ Rocky Lens: Phôi vật liệu Mitsui MR-8 & BlueCut UV420, Màng phủ chân không Nano SHMC & DriveShield, và Thiết kế quang học số Freeform 4K & Aspheric.',
  path: '/cong-nghe/',
});

interface CorePillarItem {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  points: {
    label: string;
    text: string;
  }[];
  tag: string;
}

const corePillars: CorePillarItem[] = [
  {
    number: '01',
    badge: 'Phôi Vật Liệu',
    title: 'Phôi Quang Học Tinh Khiết',
    subtitle: 'Mitsui MR Series & BlueCut Monomer',
    image: '/images/technologies/tech_sec3_1.jpg',
    imageAlt: 'Công nghệ phôi vật liệu quang học Mitsui MR dẻo dai',
    points: [
      {
        label: 'Mitsui MR-8 & MR-7:',
        text: 'Siêu dẻo dai, chống nứt vỡ tuyệt đối cho gọng khoan ốc và xẻ cước.',
      },
      {
        label: 'BlueCut UV420:',
        text: 'Hấp thụ ánh sáng xanh trong cốt phôi, truyền quang 98% không ám vàng.',
      },
    ],
    tag: 'Ứng dụng: BlueCut 1.56, MR-8 1.60, MR-7 1.67',
  },
  {
    number: '02',
    badge: 'Hệ Lớp Phủ',
    title: 'Màng Phủ Chân Không Nano Đa Năng',
    subtitle: 'Nano Sapphire SHMC & DriveShield',
    image: '/images/technologies/tech_sec3_2.jpg',
    imageAlt: 'Công nghệ màng phủ chân không Nano siêu trượt nước lá sen và chống bám bụi',
    points: [
      {
        label: 'Super Hydrophobic:',
        text: 'Hiệu ứng lá sen trượt nước mưa góc >115°, kháng bám dầu mỡ và vân tay.',
      },
      {
        label: 'DriveShield & EMI:',
        text: 'Giảm chói đèn pha LED ban đêm và triệt tiêu tĩnh điện hút bụi mịn.',
      },
    ],
    tag: 'Ứng dụng: Tiêu chuẩn trên toàn bộ sản phẩm Rocky',
  },
  {
    number: '03',
    badge: 'Thiết Kế Số',
    title: 'Thiết Kế Quang Học Số & Freeform',
    subtitle: 'Aspheric SPH & Digital Freeform 4K',
    image: '/images/technologies/tech_sec3_3.jpg',
    imageAlt: 'Công nghệ thiết kế quang học số và khúc xạ đa tròng Freeform 4K',
    points: [
      {
        label: 'Aspheric (Phi cầu):',
        text: 'Tròng phẳng mỏng hơn 15%, triệt tiêu biến dạng méo hình vùng rìa.',
      },
      {
        label: 'Freeform 4K:',
        text: 'Phay kỹ thuật số sai số < 0.01D, mở rộng 40% trường nhìn êm ái.',
      },
    ],
    tag: 'Ứng dụng: Dòng Aspheric & Đa tròng Freeform',
  },
];

const refractiveIndexTable = [
  {
    index: '1.56 Tiêu Chuẩn',
    type: 'CR-39 Biến Tính',
    diopter: '0.00 đến -2.50 Diop',
    thickness: 'Độ dày tiêu chuẩn',
    abbe: '36',
    frames: 'Gọng nguyên khung (kim loại hoặc nhựa acetate)',
  },
  {
    index: '1.60 MR-8 Cao Cấp',
    type: 'Mitsui MR-8 (Japan)',
    diopter: '-2.50 đến -5.00 Diop',
    thickness: 'Mỏng hơn 15% - 20%',
    abbe: '42 (Sắc nét cao)',
    frames: 'Lý tưởng cho gọng khoan ốc, gọng cước & gọng thanh mảnh',
  },
  {
    index: '1.67 MR-7 Siêu Mỏng',
    type: 'Mitsui MR-7 (Japan)',
    diopter: '-5.00 đến -8.00 Diop',
    thickness: 'Mỏng hơn 25% - 30%',
    abbe: '32',
    frames: 'Gọng titan cao cấp, gọng khoan, gọng xẻ cước',
  },
  {
    index: '1.74 Siêu Mỏng Nhẹ',
    type: 'Ultra High Index',
    diopter: 'Trên -8.00 Diop hoặc cận nặng',
    thickness: 'Mỏng hơn 35% - 40%',
    abbe: '33',
    frames: 'Gọng khung nhỏ vừa phải, gọng kim loại thanh lịch',
  },
];

const faqs = [
  {
    question: 'Chiết suất tròng kính bao nhiêu là phù hợp với độ cận của tôi?',
    answer:
      'Nếu độ cận dưới -2.50 Diop, chiết suất 1.56 hoặc 1.60 là lựa chọn cân đối. Với độ cận từ -2.50 đến -5.00 Diop, nên chọn chiết suất 1.60 MR-8 để tròng vừa mỏng nhẹ vừa bền dai. Với độ cận từ -5.00 đến -8.00 Diop, chiết suất 1.67 là giải pháp tối ưu. Khi độ cận trên -8.00 Diop, chiết suất 1.74 giúp mép kính phẳng mỏng, không bị cộm dày.',
  },
  {
    question: 'Tròng kính lọc ánh sáng xanh Rocky BlueCut có làm màu sắc bị ám vàng không?',
    answer:
      'Không. Rocky BlueCut sử dụng công nghệ phôi monomer lọc hấp thụ UV420 và dải ánh sáng xanh năng lượng cao, giữ độ truyền quang đạt 98%. Nhờ đó, hình ảnh trong suốt tự nhiên, loại bỏ hoàn toàn ánh phản chiếu tím lòe loẹt và hiện tượng ám vàng sai lệch màu thường gặp ở tròng phủ phản xạ thế hệ cũ.',
  },
  {
    question: 'Tại sao làm gọng khoan không viền bắt buộc phải dùng phôi 1.60 MR-8 hoặc 1.67 MR-7?',
    answer:
      'Tròng kính 1.56 thông thường có cấu trúc phân tử giòn, khi khoan lỗ bắt ốc hoặc xẻ cước rất dễ bị nứt chân ốc hoặc mẻ viền khi va chạm. Trong khi đó, phôi Mitsui MR-8 và MR-7 có độ bền dai uốn cong và chịu lực va đập gấp nhiều lần, là tiêu chuẩn quốc tế bắt buộc cho gọng bắt ốc không viền.',
  },
  {
    question: 'Người mới đeo kính đa tròng mất bao lâu để làm quen?',
    answer:
      'Với công nghệ phay mặt sau kỹ thuật số Freeform 4K của Rocky Lens, vùng quang sai méo hình được thu hẹp và làm mềm mại hơn 40% so với đa tròng truyền thống. Đa số người dùng chỉ mất từ 1 đến 3 ngày để làm quen hoàn toàn với tầm nhìn xa - trung - gần liền mạch.',
  },
];

export default function CongNghePage() {
  return (
    <div className="bg-[var(--site-bg-start)] min-h-screen">
      <Breadcrumbs items={[{ label: 'Công nghệ & Kiến thức', href: '/cong-nghe/' }]} />

      {/* ========================================================= */}
      {/* 1. HERO COMPACT: TỔNG QUAN CÔNG NGHỆ QUANG HỌC CANADA      */}
      {/* ========================================================= */}
      <section className="b2b-gradient text-white py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-[var(--button-end)]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full mb-3 bg-white/10 text-[var(--button-start)] border border-white/20 shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Hệ Sinh Thái Quang Học Canada</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl">
            Khoa Học Quang Học &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              Công Nghệ Tròng Kính Rocky
            </span>
          </h1>

          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            Hội tụ tinh hoa nghiên cứu nhãn khoa Canada với 3 trụ cột vững chắc: Phôi vật liệu Mitsui tinh khiết, Hệ màng phủ chân không Nano Sapphire đa năng, và Thiết kế quang học số Freeform 4K chính xác từng micromet.
          </p>

          {/* Sleek Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-5 border-t border-white/15 max-w-3xl text-left">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14 sm:space-y-16">

        {/* ========================================================= */}
        {/* 2. THREE CORE PILLARS (GỌN GÀNG, CÓ ẢNH, KHÔNG DÙNG ICON) */}
        {/* ========================================================= */}
        <section id="tru-cot-cong-nghe" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-primary text-xs font-bold border border-[var(--color-border)]/60">
              3 Trụ Cột Công Nghệ Cốt Lõi
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              Đột Phá Từ Vật Liệu Đến Gia Công Kỹ Thuật Số
            </h2>
            <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
              Mỗi chiếc tròng kính Rocky Lens là sự kết hợp chuẩn xác giữa hình học phi cầu tối ưu và công nghệ lắng đọng màng mỏng đa tầng đạt chứng nhận quản lý y tế ISO 13485:2016.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((pillar) => (
              <div
                key={pillar.number}
                className="card-surface rounded-3xl p-5 sm:p-6 bg-white border border-[var(--color-border)]/70 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Visual Real Lens Photograph */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Header: Number & Badge (No icons) */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="w-8 h-8 rounded-lg bg-[var(--site-bg-middle)]/60 text-[var(--color-primary)] font-black flex items-center justify-center text-xs">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-heading group-hover:text-[var(--color-primary)] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[var(--button-start)] font-semibold mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* 2 Concise Points - Pure text, zero icons */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="text-xs leading-relaxed text-slate-700">
                        <span className="font-bold text-heading">{pt.label} </span>
                        <span className="text-slate-600">{pt.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500 italic">
                  {pillar.tag}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. BẢNG TRA CỨU CHIẾT SUẤT THÔNG MINH (TABLE GUIDE)       */}
        {/* ========================================================= */}
        <section id="tra-cuu-chiet-suat" className="space-y-6 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-primary text-xs font-bold border border-[var(--color-border)]/60">
              <Cpu className="w-3.5 h-3.5" />
              <span>Cẩm Nang Quang Học Thực Tế</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              Bảng Tra Cứu Chiết Suất &amp; Độ Dày Tròng Kính
            </h2>
            <p className="text-brand-muted text-xs sm:text-sm">
              Chiết suất càng cao thì tròng kính càng mỏng nhẹ. Dưới đây là bảng hướng dẫn lựa chọn chiết suất chuẩn xác theo độ cận và kiểu dáng gọng kính.
            </p>
          </div>

          <div className="card-surface rounded-3xl overflow-hidden border border-[var(--color-border)]/70 shadow-xs bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Chiết Suất</th>
                    <th className="py-3.5 px-4 sm:px-6">Vật Liệu Cốt</th>
                    <th className="py-3.5 px-4 sm:px-6">Khoảng Độ Khuyên Dùng</th>
                    <th className="py-3.5 px-4 sm:px-6">Độ Mỏng So Với Chuẩn</th>
                    <th className="py-3.5 px-4 sm:px-6 hidden sm:table-cell">Chỉ Số Abbe</th>
                    <th className="py-3.5 px-4 sm:px-6">Kiểu Gọng Phù Hợp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {refractiveIndexTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-heading">
                        {row.index}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-600">
                        {row.type}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-[var(--color-primary)] font-bold">
                        {row.diopter}
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-teal-700">
                        {row.thickness}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-600 hidden sm:table-cell">
                        {row.abbe}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-xs text-slate-600">
                        {row.frames}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-brand-muted gap-2">
              <span>* Độ dày mép kính thực tế còn phụ thuộc vào đường kính mắt kính của khung gọng và khoảng cách đồng tử (PD).</span>
              <Link href="/rx-lab/" className="font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
                <span>Toa độ phức tạp? Khám phá dịch vụ Lab RX kỹ thuật số</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. INTERACTIVE FAQ ACCORDION                              */}
        {/* ========================================================= */}
        <section id="faq-quang-hoc" className="max-w-4xl mx-auto space-y-6 scroll-mt-24">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/60 px-3 py-1 rounded-full border border-[var(--color-border)]/50">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Giải Đáp Quang Học Nhanh</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Thắc Mắc Thường Gặp Về Tròng Kính
            </h2>
            <p className="text-brand-muted text-xs sm:text-sm">
              Bấm vào câu hỏi để xem giải đáp chi tiết từ chuyên gia nhãn khoa Rocky Lens.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-4 sm:p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-2xs open:shadow-sm transition-all"
              >
                <summary className="font-bold text-heading text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[var(--color-primary)] font-black text-lg group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed pl-1">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. QUICK NAVIGATION LINK TO LAB RX & PRODUCTS             */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
          <Link
            href="/trong-kinh/"
            className="p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Danh Mục Sản Phẩm</div>
              <div className="text-base font-bold text-heading group-hover:text-[var(--color-primary)] transition-colors">
                Xem toàn bộ 12 giải pháp tròng kính Rocky &rarr;
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/rx-lab/"
            className="p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-xs hover:border-[var(--color-primary)] hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Trung Tâm Gia Công</div>
              <div className="text-base font-bold text-heading group-hover:text-[var(--color-primary)] transition-colors">
                Khám phá dịch vụ Lab RX kỹ thuật số 24h &rarr;
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* Contact CTA */}
        <ContactCTA />

      </div>
    </div>
  );
}
