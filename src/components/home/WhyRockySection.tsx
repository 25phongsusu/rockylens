import React from 'react';

const whyReasons = [
  {
    title: 'Thông Tin Rõ Ràng, Dễ Tiếp Cận',
    description: 'Chúng tôi tin rằng người đeo kính có quyền hiểu rõ chiếc tròng kính mình đang đeo có đặc tính gì và mang lại lợi ích gì cho đôi mắt, thay vì lạc vào mê hồn trận các thuật ngữ kỹ thuật phức tạp.',
    tag: 'Minh bạch & Thấu hiểu',
  },
  {
    title: 'Danh Mục Sản Phẩm Đa Dạng',
    description: 'Từ nhu cầu chống ánh sáng xanh khi làm việc, hỗ trợ lái xe ban đêm, tròng đổi màu tiện dụng đến giải pháp đa tròng cho người lớn tuổi — Rocky phát triển các dòng sản phẩm đáp ứng trọn vẹn từng lối sống.',
    tag: 'Toàn diện mọi nhu cầu',
  },
  {
    title: 'Tiêu Chuẩn Hoàn Thiện Nghiêm Ngặt',
    description: 'Mỗi cặp tròng kính Rocky đều được sản xuất và hoàn thiện theo quy trình kiểm tra chất lượng chặt chẽ từ độ đồng đều quang học, độ cứng lớp phủ đến độ bền cơ học qua thời gian dài.',
    tag: 'Độ bền & An tâm',
  },
  {
    title: 'Đồng Hành Cùng Hệ Thống Đại Lý Uy Tín',
    description: 'Tròng kính Rocky được phân phối và đo lắp tại các cửa hàng mắt kính và phòng khám khúc xạ chuyên nghiệp, nơi bạn nhận được sự tư vấn và dịch vụ đo khám chuẩn xác.',
    tag: 'Mạng lưới 500+ đại lý',
  },
];

export default function WhyRockySection() {
  return (
    <section id="vi-sao-rocky" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Hiểu rõ lựa chọn, an tâm hơn khi mua
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Chúng tôi tin rằng việc chọn một chiếc tròng kính phù hợp bắt đầu từ sự thấu hiểu nhu cầu của chính bạn và sự tin cậy vào chất lượng sản phẩm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyReasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#0E253A]">
                  {reason.title}
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
              <div className="text-sm font-semibold text-[#0B7B8A] pt-2">
                {reason.tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
