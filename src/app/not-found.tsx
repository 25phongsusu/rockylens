import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center site-background px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 card-surface p-8 sm:p-10 rounded-3xl border border-[var(--color-border)]/50 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-[var(--site-bg-middle)]/60 border border-[var(--color-border)]/60 flex items-center justify-center text-[var(--color-primary)] mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[var(--color-primary)] tracking-wider uppercase">Lỗi 404</span>
          <h1 className="text-2xl font-black text-heading tracking-tight">
            Không Tìm Thấy Trang Yêu Cầu
          </h1>
          <p className="text-xs text-[var(--color-muted)] leading-relaxed">
            Đường dẫn bạn vừa truy cập không tồn tại hoặc đã được cập nhật sang danh mục mới.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="button-primary inline-flex items-center justify-center space-x-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Về Trang Chủ</span>
          </Link>

          <Link
            href="/trong-kinh/"
            className="button-secondary inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalogue Sản Phẩm</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
