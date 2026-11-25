'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Glasses, ArrowUpRight, Search, X, Sparkles } from 'lucide-react';
import { Product } from './product-types';
import { getProductTheme } from './product-themes';
import {
  ViewMode,
  CatalogItem,
  NEED_CATALOG,
  TECH_CATALOG,
  NEED_FILTERS,
  TECH_FILTERS,
  CATEGORY_PARAM_MAP,
} from './catalog-config';
import { assetUrl } from '@/lib/utils';

export type { ViewMode };

interface ProductCatalogViewProps {
  initialProducts: Product[];
}

export default function ProductCatalogView({ initialProducts }: ProductCatalogViewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('need');
  const [subFilter, setSubFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const category = (params.get('category') || params.get('filter') || '').toLowerCase();
      if (category && CATEGORY_PARAM_MAP[category]) {
        setViewMode(CATEGORY_PARAM_MAP[category].mode);
        setSubFilter(CATEGORY_PARAM_MAP[category].filter);
        return;
      }
      const mode = (params.get('mode') || params.get('view') || '').toLowerCase();
      if (mode === 'tech' || mode === 'tinh-nang') setViewMode('tech');
      else if (mode === 'need' || mode === 'nhu-cau') setViewMode('need');
    } catch {}
  }, []);

  const handleModeChange = (newMode: ViewMode) => {
    setViewMode(newMode);
    setSubFilter('all');
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('mode', newMode);
      window.history.replaceState({}, '', url.toString());
    } catch {}
  };

  const currentFilters = viewMode === 'need' ? NEED_FILTERS : TECH_FILTERS;

  const filteredEntries = useMemo(() => {
    const productBySlug = new Map(initialProducts.map((p) => [p.slug, p]));
    const catalog = viewMode === 'need' ? NEED_CATALOG : TECH_CATALOG;
    const q = searchQuery.trim().toLowerCase();

    return catalog
      .map((entry) => ({ entry, product: productBySlug.get(entry.slug) }))
      .filter((pair): pair is { entry: CatalogItem; product: Product } => {
        if (!pair.product) return false;
        if (subFilter !== 'all' && pair.entry.group !== subFilter) return false;
        if (!q) return true;

        const p = pair.product;
        const fields = [
          p.name,
          p.targetPersona,
          p.consumerHeadline,
          p.materialSubtitle,
          p.tagline,
          p.shortDescription,
          p.specifications?.sku,
          p.refractiveIndex,
          pair.entry.title,
        ];
        return fields.some((f) => (f || '').toLowerCase().includes(q));
      });
  }, [initialProducts, viewMode, subFilter, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Mode Switcher & Sub-Filters */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="catalog-mode-switcher inline-flex p-1.5 rounded-full bg-slate-200/90 dark:bg-black/35 backdrop-blur-md border border-slate-300/80 dark:border-white/15 shadow-inner">
          <button
            type="button"
            onClick={() => handleModeChange('need')}
            className={`px-6 sm:px-9 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'need'
                ? 'active bg-gradient-to-r from-[var(--button-start)] to-[var(--button-middle)] text-white shadow-md'
                : 'inactive text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Theo nhu cầu
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('tech')}
            className={`px-6 sm:px-9 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'tech'
                ? 'active bg-gradient-to-r from-[var(--button-start)] to-[var(--button-middle)] text-white shadow-md'
                : 'inactive text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Theo tính năng
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-4xl">
          {currentFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSubFilter(f.id)}
              className={`product-filter-btn ${subFilter === f.id ? 'active' : ''}`}
            >
              {f.dotColor ? (
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs border border-white/60"
                  style={{ backgroundColor: f.dotColor }}
                />
              ) : null}
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search & Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 pb-1 border-b border-slate-200/70">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên, chiết suất, tính năng..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-white text-slate-900 placeholder:text-slate-400 border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--button-middle)] focus:border-transparent transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end text-xs text-brand-muted">
          <span>
            Hiển thị <strong className="text-heading font-bold">{filteredEntries.length}</strong> sản phẩm ({viewMode === 'need' ? 'Theo nhu cầu' : 'Theo tính năng'})
          </span>
          {(subFilter !== 'all' || searchQuery.trim() !== '') && (
            <button
              type="button"
              onClick={() => {
                setSubFilter('all');
                setSearchQuery('');
              }}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredEntries.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-slate-200 max-w-lg mx-auto">
          <p className="text-sm text-slate-600">Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.</p>
          <button
            type="button"
            onClick={() => {
              setSubFilter('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-bold text-primary hover:underline cursor-pointer"
          >
            Xem lại tất cả sản phẩm
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map(({ entry, product }) => {
            const theme = getProductTheme(product.slug);
            const imgSrc = assetUrl(
              product.featuredImage || product.images[0] || '/uploads/solutions/trong-kinh-do-hoa-designer-chuan-mau.png'
            );

            if (viewMode === 'need') {
              const needTitle = entry.title || product.consumerHeadline || product.name;
              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between h-full bg-transparent border-0 p-0 shadow-none transition-all duration-300 hover:-translate-y-1.5"
                >
                  <Link href={`/trong-kinh/${product.slug}/`} className="block cursor-pointer no-underline">
                    <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative shadow-md group-hover:shadow-2xl transition-all duration-500 bg-slate-900/10">
                      <Image
                        src={imgSrc}
                        alt={needTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight leading-snug line-clamp-2 min-h-[2.75rem] flex items-start text-primary dark:text-cyan-300 group-hover:text-[var(--button-end)] transition-colors mt-3">
                      {needTitle}
                    </h3>
                  </Link>

                  <div className="pt-2 mt-auto flex items-center">
                    <Link href={`/trong-kinh/${product.slug}/`} className="card-price-btn -ml-0.5 text-xs sm:text-sm">
                      <span>Xem Giá</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={product.id}
                className="card-surface rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden bg-white border border-[var(--color-border)]/70 hover:border-transparent"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                <div
                  className="px-4 py-2.5 text-white flex items-center justify-between text-xs font-bold tracking-wider uppercase shadow-xs shrink-0"
                  style={{ background: theme.bannerGradient }}
                >
                  <span className="truncate drop-shadow-xs">{theme.pdfSectionTitle}</span>
                  {theme.colorDots && theme.colorDots.length > 0 && (
                    <div className="flex items-center gap-1 shrink-0 ml-2 bg-black/25 px-2 py-0.5 rounded-full backdrop-blur-xs">
                      {theme.colorDots.map((dot) => (
                        <span
                          key={dot.name}
                          className="w-2.5 h-2.5 rounded-full border border-white/80 shadow-2xs"
                          style={{ backgroundColor: dot.hex }}
                          title={dot.name}
                        />
                      ))}
                      <span className="text-[10px] font-bold text-white/95 ml-1">
                        {theme.colorDots.length} Màu
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 h-9 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105"
                      style={{ backgroundColor: theme.lightBgHex, borderColor: `${theme.primaryColor}30` }}
                    >
                      <Glasses className="w-5 h-5" style={{ color: theme.primaryColor }} />
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {product.refractiveIndex && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                          {product.refractiveIndex}
                        </span>
                      )}
                      {product.badge && (
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-2xs whitespace-nowrap"
                          style={{ backgroundColor: theme.primaryColor }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-[11px] font-bold tracking-wide uppercase line-clamp-1 mb-1" style={{ color: theme.primaryColor }}>
                    {product.targetPersona || 'TÍNH NĂNG QUANG HỌC'}
                  </div>

                  <h3 className="h-14 flex items-start text-base sm:text-lg font-bold text-heading leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/trong-kinh/${product.slug}/`} className="line-clamp-2 w-full block hover:underline">
                      {product.consumerHeadline || product.name}
                    </Link>
                  </h3>

                  {theme.featureTags && theme.featureTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 my-2">
                      {theme.featureTags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md border shadow-2xs"
                          style={{
                            backgroundColor: theme.lightBgHex,
                            borderColor: `${theme.primaryColor}30`,
                            color: theme.accentTextHex || theme.primaryColor,
                          }}
                        >
                          <Sparkles className="w-2.5 h-2.5 shrink-0 opacity-70" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-1 h-12 text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                    {product.shortDescription || product.materialSubtitle}
                  </p>

                  <Link
                    href={`/trong-kinh/${product.slug}/`}
                    className="block h-44 w-full rounded-xl overflow-hidden bg-slate-50/70 relative my-3 flex items-center justify-center p-2 border border-slate-100 cursor-pointer"
                  >
                    <Image
                      src={imgSrc}
                      alt={product.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </Link>

                  <div className="space-y-1.5 text-xs">
                    {product.specifications.coating && (
                      <div className="h-8 flex justify-between items-center px-3 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 text-[11px] font-medium shrink-0">Lớp phủ:</span>
                        <span className="font-bold text-slate-800 text-[11px] text-right truncate ml-2">
                          {product.specifications.coating.split('(')[0]}
                        </span>
                      </div>
                    )}
                    {product.specifications.material && (
                      <div className="h-8 flex justify-between items-center px-3 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 text-[11px] font-medium shrink-0">Vật liệu:</span>
                        <span className="font-bold text-slate-800 text-[11px] text-right truncate ml-2">
                          {product.specifications.material}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-5 py-3.5 border-t border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
                  <span className="text-[11px] font-mono text-slate-400">
                    {product.specifications.sku || 'RL-CAN'}
                  </span>
                  <Link
                    href={`/trong-kinh/${product.slug}/`}
                    className="text-xs sm:text-sm font-bold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    style={{ color: theme.primaryColor }}
                  >
                    <span>Xem chi tiết tròng kính</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
