import fs from 'fs';
import path from 'path';

// BUILD REFINED B2C-FIRST WEBSITE ACCORDING TO MASTER PROMPT:
// ROCKY WEBSITE CONTENT REFINEMENT
// - B2C-First tone of voice: Friendly, accessible, human, benefits-oriented
// - 3-Layer Communication (Layer 1: Easy-to-understand benefit -> Layer 2: Plain explanation -> Layer 3: Tech spec)
// - NO unverified percentages or exaggerated claims (no "triệt tiêu 95%", no "hãm 60% cận thị")
// - NO public retail or wholesale pricing
// - Strict 7-Section Flow:
//   1. Brand Hero ("Rõ tầm nhìn, trọn cuộc sống.")
//   2. Brand Philosophy ("Cuộc sống có biết bao điều đáng nhìn ngắm.")
//   3. Explore Rocky Lenses ("Mỗi nhu cầu, một lựa chọn phù hợp." - 6 Customer Cards)
//   4. Technology & Quality ("Công nghệ nằm bên trong. Trải nghiệm dành cho bạn.")
//   5. Why Rocky ("Hiểu rõ lựa chọn. An tâm hơn khi mua.")
//   6. Find a Store ("Tìm tròng kính Rocky gần bạn.")
//   7. Partner With Rocky ("Cùng Rocky mở rộng cơ hội hợp tác.")
// - 0 FAIL in Taste-Skill inspect (no hairlines, no covered-text, no eyebrows, responsive viewports)

const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rocky Lens • Rõ tầm nhìn, trọn cuộc sống | Thương Hiệu Tròng Kính Canada</title>
  <meta name="description" content="Khám phá các dòng tròng kính Rocky đáp ứng nhu cầu học tập, làm việc và tận hưởng cuộc sống. Phân phối độc quyền tại Việt Nam bởi Clearly Vietnam.">
  
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
        @keyframes floatSubtle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-3px); }
    }
    .motion-float-1 { animation: floatSubtle 5.0s ease-in-out infinite; }
    .motion-float-2 { animation: floatSubtle 5.5s ease-in-out 0.2s infinite; }
    .motion-float-3 { animation: floatSubtle 6.0s ease-in-out 0.4s infinite; }
    .motion-float-4 { animation: floatSubtle 6.5s ease-in-out 0.6s infinite; }
    .motion-float-5 { animation: floatSubtle 7.0s ease-in-out 0.8s infinite; }
    .motion-float-6 { animation: floatSubtle 7.5s ease-in-out 1.0s infinite; }
    .motion-float-7 { animation: floatSubtle 8.0s ease-in-out 1.2s infinite; }
    .motion-float-8 { animation: floatSubtle 8.5s ease-in-out 1.4s infinite; }
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
      @keyframes marquee-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee-scroll 35s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  </style>
</head>
<body class="bg-[#F5F5F7] text-[#0F172A] selection:bg-[#0B7B8A] selection:text-white">

  <!-- TOP SLIM BAR: OFFICIAL IDENTITY & CONTACT -->
  <div class="bg-[#0E253A] text-white py-2.5 px-6 text-base">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-teal-300 font-semibold text-base">Rocky Lens Canada</span>
        <span class="text-slate-300 font-medium text-base hidden sm:inline">Phân phối độc quyền bởi Clearly Vietnam</span>
      </div>
      <div class="flex items-center gap-6 text-base font-medium">
        <a href="tel:0933102653" class="text-white hover:text-teal-300 transition-colors">Hotline: 0933 102 653</a>
        <a href="https://zalo.me/0933102653" target="_blank" class="text-teal-300 hover:text-white transition-colors">Zalo Hỗ Trợ</a>
      </div>
    </div>
  </div>

  <!-- APPLE FLUID NAVIGATION: 7 MAIN ANCHORS -->
  <header class="sticky top-0 z-40 apple-nav-blur">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
      
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-3">
        <img src="assets/logo_rocky_transparent.png" alt="Rocky Lens Canada" class="h-9 sm:h-10 w-auto object-contain">
      </a>

      <!-- 6 Primary Navigation Items in Strict Order -->
      <nav class="hidden lg:flex items-center gap-7 text-base font-semibold text-slate-800">
        <a href="#" class="text-[#0B7B8A] font-bold">Trang chủ</a>
        <a href="#triet-ly" class="hover:text-[#0B7B8A] transition-colors">Triết lý</a>
        <a href="#trong-kinh" class="hover:text-[#0B7B8A] transition-colors">Tròng kính</a>
        <a href="#cong-nghe" class="hover:text-[#0B7B8A] transition-colors">Công nghệ</a>
        <a href="#vi-sao-rocky" class="hover:text-[#0B7B8A] transition-colors">Vì sao chọn Rocky</a>
        <a href="#tim-dai-ly" class="hover:text-[#0B7B8A] transition-colors">Tìm đại lý</a>
        <a href="#doi-tac" class="hover:text-[#0B7B8A] transition-colors">Dành cho đối tác</a>
      </nav>

      <!-- Action Button -->
      <div class="flex items-center gap-3">
        <a href="#tim-dai-ly" class="px-5 py-2.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
          Tìm đại lý
        </a>
      </div>

    </div>
  </header>

  <main>
    <!-- ========================================================= -->
    <!-- SECTION 1 — BRAND HERO                                    -->
    <!-- Mục tiêu: Thu hút sự chú ý, giới thiệu Rocky, tạo động lực khám phá -->
    <!-- CTA chính: Khám phá tròng kính | CTA phụ: Tìm đại lý     -->
    <!-- ========================================================= -->
    <section class="pt-12 sm:pt-16 pb-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Display Typography & Brand Value -->
          <div class="lg:col-span-7 space-y-6">
            
            <h1 class="text-4xl sm:text-6xl lg:text-[72px] font-black text-[#0E253A] tracking-tight leading-[1.08] motion-1">
              Rõ tầm nhìn, <br class="hidden sm:inline" />trọn cuộc sống.
            </h1>

            <p class="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-2xl motion-2">
              Mỗi ngày có biết bao điều đáng để nhìn ngắm. Rocky mang đến những lựa chọn tròng kính đáp ứng nhu cầu học tập, làm việc và tận hưởng cuộc sống.
            </p>

            <!-- Dual CTAs: Khám phá tròng kính & Tìm đại lý -->
            <div class="flex flex-wrap items-center gap-4 pt-2 motion-3">
              <a href="#trong-kinh" class="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
                Khám phá tròng kính
              </a>
              <a href="#tim-dai-ly" class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center">
                Tìm đại lý
              </a>
            </div>

            <!-- 3 Consumer-Centric Value Cards (Layer 1 Benefits -> Layer 2 Explanation) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div class="bg-white p-5 rounded-3xl motion-4">
                <div class="text-xl font-black text-[#0B7B8A]">Trong Suốt Tự Nhiên</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Hạn chế quang sai</div>
                <p class="text-base text-slate-600 mt-0.5">Vật liệu tròng kính trong suốt, màu sắc trung thực</p>
              </div>
              <div class="bg-white p-5 rounded-3xl motion-5">
                <div class="text-xl font-black text-[#0B7B8A]">Chuẩn Xác Từng Điểm</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Thích nghi êm dịu</div>
                <p class="text-base text-slate-600 mt-0.5">Chú trọng độ chính xác trong quá trình chế tác</p>
              </div>
              <div class="bg-white p-5 rounded-3xl motion-6">
                <div class="text-xl font-black text-[#0B7B8A]">Chất Lượng Kiểm Chứng</div>
                <div class="text-base font-semibold text-slate-800 mt-1">An tâm sử dụng</div>
                <p class="text-base text-slate-600 mt-0.5">Tiêu chuẩn ISO 13485 và bảo hành chính hãng</p>
              </div>
            </div>

          </div>

          <!-- Right Column: Studio Lens Photograph -->
          <div class="lg:col-span-5 flex flex-col items-center justify-center motion-7 space-y-4">
            <div class="w-full max-w-md bg-white p-8 rounded-3xl flex flex-col items-center justify-center">
              <img src="assets/lens_transparent.png" alt="Rocky Lens Optical Clarity" class="w-full max-h-[380px] object-contain animate-float-lens">
              <div class="mt-4 text-center">
                <span class="text-base font-bold text-[#0E253A] block">Thương Hiệu Tròng Kính Rocky</span>
                <span class="text-base text-slate-600 block mt-1">Phân phối chính hãng bởi Clearly Vietnam &bull; Tiêu chuẩn ISO 13485</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 2 — BRAND PHILOSOPHY                              -->
    <!-- Mục tiêu: Giúp người dùng hiểu Rocky đại diện cho điều gì -->
    <!-- Niềm tin, bản sắc & mối liên hệ với trải nghiệm thị giác  -->
    <!-- ========================================================= -->
    <section id="triet-ly" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl motion-8">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Cuộc sống có biết bao điều đáng nhìn ngắm.
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Từ những khoảnh khắc giản dị đến những trải nghiệm đáng nhớ, tầm nhìn luôn là một phần trong cách chúng ta cảm nhận thế giới.
          </p>
        </div>

        <!-- Editorial Philosophy Lead Block -->
        <div class="bg-[#F5F5F7] p-8 sm:p-12 lg:p-14 rounded-[36px] space-y-8 motion-9">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-[#0B7B8A]">
                Trải Nghiệm Thị Giác Của Mỗi Người
              </h3>
              <p class="text-slate-700 text-base sm:text-lg leading-relaxed">
                Rocky tin rằng việc lựa chọn tròng kính không chỉ dựa trên số độ, mà còn cần cân nhắc nhu cầu và thói quen trong cuộc sống hằng ngày của bạn.
              </p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-bold text-[#0B7B8A]">
                Đồng Hành Cùng Cuộc Sống Hiện Đại
              </h3>
              <p class="text-slate-700 text-base sm:text-lg leading-relaxed">
                Đó là lý do Rocky hướng đến những giải pháp tròng kính đa dạng, giúp mỗi người dễ dàng tìm hiểu và lựa chọn sản phẩm phù hợp nhất với mình.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 3 — EXPLORE ROCKY LENSES                          -->
    <!-- Mục tiêu: Giúp người tiêu dùng khám phá theo nhu cầu      -->
    <!-- Bố cục: 6 Card lớn (3 ô / hàng), hover specs, CTA rõ ràng -->
    <!-- ========================================================= -->
    <section id="trong-kinh" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-16">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Mỗi nhu cầu, một lựa chọn phù hợp.
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Khám phá các dòng tròng kính Rocky theo nhu cầu sử dụng và những đặc điểm mà bạn quan tâm. Rê chuột vào từng sản phẩm để xem thông tin chi tiết.
          </p>
        </div>

        <!-- 6 Large Solution Cards (3 per row: 2 rows of 3) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Card 1: Khi Lái Xe & Đi Mưa -->
          <div class="group relative bg-white motion-float-1 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_kinh_lai_xe.png" alt="Tròng kính lái xe ban đêm DriveShield" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Lái Xe Ban Đêm & Mưa
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Tầm Nhìn Êm Dịu Khi Lái Xe
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Hạn chế cảm giác chói lóa từ đèn xe đối diện và tăng độ tương phản khi trời mưa hoặc đêm tối, giúp bạn tự tin hơn trên mọi cung đường.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Dịu mắt ban đêm</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Hạn chế bám nước mưa</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Hạn chế lóa đèn pha</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay (Layer 3: Professional Technical Details) -->
            <div class="absolute inset-0 bg-white/98 backdrop-blur-md text-[#0E253A] p-6 sm:p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20  shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-[13px] font-bold ">
                    Thông Tin Sản Phẩm
                  </span>
                  <span class="text-sm text-slate-500 font-semibold">Bảo Hành Chính Hãng</span>
                </div>
                <h4 class="text-2xl font-black text-[#0E253A]">DriveShield Ruby AR</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Đặc tính quang học:</span>
                    <span class="font-bold text-[#0B7B8A]">Quang phổ ấm hạn chế chói</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Lớp phủ bề mặt:</span>
                    <span class="font-bold text-[#0E253A]">Kỵ nước, trượt hạt mưa</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Khả năng chịu lực:</span>
                    <span class="font-bold text-[#0E253A]">Chống nứt vỡ và dẻo dai</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Lựa chọn độ mỏng:</span>
                    <span class="font-bold text-[#0E253A]">Chiết suất 1.60 & 1.67</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Chính sách bảo hành:</span>
                    <span class="font-bold text-[#0E253A]">24 tháng chính hãng</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết dòng tròng &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Cho Ngày Dài Làm Việc -->
          <div class="group relative bg-white motion-float-2 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_chong_tia_uv.png" alt="Tròng kính lọc ánh sáng xanh BlueCut" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Cho Ngày Dài Làm Việc
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Bảo Vệ Thị Lực Khi Làm Việc Số
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Lựa chọn phù hợp khi bạn thường xuyên làm việc với máy tính và điện thoại, giúp mắt cảm thấy dễ chịu hơn mà vẫn giữ trọn màu sắc tự nhiên.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Lọc ánh sáng xanh có hại</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Màu sắc tự nhiên</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Hạn chế trầy xước</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-white/98 backdrop-blur-md text-[#0E253A] p-6 sm:p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20  shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-[13px] font-bold ">
                    Thông Tin Sản Phẩm
                  </span>
                  <span class="text-sm text-slate-500 font-semibold">Bảo Vệ Hằng Ngày</span>
                </div>
                <h4 class="text-2xl font-black text-[#0E253A]">BlueCut UV420</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Tính năng lọc sáng:</span>
                    <span class="font-bold text-[#0B7B8A]">Lọc dải HEV 415-455nm</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Độ trong suốt:</span>
                    <span class="font-bold text-[#0E253A]">Trong suốt tự nhiên, không ám vàng</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Lớp váng bề mặt:</span>
                    <span class="font-bold text-[#0E253A]">Kháng trầy xước và bám bẩn</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Lựa chọn độ mỏng:</span>
                    <span class="font-bold text-[#0E253A]">Chiết suất 1.56, 1.60, 1.67, 1.74</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Chính sách bảo hành:</span>
                    <span class="font-bold text-[#0E253A]">24 tháng chính hãng</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết dòng tròng &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Cho Những Ngày Đầy Nắng -->
          <div class="group relative bg-white motion-float-3 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_doi_mau.png" alt="Tròng kính đổi màu ngoài trời Fast-Change" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Cho Những Ngày Đầy Nắng
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Tròng Kính Đổi Màu Tiện Lợi
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Tự động chuyển màu râm khi ra ngoài trời nắng và trở lại trong suốt khi vào nhà. Tiện lợi 2 trong 1, giúp bạn thoải mái di chuyển cả ngày.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Đổi màu râm khi ra nắng</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Trong suốt khi trong nhà</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Bảo vệ trước tia UV</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-white/98 backdrop-blur-md text-[#0E253A] p-6 sm:p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20  shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-[13px] font-bold ">
                    Thông Tin Sản Phẩm
                  </span>
                  <span class="text-sm text-slate-500 font-semibold">Năng Động Tiện Lợi</span>
                </div>
                <h4 class="text-2xl font-black text-[#0E253A]">Fast-Change Spin-Coat</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Cơ chế chuyển màu:</span>
                    <span class="font-bold text-[#0B7B8A]">Chuyển màu khi tiếp xúc tia UV</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Tùy chọn sắc thái:</span>
                    <span class="font-bold text-[#0E253A]">Xám khói và Nâu trà thanh lịch</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Khả năng ngăn tia UV:</span>
                    <span class="font-bold text-[#0E253A]">Bảo vệ mắt trước tia cực tím</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Lựa chọn độ mỏng:</span>
                    <span class="font-bold text-[#0E253A]">Chiết suất 1.56, 1.60, 1.67</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Chính sách bảo hành:</span>
                    <span class="font-bold text-[#0E253A]">24 tháng chính hãng</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết dòng tròng &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 4: Cho Chiếc Kính Gọn Nhẹ Hơn -->
          <div class="group relative bg-white motion-float-4 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_kinh_khoan_va_dap.png" alt="Tròng kính mỏng nhẹ chống va đập" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Gọn Nhẹ & Bền Bỉ
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Cho Chiếc Kính Mỏng Nhẹ Hơn
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Lựa chọn tối ưu về độ mỏng và trọng lượng nhẹ cho người có số độ cao, đồng thời có độ dẻo dai cao phù hợp với các kiểu gọng khoan ốc thanh mảnh.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Mỏng nhẹ thẩm mỹ</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Dẻo dai chịu lực</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Thích hợp gọng không viền</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-white/98 backdrop-blur-md text-[#0E253A] p-6 sm:p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20  shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-[13px] font-bold ">
                    Thông Tin Sản Phẩm
                  </span>
                  <span class="text-sm text-slate-500 font-semibold">Độ Bền Cao</span>
                </div>
                <h4 class="text-2xl font-black text-[#0E253A]">Tough Aspheric MR Series</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Đặc tính vật liệu:</span>
                    <span class="font-bold text-[#0B7B8A]">Độ dẻo dai cao, hạn chế nứt vỡ</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Thiết kế quang học:</span>
                    <span class="font-bold text-[#0E253A]">Bề mặt phi cầu Aspheric mỏng mép</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Độ sắc nét:</span>
                    <span class="font-bold text-[#0E253A]">Chỉ số Abbe cao, hạn chế quang sai</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Phù hợp gọng:</span>
                    <span class="font-bold text-[#0E253A]">Chuyên gọng khoan ốc, xẻ cước</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Chính sách bảo hành:</span>
                    <span class="font-bold text-[#0E253A]">24 tháng chính hãng</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết dòng tròng &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 5: Cho Nhu Cầu Nhìn Gần Và Xa -->
          <div class="group relative bg-white motion-float-5 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_da_trong.png" alt="Tròng kính đa tròng kỹ thuật số CanRx" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Nhìn Rõ Nhiều Khoảng Cách
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Cho Nhu Cầu Nhìn Gần Và Xa
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Hỗ trợ chuyển tiếp êm ái giữa các khoảng cách nhìn xa khi lái xe, làm việc máy tính đến đọc sách gần trên cùng một mắt kính cho người tuổi trung niên.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Nhìn rõ xa - trung - gần</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Chuyển tiếp êm ái</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Tối ưu theo thói quen</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-white/98 backdrop-blur-md text-[#0E253A] p-6 sm:p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20  shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-[13px] font-bold ">
                    Thông Tin Sản Phẩm
                  </span>
                  <span class="text-sm text-slate-500 font-semibold">Đa Khoảng Cách</span>
                </div>
                <h4 class="text-2xl font-black text-[#0E253A]">CanRx Freeform HD</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Phương pháp chế tác:</span>
                    <span class="font-bold text-[#0B7B8A]">Mài kỹ thuật số mặt sau</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Vùng nhìn chuyển tiếp:</span>
                    <span class="font-bold text-[#0E253A]">Mở rộng hành lang nhìn trung gian</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Cá nhân hóa:</span>
                    <span class="font-bold text-[#0E253A]">Tối ưu theo góc nghiêng gọng kính</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Lựa chọn độ mỏng:</span>
                    <span class="font-bold text-[#0E253A]">Chiết suất 1.56, 1.60, 1.67</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Chính sách bảo hành:</span>
                    <span class="font-bold text-[#0E253A]">24 tháng chính hãng</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết dòng tròng &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 6: Đồng Hành Cùng Thị Lực Học Đường -->
          <div class="group relative bg-white motion-float-6 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_kiem_soat_can_thi.png" alt="Tròng kính chăm sóc thị lực học đường" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Học Sinh & Trẻ Em
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Đồng Hành Cùng Thị Lực Học Đường
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Thiết kế quang học hỗ trợ chăm sóc thị lực cho học sinh trong giai đoạn học tập cường độ cao, kết hợp vật liệu an toàn hạn chế nứt vỡ khi vận động.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Thiết kế cho lứa tuổi học sinh</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Vật liệu an toàn chịu lực</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Dễ dàng vệ sinh bụi bẩn</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-white/98 backdrop-blur-md text-[#0E253A] p-6 sm:p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20  shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-50 text-[#0B7B8A] text-[13px] font-bold ">
                    Thông Tin Sản Phẩm
                  </span>
                  <span class="text-sm text-slate-500 font-semibold">Học Sinh & Trẻ Em</span>
                </div>
                <h4 class="text-2xl font-black text-[#0E253A]">Defocus MyoControl</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Thiết kế quang học:</span>
                    <span class="font-bold text-[#0B7B8A]">Vi điểm phân kỳ hỗ trợ thị lực</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Vật liệu an toàn:</span>
                    <span class="font-bold text-[#0E253A]">Hạn chế nứt vỡ khi va chạm</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Khả năng chống bám:</span>
                    <span class="font-bold text-[#0E253A]">Hạn chế bám bẩn và dễ lau sạch</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Kháng trầy xước:</span>
                    <span class="font-bold text-[#0E253A]">Lớp phủ bảo vệ bề mặt tròng kính</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F5F5F7]">
                    <span class="text-slate-600 font-medium">Chính sách bảo hành:</span>
                    <span class="font-bold text-[#0E253A]">24 tháng chính hãng</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết dòng tròng &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Action Button: Xem Thêm Toàn Bộ Catalogue -->
        <div class="flex flex-col sm:flex-row items-center justify-center pt-4">
          <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E253A] hover:bg-[#0B7B8A] text-white font-bold text-base sm:text-lg transition-colors duration-200">
            <span>Khám Phá Tất Cả Tròng Kính & Lựa Chọn Độ Mỏng</span>
            <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 4 — TECHNOLOGY & QUALITY                          -->
    <!-- Mục tiêu: Giúp khách hàng hiểu đặc tính tạo nên chất lượng -->
    <!-- Giải thích bằng ngôn ngữ phổ thông, không dùng cam kết quá đà -->
    <!-- ========================================================= -->
    <section id="cong-nghe" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Công nghệ và tiêu chuẩn chất lượng
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Đằng sau mỗi tròng kính là những lựa chọn về vật liệu, thiết kế và công nghệ chế tác. Hãy khám phá cách các yếu tố đó tạo nên những đặc tính khác nhau của tròng kính Rocky.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group motion-float-1">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/company/about-1.jpg" alt="Kho phôi và vật liệu quang học Rocky" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-[13px] font-bold">
                  Phôi Monomer Quang Học
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Lựa Chọn Vật Liệu Phù Hợp</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Vật liệu và cấu trúc phôi quyết định độ trong suốt, trọng lượng nhẹ và độ bền cơ học của tròng kính, mang lại cảm giác thoải mái khi bạn đeo kính suốt ngày dài.
              </p>
            </div>
          </div>

          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group motion-float-2">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/technologies/bui.png" alt="Công nghệ phủ chân không đa tầng chống trầy xước" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-[13px] font-bold">
                  Phủ Chân Không Nano
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Hạn Chế Bám Bẩn, Dễ Vệ Sinh</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Các lớp phủ bề mặt chuyên biệt giúp hạn chế trầy xước trong quá trình lau chùi, trượt hạt nước mưa khi đi đường và giúp bạn dễ dàng làm sạch tròng kính.
              </p>
            </div>
          </div>

          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group motion-float-3">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/technologies/do-kinh.jpg" alt="Dây chuyền mài kỹ thuật số Freeform CNC" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-[13px] font-bold">
                  Gia Công KTS Freeform
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Chú Trọng Độ Chính Xác</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Công nghệ gia công kỹ thuật số tính toán mài vi điểm theo từng số độ và thông số gọng thực tế, mở rộng vùng nhìn rõ và giúp đôi mắt thích nghi tự nhiên hơn.
              </p>
            </div>
          </div>

          <div class="bg-[#F5F5F7] p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between group motion-float-4">
            <div class="space-y-4">
              <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-200 relative">
                <img src="assets/images/company/about-3.jpg" alt="Quy trình kiểm soát chất lượng quang sai từng tròng" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E253A] text-[13px] font-bold">
                  Kiểm Định KCS Tiêu Chuẩn
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#0E253A]">Quy Chuẩn Chất Lượng Quốc Tế</h3>
              <p class="text-slate-700 text-sm leading-relaxed">
                Quy trình sản xuất tuân thủ hệ thống quản lý chất lượng thiết bị y tế quốc tế ISO 13485:2016 cùng tiêu chuẩn chuyên môn của chuyên gia khúc xạ nhãn khoa.
              </p>
            </div>
          </div>

        </div>

        <!-- CTA Link -->
        <div class="pt-4 flex justify-center sm:justify-start">
          <a href="kham-pha-trong-kinh/" class="inline-flex items-center gap-2 text-[#0B7B8A] hover:text-[#086370] font-bold text-base transition-colors">
            <span>Tìm hiểu công nghệ Rocky</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 5 — WHY ROCKY                                     -->
    <!-- Mục tiêu: Trả lời câu hỏi vì sao tôi nên cân nhắc Rocky   -->
    <!-- Sự an tâm & thông tin rõ ràng, không lặp lại công nghệ    -->
    <!-- ========================================================= -->
    <section id="vi-sao-rocky" class="py-20 px-6 bg-[#F5F5F7]">
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

            <!-- 4 Value Points in Clean Typographic Box -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs motion-float-5">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Tính năng ưu việt bảo vệ mắt toàn diện</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs motion-float-6">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Đa dạng hóa nhu cầu người tiêu dùng</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs motion-float-7">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Giải pháp thị lực ở mọi phân khúc giá</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs motion-float-8">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Sản phẩm đạt chất lượng quốc tế</span>
              </div>
            </div>

          </div>

          <!-- Right Column (7 cols): Certificates & Awards (Larger + Click to Open Lightbox) -->
          <div class="lg:col-span-7 space-y-8">
            
            <!-- Group 1: Chứng chỉ Canada -->
            <div class="space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                <div class="bg-white p-1.5 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(0)">
                  <img src="assets/images/bangkhen/11.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-1.5 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(1)">
                  <img src="assets/images/bangkhen/12.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-1.5 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(2)">
                  <img src="assets/images/bangkhen/13.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-1.5 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(3)">
                  <img src="assets/images/bangkhen/14.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-1.5 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(4)">
                  <img src="assets/images/bangkhen/15.jpg" alt="Georgian College - Optician Diploma" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-1.5 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(5)">
                  <img src="assets/images/bangkhen/16.jpg" alt="National Association of Canadian Optician Regulators" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
              </div>
              <p class="text-center text-sm font-bold text-[#0E253A]">
                Đội ngũ nhân sự tốt nghiệp và có chứng chỉ hành nghề tại Canada (Bấm vào để xem lớn)
              </p>
            </div>

            <!-- Group 2: Tiêu chuẩn quốc tế & Giải thưởng châu Á -->
            <div class="space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="bg-white p-2 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(6)">
                  <img src="assets/images/bangkhen/1.jpg" alt="Giấy chứng nhận ISO 13485:2016 Rocky Lens" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-2 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(7)">
                  <img src="assets/images/bangkhen/2.jpg" alt="Thương hiệu uy tín hội nhập Châu Á 2024" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-2 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(8)">
                  <img src="assets/images/bangkhen/3.jpg" alt="Sản phẩm dịch vụ chất lượng Châu Á 2024" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-2 rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(9)">
                  <img src="assets/images/bangkhen/4.jpg" alt="The Best of Vietnam 2024 - Top 20 Sản phẩm tốt nhất" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
              </div>
              <p class="text-center text-sm font-bold text-[#0E253A]">
                Sản phẩm đạt Tiêu chuẩn quốc tế và vinh dự đạt giải thưởng chất lượng châu Á
              </p>
            </div>

            <!-- Group 3: Hoạt động vì cộng đồng -->
            <div class="space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="bg-white p-2 rounded-2xl shadow-xs aspect-[4/3] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(10)">
                  <img src="assets/images/bangkhen/31.jpg" alt="Giấy khen Hội cứu trợ trẻ em tàn tật Việt Nam" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-2 rounded-2xl shadow-xs aspect-[4/3] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(11)">
                  <img src="assets/images/bangkhen/32.jpg" alt="Giấy khen Hội nạn nhân chất độc da cam / Dioxin" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
                <div class="bg-white p-2 rounded-2xl shadow-xs aspect-[4/3] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300" onclick="openCertModal(12)">
                  <img src="assets/images/bangkhen/33.jpg" alt="Kỷ niệm chương Tấm lòng nhân ái" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[#0E253A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#0E253A] text-[13px] font-bold">Phóng to</span>
                  </div>
                </div>
              </div>
              <p class="text-center text-sm font-bold text-[#0E253A]">
                Tích cực tham gia hoạt động vì cộng đồng
              </p>
            </div>

          </div>

        </div>

        <!-- Part B: Đối tác của chúng tôi (Larger Logos & Infinite Marquee Moving Right to Left) -->
        <div class="pt-12 space-y-6">
          <div class="text-center space-y-2">
            <h3 class="text-2xl sm:text-3xl font-black text-[#0E253A] tracking-tight">
              Đối tác của chúng tôi
            </h3>
            <p class="text-slate-600 text-sm max-w-xl mx-auto">
              Đồng hành cùng hệ thống các chuỗi mắt kính và phòng khám khúc xạ uy tín trên toàn quốc
            </p>
          </div>

          <!-- Infinite Marquee Moving from Right to Left slowly -->
          <div class="relative w-full overflow-hidden py-4">
            <!-- Left & Right Gradient Shadows -->
            <div class="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10"></div>
            <div class="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10"></div>

            <div class="animate-marquee gap-6 items-center">
              <!-- Set 1: 9 Large Partner Logos -->
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_1.png" alt="Đối tác CARAS Eyewear" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_2.png" alt="Đối tác LB Luxury Eyewear" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_3.png" alt="Đối tác ZE Eyewear" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_4.png" alt="Đối tác Mắt Kính Ngọc Sáng" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_5.png" alt="Đối tác Mắt Kính Uy Tín" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_6.png" alt="Đối tác Mắt Kính Phân Phối" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_8.png" alt="Đối tác Mắt Kính Khúc Xạ" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_9.png" alt="Đối tác Chuỗi Cửa Hàng Kính" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_10.png" alt="Đối tác Nhãn Khoa Đối Tác" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>

              <!-- Set 2: Duplicate for seamless infinite loop -->
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_1.png" alt="Đối tác CARAS Eyewear" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_2.png" alt="Đối tác LB Luxury Eyewear" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_3.png" alt="Đối tác ZE Eyewear" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_4.png" alt="Đối tác Mắt Kính Ngọc Sáng" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_5.png" alt="Đối tác Mắt Kính Uy Tín" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_6.png" alt="Đối tác Mắt Kính Phân Phối" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_8.png" alt="Đối tác Mắt Kính Khúc Xạ" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_9.png" alt="Đối tác Chuỗi Cửa Hàng Kính" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
              <div class="bg-white px-8 py-5 rounded-2xl shadow-xs flex items-center justify-center h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] group hover:shadow-md transition-all shrink-0">
                <img src="assets/uploads/partners/partner_10.png" alt="Đối tác Nhãn Khoa Đối Tác" class="max-h-14 sm:max-h-16 w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300">
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Certificate Lightbox Modal (Click to zoom with Next/Prev) -->
    <div id="certLightbox" class="fixed inset-0 z-50 bg-[#071521]/95 backdrop-blur-md hidden items-center justify-center p-4 sm:p-8" onclick="closeCertModal()">
      <button type="button" onclick="closeCertModal()" class="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-50">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <button type="button" onclick="prevCert(event)" class="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 shadow-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
      </button>

      <button type="button" onclick="nextCert(event)" class="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 shadow-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
      </button>

      <div class="max-w-4xl w-full flex flex-col items-center justify-center space-y-4 max-h-full" onclick="event.stopPropagation()">
        <div class="relative max-h-[75vh] w-auto max-w-full rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center p-2 shadow-2xl">
          <img id="certLightboxImg" src="" alt="Chứng chỉ bằng khen Rocky Lens" class="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-lg transition-transform duration-300">
        </div>
        <div class="text-center space-y-1">
          <div id="certLightboxTitle" class="text-base sm:text-lg font-bold text-white max-w-2xl px-4"></div>
          <div id="certLightboxCounter" class="text-sm font-semibold text-teal-300"></div>
        </div>
      </div>
    </div>

    <!-- ========================================================= -->
    <!-- SECTION 6 — FIND A STORE (B2C ACTION)                     -->
    <!-- Mục tiêu: Chuyển đổi B2C đến đại lý, đo khám thị lực      -->
    <!-- Hotline: 0933 102 653, Zalo tư vấn, KHÔNG công khai giá  -->
    <!-- ========================================================= -->
    <section id="tim-dai-ly" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Tìm tròng kính Rocky gần bạn.
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Khám phá các điểm bán Rocky để tìm hiểu sản phẩm và nhận tư vấn về những lựa chọn phù hợp với nhu cầu của bạn.
          </p>
        </div>

        <!-- 3 Steps to Experience Rocky -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 class="text-xl font-bold text-[#0E253A]">Bước 1: Tìm Điểm Bán Gần Bạn</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Tra cứu cửa hàng mắt kính hoặc phòng khám đối tác Rocky gần khu vực bạn sinh sống, hoặc liên hệ Hotline để được hỗ trợ định vị điểm bán thuận tiện nhất.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 class="text-xl font-bold text-[#0E253A]">Bước 2: Đo Khám & Nhận Tư Vấn</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Được đội ngũ kỹ thuật viên nhãn khoa đo khám khúc xạ kỹ lưỡng để xác định đơn kính chính xác và tư vấn dòng tròng kính tương thích với nhu cầu.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 class="text-xl font-bold text-[#0E253A]">Bước 3: Lắp Đặt & Nhận Bảo Hành</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Lựa chọn sản phẩm tròng kính Rocky phù hợp, nhận kính hoàn thiện và kích hoạt bảo hành điện tử chính hãng 1 đổi 1 trong 24 tháng.
            </p>
          </div>

        </div>

        <!-- Direct Customer Consultation Box -->
        <div class="bg-[#F5F5F7] p-8 sm:p-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-2 text-center lg:text-left">
            <div class="text-2xl sm:text-3xl font-black text-[#0E253A]">Cần Hỗ Trợ Tìm Cửa Hàng Gần Nhất?</div>
            <p class="text-slate-600 text-base max-w-xl">
              Đội ngũ chuyên viên Rocky sẵn sàng hướng dẫn bạn đến đại lý mắt kính uy tín có sẵn trang thiết bị đo khám và dòng tròng bạn quan tâm.
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a href="tel:0933102653" class="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
              Tìm đại lý Rocky
            </a>
            <a href="https://zalo.me/0933102653" target="_blank" rel="noopener noreferrer" class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center">
              Tư vấn qua Zalo
            </a>
          </div>
        </div>

        <div class="text-center text-sm text-slate-500">
          * Rocky không bán lẻ trực tuyến trên website. Giá bán cụ thể phụ thuộc vào đơn kính khúc xạ cá nhân và dịch vụ đo lắp của từng đại lý ủy quyền.
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 7 — PARTNER WITH ROCKY (B2B GATEWAY)              -->
    <!-- Mục tiêu: Mở ra cơ hội hợp tác cho cửa hàng, đại lý, lab -->
    <!-- Giọng văn chuyên nghiệp, không công khai giá sỉ/chiết khấu -->
    <!-- ========================================================= -->
    <section id="doi-tac" class="py-20 px-6 bg-[#0E253A] text-white">
      <div class="max-w-7xl mx-auto space-y-14">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Cùng Rocky mở rộng cơ hội hợp tác.
            </h2>

            <p class="text-teal-300 text-xl font-bold">
              Giải pháp quang học toàn diện dành cho cửa hàng mắt kính và đối tác phân phối
            </p>

            <p class="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Tìm hiểu danh mục tròng kính Rocky và kết nối với chúng tôi để trao đổi về cơ hội hợp tác dành cho cửa hàng kính mắt, đại lý và đối tác phân phối trên toàn quốc.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-[#0E253A] block">Lab RX Freeform Kỹ Thuật Số</span>
                <p class="text-base text-slate-200">Xử lý các đơn hàng độ khó, loạn cao và đa tròng cá nhân hóa được gia công và kiểm định chuẩn xác trong 24 giờ.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-[#0E253A] block">Tổng Kho Sẵn Sàng 24/7</span>
                <p class="text-base text-slate-200">Đầy đủ các dãy độ và chiết suất 1.56, 1.60, 1.67, 1.74, BlueCut và đổi màu, giao nhanh nội thành trong 2 giờ.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-[#0E253A] block">Chính Sách Bảo Hành Đồng Hành</span>
                <p class="text-base text-slate-200">Chính sách bảo hành điện tử chính hãng 1 đổi 1 trong 24 tháng hỗ trợ đại lý an tâm về sự hài lòng của khách hàng.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-[#0E253A] block">Tài Liệu & Công Cụ Trưng Bày</span>
                <p class="text-base text-slate-200">Cung cấp trọn bộ kit đèn test UV420, phôi mẫu so sánh chiết suất và tài liệu đào tạo khúc xạ chuyên sâu tại điểm bán.</p>
              </div>
            </div>

            <div class="pt-4 flex flex-wrap items-center gap-4">
              <a href="danh-cho-doi-tac/" class="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
                Trở thành đối tác Rocky
              </a>
              <a href="https://zalo.me/0933102653" target="_blank" rel="noopener noreferrer" class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center">
                Kết nối Zalo B2B: 0933 102 653
              </a>
            </div>

            <div class="text-sm text-slate-600 font-medium pt-1">
              * Chính sách chiết khấu và bảng báo giá sỉ đại lý được cung cấp trực tiếp qua kênh trao đổi bảo mật.
            </div>

          </div>

          <!-- Real Optical Store Showcase Image -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="bg-[#163652] p-4 rounded-3xl max-w-md w-full overflow-hidden">
              <img src="assets/images/real/rocky_store_showcase.jpg" alt="Showcase đại lý Rocky Lens" class="w-full h-80 object-cover rounded-2xl">
              <div class="p-4 text-center">
                <span class="text-base font-bold text-[#0E253A] block">Mạng Lưới Đối Tác Toàn Quốc</span>
                <span class="text-base text-slate-200 block mt-1">Đồng hành tại hơn 500+ đại lý mắt kính uy tín tại Việt Nam</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  </main>

  <!-- ========================================================= -->
  <!-- OFFICIAL FOOTER                                           -->
  <!-- ========================================================= -->
  <footer class="bg-[#071521] text-slate-600 font-medium py-16 px-6 text-base">
    <div class="max-w-7xl mx-auto space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Col 1: Brand Info -->
        <div class="space-y-4">
          <img src="assets/logo_rocky_transparent.png" alt="Rocky Lens" class="h-10 w-auto object-contain brightness-0 invert">
          <p class="text-slate-600 font-medium text-base leading-relaxed">
            Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam.
          </p>
          <div class="text-base text-slate-600 font-medium">
            Giấy phép kinh doanh số: 0316499823 do Sở Kế hoạch và Đầu tư TP.HCM cấp.
          </div>
        </div>

        <!-- Col 2: Solutions -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Danh Mục Tròng Kính</span>
          <ul class="space-y-2 text-base">
            <li><a href="trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Khi Lái Xe Ban Đêm</a></li>
            <li><a href="trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Khi Làm Việc Màn Hình Số</a></li>
            <li><a href="trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Tròng Kính Đổi Màu Ngoài Trời</a></li>
            <li><a href="trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Tròng Kính Mỏng Nhẹ Chịu Lực</a></li>
            <li><a href="trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Tròng Kính Nhìn Rõ Xa Và Gần</a></li>
            <li><a href="trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Chăm Sóc Thị Lực Trẻ Em</a></li>
          </ul>
        </div>

        <!-- Col 3: Technology & Exploration -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Công Nghệ & Khám Phá</span>
          <ul class="space-y-2 text-base">
            <li><a href="kham-pha-trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Lựa chọn vật liệu phù hợp</a></li>
            <li><a href="kham-pha-trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Gia công kỹ thuật số Freeform</a></li>
            <li><a href="kham-pha-trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Lớp phủ hạn chế bám bẩn</a></li>
            <li><a href="trong-kinh/" class="text-slate-600 font-medium hover:text-white transition-colors">Tìm hiểu các lựa chọn độ mỏng</a></li>
            <li><a href="ve-chung-toi/" class="text-slate-600 font-medium hover:text-white transition-colors">Tiêu chuẩn quản lý y tế ISO 13485</a></li>
          </ul>
        </div>

        <!-- Col 4: Distribution & Contact -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Văn Phòng Phân Phối</span>
          <div class="space-y-2 text-base text-slate-600 font-medium">
            <p><strong>Hotline:</strong> 0933 102 653</p>
            <p><strong>Email:</strong> info@rockylens.com</p>
            <p><strong>Zalo:</strong> 0933 102 653</p>
            <p><strong>Văn phòng:</strong> TP. Hồ Chí Minh & Hà Nội</p>
            <p class="text-base text-slate-600 font-medium pt-2">Thời gian tiếp nhận: 8:00 - 18:00 (Thứ 2 - Thứ 7)</p>
          </div>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-slate-600 font-medium">
        <div>
          &copy; 2026 Rocky Lens & Clearly Vietnam. Bảo lưu mọi quyền.
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="text-slate-600 font-medium hover:text-white transition-colors">Chính sách bảo mật</a>
          <a href="#" class="text-slate-600 font-medium hover:text-white transition-colors">Quy định bảo hành</a>
          <a href="#" class="text-slate-600 font-medium hover:text-white transition-colors">Tiêu chuẩn kỹ thuật</a>
        </div>
      </div>

    </div>
  </footer>

</body>
</html>
`;

fs.writeFileSync(path.resolve('index.html'), html, 'utf8');
console.log('Successfully generated Refined B2C-First Rocky Website conforming to Master Prompt!');
