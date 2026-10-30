'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Glasses,
  Lightbulb,
} from 'lucide-react';
import { Product } from '@/features/products/product-types';
import { siteConfig } from '@/config/site';

interface ShopeeProductSelectorProps {
  product: Product;
}

// 1. Độ Cận / Viễn (SPH)
const SPHERE_OPTIONS = [
  { id: '0.00', label: '0.00 (Không độ)' },
  { id: 'can-nhe', label: 'Cận nhẹ (0.25 - 2.00)' },
  { id: 'can-vua', label: 'Cận vừa (2.25 - 4.00)' },
  { id: 'can-cao', label: 'Cận cao (4.25 - 6.00)' },
  { id: 'can-nang', label: 'Cận nặng (> 6.00)' },
  { id: 'vien-thi', label: 'Viễn thị / Lão thị' },
];

// 2. Độ Loạn Thị (CYL) - Độc lập có thể kết hợp cùng độ cận
const CYLINDER_OPTIONS = [
  { id: 'none', label: 'Không loạn (0.00)' },
  { id: 'loan-nhe', label: 'Loạn nhẹ (0.25 - 1.00)' },
  { id: 'loan-vua', label: 'Loạn vừa (1.25 - 2.00)' },
  { id: 'loan-cao', label: 'Loạn cao (> 2.00)' },
];

// 3. Chiết suất & Độ mỏng (Index) - Chọn thuần State, không chuyển trang gây nhảy giật
const INDEX_OPTIONS = [
  {
    id: '1.56',
    label: '1.56 (Chuẩn)',
    sub: 'Độ cận nhẹ < 3.00 Diop',
  },
  {
    id: '1.60',
    label: '1.60 (Mỏng nhẹ / MR-8)',
    sub: 'Siêu dai chống vỡ gọng khoan',
  },
  {
    id: '1.67',
    label: '1.67 (Siêu mỏng)',
    sub: 'Nhẹ hơn 35%, cho cận 3 - 7 độ',
  },
  {
    id: '1.74',
    label: '1.74 (Cực mỏng phẳng)',
    sub: 'Triệt tiêu đáy chai, cận > 7 độ',
  },
];

// 4. Tính năng lọc ánh sáng xanh
const BLUECUT_OPTIONS = [
  { id: 'uv420-pure', label: 'Lọc ASX UV420 Pure Clear (Chuẩn màu không ám vàng)' },
  { id: 'shmc-blue', label: 'Lọc ASX SHMC Phản xạ ánh xanh tím tiêu chuẩn' },
  { id: 'none', label: 'Trong suốt cơ bản (Khử 100% tia cực tím UV400)' },
];

// 5. Tính năng đổi màu khi ra nắng (Photochromic)
const PHOTO_OPTIONS = [
  { id: 'clear', label: 'Không đổi màu (Trong suốt)' },
  { id: 'grey', label: 'Tự đổi màu Khói (Grey Transition)' },
  { id: 'brown', label: 'Tự đổi màu Trà (Brown Transition)' },
];

export default function ShopeeProductSelector({ product }: ShopeeProductSelectorProps) {
  // Xác định chiết suất mặc định ban đầu theo sản phẩm
  const currentInitialIndex =
    INDEX_OPTIONS.find((opt) => product.refractiveIndex?.includes(opt.id))?.id || '1.56';
  const isPhotoProduct =
    product.slug.includes('photochromic') || product.categoryIds.includes('doi-mau');
  const initialPhoto = product.slug.includes('brown')
    ? 'brown'
    : isPhotoProduct
    ? 'grey'
    : 'clear';

  // State các tuỳ chọn - Hoàn toàn không chuyển URL để tránh nhảy giật
  const [selectedSphere, setSelectedSphere] = useState<string>('can-vua');
  const [selectedCylinder, setSelectedCylinder] = useState<string>('none');
  const [selectedIndex, setSelectedIndex] = useState<string>(currentInitialIndex);
  const [selectedBluecut, setSelectedBluecut] = useState<string>('uv420-pure');
  const [selectedPhoto, setSelectedPhoto] = useState<string>(initialPhoto);

  // Giá niêm yết cố định 1.000.000đ
  const basePrice = '1.000.000 ₫';
  const originalPrice = '1.250.000 ₫';

  // Nhãn hiển thị
  const sphereLabel = SPHERE_OPTIONS.find((o) => o.id === selectedSphere)?.label || selectedSphere;
  const cylinderLabel =
    CYLINDER_OPTIONS.find((o) => o.id === selectedCylinder)?.label || selectedCylinder;
  const indexObj = INDEX_OPTIONS.find((o) => o.id === selectedIndex);
  const indexLabel = indexObj ? indexObj.label : selectedIndex;
  const bluecutLabel =
    BLUECUT_OPTIONS.find((o) => o.id === selectedBluecut)?.label || selectedBluecut;
  const photoLabel = PHOTO_OPTIONS.find((o) => o.id === selectedPhoto)?.label || selectedPhoto;

  // Lời khuyên khúc xạ quang học thông minh
  let opticalAdvice = '';
  if (selectedSphere === 'can-cao') {
    opticalAdvice =
      '💡 Gợi ý khúc xạ: Với độ cận 4.25 - 6.00 Diop, bạn nên ưu tiên chọn Chiết suất 1.60 hoặc 1.67 để viền tròng mỏng nhẹ thẩm mỹ.';
  } else if (selectedSphere === 'can-nang') {
    opticalAdvice =
      '💡 Gợi ý khúc xạ: Với độ cận trên 6.00 Diop, tròng 1.56 sẽ rất dày. Nên chọn Chiết suất 1.67 hoặc 1.74 để tròng mỏng phẳng và mắt không bị thu nhỏ.';
  } else if (selectedCylinder === 'loan-cao') {
    opticalAdvice =
      '💡 Lưu ý độ loạn: Loạn thị trên 2.00 Diop cần kỹ thuật viên định tâm trục đồng tử chính xác khi gia công lắp ráp.';
  }

  // Soạn tin nhắn Zalo đầy đủ cấu hình đã chọn (Không có Size Phi)
  const zaloMessage = encodeURIComponent(
    `Xin chào RockyLens! Tôi muốn tư vấn lắp đặt tròng kính:\n` +
      `• Sản phẩm: ${product.name}\n` +
      `• Độ Cận/Viễn (SPH): ${sphereLabel}\n` +
      `• Kèm Độ Loạn (CYL): ${cylinderLabel}\n` +
      `• Chiết suất: ${indexLabel}\n` +
      `• Lọc ánh sáng xanh: ${bluecutLabel.split('(')[0].trim()}\n` +
      `• Tùy chọn đổi màu: ${photoLabel.split('(')[0].trim()}\n` +
      `• Giá tham khảo: 1.000.000 ₫\n` +
      `Nhờ chuyên viên khúc xạ tư vấn giúp tôi!`
  );

  const zaloUrlWithMsg = `https://zalo.me/0982264464?text=${zaloMessage}`;

  return (
    <div className="rounded-2xl border-2 border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm space-y-5 my-6">
      {/* ========================================================
          1. SHOPEE PRICE BANNER
          ======================================================== */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/90 via-amber-50/40 to-slate-50 border border-rose-100 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-100/90 px-2 py-0.5 rounded">
              Giá Bán Lẻ Niêm Yết
            </span>
            <span className="text-xs font-semibold text-slate-400 line-through">
              {originalPrice}
            </span>
            <span className="text-[11px] font-bold text-rose-700 bg-rose-200/60 px-1.5 py-0.2 rounded">
              -20%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-rose-600 tracking-tight">
              {basePrice}
            </span>
            <span className="text-xs font-medium text-slate-500">
              / Cặp tròng chính hãng (Đã gồm công cắt)
            </span>
          </div>
        </div>

        <div className="text-xs space-y-1 text-slate-600 border-l border-rose-200/60 pl-3 hidden sm:block">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Chính hãng Canada ISO 13485</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Bảo hành lớp váng 24 tháng</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          1. ĐỘ KHÚC XẠ MẮT (SPH + CYL)
          ======================================================== */}
      <div className="space-y-3 p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80">
        <div className="flex items-center justify-between">
          <span className="font-bold text-xs sm:text-sm text-heading uppercase tracking-wide flex items-center gap-1.5">
            <Glasses className="w-4 h-4 text-primary" />
            <span>1. Độ Khúc Xạ Mắt (Toa Kính)</span>
          </span>
          <span className="text-[11px] text-slate-500">Chọn độ cận và kèm độ loạn (nếu có)</span>
        </div>

        {/* 1.1 SPH */}
        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-slate-700 flex items-center justify-between">
            <span>• Độ Cận / Viễn (SPH):</span>
            <span className="text-primary font-bold">{sphereLabel}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SPHERE_OPTIONS.map((sph) => {
              const isSelected = selectedSphere === sph.id;
              return (
                <button
                  key={sph.id}
                  type="button"
                  onClick={() => setSelectedSphere(sph.id)}
                  className={`px-3 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer border flex items-center justify-between ${
                    isSelected
                      ? 'border-rose-500 bg-rose-50/80 text-rose-800 font-bold shadow-2xs ring-1 ring-rose-500'
                      : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="truncate">{sph.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1.2 CYL */}
        <div className="space-y-1.5 pt-2 border-t border-slate-200/70">
          <div className="text-xs font-semibold text-slate-700 flex items-center justify-between">
            <span>• Kèm Độ Loạn Thị (CYL):</span>
            <span className="text-primary font-bold">{cylinderLabel}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CYLINDER_OPTIONS.map((cyl) => {
              const isSelected = selectedCylinder === cyl.id;
              return (
                <button
                  key={cyl.id}
                  type="button"
                  onClick={() => setSelectedCylinder(cyl.id)}
                  className={`px-2.5 py-2 rounded-lg text-xs transition-colors cursor-pointer border text-center flex items-center justify-center gap-1 ${
                    isSelected
                      ? 'border-rose-500 bg-rose-50/80 text-rose-800 font-bold shadow-2xs ring-1 ring-rose-500'
                      : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="truncate">{cyl.label}</span>
                  {isSelected && <Check className="w-3 h-3 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lời khuyên khúc xạ động */}
        {opticalAdvice && (
          <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2 leading-relaxed">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{opticalAdvice}</span>
          </div>
        )}
      </div>

      {/* ========================================================
          2. CHIẾT SUẤT & ĐỘ MỎNG (INDEX) - CHỌN THUẦN STATE KHÔNG LINK
          ======================================================== */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-heading uppercase tracking-wide">
            2. Chiết Suất &amp; Độ Mỏng
          </span>
          <span className="text-primary font-bold">{indexLabel}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {INDEX_OPTIONS.map((opt) => {
            const isSelected = selectedIndex === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedIndex(opt.id)}
                className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer relative ${
                  isSelected
                    ? 'border-rose-500 bg-rose-50/70 text-rose-900 shadow-2xs ring-1 ring-rose-500'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">{opt.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
                </div>
                <span className="text-[10px] text-slate-500 line-clamp-1 block mt-0.5">
                  {opt.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          3. TÍNH NĂNG BẢO VỆ MẮT (ÁNH SÁNG XANH & ĐỔI MÀU NẮNG)
          ======================================================== */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        {/* 3.1 Lọc ánh sáng xanh */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-heading uppercase tracking-wide">
              3. Lọc Ánh Sáng Xanh Màn Hình (ASX)
            </span>
            <span className="text-[11px] text-primary font-semibold">
              {bluecutLabel.split('(')[0]}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {BLUECUT_OPTIONS.map((bc) => {
              const isSelected = selectedBluecut === bc.id;
              return (
                <button
                  key={bc.id}
                  type="button"
                  onClick={() => setSelectedBluecut(bc.id)}
                  className={`p-2 rounded-lg text-xs transition-colors cursor-pointer border text-left flex items-start gap-1.5 ${
                    isSelected
                      ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs ring-1 ring-rose-500'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />}
                  <span className="text-[11px] leading-snug">{bc.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3.2 Đổi màu khi ra nắng */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-heading uppercase tracking-wide">
              4. Tùy Chọn Đổi Màu Khi Ra Nắng
            </span>
            <span className="text-[11px] text-primary font-semibold">
              {photoLabel.split('(')[0]}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PHOTO_OPTIONS.map((pho) => {
              const isSelected = selectedPhoto === pho.id;
              return (
                <button
                  key={pho.id}
                  type="button"
                  onClick={() => setSelectedPhoto(pho.id)}
                  className={`p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-colors flex items-center justify-between ${
                    isSelected
                      ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs ring-1 ring-rose-500'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span>{pho.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          TÓM TẮT CẤU HÌNH THEO TOA KÍNH (GỌN GÀNG, KHÔNG SIZE PHI)
          ======================================================== */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
          <span className="font-bold text-slate-800">Cấu hình toa kính bạn đã chọn:</span>
          <span className="font-black text-rose-600 text-sm sm:text-base">{basePrice}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-600 text-[11px]">
          <div>
            • Độ Cận/Viễn (SPH): <b className="text-slate-900">{sphereLabel}</b>
          </div>
          <div>
            • Kèm Độ Loạn (CYL): <b className="text-slate-900">{cylinderLabel}</b>
          </div>
          <div>
            • Chiết suất: <b className="text-slate-900">{indexLabel}</b>
          </div>
          <div>
            • Ánh sáng xanh: <b className="text-slate-900">{bluecutLabel.split('(')[0].trim()}</b>
          </div>
          <div className="sm:col-span-2">
            • Đổi màu râm: <b className="text-slate-900">{photoLabel.split('(')[0].trim()}</b>
          </div>
        </div>
      </div>

      {/* ========================================================
          CỤM NÚT HÀNH ĐỘNG SHOPEE
          ======================================================== */}
      <div className="space-y-2.5 pt-1">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Nút chính Shopee Zalo Action */}
          <a
            href={zaloUrlWithMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ee4d2d] to-[#ff5722] hover:opacity-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tư Vấn Toa Kính Này Qua Zalo</span>
          </a>

          {/* Nút phụ: Tìm cửa hàng kính gần nhất */}
          <Link
            href="/lien-he/"
            className="py-3.5 px-5 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-300 hover:border-primary hover:text-primary hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>Tìm Đại Lý Cắt Kính</span>
          </Link>
        </div>

        {/* Hotline hỗ trợ */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span className="flex items-center gap-1">
            <Glasses className="w-3.5 h-3.5 text-primary" />
            <span>Miễn phí đo thị lực &amp; lắp ráp chuẩn theo toa</span>
          </span>
          <a
            href={`tel:${siteConfig.phones.hotline}`}
            className="font-bold text-slate-700 hover:text-primary flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-emerald-600" />
            <span>Hotline: 0982 264 464</span>
          </a>
        </div>
      </div>
    </div>
  );
}
