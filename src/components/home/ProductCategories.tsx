import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { CATEGORIES } from '@/features/products/product-types';

export default function ProductCategories() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Danh Mục Quang Học"
          title="Hệ Thống Tròng Kính Chuyên Biệt"
          description="Được thiết kế toàn diện theo tiêu chuẩn khúc xạ quốc tế, đáp ứng mọi nhu cầu thị lực từ điều chỉnh tật khúc xạ, lão thị đến bảo vệ mắt chuyên sâu."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.slice(0, 8).map((cat) => (
            <Link
              key={cat.id}
              href={`/trong-kinh/?category=${cat.id}`}
              className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-teal-400 shadow-xs hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-4/3 rounded-xl bg-slate-100 overflow-hidden mb-4 p-4 flex items-center justify-center">
                  <Image
                    src={cat.image || '/images/products/category-solution-1.png'}
                    alt={cat.name}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B7B8A] transition-colors">
                  {cat.name}
                </h3>

                <p className="mt-2 text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B7B8A]">
                <span>Khám phá dòng tròng</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/trong-kinh/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white border border-slate-300 text-slate-800 hover:border-[#0B7B8A] hover:text-[#0B7B8A] shadow-xs hover:shadow transition-all"
          >
            <span>Xem Tất Cả Tròng Kính Phân Phối</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
