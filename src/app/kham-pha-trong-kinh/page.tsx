import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Eye,
  Compass,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
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
  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Breadcrumbs items={[{ label: 'Công nghệ & Kiến thức', href: '/kham-pha-trong-kinh/' }]} />

      {/* 1. Hero giới thiệu */}
      <section className="bg-gradient-to-r from-[#050E10] via-[#081B22] to-[#0A2631] text-white py-14 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#0B7B8A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 bg-[#0B7B8A]/20 text-teal-300 border border-[#0B7B8A]/40 shadow-xs">
            Trung Tâm Kiến Thức Quang Học
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Hiểu Về Tròng Kính Cùng Chuyên Gia
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Kho tri thức quang học và cẩm nang chăm sóc thị lực được biên soạn bởi các chuyên viên khúc xạ Rocky Lens Canada, giúp bạn hiểu rõ cơ chế và lựa chọn cặp tròng kính hoàn hảo cho đôi mắt.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        
        {/* 2. Điều hướng 3 nhóm chuyên mục lớn */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLE_CATEGORIES.map((cat) => {
              const anchor = cat.id === 'kien-thuc' ? '#kien-thuc' : cat.id === 'cong-nghe' ? '#cong-nghe' : '#huong-dan';
              return (
                <a
                  key={cat.id}
                  href={anchor}
                  className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-[#0B7B8A] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0B7B8A] mb-5 group-hover:scale-105 transition-transform">
                      {cat.id === 'kien-thuc' ? (
                        <Eye className="w-6 h-6" />
                      ) : cat.id === 'cong-nghe' ? (
                        <Sparkles className="w-6 h-6" />
                      ) : (
                        <BookOpen className="w-6 h-6" />
                      )}
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-xl mb-2.5 group-hover:text-[#0B7B8A] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="text-sm font-bold text-[#0B7B8A] flex items-center space-x-1.5 pt-6 mt-2 border-t border-slate-100">
                    <span>Xem nội dung chuyên mục</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* CHUYÊN MỤC 1: KIẾN THỨC QUANG HỌC                         */}
        {/* ========================================================= */}
        <section id="kien-thuc" className="space-y-8 scroll-mt-24">
          <div className="border-b border-slate-200/80 pb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B7B8A] mb-2">
              <Eye className="w-4 h-4" />
              <span>Chuyên Mục 1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Kiến Thức Quang Học Cốt Lõi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Hiểu rõ nguyên lý khúc xạ ánh sáng, ý nghĩa của các chỉ số chiết suất và Abbe giúp bạn không bị bối rối trước hàng chục thông số khi đo mắt và chọn tròng.
            </p>
          </div>

          {/* 3 Khối Tóm Tắt Khoa Học Trực Quan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-xs font-bold border border-teal-100">
                  Chỉ Số Chiết Suất
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  1.56 &bull; 1.60 &bull; 1.67 &bull; 1.74
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chiết suất càng cao, tròng kính càng mỏng và nhẹ hơn ở cùng một số độ cận. Ví dụ, chiết suất 1.74 giúp giảm độ dày viền tới 35-40% so với tròng tiêu chuẩn 1.56.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Lựa chọn theo số độ: &lt;3 Diop (1.56/1.60), 3-6 Diop (1.60/1.67), &gt;6 Diop (1.67/1.74)
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold border border-cyan-100">
                  Độ Sắc Nét Màu Sắc
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Chỉ Số Abbe (Sắc Sai)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chỉ số Abbe đo lường độ tán sắc màu sắc. Abbe càng cao thì viền hình ảnh càng sắc sảo, mắt không bị mỏi hay thấy viền cầu vồng khi liếc nhìn về phía rìa thấu kính.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Vật liệu MR-8 (1.60) đạt Abbe 42 – mức cân bằng lý tưởng nhất giữa độ mỏng và độ sắc nét
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                  Y Khoa Khúc Xạ
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Kiểm Soát Trục Nhãn Cầu
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cơ chế phân tán tiêu cự chu biên (Defocus D.I.M.S) tạo tín hiệu ức chế nhãn cầu dài ra quá mức, hỗ trợ giảm đến 60% tốc độ tăng độ cận ở lứa tuổi học đường.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Ứng dụng trên dòng tròng chuyên biệt Rocky MyoControl Kids
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHUYÊN MỤC 2: CÔNG NGHỆ TRÒNG KÍNH                         */}
        {/* ========================================================= */}
        <section id="cong-nghe" className="space-y-8 scroll-mt-24">
          <div className="border-b border-slate-200/80 pb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B7B8A] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Chuyên Mục 2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Đột Phá Công Nghệ Tròng Kính Rocky
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Khám phá hệ sinh thái công nghệ xử lý bề mặt, kỹ thuật mài Freeform đa điểm và vật liệu monomer thế hệ mới mang lại trải nghiệm thị giác êm dịu, bền bỉ.
            </p>
          </div>

          {/* 4 Trụ Cột Công Nghệ Mũi Nhọn */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  Phôi Monomer BlueCut UV420
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lọc ánh sáng xanh có hại ngay từ trong phôi nhựa monomer, triệt tiêu phản xạ xanh tím lòe loẹt và giữ trọn sắc màu cảnh vật tự nhiên, không bị ám vàng.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B7B8A]">
                Bảo vệ võng mạc tối đa
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  DriveShield Lọc Chói Đêm
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lớp phủ quang học hấp thụ các dải ánh sáng chói lóa từ đèn pha LED/Xenon ngược chiều, tăng tương phản trong bóng tối và cải thiện tầm nhìn khi lái xe trời mưa.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B7B8A]">
                An tâm trên mọi cung đường
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  Spin-Coat Photochromic
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Công nghệ phủ ly tâm phân tử nhạy sáng ma trận, đổi màu râm sẫm đều chuẩn CAT 3 chỉ trong 30 giây ngoài trời nắng và trả lại độ trong suốt nhanh chóng khi vào nhà.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B7B8A]">
                Tiện lợi 2 trong 1
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  04
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  Phủ Siêu Trượt Nước SHMC Nano
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Góc tiếp xúc giọt nước &gt;110&deg;, hạt nước mưa trôi tuột tức thì, chống bám tĩnh điện, hạn chế bám bụi bẩn và vân tay đến 90%, lau kính dễ dàng như lụa.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B7B8A]">
                Chống trầy xước gấp 3 lần
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHUYÊN MỤC 3: HƯỚNG DẪN & TƯ VẤN                          */}
        {/* ========================================================= */}
        <section id="huong-dan" className="space-y-8 scroll-mt-24">
          <div className="border-b border-slate-200/80 pb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B7B8A] mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Chuyên Mục 3</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Cẩm Nang Hướng Dẫn & Tư Vấn
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Các chỉ dẫn thực tế giúp bạn nhận biết thời điểm cần nâng cấp tròng kính, thích nghi êm dịu với kính đa tròng và bảo quản tròng luôn sáng bóng như mới.
            </p>
          </div>

          {/* 3 Lời khuyên Chuyên Gia */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-xs font-bold border border-teal-100">
                  Lựa Chọn Theo Nghề Nghiệp
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Đúng Tròng Cho Nhu Cầu
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dân IT / văn phòng nên ưu tiên dòng chống mỏi BlueCut UV420 Relax. Người thường xuyên di chuyển ngoài trời nên chọn Tròng Đổi Màu Trendy. Doanh nhân &amp; người trên 40 tuổi nên chọn Kính Đa Tròng Freeform HD.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Tối ưu sự thoải mái theo môi trường sinh hoạt thực tế
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-xs font-bold border border-teal-100">
                  Thói Quen Sử Dụng
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Bảo Quản Chuẩn Quang Học
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Luôn xả sạch bụi dưới vòi nước trước khi lau bằng khăn vi sợi. Tuyệt đối không để kính trong cốp xe máy, taplo xe hơi dưới trời nắng vì nhiệt độ cao có thể gây nứt lớp váng phủ nano AR.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Tăng tuổi thọ lớp phủ từ 2 lên đến 3 - 5 năm sử dụng
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-xs font-bold border border-teal-100">
                  Thời Điểm Thay Kính
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  Khi Nào Cần Thay Tròng Kính?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Nên kiểm tra định kỳ mỗi 12 tháng. Thay tròng ngay khi thấy mắt hay mỏi, nheo mắt nhìn xa, hoặc bề mặt tròng kính có nhiều vết xước dăm gây lóa mắt khó chịu khi lái xe ban đêm.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Bảo vệ sức khỏe nhãn khoa và an toàn sinh hoạt mỗi ngày
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CÁC CÂU HỎI THƯỜNG GẶP (FAQ)                           */}
        {/* ========================================================= */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#0B7B8A] bg-teal-50 px-3.5 py-1.5 rounded-full mb-2 border border-teal-100">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Hỏi Đáp Thường Gặp</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Giải Đáp Thắc Mắc Về Tròng Kính
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Những thắc mắc phổ biến nhất của người dùng khi tìm hiểu và chọn mua tròng kính chính hãng Rocky Lens.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5"
              >
                <h3 className="font-bold text-slate-900 text-sm flex items-start space-x-2">
                  <span className="text-[#0B7B8A] font-black shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. BANNER DẪN SANG CHUYÊN MỤC BLOG (ĐỒNG NHẤT TOÀN SITE) */}
        {/* ========================================================= */}
        <section className="bg-gradient-to-r from-teal-50 via-white to-slate-50 rounded-3xl p-8 sm:p-10 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[#0B7B8A] text-xs font-bold uppercase tracking-wider">
              Góc Nhìn &amp; Insight Thị Giác
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Khám Phá Toàn Bộ Bài Viết Tại Chuyên Mục Blog
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Tổng hợp đầy đủ các bài phân tích chuyên sâu về chiết suất, công nghệ phôi và câu chuyện thực tế từ người đeo kính Rocky Lens.
            </p>
          </div>
          <Link
            href="/blog/"
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <span>Đến Trang Blog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* 6. B2B DEALER BANNER */}
        <ContactCTA />

      </div>
    </div>
  );
}
