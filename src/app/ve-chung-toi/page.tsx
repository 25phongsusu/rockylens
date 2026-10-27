import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Award, ShieldCheck, Factory, HeartHandshake, CheckCircle2, Globe, Users } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Về Chúng Tôi — Rocky Lens Canada',
  description: 'Tìm hiểu lịch sử thương hiệu tròng kính Rocky Lens (Canada Opticians), năng lực sản xuất Lab RX, hệ thống chứng nhận chất lượng ISO và cam kết dịch vụ.',
  path: '/ve-chung-toi/',
});

const certImages = [
  '/images/company/cert-1.jpg',
  '/images/company/cert-2.jpg',
  '/images/company/cert-3.jpg',
  '/images/company/cert-4.jpg',
];

const companyPhotos = [
  { src: '/images/company/about-1.jpg', caption: 'Đội ngũ chuyên viên kỹ thuật khúc xạ Rocky Lens' },
  { src: '/images/company/about-2.jpg', caption: 'Hệ thống buồng phủ chân không Nano AR đa tầng' },
  { src: '/images/company/about-3.jpg', caption: 'Hội nghị nhãn khoa và chuyển giao công nghệ' },
  { src: '/images/company/about-4.jpg', caption: 'Kiểm định quang học từng cặp tròng trước khi xuất xưởng' },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Về chúng tôi', href: '/ve-chung-toi/' }]} />

      {/* Page Hero */}
      <section className="b2b-gradient text-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Canada Opticians Legacy</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              SỨ MỆNH MANG TẦM NHÌN SẮC NÉT ĐẾN NGƯỜI VIỆT
            </h1>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              Rocky Lens được xây dựng trên nền tảng chuẩn mực quang học Canada Opticians, kết hợp công nghệ vật liệu đỉnh cao và tinh thần phụng sự vì sức khỏe đôi mắt cộng đồng.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/50 px-3 py-1 rounded-full border border-[var(--color-border)]/40">
                Lịch Sử & Định Hướng
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight">
                Hơn 20 Năm Kinh Nghiệm Trong Ngành Quang Học Khúc Xạ
              </h2>

              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                Được chuyển giao công nghệ trực tiếp từ các chuyên gia khúc xạ Canada, thương hiệu Rocky Lens chính thức hiện diện tại Việt Nam với mục tiêu đem lại các giải pháp tròng kính chất lượng cao nhất với mức giá hợp lý và minh bạch.
              </p>

              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                Chúng tôi không ngừng đầu tư vào hệ thống phòng Lab RX kỹ thuật số, áp dụng công nghệ mài phay mặt sau Freeform 3D để cá nhân hóa hoàn toàn từng thông số theo thói quen sinh hoạt và độ cong mắt cầu của người châu Á.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]/30">
                <div>
                  <div className="text-2xl font-black text-[var(--color-primary)]">500+</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Đại lý kính mắt toàn quốc</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-600">100.000+</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Cặp tròng phục vụ mỗi năm</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[var(--color-border)]/50">
                <Image
                  src="/images/banners/about-banner.png"
                  alt="Trụ sở và nhà máy Rocky Lens Canada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Photos of Operations */}
      <section className="py-20 section-background border-t border-b border-[var(--color-border)]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Hình Ảnh Thực Tế"
            title="Đội Ngũ Chuyên Viên & Cơ Sở Hoạt Động"
            description="Những hình ảnh chân thực ghi lại quy trình kiểm định quang học và các hoạt động hội nghị chuyên môn nhãn khoa của Rocky Lens."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPhotos.map((photo, idx) => (
              <div key={idx} className="card-surface rounded-2xl overflow-hidden shadow-xs border border-[var(--color-border)]/50">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
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

      {/* Certifications (ISO 9001, CE) */}
      <section id="chung-nhan" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Kiểm Định Quốc Tế"
            title="Chứng Nhận Tiêu Chuẩn Chất Lượng"
            description="Tất cả các dòng tròng kính Rocky Lens đều được cấp chứng nhận kiểm định chất lượng theo tiêu chuẩn y tế quốc tế."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certImages.map((cert, idx) => (
              <div
                key={idx}
                className="card-surface rounded-2xl p-4 border border-[var(--color-border)]/50 flex flex-col items-center justify-center text-center shadow-xs hover:border-[var(--color-primary)] transition-colors"
              >
                <div className="relative aspect-3/4 w-full rounded-lg overflow-hidden mb-3">
                  <Image
                    src={cert}
                    alt={`Chứng nhận chất lượng ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="text-[11px] font-semibold text-heading">
                  Chứng Nhận Kiểm Định #{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
