'use client';

import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { FilterState } from '@/features/products/product-filters';
import { CATEGORIES } from '@/features/products/product-types';

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  totalResults: number;
}

const REFRACTIVE_INDEXES = ['1.56', '1.60', '1.67', '1.74'];

const TECHNOLOGIES = [
  { id: 'uv420-bluecut', label: 'Lọc UV420 BlueCut' },
  { id: 'photochromic-fast', label: 'Đổi màu Photochromic' },
  { id: 'freeform-hd', label: 'Kỹ thuật số Freeform' },
  { id: 'driveshield', label: 'Lái xe DriveShield' },
  { id: 'mr8-high-toughness', label: 'Chống va đập MR-8' },
  { id: 'myocontrol-dims', label: 'Kiểm soát cận thị' },
];

export default function ProductFilters({
  filters,
  onFilterChange,
  totalResults,
}: ProductFiltersProps) {
  const handleCategoryClick = (catId: string) => {
    onFilterChange({
      ...filters,
      category: filters.category === catId ? 'all' : catId,
    });
  };

  const handleIndexClick = (idx: string) => {
    onFilterChange({
      ...filters,
      refractiveIndex: filters.refractiveIndex === idx ? 'all' : idx,
    });
  };

  const handleTechClick = (techId: string) => {
    onFilterChange({
      ...filters,
      technology: filters.technology === techId ? 'all' : techId,
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      search: e.target.value,
    });
  };

  const handleReset = () => {
    onFilterChange({
      category: 'all',
      refractiveIndex: 'all',
      technology: 'all',
      search: '',
    });
  };

  const isFiltered =
    filters.category !== 'all' ||
    filters.refractiveIndex !== 'all' ||
    filters.technology !== 'all' ||
    filters.search.trim() !== '';

  return (
    <div className="card-surface rounded-2xl p-5 shadow-xs space-y-5">
      {/* Search Input & Reset Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Tìm theo tên tròng, mã, tính năng..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--button-middle)] focus:border-transparent transition-all"
          />
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-brand-muted">
            Hiển thị <strong className="text-heading">{totalResults}</strong> sản phẩm
          </span>
          {isFiltered && (
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-1 text-xs text-rose-600 hover:text-rose-700 font-medium px-2 py-1 rounded hover:bg-rose-50 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Category Tabs */}
      <div>
        <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center space-x-1.5">
          <Filter className="w-3.5 h-3.5 text-primary" />
          <span>Nhóm Danh Mục</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filters.category === 'all'
                ? 'button-primary text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Tất Cả
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filters.category === cat.id
                  ? 'button-primary text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Chiết Suất & Công Nghệ */}
      <div className="pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Refractive Index */}
        <div>
          <div className="text-xs font-semibold text-slate-700 mb-2">Chiết Suất (Index)</div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => handleIndexClick('all')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                filters.refractiveIndex === 'all'
                  ? 'bg-[var(--b2b-end)] text-white font-medium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả
            </button>
            {REFRACTIVE_INDEXES.map((idx) => (
              <button
                key={idx}
                onClick={() => handleIndexClick(idx)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filters.refractiveIndex === idx
                    ? 'bg-[var(--b2b-end)] text-white font-medium'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {idx}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filters */}
        <div>
          <div className="text-xs font-semibold text-slate-700 mb-2">Công Nghệ Nổi Bật</div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => handleTechClick('all')}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                filters.technology === 'all'
                  ? 'bg-[var(--b2b-end)] text-white font-medium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả
            </button>
            {TECHNOLOGIES.map((tech) => (
              <button
                key={tech.id}
                onClick={() => handleTechClick(tech.id)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filters.technology === tech.id
                    ? 'bg-teal-700 text-white font-medium'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tech.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
