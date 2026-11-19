import React from 'react';
import Link from 'next/link';
import { footerNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { assetUrl } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-[var(--b2b-end)] text-slate-300 font-medium py-16 px-6 text-base border-t border-[var(--b2b-middle)]/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <img
              src={assetUrl('/assets/logo_rocky_white.png')}
              alt={siteConfig.name}
              className="h-10 w-auto object-contain"
            />
            <p className="text-slate-400 font-medium text-base leading-relaxed">
              Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi {siteConfig.legalName}.
            </p>
            <div className="text-base text-slate-400 font-medium">
              Giấy phép kinh doanh số: 0316499823 do Sở Kế hoạch và Đầu tư TP.HCM cấp.
            </div>
          </div>

          {/* Col 2: Solutions (wired to footerNavigation + catalog filters) */}
          <div className="space-y-3">
            <span className="text-white font-bold text-lg block">Danh Mục Tròng Kính</span>
            <ul className="space-y-2 text-base">
              {footerNavigation.products.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-400 font-medium hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Knowledge & Technology */}
          <div className="space-y-3">
            <span className="text-white font-bold text-lg block">Kiến Thức &amp; Công Nghệ</span>
            <ul className="space-y-2 text-base">
              {footerNavigation.knowledge.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-400 font-medium hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/rx-lab/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Gia công Lab RX kỹ thuật số
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Distribution & Contact */}
          <div className="space-y-3">
            <span className="text-white font-bold text-lg block">Tiếp Nhận Đại Lý &amp; B2B</span>
            <div className="space-y-2 text-base text-slate-400 font-medium">
              <p><strong>Hotline B2B:</strong> {siteConfig.phones.hotlineDisplay}</p>
              <p><strong>Email Đại Lý:</strong> {siteConfig.emails.b2b}</p>
              <p><strong>Zalo Hợp Tác:</strong> {siteConfig.phones.hotlineDisplay}</p>
              <p><strong>Trung Tâm Kho:</strong> {siteConfig.addresses[0]?.street || 'TP. Hồ Chí Minh & Hà Nội'}</p>
              <p className="text-base text-slate-400 font-medium pt-2">
                Tiếp nhận yêu cầu đại lý: 8:00 - 18:00 (Thứ 2 - Thứ 7)
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-slate-400 font-medium">
          <div>
            &copy; 2026 {siteConfig.name} &amp; Clearly Vietnam. Bảo lưu mọi quyền.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/ve-chung-toi/" className="text-slate-400 font-medium hover:text-white transition-colors">
              Về chúng tôi
            </Link>
            <Link href="/cong-nghe/" className="text-slate-400 font-medium hover:text-white transition-colors">
              Tiêu chuẩn kỹ thuật
            </Link>
            <Link href="/danh-cho-doi-tac/" className="text-slate-400 font-medium hover:text-white transition-colors">
              Chính sách đối tác
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
