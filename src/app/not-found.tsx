import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0B7B8A] mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#0B7B8A] tracking-wider uppercase">Lỗi 404</span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Không Tìm Thấy Trang Yêu Cầu
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Đường dẫn bạn vừa truy cập không tồn tại hoặc đã được cập nhật sang danh mục mới.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0B7B8A] hover:bg-[#096370] text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Về Trang Chủ</span>
          </Link>

          <Link
            href="/trong-kinh/"
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalogue Sản Phẩm</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
