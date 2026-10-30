import React from 'react';
import { Metadata } from 'next';
import { Sparkles, Calendar, Award, Users, HeartHandshake } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import EventsView from '@/features/events/EventsView';
import { constructMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';

export const metadata: Metadata = constructMetadata({
  title: 'Sự Kiện & Hoạt Động Thương Hiệu — Rocky Lens Canada',
  description:
    'Cập nhật các sự kiện nổi bật của Rocky Lens Canada: Hội nghị Nhãn khoa Toàn quốc (VOS), hành trình khám mắt học đường thiện nguyện tại Cần Thơ, hội thảo đào tạo chuyển giao công nghệ Lab RX và lễ vinh danh đối tác chiến lược.',
  path: '/su-kien/',
  image: '/images/events/nhan-khoa-2023-gian-hang-rocky.jpg',
  keywords: [
    'sự kiện rocky lens',
    'hội nghị nhãn khoa việt nam',
    'khám mắt học đường cần thơ',
    'chuyển giao công nghệ lab rx',
    'đào tạo kỹ thuật kính mắt',
    'đối tác rocky lens',
    'clearly vietnam',
  ],
});

export default function EventsPage() {
  return (
    <div className="bg-[var(--site-bg-start)] min-h-screen">
      <Breadcrumbs items={[{ label: 'Sự kiện & Hoạt động', href: '/su-kien/' }]} />

      {/* ========================================================= */}
      {/* 1. HERO BANNER: BRAND EVENTS & INITIATIVES                */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 b2b-gradient text-white">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[var(--button-middle)]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="tracking-wide uppercase">Rocky Lens In Action • Hoạt Động Thương Hiệu</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              SỰ KIỆN &amp; HOẠT ĐỘNG{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                ROCKY LENS
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed">
              Từ các kỳ Hội nghị Nhãn khoa Toàn quốc thường niên đến hành trình khám mắt cộng đồng phụng sự học sinh khó khăn, và chuỗi hội thảo chuyển giao công nghệ kỹ thuật số cho đại lý đối tác.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 max-w-4xl">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-cyan-300">15+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Hội Nghị &amp; Triển Lãm</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-cyan-300">1,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Học Sinh Khám Mắt</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-cyan-300">500+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Đối Tác Bác Sĩ &amp; Đại Lý</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-cyan-300">24/7</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Hỗ Trợ Kỹ Thuật RX Lab</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MAIN EVENTS & GALLERY COMPONENT                        */}
      {/* ========================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <EventsView />
      </main>
    </div>
  );
}
