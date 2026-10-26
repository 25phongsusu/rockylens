import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Shield, CheckCircle, Globe2 } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteConfig } from '@/config/site';

export default function CompanyPreview() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Grid of Real Company Assets */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/company/about-1.jpg"
                    alt="Đội ngũ chuyên viên quang học Rocky Lens"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/company/cert-1.jpg"
                    alt="Chứng nhận chất lượng quang học ISO"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/company/about-2.jpg"
                    alt="Trung tâm Lab RX Freeform kỹ thuật số"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/company/about-3.jpg"
                    alt="Sự kiện hội nghị nhãn khoa khúc xạ"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] border border-teal-200">
              Về Doanh Nghiệp
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Định Vị Thương Hiệu Tròng Kính Tiêu Chuẩn Canada Tại Việt Nam
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Thành lập từ nền tảng hợp tác chuyên môn với hiệp hội chuyên viên khúc xạ <strong>Canada Opticians</strong>, Rocky Lens không ngừng mở rộng nghiên cứu và ứng dụng những công nghệ vật liệu tiên tiến nhất vào từng sản phẩm tròng mắt kính.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-[#0B7B8A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Cam Kết Nguồn Gốc Phôi Kính Chuẩn Xác</h4>
                  <p className="text-xs text-slate-600">Sử dụng 100% monomer quang học từ Mitsui Chemicals (Nhật Bản), đạt độ tinh khiết quang học loại A.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Chứng Nhận Chất Lượng Quốc Tế</h4>
                  <p className="text-xs text-slate-600">Dây chuyền sản xuất và gia công đạt chuẩn quản lý chất lượng ISO 9001 và chứng nhận lưu hành CE Châu Âu.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Hệ Thống Trung Tâm Lab RX Hiện Đại</h4>
                  <p className="text-xs text-slate-600">Được đầu tư đồng bộ máy phay kỹ thuật số Schneider Đức, xử lý chuẩn xác các toa kính cận - loạn - viễn phức tạp.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/ve-chung-toi/"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#050E10] hover:bg-slate-800 text-white transition-all"
              >
                <span>Xem Chi Tiết Về Chúng Tôi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
