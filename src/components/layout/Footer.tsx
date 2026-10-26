import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Download, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#050E10] text-slate-300 border-t border-slate-800">
      {/* Upper Footer / B2B Fast Bar */}
      <div className="border-b border-slate-800/80 bg-[#0A1B22]/50 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-lg bg-[#0B7B8A]/20 border border-[#0B7B8A]/40 flex items-center justify-center text-[#0B7B8A]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Hợp tác phân phối Đại lý & Chuỗi kính mắt</h4>
              <p className="text-xs text-slate-400">Chính sách chiết khấu cạnh tranh, hỗ trợ máy đo và vật phẩm POSM trưng bày</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/documents/Rocky_Lens_Catalogue_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#0B7B8A]" />
              <span>Tải Catalogue 2025</span>
            </a>
            <a
              href={siteConfig.zalo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#0B7B8A] hover:bg-[#096370] text-white transition-colors"
            >
              <span>Kết Nối Zalo Đại Lý</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info & Contacts */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0B7B8A] to-[#050E10] flex items-center justify-center text-white font-black text-lg">
                R
              </div>
              <span className="text-xl font-bold tracking-tight text-white">ROCKY LENS</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Thương hiệu tròng kính quang học tiêu chuẩn Canada Opticians. Chuyên cung cấp tròng kính thuốc đơn tròng, đa tròng Freeform HD, tròng đổi màu phân tử và giải pháp kiểm soát cận thị học đường cho các đối tác chuỗi mắt kính trên toàn quốc.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#0B7B8A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400">Hotline B2B / Khách lẻ: </span>
                  <a href={`tel:${siteConfig.phones.hotline}`} className="text-white hover:text-[#0B7B8A] font-semibold">
                    {siteConfig.phones.hotlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#0B7B8A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400">Email: </span>
                  <a href={`mailto:${siteConfig.emails.contact}`} className="text-white hover:text-[#0B7B8A]">
                    {siteConfig.emails.contact}
                  </a>
                </div>
              </div>

              {siteConfig.addresses.map((addr, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#0B7B8A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-medium">{addr.title}: </span>
                    <span className="text-slate-400">{addr.street}, {addr.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Danh Mục Sản Phẩm</h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.products.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#0B7B8A] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tech & Knowledge */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Công Nghệ & Kiến Thức</h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.knowledge.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#0B7B8A] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Partners & Policy */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Dành Cho Đại Lý</h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.partner.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#0B7B8A] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="inline-flex items-center space-x-1.5 text-[11px] text-[#D97706]">
                <Award className="w-3.5 h-3.5" />
                <span>Tiêu chuẩn chất lượng ISO 9001 & CE</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Disclaimer */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-6 text-center text-xs text-slate-500 bg-[#03080A]">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} ({siteConfig.name}). Tất cả quyền được bảo lưu.
          </p>
          <p className="text-[11px] text-slate-500 max-w-3xl mx-auto">
            Khuyến cáo: Các thông tin kỹ thuật và thông số quang học trên website mang tính chất tham khảo chuyên môn. Để xác định chính xác tật khúc xạ và giải pháp tròng kính phù hợp nhất, vui lòng thăm khám tại các bệnh viện mắt hoặc cơ sở nhãn khoa có chuyên môn.
          </p>
        </div>
      </div>
    </footer>
  );
}
