import React from 'react';

export default function FindStoreSection() {
  return (
    <section id="tim-dai-ly" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Tìm tròng kính Rocky gần bạn
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Tròng kính Rocky được phân phối và đo lắp chính hãng tại các cửa hàng mắt kính và phòng khám khúc xạ đối tác trên toàn quốc.
          </p>
        </div>

        {/* 3 Steps to Experience Rocky */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-[#0E253A]">
              Bước 1: Tìm Điểm Bán Gần Bạn
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Tra cứu cửa hàng mắt kính hoặc phòng khám đối tác Rocky gần khu vực bạn sinh sống, hoặc liên hệ trực tiếp để được chỉ dẫn địa chỉ thuận tiện nhất.
            </p>
          </div>

          <div className="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-[#0E253A]">
              Bước 2: Đo Khám Thị Lực &amp; Tư Vấn
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Kỹ thuật viên khúc xạ sẽ kiểm tra độ mắt, trao đổi về thói quen sinh hoạt và tư vấn dòng tròng kính có tính năng phù hợp nhất với nhu cầu của bạn.
            </p>
          </div>

          <div className="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-[#0E253A]">
              Bước 3: Hoàn Thiện Kính &amp; Đồng Hành
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Tròng kính được mài lắp chuẩn xác theo tâm mắt và dáng gọng bạn chọn, đi kèm hướng dẫn sử dụng và chính sách bảo hành chính hãng từ Rocky.
            </p>
          </div>

        </div>

        {/* Direct Customer Consultation Box */}
        <div className="bg-[#F5F5F7] p-8 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-2xl sm:text-3xl font-black text-[#0E253A]">
              Bạn Cần Hỗ Trợ Tìm Điểm Bán Gần Nhất?
            </div>
            <p className="text-slate-600 text-base max-w-xl">
              Đội ngũ chăm sóc khách hàng của Rocky luôn sẵn sàng hỗ trợ định vị cửa hàng ủy quyền gần bạn và giải đáp thông tin về sản phẩm.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:0933102653"
              className="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center"
            >
              Hotline: 0933 102 653
            </a>
            <a
              href="https://zalo.me/0933102653"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center shadow-xs"
            >
              Tư vấn qua Zalo
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500">
          * Rocky không bán lẻ trực tuyến trên website. Giá bán cụ thể phụ thuộc vào đơn kính khúc xạ cá nhân và dịch vụ đo lắp của từng đại lý ủy quyền.
        </div>

      </div>
    </section>
  );
}
