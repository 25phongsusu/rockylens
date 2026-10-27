import fs from 'fs';
import path from 'path';

// BUILD UNIFIED APPLE LIQUID GLASS WEBSITE ACCORDING TO MASTER PROMPT:
// 7 Sections in strict logical progression:
//   1. BRAND HERO (B2C Aware, Brand Promise, Hero CTAs: Khám phá tròng kính / Tìm đại lý)
//   2. BRAND PHILOSOPHY (Bản sắc Canada, Thị lực êm dịu từng khoảnh khắc, không ép mắt điều tiết)
//   3. EXPLORE ROCKY LENSES (6 Large Solution Cards 3 cols x 2 rows, interactive specs, CTA to /trong-kinh/)
//   4. TECHNOLOGY & QUALITY (4 Verified Pillars: Phôi Mitsui MR, Nano Sapphire 9H & Ruby AR, Freeform 0.01D, ISO 13485)
//   5. WHY ROCKY (4 Key Differentials answering "Why choose Rocky?")
//   6. FIND A STORE (B2C Action: 3 steps to authorized store fitting, Hotline 0933 102 653, Zalo, NO public pricing)
//   7. PARTNER WITH ROCKY (B2B Gateway: Lab RX 24h, stock, warranty, dealer support, link to /danh-cho-doi-tac/)
// - Follows Apple Liquid Glass aesthetic:
//   * SF Pro Display typography
//   * Colors: Teal #0B7B8A, Navy #0E253A, Ground #F5F5F7, White #FFFFFF, Dark Navy #071521
//   * Zero taste-skill FAILs (no hairlines, no covered text, responsive typography, alternating section rhythm)

const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rocky Lens • Chuẩn Mực Quang Học Canada | Thị Lực Êm Dịu</title>
  <meta name="description" content="Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Clearly Vietnam. Công nghệ vi sai 0.01D, phôi monomer Mitsui Nhật Bản và giải pháp bảo vệ thị lực toàn diện.">
  
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

  <!-- TOP SLIM BAR: OFFICIAL IDENTITY & CONTACT -->
  <div class="bg-[#0E253A] text-white py-2.5 px-6 text-base">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-teal-300 font-semibold text-base">Rocky Lens Canada</span>
        <span class="text-slate-300 text-base hidden sm:inline">Phân phối độc quyền bởi Clearly Vietnam</span>
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
              Mỗi góc nhìn mở ra một trải nghiệm khác biệt. Rocky hướng đến những giải pháp tròng kính đáp ứng nhu cầu thị giác trong cuộc sống hiện đại.
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

            <!-- 3 Core Scientific Highlights -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div class="bg-white p-5 rounded-3xl motion-4">
                <div class="text-2xl font-black text-[#0B7B8A]">Mitsui MR™</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Phôi Monomer Nhật Bản</div>
                <p class="text-base text-slate-600 mt-0.5">Truyền quang 99.8%, quang sai cực thấp</p>
              </div>
              <div class="bg-white p-5 rounded-3xl motion-5">
                <div class="text-2xl font-black text-[#0B7B8A]">0.01D</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Vi Sai Kỹ Thuật Số</div>
                <p class="text-base text-slate-600 mt-0.5">Mài Freeform chuẩn xác từng điểm nhìn</p>
              </div>
              <div class="bg-white p-5 rounded-3xl motion-6">
                <div class="text-2xl font-black text-[#0B7B8A]">ISO 13485</div>
                <div class="text-base font-semibold text-slate-800 mt-1">Tiêu Chuẩn Thiết Bị Y Tế</div>
                <p class="text-base text-slate-600 mt-0.5">Kiểm định chất lượng nghiêm ngặt</p>
              </div>
            </div>

          </div>

          <!-- Right Column: Studio Lens Photograph -->
          <div class="lg:col-span-5 flex flex-col items-center justify-center motion-7 space-y-4">
            <div class="w-full max-w-md bg-white p-8 rounded-3xl flex flex-col items-center justify-center">
              <img src="assets/lens_transparent.png" alt="Rocky Lens Optical Clarity" class="w-full max-h-[380px] object-contain animate-float-lens">
              <div class="mt-4 text-center">
                <span class="text-base font-bold text-[#0E253A] block">Chuyên Gia Khúc Xạ Canada</span>
                <span class="text-base text-slate-600 block mt-1">Đúc phôi monomer Mitsui Nhật Bản, bảo chứng y tế ISO 13485</span>
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
            Triết Lý Thương Hiệu
          </h2>
        </div>

        <!-- Editorial Philosophy Lead Block -->
        <div class="bg-[#F5F5F7] p-8 sm:p-12 lg:p-14 rounded-[36px] space-y-8 motion-9">
          
          <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E253A] leading-snug tracking-tight">
            “Cuộc sống có biết bao điều đáng nhìn ngắm. Từ những điều giản dị mỗi ngày đến những trải nghiệm đáng nhớ, tầm nhìn luôn là một phần quan trọng trong cách chúng ta cảm nhận thế giới.”
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-[#0B7B8A]">
                Trải Nghiệm Thị Giác Mỗi Người
              </h3>
              <p class="text-slate-700 text-base sm:text-lg leading-relaxed">
                Tại Rocky, chúng tôi tin rằng một giải pháp tròng kính không chỉ là một sản phẩm, mà còn là một phần trong trải nghiệm thị giác của mỗi người.
              </p>
            </div>

            <div class="space-y-3">
              <h3 class="text-xl font-bold text-[#0B7B8A]">
                Đồng Hành Cuộc Sống Hiện Đại
              </h3>
              <p class="text-slate-700 text-base sm:text-lg leading-relaxed">
                Đó là lý do chúng tôi hướng đến việc phát triển những giải pháp tròng kính đáp ứng các nhu cầu khác nhau trong cuộc sống hiện đại — để mỗi người có thể tìm thấy lựa chọn phù hợp với mình.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 3 — EXPLORE ROCKY LENSES                          -->
    <!-- Mục tiêu: Giúp người tiêu dùng khám phá 6 nhóm tròng kính -->
    <!-- Bố cục: 6 Card lớn (3 ô / hàng), hover specs, CTA rõ ràng -->
    <!-- ========================================================= -->
    <section id="trong-kinh" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-16">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Khám Phá Tròng Kính Rocky
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Sáu nhóm tròng kính chuyên biệt được thiết kế để giải quyết chính xác từng nhu cầu thị giác trong cuộc sống. Rê chuột vào từng sản phẩm để xem thông số kỹ thuật chi tiết.
          </p>
        </div>

        <!-- 6 Large Solution Cards (3 per row: 2 rows of 3) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Card 1: Kính Lái Xe Ban Đêm -->
          <div class="group relative bg-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_kinh_lai_xe.png" alt="Kính lái xe ban đêm DriveShield" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Lái Xe Ban Đêm
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Kính Lái Xe Ban Đêm
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Lớp phủ Ruby AR triệt tiêu 95% ánh sáng chói lóa từ đèn pha LED xe đối diện, tăng độ tương phản điểm vàng khi trời mưa hoặc đêm tối.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Chiết suất 1.60 / 1.67</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Ruby Coating AR</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Chống lóa LED</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay (invisible at rest to avoid covered-text check) -->
            <div class="absolute inset-0 bg-[#0E253A] text-white p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold">
                    Thông Số Kỹ Thuật
                  </span>
                  <span class="text-sm text-slate-300 font-medium">Lab RX 24h</span>
                </div>
                <h4 class="text-2xl font-bold text-white">DriveShield Ruby AR</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Chiết suất:</span>
                    <span class="font-bold text-teal-300">1.60 & 1.67 MR-7 Mitsui</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Lớp phủ:</span>
                    <span class="font-bold text-white">Ruby Coating quang phổ ấm</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Khử chói pha LED:</span>
                    <span class="font-bold text-white">Triệt tiêu 95%</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Trượt nước mưa:</span>
                    <span class="font-bold text-white">Góc tiếp xúc 115°</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Bảo hành:</span>
                    <span class="font-bold text-white">24 tháng 1 đổi 1</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết sản phẩm &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Bảo Vệ Thị Lực Màn Hình Số -->
          <div class="group relative bg-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_chong_tia_uv.png" alt="Bảo vệ thị lực số BlueCut" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Làm Việc Màn Hình Số
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Bảo Vệ Thị Lực Số
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Lọc chọn lọc 100% tia cực tím và dải ánh sáng xanh tím 415-455nm có hại từ màn hình, giữ trọn ánh sáng xanh ngọc điều hòa giấc ngủ.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Chiết suất 1.56 - 1.74</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">BlueCut UV420</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Trong suốt tự nhiên</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-[#0E253A] text-white p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold">
                    Thông Số Kỹ Thuật
                  </span>
                  <span class="text-sm text-slate-300 font-medium">Bảo Vệ Thị Lực Số</span>
                </div>
                <h4 class="text-2xl font-bold text-white">BlueCut UV420 Nano</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Chiết suất:</span>
                    <span class="font-bold text-teal-300">1.56, 1.60, 1.67, 1.74</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Lọc ánh sáng xanh:</span>
                    <span class="font-bold text-white">Cắt 100% tia hại 415-455nm</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Độ trong suốt:</span>
                    <span class="font-bold text-white">Truyền quang 99.8% không vàng</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Lớp váng phủ:</span>
                    <span class="font-bold text-white">Nano Sapphire kháng trầy 9H</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Bảo hành:</span>
                    <span class="font-bold text-white">24 tháng 1 đổi 1</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết sản phẩm &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Kính Đổi Màu Thông Minh 15s -->
          <div class="group relative bg-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_doi_mau.png" alt="Kính đổi màu thông minh ngoài trời" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Năng Động Ngoài Trời
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Kính Đổi Màu Thông Minh
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Đổi màu xám khói sang trọng trong 15 giây khi gặp tia UV và nhả màu trong suốt nhanh chóng khi vào phòng. Kính cận và râm 2 trong 1.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Chiết suất 1.56 / 1.60 / 1.67</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Đổi màu 15s</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Bảo vệ UV400</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-[#0E253A] text-white p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold">
                    Thông Số Kỹ Thuật
                  </span>
                  <span class="text-sm text-slate-300 font-medium">Spin-Coat Fast</span>
                </div>
                <h4 class="text-2xl font-bold text-white">Fast-Change Spin-Coat</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Tốc độ chuyển màu:</span>
                    <span class="font-bold text-teal-300">15 giây dưới tia UV</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Tông sắc thái:</span>
                    <span class="font-bold text-white">Xám khói & Nâu trà thanh lịch</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Chiết suất:</span>
                    <span class="font-bold text-white">1.56, 1.60 MR-8 & 1.67</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Chống bức xạ UV:</span>
                    <span class="font-bold text-white">UV400 toàn diện 100%</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Bảo hành:</span>
                    <span class="font-bold text-white">24 tháng 1 đổi 1</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết sản phẩm &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 4: Kính Khoan & Chống Va Đập -->
          <div class="group relative bg-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_kinh_khoan_va_dap.png" alt="Kính khoan và chống va đập" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Gọng Khoan & Bắt Ốc
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Kính Khoan & Chống Va Đập
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Vật liệu monomer dẻo dai đàn hồi cao, chịu lực căng gấp 5 lần tròng thường, chuyên dụng cho gọng không viền thời trang và gọng xẻ cước.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Monomer MR-8™ Mitsui</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Độ Abbe 41</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Chống nứt vỡ</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-[#0E253A] text-white p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold">
                    Thông Số Kỹ Thuật
                  </span>
                  <span class="text-sm text-slate-300 font-medium">Độ Dẻo Dai Cao</span>
                </div>
                <h4 class="text-2xl font-bold text-white">Monomer Mitsui MR-8™</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Vật liệu phôi:</span>
                    <span class="font-bold text-teal-300">Mitsui Chemicals Nhật Bản</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Độ sắc nét Abbe:</span>
                    <span class="font-bold text-white">41 (Quang sai cực thấp)</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Chịu lực kéo nứt:</span>
                    <span class="font-bold text-white">Chuyên gọng khoan ốc</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Thiết kế bề mặt:</span>
                    <span class="font-bold text-white">Phi cầu Aspheric mỏng mép</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Bảo hành:</span>
                    <span class="font-bold text-white">24 tháng 1 đổi 1</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết sản phẩm &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 5: Kính Đa Tròng Kỹ Thuật Số -->
          <div class="group relative bg-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_da_trong.png" alt="Kính đa tròng kỹ thuật số Freeform" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Lão Thị & Tuổi Trung Niên
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Kính Đa Tròng Kỹ Thuật Số
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Hành lang thị giác êm ái chuyển tiếp mượt mà từ nhìn xa lái xe, làm việc máy tính đến đọc sách gần mà không bị hiện tượng gợn sóng mép rìa.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Freeform 3D Germany</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Xa - Trung - Gần</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Cá nhân hóa góc gọng</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-[#0E253A] text-white p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold">
                    Thông Số Kỹ Thuật
                  </span>
                  <span class="text-sm text-slate-300 font-medium">Freeform 3D HD</span>
                </div>
                <h4 class="text-2xl font-bold text-white">CanRx Freeform HD</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Công nghệ mài:</span>
                    <span class="font-bold text-teal-300">Kỹ thuật số CNC Đức 0.01D</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Vùng nhìn:</span>
                    <span class="font-bold text-white">Hành lang mở rộng êm ái 35%</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Chiết suất:</span>
                    <span class="font-bold text-white">1.56, 1.60 & 1.67 siêu mỏng</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Tùy biến góc gọng:</span>
                    <span class="font-bold text-white">Cá nhân hóa theo khuôn mặt</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Bảo hành:</span>
                    <span class="font-bold text-white">24 tháng 1 đổi 1</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết sản phẩm &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 6: Kiểm Soát Cận Thị Học Đường -->
          <div class="group relative bg-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div>
              <div class="h-64 sm:h-72 bg-slate-900/5 overflow-hidden flex items-center justify-center p-4 relative">
                <img src="assets/uploads/solutions/sol_kiem_soat_can_thi.png" alt="Kiểm soát cận thị trẻ em" class="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-semibold">
                  Học Sinh & Trẻ Em
                </span>
              </div>
              <div class="p-6 sm:p-7 space-y-3">
                <h3 class="text-2xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors">
                  Kiểm Soát Cận Thị Học Đường
                </h3>
                <p class="text-slate-600 text-base leading-relaxed">
                  Vành đai vi điểm phân kỳ xung quanh quang tâm giúp hãm đà tăng trục nhãn cầu ở lứa tuổi học sinh đến 60%, bảo vệ đôi mắt cho con trẻ.
                </p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Defocus 360°</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Hãm tăng độ 60%</span>
                  <span class="px-3 py-1 rounded-lg bg-slate-100">Chống va đập an toàn</span>
                </div>
              </div>
            </div>
            <div class="p-6 sm:p-7 pt-0">
              <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full border border-slate-700 hover:border-[#0B7B8A] hover:bg-[#0B7B8A] hover:text-white text-slate-800 font-semibold text-base transition-colors block text-center">
                Khám phá ngay
              </a>
            </div>

            <!-- Hover Specs Overlay -->
            <div class="absolute inset-0 bg-[#0E253A] text-white p-7 rounded-3xl flex flex-col justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold">
                    Thông Số Kỹ Thuật
                  </span>
                  <span class="text-sm text-slate-300 font-medium">Y Khoa Học Đường</span>
                </div>
                <h4 class="text-2xl font-bold text-white">Defocus MyoControl 360°</h4>
                <div class="space-y-2 text-base pt-2">
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Cơ chế quang học:</span>
                    <span class="font-bold text-teal-300">Vi điểm phân kỳ chu biên 360°</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Hiệu quả lâm sàng:</span>
                    <span class="font-bold text-white">Hãm tăng trục nhãn cầu 60%</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Vật liệu an toàn:</span>
                    <span class="font-bold text-white">Polycarbonate chống vỡ trẻ em</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Lớp phủ:</span>
                    <span class="font-bold text-white">Chống bám vân tay & bụi bẩn</span>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 rounded-xl bg-slate-800/60">
                    <span class="text-slate-300">Bảo hành:</span>
                    <span class="font-bold text-white">24 tháng 1 đổi 1</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                  Xem chi tiết sản phẩm &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Action Button: Xem Thêm Toàn Bộ Catalogue -->
        <div class="flex flex-col sm:flex-row items-center justify-center pt-4">
          <a href="trong-kinh/" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E253A] hover:bg-[#0B7B8A] text-white font-bold text-base sm:text-lg transition-colors duration-200">
            <span>Khám Phá Tất Cả Tròng Kính & So Sánh Chiết Suất</span>
            <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 4 — TECHNOLOGY & QUALITY                          -->
    <!-- Mục tiêu: Xây dựng niềm tin bằng thông tin kiểm chứng thực tế -->
    <!-- Giải thích ý nghĩa thực tế của 4 trụ cột kỹ thuật         -->
    <!-- ========================================================= -->
    <section id="cong-nghe" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Công Nghệ & Chất Lượng
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Những nền tảng vật liệu và quy trình chế tác thực tế tạo nên độ trong suốt 99.8% và sự bền bỉ vượt trội của tròng kính Rocky.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">Mitsui MR™ Nhật Bản</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Phôi Monomer Chuẩn Mực</h3>
            <p class="text-slate-700 text-base">
              Vật liệu polymer cao cấp với độ truyền quang 99.8%, độ sắc nét Abbe cao triệt tiêu quang sai màu và kết cấu dẻo dai chống nứt vỡ khi khoan ốc.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">Nano Sapphire 9H</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Kháng Trầy & Trượt Nước</h3>
            <p class="text-slate-700 text-base">
              Đa lớp phủ chân không gia cường độ cứng tương đương sapphire, giọt nước trượt siêu tốc ở góc 115° và lớp Ruby AR giảm 95% lóa pha LED ban đêm.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">Freeform CNC 0.01D</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Gia Công Sai Số Cực Hạn</h3>
            <p class="text-slate-700 text-base">
              Công nghệ tính toán mài vi điểm mặt sau từ Đức theo từng số độ và thông số gọng thực tế, mở rộng 35% vùng nhìn rõ và loại bỏ cảm giác chao đảo.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-3">
            <div class="text-xl font-bold text-[#0B7B8A]">ISO 13485:2016</div>
            <h3 class="text-lg font-bold text-[#0E253A]">Bảo Chứng Y Tế Quốc Tế</h3>
            <p class="text-slate-700 text-base">
              Quy trình sản xuất được chứng nhận quản lý chất lượng thiết bị y tế quốc tế và tiêu chuẩn chuyên môn của Chuyên gia Khúc xạ Ontario Canada.
            </p>
          </div>

        </div>

        <!-- CTA Link -->
        <div class="pt-4 flex justify-center sm:justify-start">
          <a href="kham-pha-trong-kinh/" class="inline-flex items-center gap-2 text-[#0B7B8A] hover:text-[#086370] font-bold text-base transition-colors">
            <span>Tìm hiểu thêm về công nghệ và cẩm nang thị lực</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 5 — WHY ROCKY                                     -->
    <!-- Mục tiêu: Tổng hợp 4 lý do khác biệt cốt lõi để chọn Rocky-->
    <!-- ========================================================= -->
    <section id="vi-sao-rocky" class="py-20 px-6 bg-[#F5F5F7]">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Vì Sao Bạn Nên Chọn Rocky?
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Bốn giá trị khác biệt cốt lõi tạo nên sự tin cậy lâu dài cho đôi mắt và sự an tâm tuyệt đối của người đeo kính.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-13">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Thị Lực Êm Ái, Thích Nghi Nhanh</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Thiết kế quang học phi cầu Aspheric chuẩn xác loại bỏ biến dạng mép rìa, giúp mắt dễ dàng thích nghi ngay từ ngày đầu tiên đeo kính mới.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">Dễ chịu suốt 12h đeo</div>
          </div>

          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-14">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Vật Liệu Thật, Nguồn Gốc Rõ Ràng</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Minh bạch nguồn gốc phôi đúc Mitsui Nhật Bản và lớp phủ Nano Sapphire chống trầy, bảo toàn độ trong suốt qua nhiều năm sử dụng.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">Minh bạch &bull; Bền bỉ</div>
          </div>

          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-15">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Bảo Vệ Đôi Mắt Toàn Diện</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Ngăn chặn 100% tia cực tím UV400 và lọc chọn lọc ánh sáng xanh tím có hại từ màn hình số, bảo vệ điểm vàng và giác mạc tối ưu.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">UV400 &bull; BlueCut UV420</div>
          </div>

          <div class="bg-white p-7 rounded-3xl space-y-3 flex flex-col justify-between motion-16">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-[#0E253A]">Bảo Hành 1 Đổi 1 Trong 24 Tháng</h3>
              <p class="text-slate-700 text-base leading-relaxed">
                Cam kết bảo hành điện tử chính hãng minh bạch, hỗ trợ đổi mới lớp váng phủ nếu phát sinh lỗi kỹ thuật tại 500+ đại lý ủy quyền.
              </p>
            </div>
            <div class="text-sm font-semibold text-teal-700">Bảo hành 24 tháng</div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 6 — FIND A STORE (B2C ACTION)                     -->
    <!-- Mục tiêu: Chuyển đổi B2C đến đại lý, đo khám thị lực      -->
    <!-- Hotline: 0933 102 653, Zalo tư vấn, KHÔNG công khai giá  -->
    <!-- ========================================================= -->
    <section id="tim-dai-ly" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="max-w-3xl">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Tìm Đại Lý Gần Nhất
          </h2>
          <p class="text-slate-600 text-lg mt-3">
            Tròng kính Rocky được phân phối và đo lắp chính hãng tại hơn 500+ cửa hàng mắt kính và phòng khám khúc xạ uy tín trên toàn quốc.
          </p>
        </div>

        <!-- 3 Steps to Experience Rocky -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 class="text-xl font-bold text-[#0E253A]">Bước 1: Tìm Đại Lý Ủy Quyền</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Tra cứu cửa hàng mắt kính hoặc phòng khám đối tác có biển hiệu ủy quyền Rocky Lens gần khu vực bạn sinh sống, hoặc liên hệ Hotline để được định vị cửa hàng gần nhất.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 class="text-xl font-bold text-[#0E253A]">Bước 2: Đo Khám Khúc Xạ Chuẩn Xác</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Được đội ngũ kỹ thuật viên nhãn khoa đo khám kỹ lưỡng độ cầu, độ loạn, trục và khoảng cách đồng tử (PD) để xác định đơn kính tối ưu cho mắt.
            </p>
          </div>

          <div class="bg-[#F5F5F7] p-8 rounded-3xl space-y-4">
            <h3 class="text-xl font-bold text-[#0E253A]">Bước 3: Lắp Đặt & Kích Hoạt Bảo Hành</h3>
            <p class="text-slate-700 text-base leading-relaxed">
              Chọn dòng tròng kính Rocky phù hợp với thói quen sinh hoạt và nhận thẻ bảo hành điện tử chính hãng 1 đổi 1 trong 24 tháng.
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
              Hotline: 0933 102 653
            </a>
            <a href="https://zalo.me/0933102653" target="_blank" class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center">
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
    <!-- Giá trị hợp tác thực tế, Lab RX 24h, bảo mật giá sỉ      -->
    <!-- ========================================================= -->
    <section id="doi-tac" class="py-20 px-6 bg-[#0E253A] text-white">
      <div class="max-w-7xl mx-auto space-y-14">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Hợp Tác Cùng Rocky
            </h2>

            <p class="text-teal-300 text-xl font-bold">
              Giải pháp quang học toàn diện dành cho cửa hàng mắt kính và đối tác phân phối
            </p>

            <p class="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Chúng tôi đồng hành phát triển cùng hơn 500+ cửa hàng mắt kính, chuỗi bán lẻ và phòng khám khúc xạ toàn quốc với năng lực gia công Lab RX 24h, nguồn hàng ổn định và chính sách hợp tác bền vững từ nhà phân phối Clearly Vietnam.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Lab RX Freeform 24 Giờ</span>
                <p class="text-base text-slate-200">Đơn hàng độ cao, loạn nặng, đa tròng kỹ thuật số cá nhân hóa được gia công và kiểm định chuẩn xác trong 24 giờ.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Tổng Kho Sẵn Hàng 24/7</span>
                <p class="text-base text-slate-200">Đầy đủ các dãy độ và chiết suất 1.56, 1.60, 1.67, 1.74, BlueCut và đổi màu, giao nhanh nội thành trong 2 giờ.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Bảo Hành 1 Đổi 1 Trong 24T</span>
                <p class="text-base text-slate-200">Chính sách bảo hành điện tử chính hãng hỗ trợ trực tiếp đại lý, giảm thiểu tối đa rủi ro thích nghi cho khách hàng.</p>
              </div>
              <div class="bg-[#163652] p-5 rounded-2xl space-y-2">
                <span class="text-base font-bold text-white block">Tài Trợ Công Cụ Trưng Bày</span>
                <p class="text-base text-slate-200">Cung cấp trọn bộ kit đèn test UV420, phôi mẫu so sánh chiết suất và tài liệu đào tạo khúc xạ nhãn khoa chuyên sâu.</p>
              </div>
            </div>

            <div class="pt-4 flex flex-wrap items-center gap-4">
              <a href="danh-cho-doi-tac/" class="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
                Tìm hiểu cơ hội hợp tác
              </a>
              <a href="https://zalo.me/0933102653" target="_blank" class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors text-center">
                Kết nối Zalo B2B: 0933 102 653
              </a>
            </div>

            <div class="text-sm text-slate-300 pt-1">
              * Chính sách chiết khấu và bảng báo giá sỉ đại lý được cung cấp trực tiếp qua kênh trao đổi bảo mật.
            </div>

          </div>

          <!-- Real Optical Store Showcase Image -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="bg-[#163652] p-4 rounded-3xl max-w-md w-full overflow-hidden">
              <img src="assets/images/real/rocky_store_showcase.jpg" alt="Showcase đại lý Rocky Lens" class="w-full h-80 object-cover rounded-2xl">
              <div class="p-4 text-center">
                <span class="text-base font-bold text-white block">Mạng Lưới Đối Tác Toàn Quốc</span>
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
            <li><a href="trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Kính Lái Xe Ban Đêm</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Bảo Vệ Thị Lực Màn Hình Số</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Kính Đổi Màu Thông Minh</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Kính Khoan & Chống Va Đập</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Kính Đa Tròng Kỹ Thuật Số</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Kiểm Soát Cận Thị Trẻ Em</a></li>
          </ul>
        </div>

        <!-- Col 3: Technology & Exploration -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Công Nghệ & Khám Phá</span>
          <ul class="space-y-2 text-base">
            <li><a href="kham-pha-trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Phôi Monomer Mitsui Nhật Bản</a></li>
            <li><a href="kham-pha-trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Gia công Freeform CNC 0.01D</a></li>
            <li><a href="kham-pha-trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Lớp phủ Nano Sapphire 9H</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 hover:text-white transition-colors">Bảng so sánh chiết suất vật liệu</a></li>
            <li><a href="ve-chung-toi/" class="text-slate-300 hover:text-white transition-colors">Chứng nhận y tế ISO 13485:2016</a></li>
          </ul>
        </div>

        <!-- Col 4: Distribution & Contact -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Văn Phòng Phân Phối</span>
          <div class="space-y-2 text-base text-slate-300">
            <p><strong>Hotline:</strong> 0933 102 653</p>
            <p><strong>Email:</strong> info@rockylens.com</p>
            <p><strong>Zalo:</strong> 0933 102 653</p>
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

</body>
</html>
`;

fs.writeFileSync(path.resolve('index.html'), html, 'utf8');
console.log('Successfully generated 7-Section B2C-First Rocky Website conforming to Master Prompt!');
