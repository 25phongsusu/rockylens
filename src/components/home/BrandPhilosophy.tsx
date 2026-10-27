import React from 'react';

export default function BrandPhilosophy() {
  return (
    <section id="triet-ly" className="relative py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling Art */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-sm bg-slate-100 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full relative">
                <img
                  src="/images/company/about-6.jpg"
                  alt="Trải nghiệm thị giác tròng kính Rocky"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-heading text-xs font-bold shadow-xs">
                  Trải Nghiệm Thị Giác &bull; Canada Standards
                </span>
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700">
                <span>Tối ưu trường nhìn tự nhiên</span>
                <span className="text-primary font-bold">Thích nghi êm dịu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.18]">
              Chúng tôi không chỉ bảo vệ đôi mắt, chúng tôi nâng niu cách bạn nhìn thế giới.
            </h2>

            <div className="space-y-4 text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
              <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
                Một cặp tròng kính hoàn hảo không chỉ để nhìn rõ những con số trên màn hình. Đó là để bạn trọn vẹn chiêm ngưỡng màu hoàng hôn rực rỡ, bắt trọn nụ cười của người thân yêu, hay vững tin chinh phục những chặng đường dài phía trước. Tại Rocky Lens, chúng tôi chế tác từng lăng kính bằng sự thấu hiểu đó — mang lại độ trong trẻo, êm ái tuyệt đối, để bạn tự do tận hưởng cuộc sống theo cách nguyên bản nhất.
              </p>
            </div>

            {/* 3 Value Cards (Customer-Centric) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="card-surface p-5 rounded-2xl text-center sm:text-left transition-transform hover:-translate-y-1">
                <div className="text-base font-black text-primary">Trải Nghiệm Chân Thật</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">Xóa bỏ mọi góc mờ nhòe</div>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">Trả lại tầm nhìn sắc nét với màu sắc chân thực sống động.</p>
              </div>
              <div className="card-surface p-5 rounded-2xl text-center sm:text-left transition-transform hover:-translate-y-1">
                <div className="text-base font-black text-primary">Cá Nhân Hóa Tối Đa</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">Thích nghi êm dịu ngay từ lần đầu</div>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">Cho từng tình trạng thị lực, mang lại cảm giác thích nghi êm dịu ngay từ lần đeo đầu tiên.</p>
              </div>
              <div className="card-surface p-5 rounded-2xl text-center sm:text-left transition-transform hover:-translate-y-1">
                <div className="text-base font-black text-primary">Bảo Chứng An Tâm</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">Đồng hành bền bỉ</div>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">An toàn với tiêu chuẩn y tế ISO 13485 và chính sách bảo hành chính hãng toàn diện.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#trong-kinh"
                className="inline-flex items-center gap-2 text-primary hover:text-[var(--color-primary-hover)] font-bold text-base transition-colors group"
              >
                <span>Khám phá các giải pháp tròng kính theo nhu cầu</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
