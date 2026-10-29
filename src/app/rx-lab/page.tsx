import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Wrench,
  Clock,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  Scan,
  Compass,
  Glasses,
  Check,
  HelpCircle,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import B2BQuoteButton from '@/components/common/B2BQuoteButton';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Trung Tâm Gia Công Lab Kỹ Thuật Số & Tròng Kính Đặt Đánh RX - Rocky Lens Canada',
  description:
    'Trung tâm gia công Lab tròng kính kỹ thuật số Freeform RX tiêu chuẩn quốc tế. Nhận đặt đánh độ cao (-20.00D đến +10.00D), độ loạn đến -6.00D, lăng kính Prism, mài lắp gọng khoan chính xác. Thời gian giao hàng hỏa tốc 24-48h cho đại lý toàn quốc.',
  path: '/rx-lab/',
});

const rxCapabilities = [
  {
    icon: Compass,
    title: 'Toa Độ Khúc Xạ Cực Đại',
    subtitle: 'High Sphere & Cylinder Range',
    description:
      'Gia công chính xác dải độ phức tạp: Độ cầu (SPH) từ -20.00D đến +10.00D, độ loạn (CYL) lên đến -6.00D. Tính toán bù trừ quang sai góc liếc giúp rìa tròng phẳng mỏng và tầm nhìn không bị biến dạng méo hình.',
    highlight: 'SPH -20.00D ~ +10.00D | CYL đến -6.00D',
  },
  {
    icon: EyeIcon,
    title: 'Lăng Kính Prism & Tật Song Thị',
    subtitle: 'Prism Correction & Axis Precision',
    description:
      'Xử lý chuyên biệt lăng kính điều chỉnh lé, song thị và rối loạn thị giác hai mắt. Căn chỉnh trục chính xác tới từng 0.5 độ, kết hợp định tâm theo khoảng cách đồng tử (PD) từng mắt riêng biệt.',
    highlight: 'Prism đến 10Δ | Định tâm từng mắt',
  },
  {
    icon: Glasses,
    title: 'Gia Công Gọng Khoan & Xẻ Cước 3D',
    subtitle: 'Rimless & Semi-Rimless Finishing',
    description:
      'Mài vát vòm 3D, vát phẳng thẩm mỹ và khoan lỗ bắt ốc tự động độ chính xác cao trên phôi Mitsui MR-8 & MR-7 siêu dai. Cam kết chịu lực va đập vượt trội, không rạn nứt hay mẻ mép kính.',
    highlight: 'Phôi MR-8/MR-7 chống vỡ tuyệt đối',
  },
  {
    icon: Sparkles,
    title: 'Nhuộm Màu Thời Trang & Tráng Gương',
    subtitle: 'Custom Tinting & Flash Mirror',
    description:
      'Nhuộm màu đơn sắc, gradient chuyển tiếp 2 tầng màu theo bảng màu chuẩn quốc tế. Tùy chọn phủ lớp tráng gương Flash Mirror (Bạc, Vàng, Xanh dương) kết hợp lớp phủ chống chói phản quang mặt sau.',
    highlight: 'Gradient thẩm mỹ + Tráng gương AR',
  },
];

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    </svg>
  );
}

const labWorkflow = [
  {
    step: '01',
    title: 'Tiếp Nhận Đơn & Quét Khung Gọng 3D',
    desc: 'Nhận toa kính điện tử qua Zalo/Portal. Máy quét 3D Tracer tự động đo đạc chính xác biên dạng gọng, độ cong rãnh và kích thước mắt kính đến từng 0.05mm.',
  },
  {
    step: '02',
    title: 'Tính Toán Quang Học Tự Do CAD/CAM',
    desc: 'Phần mềm tính toán ma trận điểm vi mô Freeform, tối ưu hóa công suất khúc xạ mặt sau dựa trên thông số gọng thực tế và khoảng cách đồng tử (PD).',
  },
  {
    step: '03',
    title: 'Phay Tiện Kim Cương & Đánh Bóng Điểm',
    desc: 'Hệ thống máy phay kỹ thuật số CNC với dao kim cương tự nhiên tiện chính xác từng micromet, sau đó đánh bóng bề mặt bằng đầu mềm siêu mịn chuyên dụng.',
  },
  {
    step: '04',
    title: 'Xử Lý Tôi Cứng & Phủ Nano Chân Không',
    desc: 'Tròng kính được phủ lớp màng cứng chống trầy xước, sau đó đưa vào buồng bay hơi chân không để lắng đọng hệ lớp phủ AR, SHMC siêu trượt nước và DriveShield.',
  },
  {
    step: '05',
    title: 'Đo Kiểm Tự Động & Khắc Laser Vi Chìm',
    desc: 'Hệ thống Lensmeter điện tử đo kiểm tra 100% dung sai tiêu cự. Máy khắc laser vi chìm mã số quản lý và nhận diện thương hiệu Rocky chính hãng.',
  },
];

const rxIndexTable = [
  {
    index: '1.56 Đặt Đánh Freeform',
    sph: 'Cận đến -6.00D | Viễn đến +4.00D',
    cyl: 'Đến -4.00D',
    features: 'Tối ưu chi phí cho toa loạn cao hoặc độ viễn nhẹ',
    frames: 'Gọng nguyên khung nhựa hoặc kim loại',
  },
  {
    index: '1.60 MR-8 Kỹ Thuật Số',
    sph: 'Cận đến -8.00D | Viễn đến +6.00D',
    cyl: 'Đến -4.00D',
    features: 'Vật liệu dẻo dai chống vỡ, Abbe 42 sắc nét',
    frames: 'Lựa chọn số 1 cho gọng khoan ốc & gọng cước',
  },
  {
    index: '1.67 MR-7 Siêu Mỏng',
    sph: 'Cận đến -12.00D | Viễn đến +8.00D',
    cyl: 'Đến -6.00D',
    features: 'Mỏng hơn 25-30%, chịu nhiệt tốt, mép tròng tinh tế',
    frames: 'Gọng titan thanh mảnh, gọng khoan, xẻ cước',
  },
  {
    index: '1.74 Ultra Freeform',
    sph: 'Cận đến -20.00D | Viễn đến +10.00D',
    cyl: 'Đến -6.00D',
    features: 'Mỏng nhất hiện nay (giảm 40% bề dày viền)',
    frames: 'Gọng kim loại nhỏ, kính thời trang cận nặng',
  },
];

export default function RxLabPage() {
  return (
    <div className="bg-[var(--site-bg-start)] min-h-screen">
      <Breadcrumbs items={[{ label: 'RX & Lab Kỹ Thuật Số', href: '/rx-lab/' }]} />

      {/* ========================================================= */}
      {/* 1. HERO SECTION: DIGITAL RX LAB CENTER                    */}
      {/* ========================================================= */}
      <section className="b2b-gradient text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-[var(--button-end)]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full mb-4 bg-white/10 text-[var(--button-start)] border border-white/20 shadow-xs backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Trung Tâm Gia Công Kỹ Thuật Số Đạt Chuẩn Canada Opticians
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] max-w-4xl">
            Gia Công Lab RX &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              Tròng Kính Kỹ Thuật Số Đặt Đánh
            </span>
          </h1>

          <p className="mt-4 text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            Chuẩn xác quang học từng micromet. Rocky Lens cung cấp dịch vụ gia công kỹ thuật số Freeform mặt sau theo đơn bác sĩ, xử lý chuyên biệt các toa kính phức tạp, lăng kính Prism và mài lắp gọng khoan thẩm mỹ cao cho hệ thống đại lý kính mắt toàn quốc.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/15 max-w-3xl text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">&lt; 0.01D</div>
              <div className="text-xs text-slate-300">Dung sai phay kỹ thuật số</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[var(--button-middle)]">-20D ~ +10D</div>
              <div className="text-xs text-slate-300">Dải khúc xạ gia công</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">24h - 48h</div>
              <div className="text-xs text-slate-300">Tốc độ hoàn thiện đơn Lab</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[var(--button-end)]">100%</div>
              <div className="text-xs text-slate-300">Kiểm định Lensmeter laser</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <B2BQuoteButton
              className="button-primary px-6 py-3 rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95 inline-flex items-center gap-2"
              showIcon={false}
            >
              Gửi Đơn Đặt Lab RX
            </B2BQuoteButton>
            <a
              href="tel:0933102653"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-base font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[var(--button-start)]" />
              <span>Hotline Kỹ Thuật: 0933 102 653</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ADVANCED RX CAPABILITIES (4 CARDS)                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-primary text-xs font-bold border border-[var(--color-border)]/60">
            <Wrench className="w-3.5 h-3.5" />
            <span>Năng Lực Đặt Đánh Toa Khó</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-heading tracking-tight">
            Giải Quyết Mọi Thách Thức Thị Giác Phức Tạp
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Hạ tầng máy móc kỹ thuật số hiện đại cùng thuật toán tính toán bề mặt tự do giúp Rocky Lens đáp ứng những yêu cầu khúc xạ khắt khe nhất từ các bác sĩ nhãn khoa và chuyên gia đo khúc xạ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rxCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="card-surface rounded-3xl p-6 sm:p-8 bg-white border border-[var(--color-border)]/70 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--site-bg-middle)]/50 text-[var(--color-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {cap.subtitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-heading">
                  {cap.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[var(--color-primary)]">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>{cap.highlight}</span>
                </span>
                <span className="text-slate-400 group-hover:text-[var(--color-primary)] transition-colors">
                  Chuẩn xác 0.01D &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FREEFORM DIGITAL SURFACING VS TRADITIONAL              */}
      {/* ========================================================= */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-[var(--button-start)] text-xs font-bold border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Đột Phá Quang Học Kỹ Thuật Số</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Công Nghệ Phay Mặt Sau Freeform 4K
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Khác biệt hoàn toàn với tròng phay thô truyền thống chỉ dùng khuôn cong cố định, công nghệ phay kỹ thuật số mặt sau của Rocky Lens điều khiển mũi dao kim cương tự do theo từng điểm ảnh vi mô.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Column */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between text-slate-400 text-xs uppercase tracking-wider font-bold">
                <span>Công Nghệ Cũ</span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">Hạn chế</span>
              </div>
              <h3 className="text-xl font-bold text-white">Gia Công Khuôn Đúc Truyền Thống</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sử dụng các khuôn cong có sẵn, công suất được áp đặt cố định lên bề mặt trước hoặc sau mà không bù trừ được độ nghiêng của khung kính khi đeo thực tế.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span>Quang sai méo hình lớn khi mắt liếc về các góc rìa tròng.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span>Vùng chuyển tiếp của đa tròng hẹp, dễ gây chóng mặt, mất nhiều ngày làm quen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span>Dung sai chế tác dao động từ 0.12D đến 0.25D.</span>
                </li>
              </ul>
            </div>

            {/* Rocky Freeform Column */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 border border-teal-400/40 backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-teal-300 text-xs uppercase tracking-wider font-bold">
                <span>Tiêu Chuẩn Rocky Lens Canada</span>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40">Tối ưu 4K</span>
              </div>
              <h3 className="text-xl font-bold text-white">Phay Mặt Sau Kỹ Thuật Số Freeform</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Mặt sau tròng được tính toán phân tích và tạo hình trực tiếp bằng máy phay CNC đa trục, tích hợp thông số cá nhân hóa: khoảng cách đồng tử, độ cong gọng và góc nghiêng bản lề.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Mở rộng trường nhìn lên đến 40%, triệt tiêu hoàn toàn hiện tượng méo cạnh.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Đa tròng êm ái, chuyển vùng xa - trung - gần liền mạch không giật hình.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Độ chính xác quang học tuyệt đối với sai số dưới 0.01 Diop.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WORKFLOW: 5-STEP LAB CLOSED LOOP                       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-primary text-xs font-bold border border-[var(--color-border)]/60">
            <Scan className="w-3.5 h-3.5" />
            <span>Quy Trình Khép Kín</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-heading tracking-tight">
            5 Bước Gia Công Lab Chuẩn Y Khoa
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Mỗi cặp tròng kính RX rời xưởng đều trải qua chu trình kiểm soát chất lượng nghiêm ngặt theo tiêu chuẩn quản lý y tế quốc tế ISO 13485:2016.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {labWorkflow.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-xs flex flex-col justify-between hover:border-[var(--color-primary)] transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--site-bg-middle)]/60 text-[var(--color-primary)] font-black flex items-center justify-center text-sm mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-heading text-sm mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. RX SPECIFICATION & DIOPTER RANGE TABLE                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[var(--site-bg-middle)]/60 text-primary text-xs font-bold border border-[var(--color-border)]/60">
            <Layers className="w-3.5 h-3.5" />
            <span>Bảng Quy Chuẩn Gia Công</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
            Dải Độ Khúc Xạ &amp; Chiết Suất Lab RX
          </h2>
          <p className="text-brand-muted text-xs sm:text-sm">
            Tài liệu tra cứu nhanh giúp kỹ thuật viên cửa hàng lựa chọn đúng phôi và chiết suất cho khách hàng có toa độ đặc biệt.
          </p>
        </div>

        <div className="card-surface rounded-3xl overflow-hidden border border-[var(--color-border)]/70 shadow-xs bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Chiết Suất &amp; Dòng Tròng</th>
                  <th className="py-4 px-4 sm:px-6">Độ Cầu (SPH) Nhận Gia Công</th>
                  <th className="py-4 px-4 sm:px-6">Độ Loạn (CYL)</th>
                  <th className="py-4 px-4 sm:px-6 hidden md:table-cell">Đặc Tính Quang Học</th>
                  <th className="py-4 px-4 sm:px-6">Gọng Khuyên Dùng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {rxIndexTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-heading">
                      {row.index}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[var(--color-primary)] font-bold">
                      {row.sph}
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      {row.cyl}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-brand-muted hidden md:table-cell">
                      {row.features}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-xs text-slate-600">
                      {row.frames}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/60 border-t border-slate-100 text-xs text-brand-muted flex flex-wrap items-center justify-between gap-2">
            <span>* Đối với các toa lăng kính Prism &gt; 5Δ hoặc độ viễn trên +10.00D, vui lòng liên hệ trực tiếp kỹ sư Lab để tính toán biên dạng tròng riêng biệt.</span>
            <span className="font-bold text-[var(--color-primary)]">Hỗ trợ kỹ thuật 24/7 qua Zalo: 0933 102 653</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. PARTNER COMMITMENT & DISPATCH SLA                      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-900 via-[#002433] to-[#001722] text-white border border-teal-500/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-bold border border-white/20">
                <Clock className="w-3.5 h-3.5" />
                <span>Tiến Độ &amp; Chính Sách B2B</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Cam Kết Tốc Độ Giao Hàng &amp; Bảo Hành 1 Đổi 1
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Chúng tôi hiểu rằng mỗi toa kính đặt đánh đều là sự chờ đợi của khách hàng tại tiệm kính của bạn. Rocky Lens cam kết rút ngắn tối đa thời gian chờ đợi với tiến độ giao hàng hỏa tốc:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Hoàn thiện trong 24h tại TP.HCM &amp; Hà Nội</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Chuyển phát nhanh 36-48h đến các tỉnh thành</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Bảo hành sai lệch toa đổi mới 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Tem bảo chứng chống giả &amp; khăn lau cao cấp</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/15 backdrop-blur-md space-y-4 text-center lg:text-left">
              <h3 className="text-lg font-bold text-white">Bạn cần gia công toa kính khó?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Gửi thông số toa kính (SPH, CYL, AXIS, PD, ADD) để kỹ thuật viên Lab Rocky phân tích và báo giá sỉ ngay lập tức.
              </p>
              <div className="space-y-2 pt-2">
                <B2BQuoteButton
                  className="w-full py-3 rounded-full button-primary text-sm font-bold shadow-md cursor-pointer hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                  showIcon={false}
                >
                  Gửi Toa Đặt Lab Trực Tuyến
                </B2BQuoteButton>
                <a
                  href="https://zalo.me/0933102653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-teal-300" />
                  <span>Gửi Toa Qua Zalo Lab (0933 102 653)</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. QUICK FAQ FOR LAB CLIENTS                              */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/60 px-3 py-1 rounded-full border border-[var(--color-border)]/50">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải Đáp Về Dịch Vụ Lab</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-heading">
            Câu Hỏi Thường Gặp Về Đặt Đánh Tròng RX
          </h2>
        </div>

        <div className="space-y-3">
          <details className="group p-4 sm:p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-2xs open:shadow-sm transition-all">
            <summary className="font-bold text-heading text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
              <span>Cửa hàng kính chưa từng hợp tác có thể gửi đơn Lab thử nghiệm không?</span>
              <span className="text-[var(--color-primary)] font-black text-lg group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed pl-1">
              Hoàn toàn có thể. Rocky Lens hỗ trợ tiếp nhận đơn đặt đánh thử nghiệm cho các cửa hàng mắt kính và phòng khám khúc xạ toàn quốc với chính sách chiết khấu đại lý ưu đãi ngay từ đơn hàng đầu tiên.
            </p>
          </details>

          <details className="group p-4 sm:p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-2xs open:shadow-sm transition-all">
            <summary className="font-bold text-heading text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
              <span>Đại lý ở tỉnh xa gửi gọng kính về Lab mài lắp bằng cách nào?</span>
              <span className="text-[var(--color-primary)] font-black text-lg group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed pl-1">
              Đại lý có thể gửi gọng trực tiếp qua bưu điện/chuyển phát hỏa tốc về văn phòng Lab tại TP.HCM hoặc Hà Nội. Nếu đại lý đã có sẵn máy quét 3D hoặc gửi số đo khung gọng chuẩn (chiều rộng mắt, cầu mũi, chiều cao), Rocky có thể gia công mài cạnh sẵn theo kích thước để đại lý tự lắp ráp tại tiệm.
            </p>
          </details>

          <details className="group p-4 sm:p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-2xs open:shadow-sm transition-all">
            <summary className="font-bold text-heading text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
              <span>Tròng RX đặt đánh có được áp dụng đầy đủ tính năng BlueCut và DriveShield không?</span>
              <span className="text-[var(--color-primary)] font-black text-lg group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed pl-1">
              Có. Toàn bộ các dòng tròng đặt đánh Freeform RX của Rocky Lens đều có tùy chọn phôi lọc ánh sáng xanh BlueCut UV420, phủ chống chói chuyên dụng lái xe ban đêm DriveShield, hoặc đổi màu thông minh Photochromic.
            </p>
          </details>
        </div>
      </section>

      {/* Navigation link to other pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <Link
          href="/cong-nghe/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:underline"
        >
          <span>Khám phá thêm công nghệ vật liệu &amp; lớp phủ quang học Rocky</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
