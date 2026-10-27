import React from 'react';
import Image from 'next/image';

const canadaCerts = [
  { src: '/images/bangkhen/11.jpg', alt: 'The College of Opticians of Ontario - Optician Certificate' },
  { src: '/images/bangkhen/12.jpg', alt: 'The College of Opticians of Ontario - Optician Certificate' },
  { src: '/images/bangkhen/13.jpg', alt: 'The College of Opticians of Ontario - Optician Certificate' },
  { src: '/images/bangkhen/14.jpg', alt: 'The College of Opticians of Ontario - Optician Certificate' },
  { src: '/images/bangkhen/15.jpg', alt: 'Georgian College - Optician Diploma' },
  { src: '/images/bangkhen/16.jpg', alt: 'National Association of Canadian Optician Regulators' },
];

const qualityCerts = [
  { src: '/images/bangkhen/1.jpg', alt: 'Giấy chứng nhận ISO 13485:2016 Rocky Lens' },
  { src: '/images/bangkhen/2.jpg', alt: 'Thương hiệu uy tín hội nhập Châu Á 2024' },
  { src: '/images/bangkhen/3.jpg', alt: 'Sản phẩm dịch vụ chất lượng Châu Á 2024' },
  { src: '/images/bangkhen/4.jpg', alt: 'The Best of Vietnam 2024 - Top 20 Sản phẩm tốt nhất' },
];

const communityCerts = [
  { src: '/images/bangkhen/31.jpg', alt: 'Giấy khen Hội cứu trợ trẻ em tàn tật Việt Nam' },
  { src: '/images/bangkhen/32.jpg', alt: 'Giấy khen Hội nạn nhân chất độc da cam / Dioxin' },
  { src: '/images/bangkhen/33.jpg', alt: 'Kỷ niệm chương Tấm lòng nhân ái' },
];

const partnerLogos = [
  { src: '/uploads/partners/partner_1.png', alt: 'Đối tác CARAS Eyewear' },
  { src: '/uploads/partners/partner_2.png', alt: 'Đối tác LB Luxury Eyewear' },
  { src: '/uploads/partners/partner_3.png', alt: 'Đối tác ZE Eyewear' },
  { src: '/uploads/partners/partner_4.png', alt: 'Đối tác Mắt Kính Ngọc Sáng' },
  { src: '/uploads/partners/partner_5.png', alt: 'Đối tác Mắt Kính Uy Tín' },
  { src: '/uploads/partners/partner_6.png', alt: 'Đối tác Mắt Kính Phân Phối' },
  { src: '/uploads/partners/partner_8.png', alt: 'Đối tác Mắt Kính Khúc Xạ' },
  { src: '/uploads/partners/partner_9.png', alt: 'Đối tác Chuỗi Cửa Hàng Kính' },
  { src: '/uploads/partners/partner_10.png', alt: 'Đối tác Nhãn Khoa Đối Tác' },
];

const brandValues = [
  'Tính năng ưu việt bảo vệ mắt toàn diện',
  'Đa dạng hóa nhu cầu người tiêu dùng',
  'Giải pháp thị lực ở mọi phân khúc giá',
  'Sản phẩm đạt chất lượng quốc tế',
];

export default function WhyRockySection() {
  return (
    <section id="vi-sao-rocky" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Part A: Rocky Canada Opticians & Bằng chứng thương hiệu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
              Rocky Canada Opticians
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Được phát triển bởi đội ngũ chuyên gia khúc xạ tại Canada, Rocky mang tinh hoa quang học Canada về phục vụ cộng đồng Việt Nam. Chúng tôi kết hợp nền tảng chuyên môn vững chắc với khát vọng nâng cao sức khỏe thị lực, mang đến những giải pháp tròng kính đạt chuẩn quốc tế, phù hợp với nhu cầu và điều kiện sống của người Việt.
              </p>
              <p>
                Hiện Rocky đã có mặt tại 34 tỉnh thành với hệ thống phân phối rộng khắp, cam kết mang lại trải nghiệm dịch vụ nhanh chóng, chính xác và tận tâm.
              </p>
            </div>

            {/* 4 Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {brandValues.map((val, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0" />
                  <span className="text-sm font-bold text-[#0E253A]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certificates & Awards */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Group 1: Canada Optician Certificates */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
                {canadaCerts.map((cert, idx) => (
                  <div key={idx} className="bg-white p-1 rounded-xl shadow-xs aspect-[3/4] overflow-hidden group relative">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>
              <p className="text-center text-xs sm:text-sm font-bold text-[#0E253A]">
                Đội ngũ nhân sự tốt nghiệp và có chứng chỉ hành nghề tại Canada
              </p>
            </div>

            {/* Group 2: International & Asia Awards */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {qualityCerts.map((cert, idx) => (
                  <div key={idx} className="bg-white p-1.5 rounded-xl shadow-xs aspect-[3/4] overflow-hidden group relative">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
              <p className="text-center text-xs sm:text-sm font-bold text-[#0E253A]">
                Sản phẩm đạt Tiêu chuẩn quốc tế và vinh dự đạt giải thưởng chất lượng châu Á
              </p>
            </div>

            {/* Group 3: Community Activities */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                {communityCerts.map((cert, idx) => (
                  <div key={idx} className="bg-white p-1.5 rounded-xl shadow-xs aspect-[4/3] overflow-hidden group relative">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, 33vw"
                    />
                  </div>
                ))}
              </div>
              <p className="text-center text-xs sm:text-sm font-bold text-[#0E253A]">
                Tích cực tham gia hoạt động vì cộng đồng
              </p>
            </div>

          </div>

        </div>

        {/* Part B: Đối tác của chúng tôi */}
        <div className="pt-12 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0E253A] tracking-tight">
              Đối tác của chúng tôi
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Đồng hành cùng hệ thống các chuỗi mắt kính và phòng khám khúc xạ uy tín trên toàn quốc
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 items-center">
            {partnerLogos.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-2xl shadow-xs flex items-center justify-center h-20 group hover:shadow-md transition-all relative"
              >
                <div className="relative w-full h-12">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 11vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
