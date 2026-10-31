'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Check,
  Phone,
  MapPin,
} from 'lucide-react';
import { Product } from '@/features/products/product-types';
import {
  getProductPricingConfig,
  getProductTheme,
  ProductPricingSchema,
  FeatureTheme,
} from '@/features/products/pricing-matrix';
import { siteConfig } from '@/config/site';

interface ShopeeProductSelectorProps {
  product: Product;
}

// Bảng màu cho các tùy chọn đổi màu thị giác
const COLOR_SWATCH_MAP: Record<string, string> = {
  khoi: '#71717a',
  tra: '#b45309',
  xanh_duong: '#2563eb',
  xanh_la: '#16a34a',
  hong: '#ec4899',
  tim: '#9333ea',
  amber: '#d97706',
  grey: '#71717a',
  brown: '#b45309',
};

export default function ShopeeProductSelector({ product }: ShopeeProductSelectorProps) {
  const theme: FeatureTheme = useMemo(() => {
    return getProductTheme(product.slug);
  }, [product.slug]);

  const pricingConfig: ProductPricingSchema | null = useMemo(() => {
    return getProductPricingConfig(product.slug);
  }, [product.slug]);

  // Khởi tạo state mặc định cho các nhóm bộ chọn
  const initialSelected = useMemo(() => {
    const init: Record<string, string> = {};
    if (pricingConfig) {
      pricingConfig.selectorGroups.forEach((group) => {
        if (group.options.length > 0) {
          init[group.id] = group.options[0].id;
        }
      });
    }
    return init;
  }, [pricingConfig]);

  const [selected, setSelected] = useState<Record<string, string>>(initialSelected);

  // Khi click thay đổi một tùy chọn trong nhóm
  const handleSelectOption = (groupId: string, optionId: string) => {
    setSelected((prev) => ({
      ...prev,
      [groupId]: optionId,
    }));
  };

  // Tính giá bán lẻ chính xác từ ma trận giá
  const pricingResult = useMemo(() => {
    if (pricingConfig) {
      return pricingConfig.calculatePrice(selected);
    }
    // Fallback nếu không có trong pricing matrix
    const fallbackPrice = product.price || 560000;
    return {
      price: fallbackPrice,
      formattedPrice: product.formattedPrice || `${fallbackPrice.toLocaleString('vi-VN')} ₫`,
      summaryLines: [
        { label: 'Sản phẩm', value: product.name },
        { label: 'Chiết suất', value: product.refractiveIndex || 'Tiêu chuẩn' },
      ],
    };
  }, [pricingConfig, selected, product]);

  return (
    <div className="rounded-2xl border-2 border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm space-y-6 my-6">
      {/* ========================================================
          1. BẢNG GIÁ BÁN LẺ NIÊM YẾT CHÍNH HÃNG (THEO MÀU Y CHANG BẢNG GIÁ)
          ======================================================== */}
      <div
        className="p-4 sm:p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 transition-all"
        style={{
          background: theme.priceGradient,
          borderColor: `${theme.primaryColor}35`,
          boxShadow: `0 4px 20px ${theme.primaryColor}12`,
        }}
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-[11px] font-black uppercase tracking-wider text-white px-2.5 py-0.5 rounded-md shadow-2xs"
              style={{ backgroundColor: theme.primaryColor }}
            >
              GIÁ BÁN LẺ NIÊM YẾT
            </span>
          </div>

          <div className="flex items-baseline gap-2.5">
            <span
              className="text-3xl sm:text-4xl font-black tracking-tight"
              style={{ color: theme.primaryColor }}
            >
              {pricingResult.formattedPrice}
            </span>
            <span className="text-xs font-semibold text-slate-600">
              / Cặp tròng chính hãng (Đã gồm công cắt mài)
            </span>
          </div>

          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: theme.primaryColor }}
            />
            <span>
              {theme.pdfSectionTitle} • Phân phối chính hãng Canada Opticians
            </span>
          </div>
        </div>

        {/* Cam kết tiêu chuẩn chất lượng */}
        <div className="text-xs space-y-1.5 text-slate-700 border-l border-slate-200/80 pl-4 hidden md:block">
          <div className="font-semibold text-slate-700">
            • Tiêu chuẩn y tế ISO 13485:2016
          </div>
          <div className="font-semibold text-slate-700">
            • Bảo hành váng phủ 24 tháng chính hãng
          </div>
          <div className="font-semibold text-slate-700">
            • Khắc laser ký hiệu chống hàng giả
          </div>
        </div>
      </div>

      {/* ========================================================
          2. CÁC NHÓM TÙY CHỌN CHI TIẾT
          ======================================================== */}
      {pricingConfig ? (
        <div className="space-y-5">
          {pricingConfig.selectorGroups.map((group) => {
            const currentSelectedOptionId = selected[group.id] || group.options[0]?.id;

            return (
              <div
                key={group.id}
                className="space-y-2.5 p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/90"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-heading uppercase tracking-wide">
                    {group.label}
                  </span>
                  <span
                    className="font-bold text-xs"
                    style={{ color: theme.primaryColor }}
                  >
                    {group.options.find((o) => o.id === currentSelectedOptionId)?.label}
                  </span>
                </div>

                {/* Grid các nút tùy chọn */}
                <div
                  className={`grid gap-2 ${
                    group.options.length <= 2
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : group.options.length <= 4
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
                      : 'grid-cols-2 sm:grid-cols-3'
                  }`}
                >
                  {group.options.map((opt) => {
                    const isSelected = currentSelectedOptionId === opt.id;
                    const swatchColor = COLOR_SWATCH_MAP[opt.id];

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(group.id, opt.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                          isSelected
                            ? 'shadow-xs ring-2'
                            : 'border-slate-200 bg-white hover:bg-slate-100/80 text-slate-800 shadow-2xs'
                        }`}
                        style={
                          isSelected
                            ? {
                                borderColor: theme.primaryColor,
                                backgroundColor: `${theme.primaryColor}0d`,
                                outlineColor: `${theme.primaryColor}30`,
                              }
                            : {}
                        }
                      >
                        <div className="flex items-start justify-between gap-1.5 w-full">
                          <div className="flex items-center gap-2">
                            {swatchColor && (
                              <span
                                className="w-3.5 h-3.5 rounded-full shrink-0 border border-slate-300 shadow-2xs"
                                style={{ backgroundColor: swatchColor }}
                              />
                            )}
                            <span
                              className={`text-xs sm:text-sm font-bold leading-snug ${
                                isSelected ? 'font-black' : 'text-slate-900'
                              }`}
                              style={isSelected ? { color: theme.primaryColor } : {}}
                            >
                              {opt.label}
                            </span>
                          </div>

                          {isSelected && (
                            <div
                              className="w-4 h-4 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: theme.primaryColor }}
                            >
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        {opt.sub && (
                          <span
                            className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${
                              isSelected ? 'font-medium opacity-90' : 'text-slate-500'
                            }`}
                            style={isSelected ? { color: theme.primaryColor } : {}}
                          >
                            {opt.sub}
                          </span>
                        )}

                        {opt.badge && (
                          <span
                            className="inline-block mt-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white self-start shadow-2xs"
                            style={{ backgroundColor: theme.primaryColor }}
                          >
                            {opt.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Fallback thông thường nếu không tìm thấy schema */
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          Sản phẩm có đầy đủ các chiết suất 1.56, 1.60 MR-8, 1.67 và 1.74 theo tiêu chuẩn Canada Opticians.
        </div>
      )}

      {/* ========================================================
          3. TÓM TẮT CẤU HÌNH & BẢNG GIÁ LẺ TƯƠNG ỨNG
          ======================================================== */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Cấu hình tròng kính đã chọn:</span>
          </span>
          <span
            className="font-black text-base sm:text-lg"
            style={{ color: theme.primaryColor }}
          >
            {pricingResult.formattedPrice}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-slate-700 text-xs">
          {pricingResult.summaryLines.map((line, idx) => (
            <div key={idx} className="flex items-baseline justify-between sm:justify-start gap-2">
              <span className="text-slate-500 font-medium shrink-0">• {line.label}:</span>
              <span className="font-bold text-slate-900 text-right sm:text-left">{line.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          4. CỤM HÀNH ĐỘNG: BỎ NHẮN TIN TƯ VẤN CHỌN KÍNH
             THAY BẰNG NÚT TÌM ĐẠI LÝ CHÍNH HÃNG THEO MÀU THEME
          ======================================================== */}
      <div className="space-y-3 pt-2">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Nút 1: Tìm đại lý cắt kính gần nhất theo gradient màu bảng giá */}
          <Link
            href="/lien-he/"
            className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm text-white hover:opacity-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
            style={{ background: theme.bannerGradient }}
          >
            <MapPin className="w-4 h-4 text-white" />
            <span>Tìm Đại Lý Cắt Kính Chính Hãng Gần Nhất</span>
          </Link>

          {/* Nút 2: Gọi Hotline hỗ trợ kỹ thuật */}
          <a
            href={`tel:${siteConfig.phones.hotline}`}
            className="py-3.5 px-6 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:border-primary hover:text-primary hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Hotline: 0982 264 464</span>
          </a>
        </div>

        {/* Cam kết dịch vụ đại lý đối tác */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 px-1 pt-1">
          <span>Đo khúc xạ thị lực &amp; cắt mài chuẩn tâm miễn phí tại hệ thống đại lý</span>
          <span className="text-slate-400 font-medium hidden sm:inline">
            Phân phối bởi Clearly Vietnam Co., LTD
          </span>
        </div>
      </div>
    </div>
  );
}
