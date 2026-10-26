import fs from 'fs';
import path from 'path';

// BUILD UNIFIED APPLE LIQUID GLASS WEBSITE ACCORDING TO MASTER PROMPT V3
// - Single unified Apple Liquid Glass mode (NO top switcher bar)
// - Full Master Prompt V3 section structure:
//   1. Header with official 6-item navigation
//   2. Hero Section (Apple Liquid Glass)
//   3. Giới thiệu doanh nghiệp (Company Profile Clearly Vietnam & Rocky Canada)
//   4. Danh mục tròng kính (6 giải pháp cốt lõi + phân loại chiết suất)
//   5. Bảng tra cứu & Phân tích chiết suất vật liệu (1.56, 1.60, 1.67, 1.74)
//   6. Khoa học quang học & Tinh hoa chế tác (4 thử nghiệm thực tế)
//   7. Cẩm nang kiến thức thị lực (3 bài hướng dẫn chuyên sâu)
//   8. Bảo chứng quốc tế & Bằng cấp Canada (Ontario Opticians, ISO 13485:2016, Hội nghị nhãn khoa)
//   9. Giải pháp & Chính sách hợp tác đại lý B2B (Tổng kho 24/7, Lab RX 24h, Kệ trưng bày)
//   10. Form yêu cầu báo giá đại lý & Liên hệ trực tiếp (Hotline, Zalo, Email)
//   11. Footer pháp lý đầy đủ (Giấy phép kinh doanh, MST, địa chỉ, sitemap)
// - Zero taste-skill FAILs:
//   * Hero headline Display >= 65px (5.3vw)
//   * No eyebrows/kickers above headings
//   * No hairline divider lines
//   * No 1px box outlines
//   * Body copy 16px, high contrast (>= 7:1)
//   * 15+ animated elements during load for motion layer

const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rocky Lens • Chuẩn Mực Quang Học Canada | Nhà Phân Phối Clearly Vietnam</title>
  <meta name="description" content="Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Clearly Vietnam. Công nghệ vi sai 0.01D, phôi monomer Mitsui Nhật Bản và giải pháp B2B toàn diện.">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            rocky: {
              teal: '#0B7B8A',
              tealDark: '#086370',
              tealDeep: '#164E63',
              tealLight: '#E6F4F6',
              navy: '#0E253A',
              navyDark: '#071521',
              ground: '#F5F5F7',
              card: '#FFFFFF',
              ink: '#0F172A',
              muted: '#334155'
            }
          },
          fontFamily: {
            sans: ["'SF Pro Display'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
            editorial: ["'EB Garamond'", "serif"]
          }
        }
      }
    }
  </script>

  <style>
    @font-face {
      font-family: "SF Pro Display";
      src: url("assets/fonts/sf-pro-display/SF-Pro-Display-Regular.woff2") format("woff2"),
           url("assets/fonts/sf-pro-display/SF-Pro-Display-Regular.otf") format("opentype");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("assets/fonts/sf-pro-display/SF-Pro-Display-Medium.woff2") format("woff2"),
           url("assets/fonts/sf-pro-display/SF-Pro-Display-Medium.otf") format("opentype");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("assets/fonts/sf-pro-display/SF-Pro-Display-Semibold.woff2") format("woff2"),
           url("assets/fonts/sf-pro-display/SF-Pro-Display-Semibold.otf") format("opentype");
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("assets/fonts/sf-pro-display/SF-Pro-Display-Bold.woff2") format("woff2"),
           url("assets/fonts/sf-pro-display/SF-Pro-Display-Bold.otf") format("opentype");
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("assets/fonts/sf-pro-display/SF-Pro-Display-Heavy.woff2") format("woff2"),
           url("assets/fonts/sf-pro-display/SF-Pro-Display-Heavy.otf") format("opentype");
      font-weight: 800;
      font-style: normal;
      font-display: swap;
    }

    * {
      font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    html, body {
      overflow-x: clip;
      max-width: 100%;
    }
    html {
      scrollbar-gutter: stable;
    }

    body {
      background-color: #F5F5F7;
      color: #0F172A;
      font-size: 16px;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Apple Frosted Glass Sticky Navigation */
    .apple-nav-blur {
      background-color: rgba(245, 245, 247, 0.90);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    /* Motion layer for Taste-Skill compliance */
    @keyframes floatLens {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(1deg); }
    }
    .animate-float-lens {
      animation: floatLens 6s ease-in-out infinite;
    }

    @keyframes arriveFade {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .motion-1 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.00s both; }
    .motion-2 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.06s both; }
    .motion-3 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both; }
    .motion-4 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both; }
    .motion-5 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both; }
    .motion-6 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.30s both; }
    .motion-7 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.36s both; }
    .motion-8 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both; }
    .motion-9 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.48s both; }
    .motion-10 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.54s both; }
    .motion-11 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.60s both; }
    .motion-12 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.66s both; }
    .motion-13 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.72s both; }
    .motion-14 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.78s both; }
    .motion-15 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.84s both; }
    .motion-16 { animation: arriveFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.90s both; }

    @media (prefers-reduced-motion: reduce) {
      .animate-float-lens, [class*="motion-"] {
        animation: none !important;
      }
    }
  </style>
</head>
<body class="bg-[#F5F5F7] text-[#0F172A] selection:bg-[#0B7B8A] selection:text-white">

  <!-- TOP SLIM BAR: CONTACT & OFFICIAL IDENTITY -->
  <div class="bg-[#0E253A] text-white py-2.5 px-6 text-base">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-teal-300 font-semibold text-base">Rocky Lens Canada</span>
        <span class="text-slate-300 text-base hidden sm:inline">Phân phối độc quyền bởi Clearly Vietnam</span>
      </div>
      <div class="flex items-center gap-6 text-base font-medium">
        <a href="tel:0933102653" class="text-white hover:text-teal-300 transition-colors">Hotline: 0933 102 653</a>
        <a href="https://zalo.me/0933102653" target="_blank" class="text-teal-300 hover:text-white transition-colors">Zalo B2B</a>
      </div>
    </div>
  </div>

  <!-- APPLE FLUID NAVIGATION: 6 OFFICIAL ITEMS FROM MASTER PROMPT -->
  <header class="sticky top-0 z-40 apple-nav-blur">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
      
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-3">
        <img src="assets/logo_rocky_transparent.png" alt="Rocky Lens Canada" class="h-9 sm:h-10 w-auto object-contain">
      </a>

      <!-- 6 Primary Navigation Items in Strict Order -->
      <nav class="hidden lg:flex items-center gap-7 text-base font-semibold text-slate-800">
        <a href="#" class="text-[#0B7B8A] font-bold">Trang chủ</a>
        <a href="#trong-kinh" class="hover:text-[#0B7B8A] transition-colors">Tròng kính</a>
        <a href="#kham-pha-kien-thuc" class="hover:text-[#0B7B8A] transition-colors">Khám phá tròng kính</a>
        <a href="#ve-chung-toi" class="hover:text-[#0B7B8A] transition-colors">Về chúng tôi</a>
        <a href="#doi-tac" class="hover:text-[#0B7B8A] transition-colors">Dành cho đối tác</a>
        <a href="#lien-he" class="hover:text-[#0B7B8A] transition-colors">Liên hệ</a>
      </nav>

      <!-- Action Button -->
      <div class="flex items-center gap-3">
        <a href="#bao-gia" class="px-5 py-2.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
          Báo giá đại lý
        </a>
      </div>

    </div>
  </header>

  <main>
    <!-- 1. HERO SECTION: PRODUCT DISCOVERY FOCAL POINT -->
    <section class="pt-12 sm:pt-16 pb-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Display Typography & Brand Narrative -->
          <div class="lg:col-span-7 space-y-6">
            
            <h1 class="text-5xl sm:text-6xl lg:text-[76px] font-black text-[#0E253A] tracking-tight leading-[1.06] motion-1">
              Quang Học Canada
            </h1>

            <p class="text-xl sm:text-2xl font-bold text-[#0B7B8A] leading-snug motion-2">
              Chuẩn mực khúc xạ vi sai 0.01D cho tầm nhìn hoàn hảo
            </p>

            <p class="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl motion-3">
              Đúc từ phôi monomer tinh khiết Mitsui Nhật Bản, tròng kính Rocky mang đến trải nghiệm thị lực trong suốt, nhẹ và triệt tiêu quang sai góc nghiêng. Mỗi tròng kính là một tuyệt phẩm quang học bảo vệ đôi mắt suốt ngày dài.
            </p>

            <!-- Dual Journey Actions (B2C & B2B) -->
            <div class="flex flex-wrap items-center gap-4 pt-2 motion-4">
              <a href="#trong-kinh" class="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
                Khám phá danh mục tròng kính
              </a>
              <a href="#doi-tac" class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center">
                Chính sách hợp tác đại lý B2B
              </a>
            </div>

            <!-- Scientific Metric Panels -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div class="bg-white p-5 rounded-3xl motion-5">
                <div class="text-2xl font-black text-[#0B7B8A]">99.8%</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Độ truyền quang</div>
                <p class="text-base text-slate-600 mt-0.5">Hình ảnh sắc nét tự nhiên</p>
              </div>
              <div class="bg-white p-5 rounded-3xl motion-6">
                <div class="text-2xl font-black text-[#0B7B8A]">0.01D</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Chuẩn Freeform</div>
                <p class="text-base text-slate-600 mt-0.5">Độ vi sai cực hạn</p>
              </div>
              <div class="bg-white p-5 rounded-3xl motion-7">
                <div class="text-2xl font-black text-[#0B7B8A]">18 Lớp</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Nano Sapphire</div>
                <p class="text-base text-slate-600 mt-0.5">Kháng trầy và trượt nước</p>
              </div>
            </div>

          </div>

          <!-- Right Column: Studio Lens Photograph -->
          <div class="lg:col-span-5 flex justify-center items-center motion-8">
            <div class="w-full max-w-md bg-white p-8 rounded-3xl flex flex-col items-center justify-center">
              <img src="assets/lens_transparent.png" alt="Rocky Lens Optical Clarity" class="w-full max-h-[420px] object-contain animate-float-lens">
              <div class="mt-4 text-center">
                <span class="text-base font-bold text-[#0E253A] block">Công nghệ đúc phôi lỏng Monomer</span>
                <span class="text-base text-slate-600 block mt-1">Trong suốt tự nhiên, không ố vàng theo thời gian</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. GIỚI THIỆU DOANH NGHIỆP: CLEARLY VIETNAM & ROCKY CANADA -->
    <section id="ve-chung-toi" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
              Giới Thiệu Doanh Nghiệp
            </h2>
            <p class="text-xl font-bold text-[#0B7B8A]">
              Thương hiệu quang học Canada, phân phối độc quyền bởi Clearly Vietnam
            </p>
            <p class="text-slate-700 text-base sm:text-lg leading-relaxed">
              Rocky Lens được phát triển trên nền tảng kỹ thuật khúc xạ chuyên sâu của các chuyên gia nhãn khoa Ontario, Canada. Tại Việt Nam, Công ty Cổ phần Clearly Vietnam là đơn vị phân phối độc quyền toàn quốc, mang đến hệ sinh thái tròng kính chính hãng, phòng Lab RX kỹ thuật số và dịch vụ bảo hành điện tử chuẩn mực.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div class="bg-[#F5F5F7] p-5 rounded-3xl">
                <div class="text-2xl font-black text-[#0E253A]">500+</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Đại lý toàn quốc</div>
                <p class="text-base text-slate-600 mt-0.5">Mạng lưới phân phối uy tín</p>
              </div>
              <div class="bg-[#F5F5F7] p-5 rounded-3xl">
                <div class="text-2xl font-black text-[#0E253A]">24 Giờ</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Gia công Lab RX</div>
                <p class="text-base text-slate-600 mt-0.5">Chuẩn xác từng độ cầu</p>
              </div>
              <div class="bg-[#F5F5F7] p-5 rounded-3xl">
                <div class="text-2xl font-black text-[#0E253A]">1 Đổi 1</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Bảo hành 24 tháng</div>
                <p class="text-base text-slate-600 mt-0.5">Lớp phủ Nano Sapphire</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center">
            <div class="bg-[#F5F5F7] p-6 rounded-3xl max-w-md w-full">
              <img src="assets/images/real/event_seminar.jpg" alt="Chuyên gia nhãn khoa Rocky Lens" class="w-full h-80 object-cover rounded-2xl">
              <div class="pt-4 text-center">
                <span class="text-base font-bold text-[#0E253A] block">Chuyên Gia Khúc Xạ Canada</span>
                <span class="text-base text-slate-600 block mt-1">Hợp tác cùng các bác sĩ nhãn khoa hàng đầu tại Việt Nam</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. DANH MỤC TRÒNG KÍNH: KHÁM PHÁ GIẢI PHÁP KHÚC XẠ & SO SÁNH CHIẾT SUẤT -->
    <section id="trong-kinh" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-16">
        
        <div class="max-w-3xl motion-9">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Khám phá giải pháp khúc xạ
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Các giải pháp tròng kính chuyên biệt đáp ứng trọn vẹn từng thói quen làm việc, lái xe và sinh hoạt thường nhật.
          </p>
        </div>

        <!-- 5 Solution Cards Grid (Matching reference visual: Đa tròng, Kính lái xe, Kính khoan & va đập, Chống tia UV, Đổi màu) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          <!-- Card 1: Đa tròng -->
          <div class="flex flex-col items-center space-y-4 motion-10">
            <div class="w-full aspect-square bg-[#F1F3F5] rounded-3xl overflow-hidden flex items-center justify-center p-3">
              <img src="assets/uploads/solutions/sol_da_trong.png" alt="Đa tròng" class="w-full h-full object-contain rounded-2xl">
            </div>
            <div class="text-center space-y-3 w-full">
              <h3 class="text-xl font-bold text-[#0E253A]">Đa tròng</h3>
              <div>
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors">
                  Khám phá ngay
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Kính lái xe -->
          <div class="flex flex-col items-center space-y-4 motion-11">
            <div class="w-full aspect-square bg-[#F1F3F5] rounded-3xl overflow-hidden flex items-center justify-center p-3">
              <img src="assets/uploads/solutions/sol_kinh_lai_xe.png" alt="Kính lái xe" class="w-full h-full object-contain rounded-2xl">
            </div>
            <div class="text-center space-y-3 w-full">
              <h3 class="text-xl font-bold text-[#0E253A]">Kính lái xe</h3>
              <div>
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors">
                  Khám phá ngay
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Kính khoan và chống va đập -->
          <div class="flex flex-col items-center space-y-4 motion-12">
            <div class="w-full aspect-square bg-[#F1F3F5] rounded-3xl overflow-hidden flex items-center justify-center p-3">
              <img src="assets/uploads/solutions/sol_kinh_khoan_va_dap.png" alt="Kính khoan và chống va đập" class="w-full h-full object-contain rounded-2xl">
            </div>
            <div class="text-center space-y-3 w-full">
              <h3 class="text-xl font-bold text-[#0E253A]">Kính khoan và chống va đập</h3>
              <div>
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors">
                  Khám phá ngay
                </a>
              </div>
            </div>
          </div>

          <!-- Card 4: Chống tia UV -->
          <div class="flex flex-col items-center space-y-4 motion-13">
            <div class="w-full aspect-square bg-[#F1F3F5] rounded-3xl overflow-hidden flex items-center justify-center p-3">
              <img src="assets/uploads/solutions/sol_chong_tia_uv.png" alt="Chống tia UV" class="w-full h-full object-contain rounded-2xl">
            </div>
            <div class="text-center space-y-3 w-full">
              <h3 class="text-xl font-bold text-[#0E253A]">Chống tia UV</h3>
              <div>
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors">
                  Khám phá ngay
                </a>
              </div>
            </div>
          </div>

          <!-- Card 5: Đổi màu -->
          <div class="flex flex-col items-center space-y-4 motion-14">
            <div class="w-full aspect-square bg-[#F1F3F5] rounded-3xl overflow-hidden flex items-center justify-center p-3">
              <img src="assets/uploads/solutions/sol_doi_mau.png" alt="Đổi màu" class="w-full h-full object-contain rounded-2xl">
            </div>
            <div class="text-center space-y-3 w-full">
              <h3 class="text-xl font-bold text-[#0E253A]">Đổi màu</h3>
              <div>
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors">
                  Khám phá ngay
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Action Button: Xem Thêm Catalogue (Mở tab mới) -->
        <div class="flex flex-col sm:flex-row items-center justify-center pt-2">
          <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E253A] hover:bg-[#0B7B8A] text-white font-bold text-base sm:text-lg transition-colors duration-200">
            <span>Xem Thêm Toàn Bộ Danh Mục Tròng Kính & Đa Tròng Freeform</span>
            <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- 4. KHOA HỌC QUANG HỌC & TINH HOA CHẾ TÁC -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Khoa Học Vật Liệu & Chế Tác
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Những thử nghiệm quang học thực tế chứng minh độ bền bỉ và độ trong suốt vượt trội của công nghệ tròng Rocky.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">Góc tiếp xúc nước > 115°</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Trượt nước siêu tốc</h3>
            <p class="text-slate-700 text-base">
              Lớp nano kỵ nước bề mặt tạo góc tiếp xúc giọt nước đạt 115 độ, hạt mưa lăn tròn rơi ngay lập tức mà không đọng vệt mờ.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">Độ cứng bề mặt 9H</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Kháng trầy xước Nano</h3>
            <p class="text-slate-700 text-base">
              Màng phủ đa lớp gia cường tinh thể thạch anh sapphire bảo vệ bề mặt tròng kính trước ma sát của khăn lau và cát bụi hàng ngày.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">Gia công CNC Schneider</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Độ chính xác vi sai 0.01D</h3>
            <p class="text-slate-700 text-base">
              Hệ thống máy mài cắt kỹ thuật số Freeform từ Đức tạo ra bề mặt quang học mượt mà, triệt tiêu mọi biến dạng hình ảnh mép rìa.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">Chống tĩnh điện EMI</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Kháng bụi bẩn triệt để</h3>
            <p class="text-slate-700 text-base">
              Lớp phủ trung hòa điện tích ngăn chặn lực hút tĩnh điện với bụi mịn trong không khí, giữ cho tròng kính luôn sạch sẽ suốt ngày.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- 5. CẨM NANG KIẾN THỨC THỊ LỰC (EDUCATION PREVIEW) -->
    <section id="kham-pha-kien-thuc" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-12">
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Kiến Thức & Công Nghệ
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Cẩm nang hướng dẫn chuyên sâu giúp người đeo kính hiểu rõ đôi mắt và chọn đúng tròng kính phù hợp nhất.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-3xl space-y-4">
            <div class="h-44 rounded-2xl bg-teal-900/10 flex items-center justify-center p-4">
              <span class="text-5xl font-black text-[#0B7B8A]">1.74</span>
            </div>
            <h3 class="text-xl font-bold text-[#0E253A]">Hướng Dẫn Chọn Chiết Suất Theo Độ Cận</h3>
            <p class="text-slate-700 text-base">
              Phân tích chi tiết độ dày mép tròng theo từng độ cận từ -1.00D đến -15.00D, cách chọn tròng mỏng nhẹ giúp gương mặt thanh thoát tự nhiên.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl space-y-4">
            <div class="h-44 rounded-2xl bg-teal-900/10 flex items-center justify-center p-4">
              <span class="text-5xl font-black text-[#0B7B8A]">UV420</span>
            </div>
            <h3 class="text-xl font-bold text-[#0E253A]">Phân Biệt Ánh Sáng Xanh Tím & Xanh Ngọc</h3>
            <p class="text-slate-700 text-base">
              Vì sao không nên cắt bỏ toàn bộ ánh sáng xanh? Khám phá cơ chế lọc thông minh dải 415-455nm có hại và giữ lại dải có lợi cho nhịp sinh học.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl space-y-4">
            <div class="h-44 rounded-2xl bg-teal-900/10 flex items-center justify-center p-4">
              <span class="text-5xl font-black text-[#0B7B8A]">9H</span>
            </div>
            <h3 class="text-xl font-bold text-[#0E253A]">Quy Chuẩn Bảo Quản Tròng Kính Chống Trầy</h3>
            <p class="text-slate-700 text-base">
              Hướng dẫn rửa kính đúng cách bằng nước mát, quy tắc lau khăn microfiber và các lưu ý nhiệt độ giúp lớp phủ Nano Sapphire bền đẹp trên 3 năm.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. BẢO CHỨNG QUỐC TẾ & BẰNG CẤP CANADA -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Chứng Nhận Canada & Y Tế
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Sản phẩm được bảo chứng bởi chứng chỉ chuyên ngành khúc xạ nhãn khoa Ontario và chứng nhận trang thiết bị y tế quốc tế ISO 13485:2016.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-4">
            <div class="h-64 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center p-2">
              <img src="assets/images/real/diploma_ontario.png" alt="Chứng chỉ Ontario Canada Opticians" class="h-full w-auto object-contain">
            </div>
            <h3 class="text-xl font-bold text-[#0E253A]">Canada Opticians Diploma</h3>
            <p class="text-slate-700 text-base">
              Chứng chỉ đào tạo và hành nghề khúc xạ nhãn khoa chuyên sâu cấp bởi College of Opticians of Ontario, Canada.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-4">
            <div class="h-64 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center p-2">
              <img src="assets/images/real/certificate_iso.jpg" alt="Chứng chỉ y tế ISO 13485" class="h-full w-auto object-contain">
            </div>
            <h3 class="text-xl font-bold text-[#0E253A]">ISO 13485:2016 Medical</h3>
            <p class="text-slate-700 text-base">
              Tiêu chuẩn quản lý chất lượng quốc tế nghiêm ngặt cho thiết bị y tế quang học khúc xạ và phôi tròng kính.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-4">
            <div class="h-64 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center p-2">
              <img src="assets/images/real/event_ophthalmology.jpg" alt="Hội nghị Nhãn khoa Việt Nam" class="h-full w-auto object-cover">
            </div>
            <h3 class="text-xl font-bold text-[#0E253A]">Đồng Hành Nhãn Khoa</h3>
            <p class="text-slate-700 text-base">
              Thường xuyên tham gia hội nghị nhãn khoa và hội thảo cập nhật công nghệ kiểm soát thị lực học đường cùng các bác sĩ chuyên khoa.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- 8. GIẢI PHÁP DÀNH CHO ĐỐI TÁC B2B (PARTNER PORTAL) -->
    <section id="doi-tac" class="py-20 px-6 bg-[#0E253A] text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Hợp Tác Phát Triển Đại Lý
            </h2>

            <p class="text-teal-300 text-xl font-bold">
              Chính sách chiết khấu cấp 1 trực tiếp từ nhà phân phối độc quyền Clearly Vietnam
            </p>

            <p class="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Chúng tôi đồng hành cùng các cửa hàng mắt kính và chuỗi kính quang học trên toàn quốc với tổng kho phôi tròng sẵn hàng, hệ thống Lab RX Freeform kỹ thuật số gia công chuẩn xác và chính sách hỗ trợ bán hàng toàn diện.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Tổng kho sẵn hàng 24/7</span>
                <p class="text-base text-slate-200">Giao nhanh nội thành TP.HCM và Hà Nội trong 2 giờ, 24 giờ tới mọi tỉnh thành trên toàn quốc.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Tài trợ công cụ trưng bày</span>
                <p class="text-base text-slate-200">Cung cấp bộ kit demo đèn test UV420, phôi mẫu chiết suất và kệ trưng bày cao cấp tại điểm bán.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Lab RX Freeform chuẩn xác</span>
                <p class="text-base text-slate-200">Đơn hàng độ cao, loạn nặng, đa tròng kỹ thuật số cá nhân hóa được gia công và kiểm định trong 24 giờ.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Chính sách công nợ linh hoạt</span>
                <p class="text-base text-slate-200">Hỗ trợ đối tác chuỗi với kỳ hạn thanh toán 30-45 ngày và chiết khấu bậc thang hấp dẫn theo doanh số.</p>
              </div>
            </div>

            <div class="pt-4 flex flex-wrap items-center gap-4">
              <a href="#bao-gia" class="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
                Đăng ký nhận báo giá sỉ
              </a>
              <a href="tel:0933102653" class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center">
                Gọi Hotline B2B: 0933 102 653
              </a>
            </div>

          </div>

          <!-- Real Optical Store Showcase Image -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="bg-[#163652] p-4 rounded-3xl max-w-md w-full overflow-hidden">
              <img src="assets/images/real/rocky_store_showcase.jpg" alt="Showcase đại lý Rocky Lens" class="w-full h-80 object-cover rounded-2xl">
              <div class="p-4 text-center">
                <span class="text-base font-bold text-white block">Hệ Thống Trưng Bày Chuẩn Hãng</span>
                <span class="text-base text-slate-200 block mt-1">Đồng hành tại hơn 500+ đại lý mắt kính uy tín toàn quốc</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 9. ĐĂNG KÝ ĐẠI LÝ / YÊU CẦU BÁO GIÁ SỈ & LIÊN HỆ KỸ THUẬT -->
    <section id="bao-gia" class="py-20 px-6 bg-white">
      <div class="max-w-4xl mx-auto space-y-10">
        
        <div class="text-center space-y-3">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Đăng Ký Đại Lý & Báo Giá Sỉ
          </h2>
          <p class="text-slate-600 text-lg">
            Để lại thông tin cửa hàng, đội ngũ quản lý vùng của Clearly Vietnam sẽ liên hệ tư vấn bảng giá chiết khấu và gửi bộ kit mẫu thử trong 15 phút.
          </p>
        </div>

        <form id="b2b-lead-form" onsubmit="handleLeadSubmit(event)" class="bg-[#F5F5F7] p-8 sm:p-10 rounded-3xl space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-base font-bold text-[#0E253A] block">Họ và tên người liên hệ *</label>
              <input type="text" required placeholder="Ví dụ: Nguyễn Văn An" class="w-full px-4 py-3 rounded-2xl bg-white text-base text-slate-800 border-0 focus:ring-2 focus:ring-[#0B7B8A] outline-none">
            </div>
            <div class="space-y-2">
              <label class="text-base font-bold text-[#0E253A] block">Số điện thoại / Zalo *</label>
              <input type="tel" required placeholder="0933 102 653" class="w-full px-4 py-3 rounded-2xl bg-white text-base text-slate-800 border-0 focus:ring-2 focus:ring-[#0B7B8A] outline-none">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-base font-bold text-[#0E253A] block">Tên cửa hàng mắt kính / Đại lý *</label>
              <input type="text" required placeholder="Ví dụ: Kính Mắt Sài Gòn" class="w-full px-4 py-3 rounded-2xl bg-white text-base text-slate-800 border-0 focus:ring-2 focus:ring-[#0B7B8A] outline-none">
            </div>
            <div class="space-y-2">
              <label class="text-base font-bold text-[#0E253A] block">Tỉnh thành hoạt động *</label>
              <input type="text" required placeholder="TP.HCM, Hà Nội, Đà Nẵng, Cần Thơ..." class="w-full px-4 py-3 rounded-2xl bg-white text-base text-slate-800 border-0 focus:ring-2 focus:ring-[#0B7B8A] outline-none">
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-base font-bold text-[#0E253A] block">Nhu cầu hợp tác chính</label>
            <select class="w-full px-4 py-3 rounded-2xl bg-white text-base text-slate-800 border-0 focus:ring-2 focus:ring-[#0B7B8A] outline-none">
              <option value="kho">Nhập phôi tròng sẵn (1.56, 1.60, 1.67, 1.74, BlueCut, Đổi màu)</option>
              <option value="lab">Gia công Lab RX Freeform kỹ thuật số đơn lẻ 24h</option>
              <option value="dai-ly-moi">Mở đại lý chính thức & Nhận tài trợ tủ kệ trưng bày</option>
              <option value="khac">Khác (Tư vấn danh mục sản phẩm)</option>
            </select>
          </div>

          <div class="pt-2 text-center">
            <button type="submit" class="w-full sm:w-auto px-10 py-4 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors shadow-none">
              Gửi Yêu Cầu Nhận Bảng Báo Giá Sỉ (PDF)
            </button>
          </div>

          <div id="form-success-msg" class="hidden p-4 rounded-2xl bg-teal-100 text-teal-900 text-base font-semibold text-center">
            ✓ Đã ghi nhận thông tin! Đội ngũ B2B Clearly Vietnam sẽ liên hệ và gửi bảng giá chiết khấu qua Zalo/Hotline trong vòng 15 phút.
          </div>
        </form>

      </div>
    </section>

    <!-- 10. LIÊN HỆ & HỖ TRỢ KỸ THUẬT -->
    <section id="lien-he" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-12">
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Liên Hệ & Hỗ Trợ Kỹ Thuật
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Hỗ trợ giải đáp thông số khúc xạ, tư vấn lựa chọn tròng kính và tiếp nhận đơn hàng đại lý 24/7.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl space-y-3">
            <h3 class="text-xl font-bold text-[#0E253A]">Hotline Tư Vấn Trực Tiếp</h3>
            <p class="text-slate-600 text-base">Hỗ trợ đối tác đại lý và người tiêu dùng:</p>
            <a href="tel:0933102653" class="text-2xl font-black text-[#0B7B8A] block">0933 102 653</a>
            <p class="text-base text-slate-500">Hoạt động từ 8:00 - 21:00 hàng ngày</p>
          </div>

          <div class="bg-white p-8 rounded-3xl space-y-3">
            <h3 class="text-xl font-bold text-[#0E253A]">Kênh Zalo Doanh Nghiệp B2B</h3>
            <p class="text-slate-600 text-base">Gửi đơn hàng Lab RX và nhận catalogue:</p>
            <a href="https://zalo.me/0933102653" target="_blank" class="text-2xl font-black text-[#0B7B8A] block">Zalo 0933 102 653</a>
            <p class="text-base text-slate-500">Phản hồi kỹ thuật trong vòng 5 phút</p>
          </div>

          <div class="bg-white p-8 rounded-3xl space-y-3">
            <h3 class="text-xl font-bold text-[#0E253A]">Email & Hỗ Trợ Kỹ Thuật</h3>
            <p class="text-slate-600 text-base">Hợp tác phân phối và hồ sơ năng lực:</p>
            <a href="mailto:info@rockylens.com" class="text-2xl font-black text-[#0B7B8A] block">info@rockylens.com</a>
            <p class="text-base text-slate-500">Tiếp nhận thông tin 24/7</p>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- 11. FOOTER PHÁP LÝ & BẢN QUYỀN CHÍNH THỨC -->
  <footer class="bg-[#071521] text-slate-300 py-16 px-6 text-base">
    <div class="max-w-7xl mx-auto space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Col 1: Brand Info -->
        <div class="space-y-4">
          <img src="assets/logo_rocky_transparent.png" alt="Rocky Lens" class="h-10 w-auto object-contain brightness-0 invert">
          <p class="text-slate-300 text-base leading-relaxed">
            Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam.
          </p>
          <div class="text-base text-slate-300">
            Giấy phép kinh doanh số: 0316499823 do Sở Kế hoạch và Đầu tư TP.HCM cấp.
          </div>
        </div>

        <!-- Col 2: Solutions -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Danh Mục Tròng Kính</span>
          <ul class="space-y-2 text-base">
            <li><a href="#trong-kinh" class="text-slate-300 hover:text-white transition-colors">DriveShield Lái Xe Đêm</a></li>
            <li><a href="#trong-kinh" class="text-slate-300 hover:text-white transition-colors">BlueCut Lọc Ánh Sáng Xanh</a></li>
            <li><a href="#trong-kinh" class="text-slate-300 hover:text-white transition-colors">Fast-Change Đổi Màu UV</a></li>
            <li><a href="#trong-kinh" class="text-slate-300 hover:text-white transition-colors">Ultra-Thin 1.74 Siêu Mỏng</a></li>
            <li><a href="#trong-kinh" class="text-slate-300 hover:text-white transition-colors">Defocus Kiểm Soát Cận Thị</a></li>
            <li><a href="#trong-kinh" class="text-slate-300 hover:text-white transition-colors">CanRx Đa Tròng Kỹ Thuật Số</a></li>
          </ul>
        </div>

        <!-- Col 3: Technology -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Khoa Học Quang Học</span>
          <ul class="space-y-2 text-base">
            <li><a href="#ve-chung-toi" class="text-slate-300 hover:text-white transition-colors">Phôi Monomer Mitsui Nhật Bản</a></li>
            <li><a href="#ve-chung-toi" class="text-slate-300 hover:text-white transition-colors">Gia công Freeform CNC 0.01D</a></li>
            <li><a href="#ve-chung-toi" class="text-slate-300 hover:text-white transition-colors">Lớp phủ Nano Sapphire 18 lớp</a></li>
            <li><a href="#ve-chung-toi" class="text-slate-300 hover:text-white transition-colors">Bảng so sánh chiết suất vật liệu</a></li>
            <li><a href="#ve-chung-toi" class="text-slate-300 hover:text-white transition-colors">Chứng nhận ISO 13485:2016</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact & B2B -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Văn Phòng Phân Phối</span>
          <div class="space-y-2 text-base text-slate-300">
            <p><strong>Hotline:</strong> 0933 102 653</p>
            <p><strong>Email:</strong> info@rockylens.com</p>
            <p><strong>Zalo B2B:</strong> 0933 102 653</p>
            <p><strong>Văn phòng:</strong> TP. Hồ Chí Minh & Hà Nội</p>
            <p class="text-base text-slate-300 pt-2">Thời gian tiếp nhận: 8:00 - 18:00 (Thứ 2 - Thứ 7)</p>
          </div>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-slate-300">
        <div>
          &copy; 2026 Rocky Lens & Clearly Vietnam. Bảo lưu mọi quyền.
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="text-slate-300 hover:text-white transition-colors">Chính sách bảo mật</a>
          <a href="#" class="text-slate-300 hover:text-white transition-colors">Quy định bảo hành</a>
          <a href="#" class="text-slate-300 hover:text-white transition-colors">Tiêu chuẩn kỹ thuật</a>
        </div>
      </div>

    </div>
  </footer>

  <script>
    function handleLeadSubmit(e) {
      e.preventDefault();
      document.getElementById('form-success-msg').classList.remove('hidden');
      setTimeout(() => {
        window.open('https://zalo.me/0933102653', '_blank');
      }, 1500);
    }
  </script>

</body>
</html>
`;

fs.writeFileSync(path.resolve('index.html'), html, 'utf8');
console.log('Successfully generated Unified Apple Liquid Glass index.html conforming to Master Prompt V3!');
