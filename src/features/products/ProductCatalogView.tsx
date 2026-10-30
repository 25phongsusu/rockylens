'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Glasses, ArrowUpRight, Search, X, Sparkles, Check } from 'lucide-react';
import { Product } from './product-types';

export type ViewMode = 'need' | 'tech';

export const NEED_FILTERS = [
  { id: 'all', label: 'Tất cả nhu cầu' },
  { id: 'designer-bluecut', label: 'Designer đồ họa (Không đổi màu)' },
  { id: 'office-photo', label: 'Văn phòng ra nắng (Đổi màu 2-in-1)' },
  { id: 'driving-night', label: 'Lái xe ban đêm & Đi mưa' },
  { id: 'high-index-rimless', label: 'Cận nặng mỏng nhẹ & Gọng khoan' },
  { id: 'presbyopia-40', label: 'Người lớn tuổi (40+) Đa tròng' },
  { id: 'kids-myopia', label: 'Trẻ em kiểm soát độ cận' },
];

export const TECH_FILTERS = [
  { id: 'all', label: 'Tất cả công nghệ' },
  { id: 'bluecut', label: 'Lọc ánh sáng xanh UV420' },
  { id: 'photochromic', label: 'Đổi màu quang học CAT 3' },
  { id: 'progressive', label: 'Đa tròng Freeform 4K' },
  { id: 'thin-uv', label: 'Siêu mỏng 1.60 - 1.74' },
  { id: 'driving-special', label: 'Chống chói đèn pha LED' },
  { id: 'dims', label: 'Vi thấu kính D.I.M.S' },
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

  // Filter products based on active viewMode, subFilter, and searchQuery
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // 1. Text search match
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
        if (!matchName && !matchPersona && !matchHeadline && !matchSubtitle && !matchTagline && !matchDesc && !matchSku && !matchIndex) {
          return false;
        }
      }

      // 2. Sub-filter match
      if (subFilter === 'all') return true;

      if (viewMode === 'need') {
        switch (subFilter) {
          case 'designer-bluecut':
            return ['rocky-156-bluecut-shmc', 'rocky-antifatigue-relax', 'rocky-167-ultra-thin-bluecut'].includes(product.slug);
          case 'office-photo':
            return ['rocky-trendy-photochromic-grey', 'rocky-trendy-photochromic-brown'].includes(product.slug);
          case 'driving-night':
            return ['rocky-driveshield-night-vision', 'rocky-polarized-driving-sports'].includes(product.slug);
          case 'high-index-rimless':
            return ['rocky-160-mr8-aspheric', 'rocky-167-ultra-thin-bluecut', 'rocky-174-ultra-high-index'].includes(product.slug);
          case 'presbyopia-40':
            return ['rocky-freeform-progressive-hd', 'rocky-progressive-short-corridor'].includes(product.slug);
          case 'kids-myopia':
            return ['rocky-myocontrol-dims-kids'].includes(product.slug);
          default:
            return true;
        }
      } else {
        // viewMode === 'tech'
        switch (subFilter) {
          case 'bluecut':
            return product.technologyIds.includes('uv420-bluecut') || ['rocky-156-bluecut-shmc', 'rocky-167-ultra-thin-bluecut', 'rocky-antifatigue-relax'].includes(product.slug);
          case 'photochromic':
            return product.categoryIds.includes('doi-mau') || ['rocky-trendy-photochromic-grey', 'rocky-trendy-photochromic-brown'].includes(product.slug);
          case 'progressive':
            return product.categoryIds.includes('da-trong') || ['rocky-freeform-progressive-hd', 'rocky-progressive-short-corridor'].includes(product.slug);
          case 'thin-uv':
            return (
              ['1.60', '1.67', '1.74'].includes(product.refractiveIndex || '') ||
              product.technologyIds.includes('ultra-high-index-174') ||
              ['rocky-160-mr8-aspheric', 'rocky-167-ultra-thin-bluecut', 'rocky-174-ultra-high-index'].includes(product.slug)
            );
          case 'driving-special':
            return ['rocky-driveshield-night-vision', 'rocky-polarized-driving-sports'].includes(product.slug);
          case 'dims':
            return ['rocky-myocontrol-dims-kids'].includes(product.slug);
          default:
            return true;
        }
      }
    });
  }, [initialProducts, viewMode, subFilter, searchQuery]);

  return (
    <div className="space-y-8">
      {/* ========================================================
          1. TOP VIEW MODE SWITCHER (Theo nhu cầu vs Theo loại & tính năng)
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
            Theo loại &amp; tính năng
          </button>
        </div>

        {/* Sub-Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-4xl">
          {currentFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSubFilter(f.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                subFilter === f.id
                  ? 'bg-[var(--color-primary)] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90 shadow-2xs'
              }`}
            >
              {f.label}
            </button>
          ))}
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
            Hiển thị <strong className="text-heading font-bold">{filteredProducts.length}</strong> sản phẩm
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
          3. PRODUCT CATALOGUE GRID (Dùng chung catalogue)
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
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card-surface rounded-2xl p-5 hover:border-[var(--button-middle)] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden bg-white border border-[var(--color-border)]/60"
            >
              <div className="flex-1 flex flex-col">
                {/* Header: Glasses Icon + Category / Index Badges */}
                <div className="flex items-center justify-between gap-2 h-9 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--site-bg-middle)]/60 text-primary flex items-center justify-center shrink-0 border border-[var(--color-border)]/50 group-hover:scale-105 transition-transform">
                    <Glasses className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {product.refractiveIndex && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                        {product.refractiveIndex}
                      </span>
                    )}
                    {product.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--button-middle)] text-white shadow-2xs whitespace-nowrap">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Target Persona / Audience Tag (Directly Aligned with Home) */}
                <div className="text-[11px] font-bold text-primary tracking-wide uppercase line-clamp-1 mb-1">
                  {product.targetPersona || 'GIẢI PHÁP THỊ LỰC'}
                </div>

                {/* Need-Focused Headline (2 lines uniform height) */}
                <h3 className="h-14 flex items-start text-base sm:text-lg font-bold text-heading leading-snug group-hover:text-primary transition-colors">
                  <Link href={`/trong-kinh/${product.slug}/`} className="line-clamp-2">
                    {product.consumerHeadline || product.name}
                  </Link>
                </h3>

                {/* Clear Consumer Problem & Solution Text */}
                <p className="mt-1 h-12 text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                  {product.shortDescription || product.materialSubtitle}
                </p>

                {/* Product Studio Lens Photograph (Fixed height for uniform grid) */}
                <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-50/70 relative my-3 flex items-center justify-center p-2 border border-slate-100">
                  <Image
                    src={product.featuredImage || product.images[0] || '/assets/uploads/solutions/sol_anh_sang_xanh.png'}
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>

                {/* Micro Specs Rows (Fixed height for uniform rows) */}
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

              {/* Bottom Action Footer (Anchored to bottom across all cards) */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    {product.specifications.sku || 'Giá niêm yết'}
                  </span>
                  <span className="text-sm sm:text-base font-black text-rose-600">
                    {product.formattedPrice || '1.000.000 ₫'}
                  </span>
                </div>
                <Link
                  href={`/trong-kinh/${product.slug}/`}
                  className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Xem chi tiết</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
