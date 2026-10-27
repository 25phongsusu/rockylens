import React from 'react';

export default function BrandPhilosophy() {
  return (
    <section id="triet-ly" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
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
                <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-xs font-bold shadow-xs">
                  Trải Nghiệm Thị Giác &bull; Canada Standards
                </span>
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700">
                <span>Tối ưu trường nhìn tự nhiên</span>
                <span className="text-teal-600 font-bold">Thích nghi êm dịu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight leading-[1.15]">
              Cuộc sống có biết bao điều đáng nhìn ngắm.
            </h2>

            <div className="space-y-4 text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
              <p className="text-slate-600 text-base sm:text-lg">
                Tại Rocky, chúng tôi tin rằng một cặp tròng kính không chỉ đơn thuần là sản phẩm bổ trợ thị lực, mà là người bạn đồng hành chăm sóc thị giác mỗi ngày — mang đến sự êm dịu, rõ nét tự nhiên để bạn tự do tận hưởng từng khoảnh khắc đáng giá.
              </p>
            </div>

            {/* 3 Value Cards (Chuyển từ Hero xuống) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#F5F5F7] p-5 rounded-2xl text-center sm:text-left transition-transform hover:-translate-y-1">
                <div className="text-base font-black text-[#0B7B8A]">Trong Suốt Tự Nhiên</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">Hạn chế quang sai</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Vật liệu tròng kính trong suốt, màu sắc trung thực</p>
              </div>
              <div className="bg-[#F5F5F7] p-5 rounded-2xl text-center sm:text-left transition-transform hover:-translate-y-1">
                <div className="text-base font-black text-[#0B7B8A]">Chuẩn Xác Từng Điểm</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">Thích nghi êm dịu</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Chú trọng độ chính xác trong quá trình chế tác</p>
              </div>
              <div className="bg-[#F5F5F7] p-5 rounded-2xl text-center sm:text-left transition-transform hover:-translate-y-1">
                <div className="text-base font-black text-[#0B7B8A]">Chất Lượng Kiểm Chứng</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">An tâm sử dụng</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Tiêu chuẩn ISO 13485 và bảo hành chính hãng</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#trong-kinh"
                className="inline-flex items-center gap-2 text-[#0B7B8A] hover:text-[#086370] font-bold text-base transition-colors group"
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
