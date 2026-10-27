import fs from 'fs';

let content = fs.readFileSync('scripts/build-unified-liquid-master.js', 'utf-8');

// 1. Update Section 3 Hover Overlays to White Background
// Replace dark overlay container with white overlay container
const darkOverlayRegex = /<div class="absolute inset-0 bg-\[#0E253A\] text-white p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">/g;

const whiteOverlayContainer = `<div class="absolute inset-0 bg-white/98 backdrop-blur-md text-[#0E253A] p-6 sm:p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20 border border-slate-200/90 shadow-2xl">`;

content = content.replace(darkOverlayRegex, whiteOverlayContainer);

// Replace the pill badge style inside hover overlays
content = content.replaceAll(
  'px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold',
  'px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-xs font-bold border border-teal-200/60'
);

content = content.replaceAll(
  'text-sm text-slate-300 font-medium',
  'text-xs text-slate-500 font-semibold'
);

content = content.replaceAll(
  '<h4 class="text-2xl font-bold text-white">',
  '<h4 class="text-2xl font-black text-[#0E253A]">'
);

// Replace row containers inside hover overlays
content = content.replaceAll(
  'py-2 px-3 rounded-xl bg-slate-800/60',
  'py-2 px-3 rounded-xl bg-[#F5F5F7]'
);

content = content.replaceAll(
  'text-slate-300',
  'text-slate-600 font-medium'
);

content = content.replaceAll(
  'font-bold text-white',
  'font-bold text-[#0E253A]'
);

content = content.replaceAll(
  'font-bold text-teal-300',
  'font-bold text-[#0B7B8A]'
);

// 2. Update Section 4: Technology & Quality - Add Real Photography
const oldSection4Pillars = `        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <h3 class="text-xl font-bold text-[#0E253A]">Lựa Chọn Vật Liệu Phù Hợp</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Vật liệu và cấu trúc phôi quyết định độ trong suốt, trọng lượng nhẹ và độ bền cơ học của tròng kính, mang lại cảm giác thoải mái khi bạn đeo kính suốt ngày dài.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <h3 class="text-xl font-bold text-[#0E253A]">Hạn Chế Bám Bẩn, Dễ Vệ Sinh</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Các lớp phủ bề mặt chuyên biệt giúp hạn chế trầy xước trong quá trình lau chùi, trượt hạt nước mưa khi đi đường và giúp bạn dễ dàng làm sạch tròng kính.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <h3 class="text-xl font-bold text-[#0E253A]">Chú Trọng Độ Chính Xác</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Công nghệ gia công kỹ thuật số tính toán mài vi điểm theo từng số độ và thông số gọng thực tế, mở rộng vùng nhìn rõ và giúp đôi mắt thích nghi tự nhiên hơn.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <h3 class="text-xl font-bold text-[#0E253A]">Quy Chuẩn Chất Lượng Quốc Tế</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Quy trình sản xuất tuân thủ hệ thống quản lý chất lượng thiết bị y tế quốc tế ISO 13485:2016 cùng tiêu chuẩn chuyên môn của chuyên gia khúc xạ nhãn khoa.
            </p>
          </div>

        </div>`;

const newSection4Pillars = `        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/company/about-1.jpg" alt="Kho phôi và vật liệu quang học Rocky" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-xs font-bold">
                  Phôi Monomer Quang Học
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Lựa Chọn Vật Liệu Phù Hợp</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Vật liệu và cấu trúc phôi quyết định độ trong suốt, trọng lượng nhẹ và độ bền cơ học của tròng kính, mang lại cảm giác thoải mái khi bạn đeo kính suốt ngày dài.
              </p>
            </div>
          </div>

          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/company/about-6.jpg" alt="Công nghệ phủ chân không đa tầng chống trầy xước" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-xs font-bold">
                  Phủ Chân Không Nano
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Hạn Chế Bám Bẩn, Dễ Vệ Sinh</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Các lớp phủ bề mặt chuyên biệt giúp hạn chế trầy xước trong quá trình lau chùi, trượt hạt nước mưa khi đi đường và giúp bạn dễ dàng làm sạch tròng kính.
              </p>
            </div>
          </div>

          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/company/about-2.jpg" alt="Dây chuyền mài kỹ thuật số Freeform CNC" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-xs font-bold">
                  Gia Công KTS Freeform
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Chú Trọng Độ Chính Xác</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Công nghệ gia công kỹ thuật số tính toán mài vi điểm theo từng số độ và thông số gọng thực tế, mở rộng vùng nhìn rõ và giúp đôi mắt thích nghi tự nhiên hơn.
              </p>
            </div>
          </div>

          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/company/about-3.jpg" alt="Quy trình kiểm soát chất lượng quang sai từng tròng" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-xs font-bold">
                  Kiểm Định KCS Tiêu Chuẩn
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Quy Chuẩn Chất Lượng Quốc Tế</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Quy trình sản xuất tuân thủ hệ thống quản lý chất lượng thiết bị y tế quốc tế ISO 13485:2016 cùng tiêu chuẩn chuyên môn của chuyên gia khúc xạ nhãn khoa.
              </p>
            </div>
          </div>

        </div>`;

content = content.replace(oldSection4Pillars, newSection4Pillars);

// 3. Update Section 5: Brand Evidence, Canada Opticians, Certificates & Partners
const oldSection5 = `    <section id="vi-sao-rocky" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Hiểu rõ lựa chọn. An tâm hơn khi mua.
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Rocky mong muốn giúp bạn tìm hiểu các lựa chọn tròng kính qua thông tin sản phẩm rõ ràng, những giải pháp phù hợp với nhu cầu và kênh tư vấn khi cần.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-13">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Dễ Dàng Tìm Hiểu</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Thông tin sản phẩm được trình bày rõ ràng, giúp bạn dễ dàng nhận biết sự khác biệt giữa các dòng tròng kính để có lựa chọn phù hợp.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">Rõ ràng &bull; Minh bạch</div>
          </div>

          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-14">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Lựa Chọn Theo Nhu Cầu</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Khám phá các dòng tròng kính dựa trên thói quen làm việc và sinh hoạt thực tế của bạn, từ văn phòng đến những hoạt động ngoài trời.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">Đúng nhu cầu &bull; Tiện lợi</div>
          </div>

          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-15">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Minh Bạch Về Sản Phẩm</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Rõ ràng về nguồn gốc vật liệu, đặc tính lớp phủ và chính sách bảo hành chính hãng từ nhà phân phối Clearly Vietnam.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">An tâm &bull; Bền bỉ</div>
          </div>

          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-16">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Kết Nối Điểm Bán Uy Tín</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Được hỗ trợ kết nối với mạng lưới hơn 500+ cửa hàng mắt kính và phòng khám khúc xạ đối tác trên toàn quốc để đo khám và tư vấn trực tiếp.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">Đo khám chuyên sâu</div>
          </div>

        </div>

      </div>
    </section>`;

const newSection5 = `    <section id="vi-sao-rocky" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-16">
        
        <!-- Part A: Rocky Canada Opticians & Bằng chứng chất lượng -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column (5 cols): Brand Narrative & 4 Value Icons -->
          <div class="lg:col-span-5 space-y-6">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
              Rocky Canada Opticians
            </h2>
            <div class="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Được phát triển bởi đội ngũ chuyên gia khúc xạ tại Canada, Rocky mang tinh hoa quang học Canada về phục vụ cộng đồng Việt Nam. Chúng tôi kết hợp nền tảng chuyên môn vững chắc với khát vọng nâng cao sức khỏe thị lực, mang đến những giải pháp tròng kính đạt chuẩn quốc tế, phù hợp với nhu cầu và điều kiện sống của người Việt.
              </p>
              <p>
                Hiện Rocky đã có mặt tại 34 tỉnh thành với hệ thống phân phối rộng khắp, cam kết mang lại trải nghiệm dịch vụ nhanh chóng, chính xác và tận tâm.
              </p>
            </div>

            <!-- 4 Icons / Value Points in 2x2 Grid -->
            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Tính năng ưu việt bảo vệ mắt toàn diện
                </div>
              </div>

              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Đa dạng hóa nhu cầu người tiêu dùng
                </div>
              </div>

              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Giải pháp thị lực ở mọi phân khúc giá
                </div>
              </div>

              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Sản phẩm đạt chất lượng quốc tế
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column (7 cols): Certificates & Awards -->
          <div class="lg:col-span-7 space-y-8">
            
            <!-- Group 1: Chứng chỉ Canada -->
            <div class="space-y-3">
              <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
                <div class="bg-white p-1 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/11.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/12.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/13.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/14.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/15.jpg" alt="Georgian College - Optician Diploma" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/16.jpg" alt="National Association of Canadian Optician Regulators" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
              </div>
              <p class="text-center text-xs sm:text-sm font-bold text-[#0E253A]">
                Đội ngũ nhân sự tốt nghiệp và có chứng chỉ hành nghề tại Canada
              </p>
            </div>

            <!-- Group 2: Tiêu chuẩn quốc tế & Giải thưởng châu Á -->
            <div class="space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div class="bg-white p-1.5 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/1.jpg" alt="Giấy chứng nhận ISO 13485:2016 Rocky Lens" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1.5 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/2.jpg" alt="Thương hiệu uy tín hội nhập Châu Á 2024" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1.5 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/3.jpg" alt="Sản phẩm dịch vụ chất lượng Châu Á 2024" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1.5 rounded-xl shadow-xs border border-slate-200/80 aspect-[3/4] overflow-hidden group">
                  <img src="assets/images/bangkhen/4.jpg" alt="The Best of Vietnam 2024 - Top 20 Sản phẩm tốt nhất" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
              </div>
              <p class="text-center text-xs sm:text-sm font-bold text-[#0E253A]">
                Sản phẩm đạt Tiêu chuẩn quốc tế và vinh dự đạt giải thưởng chất lượng châu Á
              </p>
            </div>

            <!-- Group 3: Hoạt động vì cộng đồng -->
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-3">
                <div class="bg-white p-1.5 rounded-xl shadow-xs border border-slate-200/80 aspect-[4/3] overflow-hidden group">
                  <img src="assets/images/bangkhen/31.jpg" alt="Giấy khen Hội cứu trợ trẻ em tàn tật Việt Nam" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1.5 rounded-xl shadow-xs border border-slate-200/80 aspect-[4/3] overflow-hidden group">
                  <img src="assets/images/bangkhen/32.jpg" alt="Giấy khen Hội nạn nhân chất độc da cam / Dioxin" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="bg-white p-1.5 rounded-xl shadow-xs border border-slate-200/80 aspect-[4/3] overflow-hidden group">
                  <img src="assets/images/bangkhen/33.jpg" alt="Kỷ niệm chương Tấm lòng nhân ái" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
                </div>
              </div>
              <p class="text-center text-xs sm:text-sm font-bold text-[#0E253A]">
                Tích cực tham gia hoạt động vì cộng đồng
              </p>
            </div>

          </div>

        </div>

        <!-- Part B: Đối tác của chúng tôi (Image 2) -->
        <div class="pt-8 border-t border-slate-200/80 space-y-6">
          <div class="text-center space-y-2">
            <h3 class="text-2xl sm:text-3xl font-black text-[#0E253A] tracking-tight">
              Đối tác của chúng tôi
            </h3>
            <p class="text-slate-600 text-sm max-w-xl mx-auto">
              Đồng hành cùng hệ thống các chuỗi mắt kính và phòng khám khúc xạ uy tín trên toàn quốc
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 items-center">
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_1.png" alt="Đối tác CARAS Eyewear" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_2.png" alt="Đối tác LB Luxury Eyewear" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_3.png" alt="Đối tác ZE Eyewear" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_4.png" alt="Đối tác Mắt Kính Ngọc Sáng" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_5.png" alt="Đối tác Mắt Kính Uy Tín" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_6.png" alt="Đối tác Mắt Kính Phân Phối" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_8.png" alt="Đối tác Mắt Kính Khúc Xạ" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_9.png" alt="Đối tác Chuỗi Cửa Hàng Kính" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-20 group hover:shadow-md transition-all">
              <img src="assets/uploads/partners/partner_10.png" alt="Đối tác Nhãn Khoa Đối Tác" class="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
            </div>
          </div>
        </div>

      </div>
    </section>`;

content = content.replace(oldSection5, newSection5);

fs.writeFileSync('scripts/build-unified-liquid-master.js', content, 'utf-8');
console.log('Successfully patched scripts/build-unified-liquid-master.js!');
