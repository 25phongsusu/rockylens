'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Glasses, ArrowUpRight, Search, X, Sparkles, Check, Layers, SlidersHorizontal } from 'lucide-react';
import { Product } from './product-types';
import { getProductTheme, FEATURE_THEMES } from './pricing-matrix';

export type ViewMode = 'need' | 'tech';

// 9 Slugs theo đúng thứ tự Trang Chủ (home_content.json)
export const NEED_SLUGS_ORDER = [
  'rocky-156-bluecut-shmc',
  'rocky-trendy-photochromic-grey',
  'rocky-167-ultra-thin-bluecut',
  'rocky-driveshield-night-vision',
  'rocky-freeform-progressive-hd',
  'rocky-myocontrol-dims-kids',
  'rocky-chameleon-photochromic',
  'rocky-160-mr8-aspheric',
  'rocky-174-ultra-high-index',
];

// 11 Slugs theo đúng thứ tự 4 trang Bảng giá lẻ PDF
export const FEATURE_SLUGS_ORDER = [
  // Trang 1: Ánh sáng xanh Bluecut & Lọc ASX thông minh
  'rocky-anh-sang-xanh-bluecut',
  'rocky-smart-bluecontrol',
  // Trang 2: Đổi màu Trendy, Smart, Edition
  'rocky-doi-mau-trendy',
  'rocky-doi-mau-smart',
  'rocky-doi-mau-edition',
  // Trang 3: Chống UV, Kính khoan chống va đập, DriveShield
  'rocky-chong-tia-uv-167',
  'rocky-kinh-khoan-chong-va-dap',
  'rocky-driveshield-ruby',
  // Trang 4: Hai tròng Invisible, Đa tròng Freeform, Myopia Control
  'rocky-hai-trong-invisible',
  'rocky-da-trong-freeform',
  'rocky-myopia-control',
];

export interface CatalogFilter {
  id: string;
  label: string;
  dotColor?: string;
}

export const NEED_FILTERS: CatalogFilter[] = [
  { id: 'all', label: 'Tất cả nhu cầu (9 giải pháp)' },
  { id: 'lam-viec', label: 'Làm việc & Đồ họa' },
  { id: 'ngoai-troi', label: 'Ngoài trời & Lái xe' },
  { id: 'chuyen-biet', label: 'Chuyên biệt (Lão thị, Trẻ em, Gọng khoan)' },
];

export const TECH_FILTERS: CatalogFilter[] = [
  { id: 'all', label: 'Tất cả 11 tính năng' },
  { id: 'asx', label: 'Ánh sáng xanh', dotColor: '#1d96b8' },
  { id: 'doi-mau', label: 'Đổi màu quang học', dotColor: '#714693' },
  { id: 'uv', label: 'Chống tia UV 1.67', dotColor: '#d97706' },
  { id: 'kinh-khoan', label: 'Kính khoan & Chống vỡ', dotColor: '#5a798c' },
  { id: 'lai-xe', label: 'Lái xe DriveShield', dotColor: '#be123c' },
  { id: 'da-trong', label: 'Đa tròng & Hai tròng', dotColor: '#8c261d' },
  { id: 'myopia', label: 'Kiểm soát cận thị', dotColor: '#21729b' },
];

interface ProductCatalogViewProps {
  initialProducts: Product[];
}

export default function ProductCatalogView({ initialProducts }: ProductCatalogViewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('need');
  const [subFilter, setSubFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleModeChange = (newMode: ViewMode) => {
    setViewMode(newMode);
    setSubFilter('all');
  };

  const currentFilters = viewMode === 'need' ? NEED_FILTERS : TECH_FILTERS;

  // Filter & sort products based on active viewMode, subFilter, and searchQuery
  const filteredProducts = useMemo(() => {
    let baseList: Product[] = [];
    if (viewMode === 'need') {
      baseList = NEED_SLUGS_ORDER.map((slug) =>
        initialProducts.find((p) => p.slug === slug)
      ).filter(Boolean) as Product[];
    } else {
      baseList = FEATURE_SLUGS_ORDER.map((slug) =>
        initialProducts.find((p) => p.slug === slug)
      ).filter(Boolean) as Product[];
    }

    return baseList.filter((product) => {
      // 1. Search text match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchPersona = (product.targetPersona || '').toLowerCase().includes(q);
        const matchHeadline = (product.consumerHeadline || '').toLowerCase().includes(q);
        const matchSubtitle = (product.materialSubtitle || '').toLowerCase().includes(q);
        const matchTagline = (product.tagline || '').toLowerCase().includes(q);
        const matchDesc = product.shortDescription.toLowerCase().includes(q);
        const matchSku = (product.specifications?.sku || '').toLowerCase().includes(q);
        const matchIndex = (product.refractiveIndex || '').toLowerCase().includes(q);
        if (
          !matchName &&
          !matchPersona &&
          !matchHeadline &&
          !matchSubtitle &&
          !matchTagline &&
          !matchDesc &&
          !matchSku &&
          !matchIndex
        ) {
          return false;
        }
      }

      // 2. Sub-filter match
      if (subFilter === 'all') return true;

      if (viewMode === 'need') {
        switch (subFilter) {
          case 'lam-viec':
            return [
              'rocky-156-bluecut-shmc',
              'rocky-trendy-photochromic-grey',
              'rocky-freeform-progressive-hd',
            ].includes(product.slug);
          case 'ngoai-troi':
            return [
              'rocky-167-ultra-thin-bluecut',
              'rocky-driveshield-night-vision',
              'rocky-chameleon-photochromic',
            ].includes(product.slug);
          case 'chuyen-biet':
            return [
              'rocky-myocontrol-dims-kids',
              'rocky-160-mr8-aspheric',
              'rocky-174-ultra-high-index',
            ].includes(product.slug);
          default:
            return true;
        }
      } else {
        // viewMode === 'tech'
        switch (subFilter) {
          case 'asx':
            return ['rocky-anh-sang-xanh-bluecut', 'rocky-smart-bluecontrol'].includes(product.slug);
          case 'doi-mau':
            return [
              'rocky-doi-mau-trendy',
              'rocky-doi-mau-smart',
              'rocky-doi-mau-edition',
            ].includes(product.slug);
          case 'uv':
            return ['rocky-chong-tia-uv-167'].includes(product.slug);
          case 'kinh-khoan':
            return ['rocky-kinh-khoan-chong-va-dap'].includes(product.slug);
          case 'lai-xe':
            return ['rocky-driveshield-ruby'].includes(product.slug);
          case 'da-trong':
            return ['rocky-hai-trong-invisible', 'rocky-da-trong-freeform'].includes(product.slug);
          case 'myopia':
            return ['rocky-myopia-control'].includes(product.slug);
          default:
            return true;
        }
      }
    });
  }, [initialProducts, viewMode, subFilter, searchQuery]);

  return (
    <div className="space-y-8">
      {/* ========================================================
          1. TOP VIEW MODE SWITCHER (Theo tính năng vs Theo nhu cầu)
          ======================================================== */}
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Segmented Capsule Control */}
        <div className="inline-flex p-1.5 rounded-full bg-slate-200/90 border border-slate-300 shadow-inner">
          <button
            type="button"
            onClick={() => handleModeChange('need')}
            className={`px-6 sm:px-9 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'need'
                ? 'bg-[var(--b2b-end)] text-white shadow-md'
                : 'text-slate-700 hover:text-heading'
            }`}
          >
            Theo nhu cầu
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('tech')}
            className={`px-6 sm:px-9 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'tech'
                ? 'bg-[var(--b2b-end)] text-white shadow-md'
                : 'text-slate-700 hover:text-heading'
            }`}
          >
            Theo tính năng
          </button>
        </div>

        {/* Sub-Filter Pills with Color Dots matching PDF */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-4xl">
          {currentFilters.map((f) => {
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setSubFilter(f.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2 ${
                  subFilter === f.id
                    ? 'bg-[var(--color-primary)] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90 shadow-2xs'
                }`}
              >
                {f.dotColor ? (
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs border border-white/60"
                    style={{ backgroundColor: f.dotColor }}
                  />
                ) : null}
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          2. SEARCH & RESULT STATUS BAR
          ======================================================== */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 pb-1 border-b border-slate-200/70">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên, chiết suất, tính năng..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--button-middle)] focus:border-transparent transition-all shadow-2xs"
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
            Hiển thị <strong className="text-heading font-bold">{filteredProducts.length}</strong> sản phẩm ({viewMode === 'need' ? 'Theo nhu cầu' : 'Theo tính năng'})
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

      {/* ========================================================
          3. PRODUCT CATALOGUE GRID (ĐỒNG BỘ MÀU Y CHANG BẢNG BÁO GIÁ PDF)
          ======================================================== */}
      {filteredProducts.length === 0 ? (
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
          {filteredProducts.map((product) => {
            const theme = getProductTheme(product.slug);

            return (
              <div
                key={product.id}
                className="card-surface rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden bg-white border border-[var(--color-border)]/70 hover:border-transparent"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* 1. Header Banner màu sắc Y CHANG BẢNG BÁO GIÁ (Bỏ hoàn toàn số trang) */}
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

                {/* 2. Body Card Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Top Badges & Chiết suất */}
                  <div className="flex items-center justify-between gap-2 h-9 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: theme.lightBgHex,
                        borderColor: `${theme.primaryColor}30`,
                      }}
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

                  {/* Target Persona / Audience Tag */}
                  <div
                    className="text-[11px] font-bold tracking-wide uppercase line-clamp-1 mb-1"
                    style={{ color: theme.primaryColor }}
                  >
                    {product.targetPersona || (viewMode === 'need' ? 'GIẢI PHÁP THỊ LỰC' : 'TÍNH NĂNG QUANG HỌC')}
                  </div>

                  {/* Consumer Headline or Product Name */}
                  <h3 className="h-14 flex items-start text-base sm:text-lg font-bold text-heading leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/trong-kinh/${product.slug}/`} className="line-clamp-2">
                      {product.consumerHeadline || product.name}
                    </Link>
                  </h3>

                  {/* Small Feature Tags (Mấy cái tag nhỏ tính năng nổi bật) */}
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

                  {/* Clear Consumer Problem & Solution Text */}
                  <p className="mt-1 h-12 text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                    {product.shortDescription || product.materialSubtitle}
                  </p>

                  {/* Product Studio Lens Photograph */}
                  <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-50/70 relative my-3 flex items-center justify-center p-2 border border-slate-100">
                    <Image
                      src={product.featuredImage || product.images[0] || '/uploads/solutions/trong-kinh-do-hoa-designer-chuan-mau.png'}
                      alt={product.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>

                  {/* Micro Specs Rows */}
                  <div className="space-y-1.5 text-xs">
                    {product.specifications.coating && (
                      <div className="h-8 flex justify-between items-center px-3 rounded-lg bg-[var(--site-bg-start)]">
                        <span className="text-brand-muted text-[11px] font-medium shrink-0">Lớp phủ:</span>
                        <span className="font-semibold text-heading text-[11px] text-right truncate ml-2">
                          {product.specifications.coating.split('(')[0]}
                        </span>
                      </div>
                    )}
                    {product.specifications.material && (
                      <div className="h-8 flex justify-between items-center px-3 rounded-lg bg-[var(--site-bg-start)]">
                        <span className="text-brand-muted text-[11px] font-medium shrink-0">Vật liệu:</span>
                        <span className="font-semibold text-heading text-[11px] text-right truncate ml-2">
                          {product.specifications.material}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Bottom Action Footer: Bỏ giá, chỉ hiện nút Xem chi tiết */}
                <div className="px-5 py-3.5 border-t border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
                  <span className="text-[11px] font-mono text-slate-400">
                    {product.specifications.sku || 'RL-CAN'}
                  </span>
                  <Link
                    href={`/trong-kinh/${product.slug}/`}
                    className="text-xs sm:text-sm font-bold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    style={{ color: theme.primaryColor }}
                  >
                    <span>Xem chi tiết &amp; chọn giá</span>
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
