import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Sparkles, HelpCircle, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { getAllArticles } from '@/features/articles/article-service';
import { getAllProducts } from '@/features/products/product-service';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ArticleGrid from '@/components/content/ArticleGrid';
import ProductGrid from '@/components/products/ProductGrid';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';
import { ARTICLE_CATEGORIES } from '@/features/articles/article-types';

export const metadata: Metadata = constructMetadata({
  title: 'Công Nghệ & Kiến Thức Tròng Kính',
  description: 'Trung tâm giáo dục quang học, so sánh chiết suất 1.56 - 1.74, nguyên lý tròng đổi màu, kính đa tròng Freeform và hướng dẫn chăm sóc mắt.',
  path: '/kham-pha-trong-kinh/',
});

const faqs = [
  {
    question: 'Chiết suất tròng kính bao nhiêu là phù hợp với độ cận của tôi?',
    answer: 'Nếu độ cận dưới -3.00 Diop, chiết suất 1.56 hoặc 1.60 là lựa chọn cân đối. Với độ cận từ -3.25 đến -5.50 Diop, nên chọn chiết suất 1.60 hoặc 1.67 để tròng mỏng nhẹ và đẹp mắt. Với độ cận trên -6.00 Diop, chiết suất 1.67 hoặc 1.74 là giải pháp tối ưu giúp mép kính không bị dày cộm.',
  },
  {
    question: 'Tròng kính đổi màu có thay thế hoàn toàn kính râm được không?',
    answer: 'Tròng đổi màu Rocky Trendy Smart chuyển màu đậm tương đương kính râm CAT 3 khi ra nắng ngoài trời. Tuy nhiên, khi ngồi trong ô tô, do kính chắn gió đã chặn hầu hết tia UV nên tròng sẽ chỉ đổi màu nhẹ. Nếu bạn thường xuyên lái xe đường dài dưới nắng gắt, nên kết hợp kính phân cực Rocky Polarized.',
  },
  {
    question: 'Đeo kính đa tròng lần đầu có bị chóng mặt không?',
    answer: 'Với công nghệ phay mặt sau kỹ thuật số Freeform HD của Rocky Lens, vùng mép quang sai được mở rộng và làm mềm mại hơn 40% so với đa tròng truyền thống. Đa số khách hàng chỉ mất từ 1 đến 3 ngày để làm quen hoàn toàn với tầm nhìn xa - trung - gần.',
  },
  {
    question: 'Làm thế nào để phân biệt tròng kính lọc ánh sáng xanh chất lượng?',
    answer: 'Tròng lọc ánh sáng xanh tốt (như Rocky BlueCut UV420) sử dụng phôi monomer hấp thụ thay vì phủ phản xạ bề mặt. Nhờ đó, tròng không bị ánh phản chiếu màu xanh tím lòe loẹt và đặc biệt là không làm hình ảnh cảnh vật bị ám vàng lệch màu khi nhìn thực tế.',
  },
];

export default function KnowledgePage() {
  const articles = getAllArticles();
  const featuredProducts = getAllProducts().slice(0, 3);

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Breadcrumbs items={[{ label: 'Công nghệ & Kiến thức', href: '/kham-pha-trong-kinh/' }]} />

      {/* 1. Hero giới thiệu */}
      <section className="bg-gradient-to-r from-[#050E10] via-[#081B22] to-[#0A2631] text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#0B7B8A]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-[#0B7B8A]/20 text-teal-300 border border-[#0B7B8A]/40">
            Trung Tâm Kiến Thức Quang Học
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Hiểu Về Tròng Kính Cùng Chuyên Gia
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Kho tri thức quang học và cẩm nang chăm sóc thị lực được biên soạn bởi các chuyên viên khúc xạ Rocky Lens Canada, giúp bạn hiểu rõ cơ chế và lựa chọn cặp tròng kính hoàn hảo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* 2. Điều hướng các nhóm kiến thức */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-teal-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0B7B8A] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{cat.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{cat.description}</p>
              <div className="text-xs font-semibold text-[#0B7B8A] flex items-center space-x-1">
                <span>Chuyên mục chính</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* 3. Bài viết nổi bật */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Tất Cả Bài Viết Hướng Dẫn & Nghiên Cứu
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Khám phá các bài phân tích chuyên sâu về chiết suất, công nghệ phôi và phương pháp bảo vệ mắt
            </p>
          </div>
          <ArticleGrid articles={articles} />
        </div>

        {/* 6. Các câu hỏi thường gặp (FAQ) */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#0B7B8A] bg-teal-50 px-3 py-1 rounded-full mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Hỏi Đáp Thường Gặp</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Giải Đáp Thắc Mắc Về Tròng Kính
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5"
              >
                <h3 className="font-bold text-slate-900 text-sm flex items-start space-x-2">
                  <span className="text-[#0B7B8A] font-black shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Sản phẩm liên quan */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Các Dòng Tròng Kính Tiêu Biểu Được Nhắc Đến
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Trực tiếp áp dụng những công nghệ quang học tiên tiến trên các sản phẩm Rocky Lens
              </p>
            </div>
            <Link href="/trong-kinh/" className="text-xs font-semibold text-[#0B7B8A] hover:underline">
              Xem tất cả sản phẩm →
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </div>

      {/* 8. Liên hệ tư vấn */}
      <ContactCTA
        title="Bạn Cần Tư Vấn Chuyên Sâu Theo Tình Trạng Thị Lực Riêng?"
        description="Đừng ngần ngại nhắn tin hoặc gọi hotline để các chuyên viên khúc xạ Rocky Lens hỗ trợ bạn chọn tròng kính phù hợp nhất."
      />
    </div>
  );
}
