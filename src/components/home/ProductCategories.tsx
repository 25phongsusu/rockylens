'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import homeContent from '@/../content/home_content.json';
import { assetUrl } from '@/lib/utils';

const productSolutions = homeContent.products.items;

export default function ProductCategories() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

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

        {/* Standard Grid With Category Filter Tabs */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-slate-200/60 dark:border-white/10 pb-4">
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
