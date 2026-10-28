import React from 'react';
import Link from 'next/link';

export const technologyCards = [
  {
    category: 'VẬT LIỆU & CHIẾT SUẤT',
    title: 'Độ mỏng bắt đầu từ sự lựa chọn phù hợp.',
    desc: 'Chiết suất, độ kính và kích thước gọng đều ảnh hưởng đến độ dày thực tế của tròng. Hiểu rõ từng yếu tố giúp lựa chọn chính xác hơn.',
    image: '/images/technologies/tech_sec3_1.jpg',
    linkText: 'Tìm hiểu chiết suất',
    link: '/blog/so-sanh-chiet-suat-trong-kinh/',
  },
  {
    category: 'CÔNG NGHỆ LỚP PHỦ',
    title: 'Tối ưu trải nghiệm sử dụng hằng ngày.',
    desc: 'Các công nghệ lớp phủ có thể giúp giảm phản xạ, hạn chế bám bẩn và hỗ trợ vệ sinh tròng kính, tùy theo từng sản phẩm.',
    image: '/images/technologies/tech_sec3_2.jpg',
    linkText: 'Khám phá lớp phủ',
    link: '/blog/giai-phap-chong-anh-sang-xanh-uv420/',
  },
  {
    category: 'THIẾT KẾ QUANG HỌC FREEFORM',
    title: 'Thiết kế hướng đến từng nhu cầu thị giác.',
    desc: 'Công nghệ Freeform cho phép gia công các bề mặt quang học phức tạp, hỗ trợ nhiều thiết kế tròng kính đáp ứng các nhu cầu nhìn khác nhau.',
    image: '/images/technologies/tech_sec3_3.jpg',
    linkText: 'Tìm hiểu Freeform',
    link: '/blog/khi-nao-nen-dung-kinh-da-trong/',
  },
];

export default function TechnologyHighlights() {
  return (
    <section id="cong-nghe" className="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold text-primary tracking-wider uppercase">
            KHÁM PHÁ CÔNG NGHỆ ROCKYLENS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
            Công nghệ phía sau mỗi tầm nhìn.
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Từ vật liệu quang học, công nghệ lớp phủ đến thiết kế bề mặt, mỗi yếu tố đều góp phần tạo nên đặc điểm và trải nghiệm riêng của từng dòng tròng kính.
          </p>
        </div>

        {/* 3 Column Cards Grid matching user screenshot - Reduced 30% dimensions */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {technologyCards.map((card, idx) => (
              <div
                key={idx}
                className="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white"
              >
                <div>
                  <div className="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 sm:p-5 space-y-1.5">
                    <div className="text-[11px] font-bold text-primary tracking-wider uppercase">
                      {card.category}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-heading leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    href={card.link}
                    className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>{card.linkText}</span>
                    <span>&#8599;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Centered CTA */}
        <div className="text-center pt-3">
          <Link
            href="/kham-pha-trong-kinh/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] transition-all group"
          >
            <span>Khám phá tất cả công nghệ</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
