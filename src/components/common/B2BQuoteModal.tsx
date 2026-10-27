'use client';

import React, { useState } from 'react';
import { X, Phone, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

export function openB2BQuoteModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-b2b-modal'));
    if ((window as any).openB2BQuoteModal) {
      try {
        (window as any).openB2BQuoteModal();
      } catch (e) {
        // noop
      }
    }
  }
}

interface B2BQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function B2BQuoteModal({ isOpen, onClose }: B2BQuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    storeName: '',
    phone: '',
    city: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#071521]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-[#086370] text-sm font-bold inline-block">
            Dành Cho Cửa Hàng &amp; Đại Lý Mắt Kính
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0E253A] tracking-tight leading-snug">
            Nhận Báo Giá Đại Lý &amp; Chính Sách Chiết Khấu
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Bảng giá sỉ các dòng tròng Rocky sẵn kho và chính sách hợp tác Lab RX Freeform kỹ thuật số được gửi trực tiếp, bảo mật cho đối tác kinh doanh.
          </p>
        </div>

        {/* Quick 1-Click Action Buttons */}
        <div className="space-y-3 pt-1">
          <a
            href="https://zalo.me/0933102653"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-2xl bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base flex items-center justify-center gap-3 transition-colors shadow-sm cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Nhận Báo Giá File PDF Qua Zalo Ngay</span>
          </a>

          <a
            href="tel:0933102653"
            className="w-full py-3 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0E253A] font-bold text-base flex items-center justify-center gap-3 transition-colors cursor-pointer"
          >
            <Phone className="w-5 h-5 text-[#0B7B8A]" />
            <span>Hotline Phụ Trách B2B: 0933 102 653</span>
          </a>
        </div>

        {/* Quick Inquiry Mini Form */}
        <div className="border-t border-slate-100 pt-5 space-y-4">
          <div className="text-sm font-semibold text-slate-700">
            Hoặc để lại thông tin nhanh, chuyên viên Rocky sẽ gửi bảng giá qua Zalo:
          </div>

          {isSubmitted ? (
            <div className="p-4 rounded-2xl bg-teal-50 text-teal-800 text-sm flex items-start gap-3 border border-teal-100">
              <CheckCircle className="w-5 h-5 text-[#0B7B8A] shrink-0 mt-0.5" />
              <div>
                <strong>Cảm ơn Quý đối tác!</strong> Bộ phận B2B Rocky Lens sẽ gửi bảng giá chiết khấu và liên hệ hỗ trợ trong 15 phút.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Tên Cửa hàng mắt kính / Đơn vị (*)"
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0B7B8A] focus:outline-none text-sm text-[#0E253A] bg-slate-50 focus:bg-white transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại / Zalo (*)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0B7B8A] focus:outline-none text-sm text-[#0E253A] bg-slate-50 focus:bg-white transition-colors"
                />
                <input
                  type="text"
                  required
                  placeholder="Tỉnh / Thành phố (*)"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0B7B8A] focus:outline-none text-sm text-[#0E253A] bg-slate-50 focus:bg-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0E253A] hover:bg-[#0B7B8A] text-white font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Gửi Yêu Cầu Nhận Báo Giá &amp; Catalog</span>
              </button>
            </form>
          )}

          {/* Dealer Note */}
          <div className="text-center pt-2 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              * Rocky Lens phân phối độc quyền qua hệ thống đại lý &amp; phòng khám khúc xạ toàn quốc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
