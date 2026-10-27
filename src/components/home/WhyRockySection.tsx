import React from 'react';

export default function WhyRockySection() {
  return (
    <section id="vi-sao-rocky" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Vì Sao Bạn Nên Chọn Rocky?
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Bốn giá trị khác biệt cốt lõi tạo nên sự tin cậy lâu dài cho đôi mắt và sự an tâm tuyệt đối của người đeo kính.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0E253A]">Thị Lực Êm Ái, Thích Nghi Nhanh</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Thiết kế quang học phi cầu Aspheric chuẩn xác loại bỏ biến dạng mép rìa, giúp mắt dễ dàng thích nghi ngay từ ngày đầu tiên đeo kính mới.
              </p>
            </div>
            <div className="text-sm font-semibold text-teal-700">Dễ chịu suốt 12h đeo</div>
          </div>

          <div className="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0E253A]">Vật Liệu Thật, Nguồn Gốc Rõ Ràng</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Minh bạch nguồn gốc phôi đúc Mitsui Nhật Bản và lớp phủ Nano Sapphire chống trầy, bảo toàn độ trong suốt qua nhiều năm sử dụng.
              </p>
            </div>
            <div className="text-sm font-semibold text-teal-700">Minh bạch &bull; Bền bỉ</div>
          </div>

          <div className="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0E253A]">Bảo Vệ Đôi Mắt Toàn Diện</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Ngăn chặn 100% tia cực tím UV400 và lọc chọn lọc ánh sáng xanh tím có hại từ màn hình số, bảo vệ điểm vàng và giác mạc tối ưu.
              </p>
            </div>
            <div className="text-sm font-semibold text-teal-700">UV400 &bull; BlueCut UV420</div>
          </div>

          <div className="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0E253A]">Bảo Hành 1 Đổi 1 Trong 24 Tháng</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Cam kết bảo hành điện tử chính hãng minh bạch, hỗ trợ đổi mới lớp váng phủ nếu phát sinh lỗi kỹ thuật tại 500+ đại lý ủy quyền.
              </p>
            </div>
            <div className="text-sm font-semibold text-teal-700">Bảo hành 24 tháng</div>
          </div>

        </div>

      </div>
    </section>
  );
}
