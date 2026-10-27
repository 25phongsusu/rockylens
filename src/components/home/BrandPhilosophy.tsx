import React from 'react';

export default function BrandPhilosophy() {
  return (
    <section id="triet-ly" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-14">
        
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Triết Lý Khúc Xạ
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Tại Rocky, chúng tôi tin rằng một cặp tròng kính tốt không đơn thuần là nhìn rõ con số trên bảng đo thị lực — mà là cảm giác đôi mắt hoàn toàn được thả lỏng, tự nhiên và trọn vẹn trong mọi khoảnh khắc cuộc sống.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#F5F5F7] p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0E253A]">
                Tôn Trọng Quang Học Tự Nhiên
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Không ép mắt phải gồng mình điều tiết với các độ phóng đại nhân tạo. Thiết kế phi cầu Aspheric của Rocky triệt tiêu quang sai mép rìa, mang lại hình ảnh trung thực và cảm giác nhìn nhẹ nhõm như mắt trần.
              </p>
            </div>
            <div className="text-sm font-semibold text-[#0B7B8A]">
              Êm dịu &bull; Không mỏi điều tiết
            </div>
          </div>

          <div className="bg-[#F5F5F7] p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0E253A]">
                Đồng Hành Mọi Lát Cắt Sống
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Mỗi khoảnh khắc trong ngày đều đặt ra những thách thức thị giác khác nhau: từ ánh đèn pha LED chói lóa khi lái xe ban đêm, ánh sáng xanh màn hình máy tính 8 tiếng, đến nụ cười con trẻ khi đọc sách.
              </p>
            </div>
            <div className="text-sm font-semibold text-[#0B7B8A]">
              Linh hoạt &bull; Bảo vệ chủ động
            </div>
          </div>

          <div className="bg-[#F5F5F7] p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0E253A]">
                Chuẩn Mực & Bền Vững Canada
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Kế thừa di sản khúc xạ nhãn khoa từ Ontario (Canada) kết hợp cùng phôi monomer Mitsui Nhật Bản. Chúng tôi chú trọng độ bền vật lý lâu dài và sự an toàn thị lực bền vững cho người sử dụng.
              </p>
            </div>
            <div className="text-sm font-semibold text-[#0B7B8A]">
              Chính xác &bull; Bền bỉ theo năm tháng
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
