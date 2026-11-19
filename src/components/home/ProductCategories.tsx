'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import homeContent from '@/../content/home_content.json';
import { assetUrl } from '@/lib/utils';

const productSolutions = homeContent.products.items;
const showcaseProducts = [...productSolutions].sort(
  (a, b) => a.showcase.order - b.showcase.order
);

export default function ProductCategories() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [displayMode, setDisplayMode] = useState<'essilor' | 'grid'>('essilor');
  const carouselRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const mode = (params.get('product_style') || params.get('style') || params.get('view') || '').toLowerCase();
      if (mode === 'grid' || mode === 'standard') {
        setDisplayMode('grid');
      } else if (mode === 'essilor') {
        setDisplayMode('essilor');
      } else {
        const saved = localStorage.getItem('rocky_product_mode');
        if (saved === 'grid') setDisplayMode('grid');
        else if (saved === 'essilor') setDisplayMode('essilor');
      }
    } catch {}
  }, []);

  const handleModeChange = (mode: 'essilor' | 'grid') => {
    setDisplayMode(mode);
    try {
      localStorage.setItem('rocky_product_mode', mode);
    } catch {}
  };

  const scrollCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  const filtered = activeFilter === 'Tất cả'
    ? productSolutions
    : productSolutions.filter((item) => item.filter === activeFilter);

  const { products } = homeContent;

  return (
    <section id="trong-kinh" className="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold text-primary tracking-wider uppercase">
              {products.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
              {products.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
                {products.highlight}
              </span>{' '}
              {products.suffix}
            </h2>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
              {products.desc}
            </p>
          </div>
          <div className="shrink-0 pb-1">
            <Link
              href={products.linkTop.href}
              className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 transition-colors"
            >
              <span>{products.linkTop.text}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mode Switcher Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-1 border-b border-slate-200/60 dark:border-white/10">
          <div className="inline-flex p-1 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200/90 dark:border-white/15 shadow-xs">
            <button
              type="button"
              onClick={() => handleModeChange('essilor')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                displayMode === 'essilor'
                  ? 'bg-gradient-to-r from-[var(--button-start)] to-[var(--button-middle)] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phong Cách Showcase</span>
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold ${
                displayMode === 'essilor' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800 dark:bg-white/15 dark:text-cyan-300'
              }`}>
                HOT
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                displayMode === 'grid'
                  ? 'bg-gradient-to-r from-[var(--button-start)] to-[var(--button-middle)] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Lưới Danh Mục Tiêu Chuẩn (Grid)</span>
            </button>
          </div>

          <div className="text-xs text-brand-muted">
            {displayMode === 'essilor' ? 'Chế độ Showcase 4 cột trực quan' : 'Chế độ lưới lọc theo nhóm nhu cầu'}
          </div>
        </div>

        {/* VIEW 1: SHOWCASE CAROUSEL */}
        {displayMode === 'essilor' && (
          <div className="relative max-w-[1340px] mx-auto py-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200/90 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:text-primary hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Xem sản phẩm trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200/90 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:text-primary hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Xem sản phẩm tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 no-scrollbar"
            >
              {showcaseProducts.map((item) => (
                <div
                  key={item.link}
                  className="w-[280px] sm:w-[300px] lg:w-[295px] shrink-0 snap-start transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 p-4 sm:p-5 rounded-3xl bg-transparent border border-[var(--color-border)] dark:border-white/20 hover:border-[var(--button-middle)] dark:hover:border-cyan-400"
                >
                  <div>
                    <Link href={item.link} className="block rounded-2xl overflow-hidden aspect-square relative mb-4 bg-slate-100 cursor-pointer">
                      <img
                        src={assetUrl(item.image)}
                        alt={item.showcase.headline}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold shadow-xs tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>Rocky Canada</span>
                      </div>
                    </Link>

                    <div className="space-y-0.5">
                      <div className="text-xl font-black text-heading tracking-tight flex items-baseline gap-1">
                        <span>{item.showcase.brand}</span>
                        <span className="text-base font-medium text-primary">{item.showcase.subBrand}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
                        {item.showcase.series}
                      </div>
                    </div>

                    <p className="text-sm font-bold text-heading leading-snug line-clamp-2 min-h-[2.5rem] mt-2 mb-4">
                      <Link href={item.link} className="hover:text-primary transition-colors block">
                        {item.showcase.headline}
                      </Link>
                    </p>
                  </div>

                  <Link
                    href={item.link}
                    className="w-full py-2.5 px-6 rounded-full font-bold text-sm border-1.5 border-[var(--button-middle)] dark:border-cyan-400 text-[var(--button-middle)] dark:text-cyan-300 bg-transparent hover:bg-[var(--button-middle)] hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 transition-all text-center flex items-center justify-center"
                  >
                    <span>Khám phá ngay</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: STANDARD GRID WITH CATEGORY TABS */}
        {displayMode === 'grid' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {products.filterTabs.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`product-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="max-w-[1240px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {filtered.map((item) => (
                  <div
                    key={item.link}
                    className="product-sol-card group flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 bg-transparent border-0 p-0 shadow-none"
                  >
                    <Link href={item.link} className="block cursor-pointer no-underline">
                      <div className="h-48 sm:h-54 w-full rounded-2xl overflow-hidden relative shadow-md group-hover:shadow-2xl transition-all duration-500 bg-slate-900/10">
                        <img
                          src={assetUrl(item.image)}
                          alt={item.alt || item.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-heading group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[3rem] flex items-start mt-3">
                        {item.title}
                      </h3>
                    </Link>

                    <div className="pt-2 mt-auto flex items-center">
                      <Link href={item.link} className="card-price-btn -ml-0.5 text-xs sm:text-sm">
                        <span>Xem Giá</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Button */}
        <div className="text-center pt-3">
          <Link
            href={products.bottomCTA.href}
            className="button-primary border-0 inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300"
          >
            <span>{products.bottomCTA.text}</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="text-[11px] sm:text-xs text-slate-500 pt-1 text-center">
          Thông số kỹ thuật và các lựa chọn cụ thể có thể khác nhau theo từng sản phẩm. Vui lòng tham khảo trang chi tiết hoặc liên hệ để xác nhận.
        </div>
      </div>
    </section>
  );
}
