import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, SunMedium, Cpu, Car, Layers, Eye, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import technologiesData from '@/../content/technologies/technologies.json';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0B7B8A]" />,
  SunMedium: <SunMedium className="w-5 h-5 text-[#D97706]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#0B7B8A]" />,
  Car: <Car className="w-5 h-5 text-teal-600" />,
  Eye: <Eye className="w-5 h-5 text-[#0B7B8A]" />,
  Layers: <Layers className="w-5 h-5 text-indigo-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#D97706]" />,
};

export default function TechnologyHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Đột Phá Kỹ Thuật"
          title="Công Nghệ Quang Học Tiên Tiến"
          description="Sự kết hợp giữa phôi monomer độ tinh khiết cao từ Mitsui Chemicals (Nhật Bản) và công nghệ gia công Freeform kỹ thuật số tiêu chuẩn Canada."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologiesData.slice(0, 8).map((tech) => (
            <div
              key={tech.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:border-teal-300 hover:bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {iconMap[tech.icon] || <Sparkles className="w-5 h-5 text-[#0B7B8A]" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B7B8A] bg-teal-50 px-2 py-0.5 rounded">
                    {tech.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {tech.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {tech.shortDescription}
                </p>
              </div>

              {/* Links to related product / article */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                {tech.relatedArticleSlug ? (
                  <Link
                    href={`/kham-pha-trong-kinh/bai-viet/${tech.relatedArticleSlug}/`}
                    className="text-[#0B7B8A] hover:underline font-medium inline-flex items-center space-x-1"
                  >
                    <span>Xem cơ chế</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ) : (
                  <span />
                )}

                <Link
                  href={`/trong-kinh/?tech=${tech.id}`}
                  className="text-slate-600 hover:text-[#0B7B8A] font-semibold"
                >
                  Sản phẩm →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
