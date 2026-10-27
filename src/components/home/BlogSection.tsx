import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getArticleBySlug } from '@/features/articles/article-service';
import { formatDate } from '@/lib/utils';

export default function BlogSection() {
  const officeArticle = getArticleBySlug('giai-phap-chong-anh-sang-xanh-uv420');
  const drivingArticle = getArticleBySlug('cong-nghe-kinh-lai-xe-driveshield');
  const kidsArticle = getArticleBySlug('kiem-soat-can-thi-tre-em-myocontrol');

  const featuredList = [
    {
      article: officeArticle,
      fallbackTitle: 'Ánh Sáng Xanh Có Thực Sự Gây Hại? Bí Quyết Chống Mỏi Mắt Màn Hình Không Ám Vàng',
      fallbackExcerpt: 'Làm việc 8-10 tiếng mỗi ngày trước laptop khiến mắt khô rát và mỏi điều tiết. Tìm hiểu cơ chế phôi hấp thụ monomer BlueCut UV420 bảo vệ hoàng điểm và giữ màu trung thực.',
      pill: 'Bảo Vệ Thị Lực Văn Phòng',
      slug: 'giai-phap-chong-anh-sang-xanh-uv420',
      cover: '/images/products/category-solution-2.png',
      readTime: '5 phút đọc',
      date: '05/03/2025',
    },
    {
      article: drivingArticle,
      fallbackTitle: 'Lái Xe Ban Đêm & Đi Mưa: Bí Quyết Triệt Tiêu Lóa Đèn Pha Cho Bác Tài Vững Lái',
      fallbackExcerpt: 'Nỗi ám ảnh khi bị đèn pha xe đối diện rọi chói mắt hoặc đường ướt mưa gây lóa mờ. Khám phá lớp phủ phân cực Ruby AR nâng cao độ tương phản đêm an toàn.',
      pill: 'Tầm Nhìn Lái Xe An Toàn',
      slug: 'cong-nghe-kinh-lai-xe-driveshield',
      cover: '/images/products/category-solution-1.png',
      readTime: '6 phút đọc',
      date: '10/03/2025',
    },
    {
      article: kidsArticle,
      fallbackTitle: 'Kiểm Soát Tăng Độ Cận Ở Trẻ Em: Những Điều Ba Mẹ Cần Biết Về Defocus MyoControl',
      fallbackExcerpt: 'Vì sao độ cận của trẻ tăng nhanh 0.75 - 1.25 độ mỗi năm khi đi học? Cơ chế vi thấu kính phân tán chu biên hội tụ giúp kìm hãm trục nhãn cầu dài ra hiệu quả.',
      pill: 'Chăm Sóc Mắt Học Đường',
      slug: 'kiem-soat-can-thi-tre-em-myocontrol',
      cover: '/images/products/category-solution-7.png',
      readTime: '7 phút đọc',
      date: '15/03/2025',
    },
  ];

  return (
    <section id="blog-insights" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-[#086370] text-sm font-bold inline-block">
            Góc Nhìn &amp; Insight Thị Giác
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Kiến thức thị giác &amp; câu chuyện từ người đeo kính.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Lắng nghe nhu cầu thực tế và khám phá những chia sẻ chuyên sâu giúp bạn chọn đúng cặp tròng kính cho công việc, cuộc sống và gia đình.
          </p>
        </div>

        {/* 3 Featured Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((item) => {
            const title = item.article ? item.article.title : item.fallbackTitle;
            const desc = item.article ? item.article.description : item.fallbackExcerpt;
            const cover = item.article && item.article.coverImage ? item.article.coverImage : item.cover;
            const readTime = item.article ? item.article.readTime : item.readTime;
            const date = item.article ? formatDate(item.article.publishedAt) : item.date;

            return (
              <div
                key={item.slug}
                className="group bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual Top */}
                  <div className="h-56 sm:h-64 bg-slate-100 overflow-hidden relative">
                    <img
                      src={cover}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0B7B8A] text-white text-xs font-bold shadow-sm">
                      {item.pill}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{date}</span>
                      </span>
                      <span>&bull;</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${item.slug}/`}>
                        {title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href={`/blog/${item.slug}/`}
                    className="w-full py-3 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-sm transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
                  >
                    <span>Đọc bài viết chi tiết</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-4">
          <Link
            href="/blog/"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base sm:text-lg transition-colors duration-200 shadow-sm"
          >
            <span>Khám Phá Tất Cả Bài Viết &amp; Insight Thị Giác</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
