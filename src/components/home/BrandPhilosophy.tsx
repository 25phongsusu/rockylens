import React from 'react';

export default function BrandPhilosophy() {
  return (
    <section id="triet-ly" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Triết Lý Thương Hiệu
          </h2>
        </div>

        {/* Editorial Philosophy Lead Block */}
        <div className="bg-[#F5F5F7] p-8 sm:p-12 lg:p-14 rounded-[36px] space-y-8">
          
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E253A] leading-snug tracking-tight">
            “Cuộc sống có biết bao điều đáng nhìn ngắm. Từ những điều giản dị mỗi ngày đến những trải nghiệm đáng nhớ, tầm nhìn luôn là một phần quan trọng trong cách chúng ta cảm nhận thế giới.”
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#0B7B8A]">
                Trải Nghiệm Thị Giác Mỗi Người
              </h3>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Tại Rocky, chúng tôi tin rằng một giải pháp tròng kính không chỉ là một sản phẩm, mà còn là một phần trong trải nghiệm thị giác của mỗi người.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#0B7B8A]">
                Đồng Hành Cuộc Sống Hiện Đại
              </h3>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Đó là lý do chúng tôi hướng đến việc phát triển những giải pháp tròng kính đáp ứng các nhu cầu khác nhau trong cuộc sống hiện đại — để mỗi người có thể tìm thấy lựa chọn phù hợp với mình.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
