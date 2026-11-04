import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ArrowUpRight, Building2, Store } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import SectionHeading from '@/components/shared/SectionHeading';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: 'Liên Hệ Hệ Thống Rocky Lens Việt Nam | Hỗ Trợ & Tìm Đại Lý',
  description: 'Trung tâm hỗ trợ khách hàng, tra cứu cửa hàng mắt kính ủy quyền Rocky Lens gần nhất và kênh kết nối kỹ thuật Lab RX cho đối tác trên toàn quốc.',
  path: '/lien-he/',
});

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Liên hệ', href: '/lien-he/' }]} />

      {/* Page Hero */}
      <section className="b2b-gradient text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Hệ Thống Phân Phối &amp; Hỗ Trợ Chính Thức</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white uppercase">
            LIÊN HỆ HỆ THỐNG ROCKY LENS VIỆT NAM
          </h1>

          <p className="mt-4 text-white/85 text-sm sm:text-base leading-relaxed">
            Trung tâm chăm sóc khách hàng và hệ thống phân phối của Rocky Lens luôn sẵn sàng hỗ trợ người tiêu dùng tìm kiếm đại lý chính hãng, tư vấn giải pháp thị lực phù hợp và đồng hành cùng các đối tác quang học trên toàn quốc.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/trong-kinh/"
              className="button-primary px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Khám Phá Tròng Kính</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.zalo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Nhắn Zalo Tư Vấn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Hotline Hỗ Trợ */}
          <div className="p-8 rounded-3xl card-surface border border-[var(--color-border)]/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)]/50 flex items-center justify-center text-[var(--color-primary)] mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">Hotline Hỗ Trợ Khách Hàng</h3>
              <p className="text-xs text-[var(--color-muted)] mb-4">Tư vấn thông số tròng kính, giải đáp khúc xạ và chỉ dẫn đại lý mắt kính gần nhất.</p>
              <div className="space-y-1">
                <div className="text-xs text-[var(--color-muted)] font-semibold">Hotline Chăm Sóc Khách Hàng:</div>
                <a href={`tel:${siteConfig.phones.hotline}`} className="text-lg font-black text-[var(--color-primary)] hover:underline">
                  {siteConfig.phones.hotlineDisplay}
                </a>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[var(--color-border)]/30 space-y-2.5">
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold button-primary cursor-pointer"
              >
                <span>Tư Vấn Trực Tiếp Qua Zalo</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${siteConfig.phones.hotline}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-2 px-4 rounded-xl text-xs font-semibold bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] text-heading transition-colors"
              >
                <span>Gọi Hotline: {siteConfig.phones.hotlineDisplay}</span>
                <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              </a>
            </div>
          </div>

          {/* Card 2: Zalo Tư Vấn & Kỹ Thuật */}
          <div className="p-8 rounded-3xl b2b-gradient text-white border border-[var(--color-border)]/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zalo Tư Vấn &amp; Toa Kính RX</h3>
              <p className="text-xs text-white/80 mb-4">Kênh hỗ trợ giải đáp nhanh về tính năng tròng, tiếp nhận toa kính phức tạp và tra cứu điểm bán.</p>
              <div className="space-y-1">
                <div className="text-xs text-white/90 font-semibold">Zalo Tư Vấn &amp; Lab RX:</div>
                <div className="text-base font-bold text-white">{siteConfig.zalo.display}</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/20 relative z-10">
              <a
                href={siteConfig.zalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-[var(--b2b-end)] hover:bg-slate-100 transition-colors shadow-xs"
              >
                <span>Mở Zalo Trò Chuyện Ngay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Email Doanh Nghiệp */}
          <div className="p-8 rounded-3xl card-surface border border-[var(--color-border)]/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">Email Hỗ Trợ &amp; Hợp Tác</h3>
              <p className="text-xs text-[var(--color-muted)] mb-4">Tiếp nhận thông tin bảo hành, hồ sơ hợp tác phân phối và ý kiến đóng góp của khách hàng.</p>
              <div className="space-y-2">
                <div>
                  <div className="text-[11px] text-[var(--color-muted)] font-semibold">Email Chăm Sóc Khách Hàng:</div>
                  <a href={`mailto:${siteConfig.emails.contact}`} className="text-xs font-bold text-heading hover:text-[var(--color-primary)]">
                    {siteConfig.emails.contact}
                  </a>
                </div>
                <div>
                  <div className="text-[11px] text-[var(--color-muted)] font-semibold">Email Phòng Đối Tác B2B:</div>
                  <a href={`mailto:${siteConfig.emails.b2b}`} className="text-xs font-bold text-heading hover:text-[var(--color-primary)]">
                    {siteConfig.emails.b2b}
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[var(--color-border)]/30">
              <a
                href={`mailto:${siteConfig.emails.contact}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[var(--b2b-end)] hover:opacity-90 text-white transition-opacity"
              >
                <span>Gửi Email Cho Rocky</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Addresses & Working Hours */}
        <div className="mt-16 section-background rounded-3xl p-8 sm:p-10 border border-[var(--color-border)]/50">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-heading tracking-tight">
              Hệ Thống Trung Tâm Kho Vận &amp; Văn Phòng Giao Dịch
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
              Địa chỉ các trung tâm phân phối và phòng giao dịch của Rocky Lens phục vụ khách hàng và đại lý:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.addresses.map((addr, idx) => (
              <div key={idx} className="card-surface rounded-2xl p-6 border border-[var(--color-border)]/50 space-y-3">
                <div className="flex items-center space-x-2.5 text-[var(--color-primary)]">
                  <Building2 className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-sm text-heading">{addr.title}</h3>
                </div>
                <div className="flex items-start space-x-2 text-xs text-[var(--color-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--color-muted)] shrink-0 mt-0.5" />
                  <span>{addr.street}, {addr.city}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[var(--color-muted)]">
                  <Clock className="w-4 h-4 text-[var(--color-muted)] shrink-0" />
                  <span>Thứ 2 - Thứ 7: 08:00 - 17:30 (Chủ nhật nghỉ)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
