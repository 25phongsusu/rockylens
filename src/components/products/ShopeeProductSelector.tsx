'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Glasses,
  Info,
} from 'lucide-react';
import { Product } from '@/features/products/product-types';
import { siteConfig } from '@/config/site';

interface ShopeeProductSelectorProps {
  product: Product;
}

// 1. Danh sách chiết suất chuẩn quang học và link tương ứng
const INDEX_OPTIONS = [
  {
    id: '1.56',
    label: '1.56 (Chuẩn)',
    sub: 'Độ cận nhẹ (< 3.00)',
    slug: 'rocky-156-bluecut-shmc',
    href: '/trong-kinh/rocky-156-bluecut-shmc/',
  },
  {
    id: '1.60',
    label: '1.60 (Mỏng nhẹ / MR-8)',
    sub: 'Siêu dai chống vỡ gọng khoan',
    slug: 'rocky-160-mr8-aspheric',
    href: '/trong-kinh/rocky-160-mr8-aspheric/',
  },
  {
    id: '1.67',
    label: '1.67 (Siêu mỏng)',
    sub: 'Cận 3.00 - 7.00 nhẹ hơn 35%',
    slug: 'rocky-167-ultra-thin-bluecut',
    href: '/trong-kinh/rocky-167-ultra-thin-bluecut/',
  },
  {
    id: '1.74',
    label: '1.74 (Cực mỏng phẳng)',
    sub: 'Cận > 7.00 triệt tiêu đáy chai',
    slug: 'rocky-174-ultra-high-index',
    href: '/trong-kinh/rocky-174-ultra-high-index/',
  },
];

// 2. Danh sách khoảng độ cận / viễn phổ biến
const DIOPTER_OPTIONS = [
  { id: '0.00', label: '0.00 (Không độ / Chống ASX & Bụi)' },
  { id: '0.25-2.00', label: 'Cận nhẹ (0.25 - 2.00 Diop)' },
  { id: '2.25-4.00', label: 'Cận vừa (2.25 - 4.00 Diop)' },
  { id: '4.25-6.00', label: 'Cận cao (4.25 - 6.00 Diop)' },
  { id: '6.25-10.00', label: 'Cận nặng (6.25 - 10.00 Diop)' },
  { id: 'loan-thi', label: 'Có độ Loạn (-0.50 đến -2.00)' },
  { id: 'vien-thi', label: 'Lão thị / Nhìn gần (+1.00 đến +3.50)' },
];

// 3. Tính năng lọc ánh sáng xanh
const BLUECUT_OPTIONS = [
  { id: 'uv420-pure', label: 'Lọc ASX UV420 Pure Clear (Chuẩn màu 100%)' },
  { id: 'shmc-blue', label: 'Lọc ASX Phản xạ ánh xanh tím SHMC' },
  { id: 'none', label: 'Tròng trong suốt siêu cứng (Khử UV400)' },
];

// 4. Tính năng đổi màu khi ra nắng
const PHOTO_OPTIONS = [
  {
    id: 'clear',
    label: 'Trong suốt (Không đổi màu)',
    slug: 'rocky-156-bluecut-shmc',
    href: '',
  },
  {
    id: 'grey',
    label: 'Đổi màu Khói (Grey Transition)',
    slug: 'rocky-trendy-photochromic-grey',
    href: '/trong-kinh/rocky-trendy-photochromic-grey/',
  },
  {
    id: 'brown',
    label: 'Đổi màu Trà (Brown Transition)',
    slug: 'rocky-trendy-photochromic-brown',
    href: '/trong-kinh/rocky-trendy-photochromic-brown/',
  },
];

// 5. Kích thước đường kính tròng
const SIZE_OPTIONS = [
  { id: '65', label: 'Phi 65mm (Gọng nhỏ / Kim loại mắt hẹp)' },
  { id: '70', label: 'Phi 70mm (Kích thước tiêu chuẩn phổ biến)' },
  { id: '75', label: 'Phi 75mm (Gọng to thời trang / Oversize)' },
];

// 6. Nhu cầu chuyên biệt liên kết đồng nhất
const RELATED_SOLUTION_LINKS = [
  {
    title: 'Lái xe ban đêm chống chói đèn pha LED',
    name: 'Rocky DriveShield Ruby AR',
    href: '/trong-kinh/rocky-driveshield-night-vision/',
  },
  {
    title: 'Đa tròng nhìn Xa - Trung - Gần (Lão thị 40+)',
    name: 'CanRx Freeform HD Progressive',
    href: '/trong-kinh/rocky-freeform-progressive-hd/',
  },
  {
    title: 'Kiểm soát cận thị học đường cho trẻ em',
    name: 'Defocus MyoControl Kids HD',
    href: '/trong-kinh/rocky-myocontrol-dims-kids/',
  },
];

export default function ShopeeProductSelector({ product }: ShopeeProductSelectorProps) {
  // Xác định chiết suất mặc định của sản phẩm hiện tại
  const currentInitialIndex = INDEX_OPTIONS.find((opt) => product.refractiveIndex?.includes(opt.id))?.id || '1.56';
  const isPhotoProduct = product.slug.includes('photochromic') || product.categoryIds.includes('doi-mau');
  const initialPhoto = product.slug.includes('brown') ? 'brown' : isPhotoProduct ? 'grey' : 'clear';

  // State các tuỳ chọn biến thể kiểu Shopee
  const [selectedIndex, setSelectedIndex] = useState<string>(currentInitialIndex);
  const [selectedDiopter, setSelectedDiopter] = useState<string>('0.25-2.00');
  const [selectedBluecut, setSelectedBluecut] = useState<string>('uv420-pure');
  const [selectedPhoto, setSelectedPhoto] = useState<string>(initialPhoto);
  const [selectedSize, setSelectedSize] = useState<string>('70');

  // Giá cố định theo yêu cầu người dùng
  const basePrice = '1.000.000 ₫';
  const originalPrice = '1.250.000 ₫';

  // Tìm label hiển thị cho tóm tắt
  const indexLabel = INDEX_OPTIONS.find((o) => o.id === selectedIndex)?.label || selectedIndex;
  const diopterLabel = DIOPTER_OPTIONS.find((o) => o.id === selectedDiopter)?.label || selectedDiopter;
  const bluecutLabel = BLUECUT_OPTIONS.find((o) => o.id === selectedBluecut)?.label || selectedBluecut;
  const photoLabel = PHOTO_OPTIONS.find((o) => o.id === selectedPhoto)?.label || selectedPhoto;
  const sizeLabel = SIZE_OPTIONS.find((o) => o.id === selectedSize)?.label || selectedSize;

  // Tạo tin nhắn tư vấn tự động gửi sang Zalo
  const zaloMessage = encodeURIComponent(
    `Xin chào RockyLens! Tôi muốn tư vấn lắp đặt tròng kính:\n` +
      `• Sản phẩm: ${product.name}\n` +
      `• Chiết suất: ${indexLabel}\n` +
      `• Khoảng độ cận/viễn: ${diopterLabel}\n` +
      `• Lọc ánh sáng xanh: ${bluecutLabel}\n` +
      `• Tính năng đổi màu: ${photoLabel}\n` +
      `• Kích thước: ${sizeLabel}\n` +
      `• Giá tham khảo: 1.000.000 ₫\n` +
      `Nhờ chuyên viên khúc xạ tư vấn giúp tôi!`
  );

  const zaloUrlWithMsg = `https://zalo.me/0982264464?text=${zaloMessage}`;

  return (
    <div className="rounded-2xl border-2 border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm space-y-5 my-6">
      {/* ========================================================
          1. SHOPEE PRICE BANNER
          ======================================================== */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/80 via-amber-50/40 to-slate-50 border border-rose-100 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100/80 px-2 py-0.5 rounded">
              Giá Bán Lẻ Niêm Yết
            </span>
            <span className="text-xs font-semibold text-slate-500 line-through">
              {originalPrice}
            </span>
            <span className="text-xs font-bold text-rose-700 bg-rose-200/60 px-1.5 py-0.2 rounded">
              -20%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black text-rose-600 tracking-tight">
              {basePrice}
            </span>
            <span className="text-xs font-medium text-slate-500">
              / Cặp tròng chính hãng
            </span>
          </div>
        </div>

        {/* Cam kết tiêu chuẩn */}
        <div className="text-xs space-y-1 text-slate-600 border-l border-rose-200/60 pl-4 hidden sm:block">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Chính hãng Canada ISO 13485</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Bảo hành lớp váng 24 tháng</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. SHOPEE VARIANT 1: CHIẾT SUẤT (ĐỘ MỎNG TRÒNG)
          ======================================================== */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-heading uppercase tracking-wide flex items-center gap-1.5">
            <span>1. Chiết Suất &amp; Độ Mỏng</span>
            <span className="text-slate-400 font-normal">
              (Đang chọn: <b className="text-primary font-bold">{indexLabel}</b>)
            </span>
          </span>
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            Click chip để xem sản phẩm cùng phân loại
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {INDEX_OPTIONS.map((opt) => {
            const isCurrentProduct = product.refractiveIndex?.includes(opt.id);
            const isSelected = selectedIndex === opt.id;

            return (
              <div key={opt.id} className="relative">
                {opt.slug !== product.slug ? (
                  <Link
                    href={opt.href}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all block group relative ${
                      isCurrentProduct || isSelected
                        ? 'border-rose-500 bg-rose-50/40 text-rose-900 shadow-2xs'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                    title={`Chuyển đến trang chi tiết ${opt.label}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{opt.label}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[10px] text-slate-500 line-clamp-1 block mt-0.5">
                      {opt.sub}
                    </span>
                    {(isCurrentProduct || isSelected) && (
                      <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-600 text-white rounded-bl-lg rounded-tr-md flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(opt.id)}
                    className="w-full p-2.5 rounded-xl border-2 border-rose-500 bg-rose-50/50 text-left cursor-pointer transition-all relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-900">{opt.label}</span>
                      <span className="text-[9px] font-bold text-rose-600 bg-white px-1.5 py-0.2 rounded border border-rose-200">
                        Đang xem
                      </span>
                    </div>
                    <span className="text-[10px] text-rose-700 line-clamp-1 block mt-0.5">
                      {opt.sub}
                    </span>
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-600 text-white rounded-bl-lg rounded-tr-md flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          3. SHOPEE VARIANT 2: KHOẢNG ĐỘ CẬN / VIỄN
          ======================================================== */}
      <div className="space-y-2 pt-1 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-heading uppercase tracking-wide">
            2. Chọn Khoảng Độ Cận / Viễn
          </span>
          <span className="text-[11px] text-primary font-semibold">
            {diopterLabel}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {DIOPTER_OPTIONS.map((d) => {
            const isSelected = selectedDiopter === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDiopter(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs ring-1 ring-rose-500'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-rose-600" />}
                <span>{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          4. SHOPEE VARIANT 3: LỌC ÁNH SÁNG XANH (ASX)
          ======================================================== */}
      <div className="space-y-2 pt-1 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-heading uppercase tracking-wide">
            3. Tính Năng Lọc Ánh Sáng Xanh (ASX)
          </span>
          <span className="text-[11px] text-primary font-semibold">
            {bluecutLabel.split('(')[0]}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {BLUECUT_OPTIONS.map((bc) => {
            const isSelected = selectedBluecut === bc.id;
            return (
              <button
                key={bc.id}
                type="button"
                onClick={() => setSelectedBluecut(bc.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs ring-1 ring-rose-500'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-rose-600" />}
                <span>{bc.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          5. SHOPEE VARIANT 4: TÍNH NĂNG ĐỔI MÀU KHI RA NẮNG
          ======================================================== */}
      <div className="space-y-2 pt-1 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-heading uppercase tracking-wide flex items-center gap-1.5">
            <span>4. Tính Năng Đổi Màu Khi Ra Nắng</span>
            {isPhotoProduct && (
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.2 rounded">
                Dòng Photochromic
              </span>
            )}
          </span>
          <span className="text-[11px] text-primary font-semibold">
            {photoLabel.split('(')[0]}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {PHOTO_OPTIONS.map((pho) => {
            const isCurrentSlug = product.slug === pho.slug;
            const isSelected = selectedPhoto === pho.id;

            return pho.href && pho.slug !== product.slug ? (
              <Link
                key={pho.id}
                href={pho.href}
                className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-xs text-slate-700 font-medium flex items-center justify-between group transition-all"
                title={`Chuyển đến trang ${pho.label}`}
              >
                <span>{pho.label}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-primary transition-colors shrink-0 ml-1" />
              </Link>
            ) : (
              <button
                key={pho.id}
                type="button"
                onClick={() => setSelectedPhoto(pho.id)}
                className={`p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                  isSelected || isCurrentSlug
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs ring-1 ring-rose-500'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>{pho.label}</span>
                {(isSelected || isCurrentSlug) && (
                  <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 ml-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          6. SHOPEE VARIANT 5: ĐƯỜNG KÍNH TRÒNG (SIZE PHI)
          ======================================================== */}
      <div className="space-y-2 pt-1 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-heading uppercase tracking-wide">
            5. Kích Thước Đường Kính Tròng (Size)
          </span>
          <span className="text-[11px] text-primary font-semibold">
            {sizeLabel.split('(')[0]}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {SIZE_OPTIONS.map((sz) => {
            const isSelected = selectedSize === sz.id;
            return (
              <button
                key={sz.id}
                type="button"
                onClick={() => setSelectedSize(sz.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs ring-1 ring-rose-500'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-rose-600" />}
                <span>{sz.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          7. CÁC GIẢI PHÁP ĐỒNG NHẤT (LINK NHANH CATALOGUE)
          ======================================================== */}
      <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2 text-xs">
        <div className="font-bold text-slate-700 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-primary" />
          <span>Nhu cầu chuyên biệt khác từ Catalogue RockyLens:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {RELATED_SOLUTION_LINKS.map((rel, idx) => (
            <Link
              key={idx}
              href={rel.href}
              className="p-2 rounded-lg bg-white border border-slate-200/90 hover:border-primary hover:text-primary transition-all flex flex-col justify-between group"
            >
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-primary line-clamp-1">
                {rel.name}
              </span>
              <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                {rel.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ========================================================
          8. TÓM TẮT CẤU HÌNH ĐÃ CHỌN
          ======================================================== */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs space-y-1.5">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
          <span className="font-bold text-slate-700">Tóm tắt cấu hình đã chọn:</span>
          <span className="font-black text-rose-600 text-sm">{basePrice}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-600 text-[11px]">
          <div>• Chiết suất: <b className="text-slate-800">{indexLabel}</b></div>
          <div>• Khoảng độ: <b className="text-slate-800">{diopterLabel}</b></div>
          <div>• Lọc ánh sáng xanh: <b className="text-slate-800">{bluecutLabel.split('(')[0]}</b></div>
          <div>• Đổi màu nắng: <b className="text-slate-800">{photoLabel.split('(')[0]}</b></div>
          <div>• Kích thước: <b className="text-slate-800">{sizeLabel}</b></div>
          <div>• Tình trạng: <span className="text-emerald-600 font-bold">Sẵn hàng chính hãng</span></div>
        </div>
      </div>

      {/* ========================================================
          9. CỤM NÚT HÀNH ĐỘNG PHONG CÁCH SHOPEE
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
            <span>Tư Vấn Độ Cận Này Qua Zalo</span>
          </a>

          {/* Nút phụ: Tìm cửa hàng kính gần nhất */}
          <Link
            href="/lien-he/"
            className="py-3.5 px-5 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-300 hover:border-primary hover:text-primary hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-center shadow-xs"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>Tìm Đại Lý Cắt Kính</span>
          </Link>
        </div>

        {/* Hotline hỗ trợ */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span className="flex items-center gap-1">
            <Glasses className="w-3.5 h-3.5 text-primary" />
            <span>Hỗ trợ đo thị lực &amp; cắt kính theo toa bác sĩ</span>
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
