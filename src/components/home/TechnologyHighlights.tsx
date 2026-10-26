import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, SunMedium, Cpu, Car, Layers, Eye, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const opticalExperiments = [
  {
    title: 'Nano Sapphire 9H Chống Trầy',
    badge: 'Cấu Trúc Đa Tầng',
    image: '/images/products/category-solution-4.png',
    description: 'Màng bốc bay điện tử buồng chân không gia cường độ cứng tương đương sapphire, giảm 90% nguy cơ trầy xước khăn lau.',
    spec: 'Độ cứng bề mặt 9H Pencil Test',
  },
  {
    title: 'Super Hydrophobic Kháng Nước',
    badge: 'Góc Tiếp Xúc >115°',
    image: '/images/products/category-solution-3.png',
    description: 'Bề mặt phủ trơn nano làm giọt nước mưa vo tròn lăn trượt tức thì, chống bám vân tay và dầu mỡ cực tốt.',
    spec: 'Kháng nước mưa & sương mù',
  },
  {
    title: 'DriveShield Ruby Cắt Lóa',
    badge: 'Thực Nghiệm Lái Xe',
    image: '/images/real/driveshield_night.jpg',
    description: 'Triệt tiêu 85% ánh sáng chói chát từ đèn pha LED ngược chiều, tăng tương phản 35% khi đi đêm trong mưa.',
    spec: 'Cắt lóa đèn pha LED & đèn cao áp',
  },
  {
    title: 'Gia Công Freeform KTS 24H',
    badge: 'Lab Schneider Đức',
    image: '/images/company/about-2.jpg',
    description: 'Mài kỹ thuật số mặt sau Back-Surface với sai số quang sai dưới 0.01 Diop, cá nhân hóa theo từng thông số gọng kính.',
    spec: 'Độ chính xác vi điểm 0.01D',
  },
];

export default function TechnologyHighlights() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full liquid-pill text-[#0B7B8A] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[#0B7B8A]" />
            <span>Đột Phá Kỹ Thuật Quang Học</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Khoa Học Vật Liệu &amp; Công Nghệ Váng Phủ
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sự kết hợp giữa phôi monomer cao cấp từ Mitsui Chemicals (Nhật Bản) và công nghệ gia công Freeform kỹ thuật số tiêu chuẩn Canada.
          </p>
        </div>

        {/* 4 Optical Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opticalExperiments.map((exp, idx) => (
            <div
              key={idx}
              className="liquid-card rounded-[24px] overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-4/3 w-full overflow-hidden bg-slate-900 relative">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-teal-300 text-[10px] font-bold uppercase">
                    {exp.badge}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0B7B8A]">
                  &bull; {exp.spec}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
