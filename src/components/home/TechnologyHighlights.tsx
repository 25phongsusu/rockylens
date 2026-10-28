import React from 'react';
import Link from 'next/link';

export const technologyCards = [
  {
    num: '01 — VẬT LIỆU & CHIẾT SUẤT',
    title: 'Độ mỏng cần được hiểu đúng.',
    desc: 'Chiết suất, độ kính và lựa chọn gọng cùng ảnh hưởng đến độ dày thực tế của tròng.',
    image: '/images/technologies/tech_sec3_1.jpg',
    link: '/kham-pha-trong-kinh/',
  },
  {
    num: '02 — CÔNG NGHỆ LỚP PHỦ',
    title: 'Dễ vệ sinh, thuận tiện sử dụng.',
    desc: 'Tìm hiểu các đặc điểm lớp phủ giúp hạn chế bám bẩn hoặc phản xạ tùy dòng tròng.',
    image: '/images/technologies/tech_sec3_2.jpg',
    link: '/kham-pha-trong-kinh/',
  },
  {
    num: '03 — THIẾT KẾ QUANG HỌC',
    title: 'Thiết kế theo đặc điểm sử dụng.',
    desc: 'Freeform và các thiết kế quang học cần được đánh giá theo từng sản phẩm cụ thể.',
    image: '/images/technologies/tech_sec3_3.jpg',
    link: '/kham-pha-trong-kinh/',
  },
];

export default function TechnologyHighlights() {
  return (
    <section id="cong-nghe" className="relative py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Section Header matching preview.png Section 03 */}
        <div className="max-w-3xl space-y-2.5">
          <div className="text-xs font-bold text-primary tracking-wider uppercase">
            03 / CÔNG NGHỆ TRÒNG KÍNH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
            Công nghệ tạo nên{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              sự khác biệt.
            </span>
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            Từ vật liệu, lớp phủ đến thiết kế bề mặt, mỗi công nghệ giải quyết một vấn đề quang học khác nhau.
          </p>
        </div>

        {/* 3 Column Cards Grid matching preview.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {technologyCards.map((card, idx) => (
            <div
              key={idx}
              className="card-surface rounded-[28px] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white"
            >
              <div>
                <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-2">
                  <div className="text-xs font-bold text-primary tracking-wider uppercase">
                    {card.num}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-heading leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
