import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Shield, CheckCircle, Globe2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CompanyPreview() {
  return (
    <section className="py-20 bg-[#F5F5F7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Grid of Real Company & Optician Assets */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/company/about-1.jpg"
                    alt="Chuyên viên khúc xạ Rocky Lens"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/company/cert-1.jpg"
                    alt="Chứng chỉ ISO 13485:2016"
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
                    alt="Máy phay kỹ thuật số Schneider Đức"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/real/event_ophthalmology.jpg"
                    alt="Hội nghị nhãn khoa và khúc xạ"
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
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full liquid-pill text-[#0B7B8A]">
              Về Rocky Lens Canada
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Định Vị Thương Hiệu Tròng Kính Tiêu Chuẩn Canada Tại Việt Nam
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Kế thừa chuẩn mực khúc xạ từ <strong>The College of Opticians of Ontario</strong> (Canada), Rocky Lens mang đến những giải pháp tròng kính chuẩn y khoa quốc tế, được nghiên cứu tương thích tối đa với điều kiện khí hậu và thói quen sinh hoạt của người Việt.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-[#0B7B8A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Cam Kết Nguồn Gốc Phôi Kính Chuẩn Xác</h4>
                  <p className="text-xs text-slate-600">Sử dụng 100% monomer quang học từ Mitsui Chemicals (Nhật Bản), đạt độ tinh khiết quang học loại A.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Chứng Nhận Chất Lượng Y Tế Quốc Tế</h4>
                  <p className="text-xs text-slate-600">Đạt tiêu chuẩn quản lý thiết bị y tế ISO 13485:2016 và chứng chỉ hành nghề Optician Ontario No. 6181.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Mạng Lưới Phân Phối Toàn Quốc</h4>
                  <p className="text-xs text-slate-600">Có mặt tại 34 tỉnh thành với 3 tổng kho (Hà Nội, Đà Nẵng, TP.HCM), cung ứng cho hơn 1.200 cửa hàng mắt kính.</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/ve-chung-toi/"
                className="liquid-btn-secondary inline-flex items-center space-x-2 px-6 py-3 text-xs sm:text-sm font-bold shadow-xs hover:shadow"
              >
                <span>Xem Hồ Sơ Năng Lực Doanh Nghiệp</span>
                <ArrowRight className="w-4 h-4 text-[#0B7B8A]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
