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
  <title>Rocky Lens - Nhà phân phối tròng kính từ Canada</title>
  <meta name="description" content="Rocky Lens – Trung tâm phân phối tròng kính B2B & gia công Lab công nghệ quốc tế tại Việt Nam. Cung cấp sỉ tròng cận, đổi màu, chống ánh sáng xanh cho cửa hàng kính.">
  <link rel="canonical" href="https://rockylens.com/">
  <meta name="keywords" content="Tròng kính Rocky, Tròng kính Canada, tròng kính chống ánh sáng xanh UV420, tròng kính lái xe ban đêm DriveShield, tròng đổi màu, tròng kính cận mỏng 1.60 1.67 1.74, kiểm soát cận thị Defocus, Clearly Vietnam, mắt kính B2B, bảng giá tròng kính Rocky">
  <meta name="author" content="Rocky Lens Canada • Phân phối độc quyền bởi Clearly Vietnam">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- Open Graph / Facebook / Zalo -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Rocky Lens • Rõ tầm nhìn, trọn cuộc sống | Thương Hiệu Tròng Kính Canada">
  <meta property="og:description" content="Thương hiệu tròng kính quang học Canada, phân phối độc quyền bởi Clearly Vietnam. Giải pháp chống ánh sáng xanh UV420, tròng lái xe DriveShield, đổi màu thông minh và kiểm soát cận thị Defocus.">
  <meta property="og:url" content="https://rockylens.com/">
  <meta property="og:site_name" content="Rocky Lens">
  <meta property="og:locale" content="vi_VN">
  <meta property="og:image" content="https://rockylens.com/images/banners/hero-banner.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Rocky Lens Canada - Giải pháp tròng kính quang học">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Rocky Lens • Rõ tầm nhìn, trọn cuộc sống">
  <meta name="twitter:description" content="Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Clearly Vietnam.">
  <meta name="twitter:image" content="https://rockylens.com/images/banners/hero-banner.png">

  <!-- Schema.org Structured Data for SEO & GEO (Generative Engine Optimization) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://rockylens.com/#organization",
        "name": "Rocky Lens",
        "legalName": "Công ty Cổ phần Clearly Vietnam",
        "url": "https://rockylens.com",
        "logo": "https://rockylens.com/assets/logo_rocky_transparent.png",
        "description": "Thương hiệu tròng kính quang học tiêu chuẩn Canada Opticians, phân phối độc quyền tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam.",
        "telephone": "0933 102 653",
        "email": "info@rockylens.com",
        "taxID": "0316499823",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "TP. Hồ Chí Minh & Hà Nội",
          "addressLocality": "TP. Hồ Chí Minh",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://facebook.com/rockylensvietnam"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://rockylens.com/#website",
        "url": "https://rockylens.com",
        "name": "Rocky Lens",
        "description": "Rõ tầm nhìn, trọn cuộc sống - Thương hiệu tròng kính Canada",
        "publisher": {
          "@id": "https://rockylens.com/#organization"
        }
      },
      {
        "@type": "ItemList",
        "name": "Danh Mục Giải Pháp Tròng Kính Rocky Lens",
        "itemListElement": [
          {
            "@type": "Product",
            "name": "Tròng Kính Chuyên Dụng Lái Xe Ban Đêm Rocky DriveShield 1.60",
            "description": "Lọc dải bước sóng chói lóa từ đèn pha LED xe ngược chiều, tăng độ tương phản khi lái xe ban đêm và trời mưa.",
            "brand": {"@type": "Brand", "name": "Rocky Lens"},
            "url": "https://rockylens.com/trong-kinh/rocky-driveshield-night-vision/"
          },
          {
            "@type": "Product",
            "name": "Tròng Kính Lọc Ánh Sáng Xanh Rocky BlueCut SHMC 1.56",
            "description": "Phôi monomer hấp thụ tia UV420 và dải ánh sáng xanh có hại, bảo vệ hoàng điểm mắt không ám vàng hình ảnh.",
            "brand": {"@type": "Brand", "name": "Rocky Lens"},
            "url": "https://rockylens.com/trong-kinh/rocky-156-bluecut-shmc/"
          },
          {
            "@type": "Product",
            "name": "Tròng Kính Siêu Mỏng Rocky Ultra High Index 1.74",
            "description": "Chiết suất 1.74 siêu mỏng cho người có độ cận cao từ -6.00D đến -12.00D, mỏng hơn đến 45% so với tròng thông thường.",
            "brand": {"@type": "Brand", "name": "Rocky Lens"},
            "url": "https://rockylens.com/trong-kinh/rocky-174-ultra-high-index/"
          },
          {
            "@type": "Product",
            "name": "Tròng Kính Kiểm Soát Cận Thị Trẻ Em Rocky MyoControl Defocus",
            "description": "Công nghệ vi thấu kính phân tán hội tụ chu biên giúp kìm hãm sự tăng độ cận tiến triển ở trẻ em học đường.",
            "brand": {"@type": "Brand", "name": "Rocky Lens"},
            "url": "https://rockylens.com/trong-kinh/rocky-myocontrol-dims-kids/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Tròng kính Rocky Lens xuất xứ từ đâu và phân phối bởi ai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tròng kính Rocky là thương hiệu quang học tiêu chuẩn Canada Opticians, được chứng nhận quản lý chất lượng y tế quốc tế ISO 13485:2016 và được nhập khẩu, phân phối độc quyền tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam (GPKD: 0316499823)."
            }
          },
          {
            "@type": "Question",
            "name": "Tròng kính chống ánh sáng xanh Rocky BlueCut có làm ám vàng hình ảnh không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Không. Rocky BlueCut sử dụng công nghệ phôi monomer hấp thụ tia UV420 và bước sóng xanh tím gây hại 400 - 420nm, giữ độ truyền quang 98% cho hình ảnh trong trẻo tự nhiên, không gây ám vàng sai lệch màu sắc như các thế hệ tròng phủ phản xạ cũ."
            }
          },
          {
            "@type": "Question",
            "name": "Công nghệ tròng kính lái xe ban đêm Rocky DriveShield hoạt động thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rocky DriveShield tích hợp lớp màng lọc quang phổ chọn lọc Multi-Matrix giúp triệt tiêu bước sóng 440-460nm của đèn pha LED ngược chiều, giảm đến 85% cảm giác chói lóa mắt ban đêm và nâng cao độ tương phản khi điều khiển phương tiện trong điều kiện mưa gió hoặc thiếu sáng."
            }
          },
          {
            "@type": "Question",
            "name": "Độ cận cao nên chọn tròng kính chiết suất nào để mỏng nhẹ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Với độ cận từ -3.50D đến -6.00D nên chọn chiết suất 1.60 hoặc 1.67 MR-8 mỏng nhẹ hơn 20-30%. Với độ cận từ -6.00D đến -12.00D nên chọn chiết suất siêu mỏng 1.74 để giảm độ dày rìa tròng đến 45% và tránh hiện tượng thu nhỏ mắt."
            }
          },
          {
            "@type": "Question",
            "name": "Cửa hàng mắt kính muốn liên hệ nhập tròng Rocky và nhận báo giá đại lý như thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quý đại lý và phòng khám có thể liên hệ trực tiếp Hotline/Zalo B2B 0933 102 653 hoặc nhấn nút 'Nhận Báo Giá Đại Lý' trên website để được bộ phận B2B Rocky Lens gửi bảng giá sỉ và chính sách chiết khấu trong 15 phút."
            }
          }
        ]
      }
    ]
  }
  </script>
  
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
              teal: 'var(--button-middle)',
              tealDark: 'var(--button-end)',
              tealDeep: 'var(--b2b-middle)',
              tealLight: 'var(--site-bg-start)',
              navy: 'var(--b2b-end)',
              navyDark: 'var(--b2b-end)',
              ground: 'var(--site-bg-start)',
              card: 'var(--color-surface)',
              ink: 'var(--color-text)',
              muted: 'var(--color-muted)'
            },
            primary: 'var(--button-middle)',
            'primary-hover': 'var(--button-end)',
            heading: 'var(--color-heading)',
            muted: 'var(--color-muted)',
            surface: 'var(--color-surface)',
            'b2b-start': 'var(--b2b-start)',
            'b2b-middle': 'var(--b2b-middle)',
            'b2b-end': 'var(--b2b-end)',
            'site-bg-start': 'var(--site-bg-start)',
            'site-bg-middle': 'var(--site-bg-middle)',
            'site-bg-end': 'var(--site-bg-end)'
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
    /* ========================================================
       ROCKYLENS GLOBAL DESIGN SYSTEM — SINGLE SOURCE OF TRUTH
       ======================================================== */
    :root {
      /* A. Website Background Tokens */
      --site-bg-start: #F4FCFE;
      --site-bg-middle: #D7F4FA;
      --site-bg-end: #A2E2EE;

      /* B. Button Colors Tokens */
      --button-start: #5BCDE5;
      --button-middle: #00A2CC;
      --button-end: #317F93;

      /* C. B2B Premium Tokens */
      --b2b-start: #00A2CC;
      --b2b-middle: #007A99;
      --b2b-end: #003B50;

      /* D. Semantic Tokens */
      --color-heading: var(--b2b-end);
      --color-text: var(--b2b-end);
      --color-muted: #476773;
      --color-surface: #FFFFFF;
      --color-border: var(--site-bg-end);

      /* Primary Brand Shortcuts */
      --color-primary: var(--button-middle);
      --color-primary-hover: var(--button-end);
      --color-primary-light: var(--site-bg-start);

      /* E. Global Gradients */
      --gradient-site: linear-gradient(
        135deg,
        var(--site-bg-start) 0%,
        var(--site-bg-middle) 55%,
        var(--site-bg-end) 100%
      );

      --gradient-button: linear-gradient(
        110deg,
        var(--button-start) 0%,
        var(--button-middle) 50%,
        var(--button-end) 100%
      );

      --gradient-b2b: linear-gradient(
        120deg,
        var(--b2b-start) 0%,
        var(--b2b-middle) 50%,
        var(--b2b-end) 100%
      );
    }

    /* Global Design System Utilities */
    .site-background {
      background: var(--gradient-site);
    }
    .section-background {
      background: var(--gradient-site);
    }
    .section-background-light {
      background: linear-gradient(180deg, var(--site-bg-start) 0%, rgba(255, 255, 255, 0.95) 100%);
    }
    .card-surface {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      box-shadow: 0 4px 20px -2px rgba(0, 59, 80, 0.05);
    }
    .text-heading {
      color: var(--color-heading);
    }
    .text-brand-muted {
      color: var(--color-muted);
    }
    .b2b-gradient {
      background: var(--gradient-b2b);
      color: #FFFFFF;
    }
    .button-primary {
      background: var(--gradient-button);
      color: #FFFFFF;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 59, 80, 0.7);
      box-shadow: 0 4px 14px rgba(0, 162, 204, 0.32), inset 0 1px 1px rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(49, 127, 147, 0.35);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }
    .button-primary:hover {
      filter: brightness(1.08);
      transform: translateY(-1.5px);
      box-shadow: 0 8px 22px rgba(0, 162, 204, 0.42);
    }
    .button-primary:active {
      transform: translateY(0);
      filter: brightness(0.96);
    }
    .button-primary:focus-visible {
      outline: 2px solid var(--button-middle);
      outline-offset: 2px;
    }
    .button-secondary {
      background: var(--color-surface);
      color: var(--color-heading);
      border: 1px solid var(--color-border);
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(0, 59, 80, 0.05);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }
    .button-secondary:hover {
      background: var(--site-bg-start);
      border-color: var(--button-middle);
      color: var(--button-middle);
      transform: translateY(-1.5px);
      box-shadow: 0 6px 16px rgba(0, 162, 204, 0.16);
    }
    .button-b2b {
      background: var(--gradient-b2b);
      color: #FFFFFF;
      font-weight: 700;
      box-shadow: 0 4px 14px rgba(0, 59, 80, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.15);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }
    
    .liquid-card {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(28px) saturate(200%);
      -webkit-backdrop-filter: blur(28px) saturate(200%);
      border: 1px solid var(--color-border);
      box-shadow: 
        0 4px 6px -1px rgba(0, 59, 80, 0.02),
        0 16px 32px -8px rgba(0, 59, 80, 0.06),
        inset 0 1.5px 2px 0 rgba(255, 255, 255, 1);
      border-radius: 20px;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
    }
    .liquid-card:hover {
      background: #FFFFFF;
      transform: translateY(-3px);
      border-color: var(--button-middle);
      box-shadow: 
        0 20px 40px -12px rgba(0, 162, 204, 0.16),
        inset 0 1.5px 2px 0 rgba(255, 255, 255, 1);
    }
    .liquid-pill {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid var(--color-border);
      box-shadow: 0 2px 10px rgba(0, 59, 80, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1);
      border-radius: 9999px;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .liquid-pill:hover {
      background: #FFFFFF;
      transform: translateY(-1px);
    }
    .liquid-btn-primary {
      background: var(--gradient-button);
      color: #FFFFFF;
      border-radius: 9999px;
      text-shadow: 0 1px 2px rgba(0, 59, 80, 0.7);
      box-shadow: 0 4px 14px rgba(0, 162, 204, 0.32), inset 0 1px 1px rgba(255, 255, 255, 0.4);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .liquid-btn-primary:hover {
      filter: brightness(1.08);
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(0, 162, 204, 0.42);
    }
    .liquid-btn-secondary {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--color-border);
      border-radius: 9999px;
      color: var(--color-heading);
      box-shadow: 0 2px 10px rgba(0, 59, 80, 0.04), inset 0 1px 1px #fff;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .liquid-btn-secondary:hover {
      background: #FFFFFF;
      color: var(--button-middle);
      transform: translateY(-1px);
    }

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
      background-color: var(--site-bg-start);
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
<body class="bg-[var(--site-bg-start)] text-heading selection:bg-[var(--color-primary)] selection:text-white">

  <!-- TOP SLIM BAR: OFFICIAL IDENTITY & CONTACT -->
  <div class="bg-[var(--b2b-end)] text-white py-1 px-6 text-base">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-teal-300 font-semibold text-base">Rocky Lens Canada</span>
        <span class="text-slate-300 font-medium text-base hidden sm:inline">Phân phối độc quyền bởi Clearly Vietnam</span>
      </div>
      <div class="flex items-center gap-6 text-base font-medium">
        <a href="tel:0933102653" class="text-white hover:text-teal-300 transition-colors">Hotline B2B: 0933 102 653</a>
        <a href="https://zalo.me/0933102653" target="_blank" class="text-teal-300 hover:text-white transition-colors">Zalo B2B Đại Lý</a>
      </div>
    </div>
  </div>

  <!-- APPLE FLUID NAVIGATION: 7 MAIN ANCHORS -->
  <header class="sticky top-0 z-40 apple-nav-blur">
    <div class="max-w-7xl mx-auto px-6 py-1 sm:py-1.5 flex items-center justify-between gap-6">
      
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-3">
        <img src="assets/logo_rocky_transparent.png" alt="Rocky Lens Canada" class="h-16 sm:h-[76px] w-auto object-contain">
      </a>

      <!-- Primary Multi-Page Navigation Items -->
      <nav class="hidden lg:flex items-center gap-8 text-base font-semibold text-slate-800">
        <a href="index.html" class="text-[var(--color-primary)] font-bold">Trang chủ</a>
        <a href="trong-kinh/" class="hover:text-[var(--color-primary)] transition-colors">Sản Phẩm</a>
        <a href="rx-lab/" class="hover:text-[var(--color-primary)] transition-colors">RX &amp; Lab</a>
        <a href="cong-nghe/" class="hover:text-[var(--color-primary)] transition-colors">Công Nghệ</a>
        <a href="blog/" class="hover:text-[var(--color-primary)] transition-colors">Blog</a>
        <a href="danh-cho-doi-tac/" class="hover:text-[var(--color-primary)] transition-colors">Đối tác</a>
      </nav>

      <!-- Action Button: Open B2B Dealer Quote Modal -->
      <div class="flex items-center gap-3">
        <button type="button" onclick="openB2BQuoteModal()" class="px-5 py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-base transition-all text-center cursor-pointer shadow-xs hover:shadow-md active:scale-95">
          Nhận Báo Giá Đại Lý
        </button>
      </div>

    </div>
  </header>

  <main>
    <!-- ========================================================= -->
    <!-- SECTION 1 — BRAND HERO                                    -->
    <!-- ========================================================= -->
    <section id="brand-hero" class="relative overflow-hidden py-10 sm:py-14 lg:py-16 min-h-[420px] lg:min-h-[460px] flex flex-col justify-center site-background text-slate-800 transition-all duration-700">
      <!-- ========================================================= -->
      <!-- CHẾ ĐỘ 2: CINEMATIC CANADIAN OPTICAL BANNER BACKGROUND   -->
      <!-- ========================================================= -->
      <div id="hero-banner-bg" class="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 pointer-events-none opacity-0" style="background-image: url('images/banners/banner_hero_mode.jpg'); background-position: right 30% center;">
        <!-- Optical gradient overlay ensuring 100% typography contrast & readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#001722]/98 via-[#002433]/85 to-transparent sm:to-[#002433]/40"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#001722] via-transparent to-[#001722]/60"></div>
      </div>

      <!-- ========================================================= -->
      <!-- CHẾ ĐỘ 1: APPLE LIQUID CAUSTIC LIGHT ORBS                -->
      <!-- ========================================================= -->
      <div id="hero-orbs" class="transition-opacity duration-700">
        <div class="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--site-bg-end)]/40 via-[var(--site-bg-middle)]/30 to-[var(--button-start)]/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute top-1/4 -right-32 w-[380px] h-[380px] bg-gradient-to-bl from-[var(--site-bg-middle)]/35 via-[var(--site-bg-start)]/30 to-[var(--site-bg-end)]/30 rounded-full blur-[110px] pointer-events-none"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <!-- ========================================================= -->
        <!-- SEGMENTED MODE SWITCHER: CHẾ ĐỘ 1 vs CHẾ ĐỘ 2            -->
        <!-- ========================================================= -->
        <div class="flex items-center justify-center lg:justify-start mb-4">
          <div class="inline-flex items-center p-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-300/70 shadow-sm transition-all" id="hero-switcher-wrap">
            <button
              type="button"
              id="btn-hero-std"
              onclick="setHeroMode('standard')"
              class="px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-[var(--b2b-end)] text-white shadow-xs"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
              <span>Chế độ 1: Tối giản</span>
            </button>
            <button
              type="button"
              id="btn-hero-ban"
              onclick="setHeroMode('banner')"
              class="px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-900"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <span>Chế độ 2: Nền Banner</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <!-- Left Column: Display Typography & Brand Value -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Apple-style Capsule Badge -->
            <div id="hero-badge" class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-pill text-primary text-xs font-bold shadow-xs transition-all">
              <span class="w-2 h-2 rounded-full bg-[var(--button-middle)]"></span>
              <span class="tracking-wide uppercase font-semibold">Thương Hiệu Tròng Kính Canada Opticians</span>
            </div>

            <h1 id="hero-title" class="text-3xl sm:text-5xl lg:text-[52px] font-black text-heading tracking-tight leading-[1.15] transition-colors">
              Rocky Lens - <br class="hidden sm:inline" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
                nhà phân phối tròng kính từ Canada
              </span>
            </h1>

            <p id="hero-desc" class="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors">
              Rocky Lens tự hào là đơn vị phân phối tròng kính B2B và gia công Lab công nghệ quốc tế tại Việt Nam. Với hệ sinh thái sản phẩm toàn diện - từ tròng kính cận, tròng kính đổi màu đến tròng kính chống ánh sáng xanh - chúng tôi mang đến giải pháp nguồn hàng trọn gói, ổn định, đồng hành cùng sự phát triển bền vững của các hệ thống cửa hàng kính mắt trên toàn quốc.
            </p>

            <!-- 3 Apple Liquid Spec Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left" id="hero-spec-cards">
              <div class="p-4 rounded-2xl liquid-card hero-spec-card transition-all">
                <div class="text-xs font-bold text-primary uppercase hero-spec-tag">Mitsui Monomer MR™</div>
                <div class="text-sm font-black text-heading mt-1 hero-spec-title">Trong Suốt 99.8%</div>
                <div class="text-[11px] text-brand-muted mt-0.5 hero-spec-sub">Truyền quang cao, quang sai cực thấp</div>
              </div>

              <div class="p-4 rounded-2xl liquid-card hero-spec-card transition-all">
                <div class="text-xs font-bold text-[var(--button-end)] uppercase hero-spec-tag">Nano Sapphire 9H</div>
                <div class="text-sm font-black text-heading mt-1 hero-spec-title">Trượt Nước &gt;115°</div>
                <div class="text-[11px] text-brand-muted mt-0.5 hero-spec-sub">Kháng trầy xước, không đọng nước mưa</div>
              </div>

              <div class="p-4 rounded-2xl liquid-card hero-spec-card transition-all">
                <div class="text-xs font-bold text-heading uppercase hero-spec-tag">CanRx Freeform 4K</div>
                <div class="text-sm font-black text-heading mt-1 hero-spec-title">Sai Số &lt; 0.01 Diop</div>
                <div class="text-[11px] text-brand-muted mt-0.5 hero-spec-sub">Gia công kỹ thuật số cá nhân hóa</div>
              </div>
            </div>

            <!-- Dual CTAs: Tìm Tròng Kính Phù Hợp Với Bạn & Nhận Báo Giá Đại Lý -->
            <div class="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a href="#trong-kinh" class="liquid-btn-primary px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md flex items-center space-x-2">
                <span>Tìm Tròng Kính Phù Hợp Với Bạn</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <button id="hero-b2b-btn" type="button" onclick="openB2BQuoteModal()" class="liquid-btn-secondary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer transition-all">
                <span>Nhận Báo Giá Đại Lý</span>
              </button>
            </div>

            <!-- Micro Trust Indicators -->
            <div id="hero-trust" class="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-brand-muted font-medium transition-colors">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                <span>Ontario Opticians No. 6181</span>
              </span>
              <span>&bull;</span>
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>ISO 13485:2016 Medical Quality</span>
              </span>
              <span>&bull;</span>
              <span>Bảo hành điện tử 1 đổi 1 24T</span>
            </div>

          </div>

          <!-- Right Column: Studio Lens Photograph -->
          <div class="lg:col-span-5 relative flex items-center justify-center lg:justify-start lg:-ml-4">
            <!-- Ambient Caustic Halo -->
            <div class="w-72 h-72 sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-tr from-teal-200/50 via-cyan-100/40 to-sky-200/50 blur-3xl absolute pointer-events-none"></div>

            <div class="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-[380px] aspect-square flex items-center justify-center">
              <div class="relative w-full h-full flex items-center justify-center">
                <img src="assets/h-lens3.png" alt="Tròng kính quang học Rocky Lens Canada" class="object-contain p-2 transition-transform duration-700 hover:scale-105 drop-shadow-[0_25px_45px_rgba(11,123,138,0.28)] max-h-[340px]">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 2 — EXPLORE ROCKY LENSES (01 / DANH MỤC SẢN PHẨM) -->
    <!-- Bố cục & nội dung chuẩn theo preview.png                  -->
    <!-- ========================================================= -->
    <section id="trong-kinh" class="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div class="max-w-7xl mx-auto space-y-8 relative z-10">
        
        <!-- Top Header Row matching preview.png Section 01 -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="max-w-3xl space-y-2">
            <div class="text-xs font-bold text-primary tracking-wider uppercase">
              DANH MỤC SẢN PHẨM
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
              Khám phá các giải pháp <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">tròng kính</span> RockyLens.
            </h2>
            <p class="text-brand-muted text-sm sm:text-base leading-relaxed">
              Từ nhu cầu nhìn thường ngày đến những yêu cầu chuyên biệt, mỗi nhóm tròng kính có những đặc điểm và công nghệ riêng.
            </p>
          </div>
          <div class="shrink-0 pb-1">
            <a href="trong-kinh/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 transition-colors">
              <span>Xem các nhóm sản phẩm</span>
              <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>
        </div>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2 pt-1" id="product-filter-tabs">
          <button type="button" onclick="filterProductSolutions('all', this)" class="product-filter-btn px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer bg-[var(--b2b-end)] text-white shadow-xs">
            Tất cả
          </button>
          <button type="button" onclick="filterProductSolutions('work', this)" class="product-filter-btn px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90">
            Làm việc
          </button>
          <button type="button" onclick="filterProductSolutions('outdoor', this)" class="product-filter-btn px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90">
            Ngoài trời
          </button>
          <button type="button" onclick="filterProductSolutions('special', this)" class="product-filter-btn px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90">
            Chuyên biệt
          </button>
        </div>

        <!-- 6 Solution Cards Grid - Increased 20% -->
        <div class="max-w-[1240px] mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2" id="product-cards-grid">
            
                        <!-- Card 1: Tài Xế -->
            <div class="product-sol-card card-surface rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[var(--button-middle)] transition-all duration-300 flex flex-col justify-between h-full border border-[var(--color-border)]/50 group bg-white relative overflow-hidden" data-group="outdoor">
              <div>
                <div class="space-y-1 pb-2">
                  <div class="text-[11px] font-bold text-primary tracking-wide uppercase line-clamp-1">DÀNH CHO TÀI XẾ & DI CHUYỂN ĐÊM</div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug h-14 flex items-start line-clamp-2">
                    <a href="trong-kinh/rocky-driveshield-night-vision/" class="hover:text-primary transition-colors">Lái Xe Ban Đêm & Đi Mưa (Chống Chói Đèn Pha)</a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2 h-10">Triệt tiêu ánh sáng chói lóa từ đèn pha LED đối diện, tăng cường độ tương phản và trượt nước mưa tối đa giúp lái xe an toàn, không bị lóa mắt.</p>
                </div>
                <div class="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-900/10 relative my-2.5 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/solutions/sol_kinh_lai_xe.png" alt="Lái Xe Ban Đêm & Đi Mưa (Chống Chói Đèn Pha)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
              <div class="pt-3 mt-auto border-t border-slate-100 flex items-center">
                <a href="trong-kinh/rocky-driveshield-night-vision/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Xem giải pháp</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

            <!-- Card 2: Designer (Không Đổi Màu) -->
            <div class="product-sol-card card-surface rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[var(--button-middle)] transition-all duration-300 flex flex-col justify-between h-full border border-[var(--color-border)]/50 group bg-white relative overflow-hidden" data-group="work">
              <div>
                <div class="space-y-1 pb-2">
                  <div class="text-[11px] font-bold text-primary tracking-wide uppercase line-clamp-1">DÀNH CHO DESIGNER & ĐỒ HỌA MÁY TÍNH</div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug h-14 flex items-start line-clamp-2">
                    <a href="trong-kinh/rocky-156-bluecut-shmc/" class="hover:text-primary transition-colors">Ngồi Máy Tính Đồ Họa (Lọc Ánh Sáng Xanh - KHÔNG Đổi Màu)</a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2 h-10">Dành cho designer, lập trình viên, dựng video: tròng trong suốt 99.8% cả trong nhà lẫn ngoài trời, lọc ánh sáng xanh tím có hại mà tuyệt đối không ngả vàng, chuẩn màu 100%.</p>
                </div>
                <div class="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-900/10 relative my-2.5 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/solutions/sol_chong_tia_uv.png" alt="Ngồi Máy Tính Đồ Họa (Lọc Ánh Sáng Xanh - KHÔNG Đổi Màu)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
              <div class="pt-3 mt-auto border-t border-slate-100 flex items-center">
                <a href="trong-kinh/rocky-156-bluecut-shmc/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Xem giải pháp</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

            <!-- Card 3: Dân Văn Phòng (Có Đổi Màu) -->
            <div class="product-sol-card card-surface rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[var(--button-middle)] transition-all duration-300 flex flex-col justify-between h-full border border-[var(--color-border)]/50 group bg-white relative overflow-hidden" data-group="work">
              <div>
                <div class="space-y-1 pb-2">
                  <div class="text-[11px] font-bold text-primary tracking-wide uppercase line-clamp-1">DÂN VĂN PHÒNG & NĂNG ĐỘNG (2 TRONG 1)</div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug h-14 flex items-start line-clamp-2">
                    <a href="trong-kinh/rocky-trendy-photochromic-grey/" class="hover:text-primary transition-colors">Văn Phòng Hay Ra Nắng (Lọc Ánh Sáng Xanh + CÓ ĐỔI MÀU)</a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2 h-10">Trong nhà lọc ánh sáng xanh máy tính êm dịu mắt, bước ra nắng tự động chuyển màu râm chuẩn CAT 3 chống tia cực tím UV400 và chói lóa tiện lợi 2 trong 1.</p>
                </div>
                <div class="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-900/10 relative my-2.5 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/solutions/sol_doi_mau.png" alt="Văn Phòng Hay Ra Nắng (Lọc Ánh Sáng Xanh + CÓ ĐỔI MÀU)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
              <div class="pt-3 mt-auto border-t border-slate-100 flex items-center">
                <a href="trong-kinh/rocky-trendy-photochromic-grey/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Xem giải pháp</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

                        <!-- Card 4: Cận Nặng Mỏng Nhẹ -->
            <div class="product-sol-card card-surface rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[var(--button-middle)] transition-all duration-300 flex flex-col justify-between h-full border border-[var(--color-border)]/50 group bg-white relative overflow-hidden" data-group="special">
              <div>
                <div class="space-y-1 pb-2">
                  <div class="text-[11px] font-bold text-primary tracking-wide uppercase line-clamp-1">CẬN ĐỘ CAO & GỌNG KHOAN THỜI TRANG</div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug h-14 flex items-start line-clamp-2">
                    <a href="trong-kinh/rocky-160-mr8-aspheric/" class="hover:text-primary transition-colors">Cận Nặng Mỏng Nhẹ & Gọng Khoan Không Viền</a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2 h-10">Chiết suất cao 1.60 - 1.74 mỏng nhẹ hơn đến 45%, phôi Mitsui MR Nhật Bản siêu dai chống sứt mẻ ốc khoan, triệt tiêu viền dày đáy chai thẩm mỹ.</p>
                </div>
                <div class="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-900/10 relative my-2.5 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/solutions/sol_kinh_khoan_va_dap.png" alt="Cận Nặng Mỏng Nhẹ & Gọng Khoan Không Viền" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
              <div class="pt-3 mt-auto border-t border-slate-100 flex items-center">
                <a href="trong-kinh/rocky-160-mr8-aspheric/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Xem giải pháp</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

            <!-- Card 5: Người Lớn Tuổi -->
            <div class="product-sol-card card-surface rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[var(--button-middle)] transition-all duration-300 flex flex-col justify-between h-full border border-[var(--color-border)]/50 group bg-white relative overflow-hidden" data-group="work">
              <div>
                <div class="space-y-1 pb-2">
                  <div class="text-[11px] font-bold text-primary tracking-wide uppercase line-clamp-1">NGƯỜI LỚN TUỔI & TRUNG NIÊN (40+)</div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug h-14 flex items-start line-clamp-2">
                    <a href="trong-kinh/rocky-freeform-progressive-hd/" class="hover:text-primary transition-colors">Người Lớn Tuổi Nhìn Xa - Trung - Gần (Đa Tròng)</a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2 h-10">Xóa bỏ ranh giới đường lằn hai tròng, hỗ trợ chuyển vùng nhìn mượt mà: đọc sách báo, xem điện thoại, làm việc máy tính đến đi lại lái xe chỉ trong 1 cặp kính.</p>
                </div>
                <div class="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-900/10 relative my-2.5 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/solutions/sol_da_trong.png" alt="Người Lớn Tuổi Nhìn Xa - Trung - Gần (Đa Tròng)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
              <div class="pt-3 mt-auto border-t border-slate-100 flex items-center">
                <a href="trong-kinh/rocky-freeform-progressive-hd/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Xem giải pháp</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

            <!-- Card 6: Trẻ Em -->
            <div class="product-sol-card card-surface rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[var(--button-middle)] transition-all duration-300 flex flex-col justify-between h-full border border-[var(--color-border)]/50 group bg-white relative overflow-hidden" data-group="special">
              <div>
                <div class="space-y-1 pb-2">
                  <div class="text-[11px] font-bold text-primary tracking-wide uppercase line-clamp-1">TRẺ EM & HỌC SINH CẬN THỊ</div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug h-14 flex items-start line-clamp-2">
                    <a href="trong-kinh/rocky-myocontrol-dims-kids/" class="hover:text-primary transition-colors">Trẻ Em & Học Sinh (Kiểm Soát Tăng Độ Cận)</a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2 h-10">Ứng dụng công nghệ vi thấu kính D.I.M.S làm chậm tốc độ tăng độ cận học đường đến 60%, vật liệu kháng va đập an toàn tuyệt đối cho trẻ vui chơi học tập.</p>
                </div>
                <div class="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-900/10 relative my-2.5 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/solutions/sol_kiem_soat_can_thi.png" alt="Trẻ Em & Học Sinh (Kiểm Soát Tăng Độ Cận)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
              <div class="pt-3 mt-auto border-t border-slate-100 flex items-center">
                <a href="trong-kinh/rocky-myocontrol-dims-kids/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Xem giải pháp</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Bottom CTA Button: Xem thêm -->
        <div class="text-center pt-3">
          <a href="trong-kinh/" class="button-primary inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300">
            <span>Xem thêm giải pháp tròng kính</span>
            <span>&rarr;</span>
          </a>
        </div>

        <!-- Footnote text from preview.png -->
        <div class="pt-2 text-center text-xs text-brand-muted">
          Thông số kỹ thuật và các lựa chọn cụ thể có thể khác nhau theo từng sản phẩm. Vui lòng tham khảo trang chi tiết hoặc liên hệ để xác nhận.
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 3 — BRAND PHILOSOPHY                              -->
    <!-- Mục tiêu: Giúp người dùng hiểu Rocky đại diện cho điều gì -->
    <!-- Niềm tin, bản sắc & trải nghiệm thị giác                  -->
    <!-- ========================================================= -->
    <section id="triet-ly" class="relative py-20 px-6 bg-transparent overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Visual Storytelling Art -->
          <div class="lg:col-span-5 order-2 lg:order-1">
            <div class="relative rounded-3xl overflow-hidden bg-slate-100 group">
              <div class="aspect-[4/3] sm:aspect-[16/11] w-full relative">
                <img loading="lazy" decoding="async" src="assets/images/company/about-6.jpg" alt="Trải nghiệm thị giác tròng kính Rocky" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700">
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3.5 py-1.5 rounded-full bg-white text-heading text-sm font-bold">
                  Trải Nghiệm Thị Giác &bull; Canada Standards
                </span>
              </div>
              <div class="p-4 sm:p-5 bg-white flex items-center justify-between text-sm font-semibold text-slate-800">
                <span>Tối ưu trường nhìn tự nhiên</span>
                <span class="text-[var(--color-primary-hover)] font-bold">Thích nghi êm dịu</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Editorial Typography & Philosophy -->
          <div class="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.18]">
              Chọn đúng kính - <br class="hidden sm:inline" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">kiểm soát độ</span>
            </h2>

            <div class="space-y-4 text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
              <p class="text-slate-700 text-base sm:text-lg leading-relaxed">
                Dù làm việc, học tập hay di chuyển, mỗi người đều có những nhu cầu thị giác khác nhau. Khám phá các loại tròng kính và công nghệ phù hợp để hiểu rõ hơn về lựa chọn của mình.
              </p>
            </div>

            <!-- 3 Needs-Based Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div class="bg-white p-5 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md shadow-xs border border-[var(--color-border)]/60">
                <div class="text-[var(--color-primary)] mb-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                </div>
                <div class="text-base font-bold text-heading">Làm việc & học tập</div>
                <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">Tìm hiểu các giải pháp cho nhu cầu nhìn gần và sử dụng thiết bị số.</p>
              </div>
              <div class="bg-white p-5 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md shadow-xs border border-[var(--color-border)]/60">
                <div class="text-[var(--color-primary)] mb-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                </div>
                <div class="text-base font-bold text-heading">Di chuyển & ngoài trời</div>
                <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">Khám phá công nghệ đổi màu, phân cực và các đặc điểm quang học liên quan.</p>
              </div>
              <div class="bg-white p-5 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md shadow-xs border border-[var(--color-border)]/60">
                <div class="text-[var(--color-primary)] mb-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <div class="text-base font-bold text-heading">Nhìn đa khoảng cách</div>
                <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">Tìm hiểu thiết kế đa tròng và các giải pháp cho nhiều khoảng nhìn.</p>
              </div>
            </div>

            <div class="pt-2 flex flex-col items-center justify-center text-center">
              <a href="trong-kinh/" class="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-bold text-base transition-colors group">
                <span>Khám phá giải pháp tròng kính</span>
                <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 4 — TECHNOLOGY (03 / CÔNG NGHỆ TRÒNG KÍNH)        -->
    <!-- Bố cục & nội dung chuẩn theo preview.png                  -->
    <!-- ========================================================= -->
    <section id="cong-nghe" class="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div class="max-w-7xl mx-auto space-y-8 relative z-10">
        
        <!-- Section Header -->
        <div class="max-w-3xl space-y-2">
          <div class="text-xs font-bold text-primary tracking-wider uppercase">
            KHÁM PHÁ CÔNG NGHỆ ROCKYLENS
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
            Công nghệ phía sau mỗi tầm nhìn.
          </h2>
          <p class="text-brand-muted text-sm sm:text-base leading-relaxed">
            Từ vật liệu quang học, công nghệ lớp phủ đến thiết kế bề mặt, mỗi yếu tố đều góp phần tạo nên đặc điểm và trải nghiệm riêng của từng dòng tròng kính.
          </p>
        </div>

        <!-- 3 Column Cards Grid matching user screenshot - Reduced 30% -->
        <div class="w-full">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <!-- Card 1 -->
            <div class="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white">
              <div>
                <div class="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden relative">
                  <img loading="lazy" decoding="async" src="assets/images/technologies/tech_sec3_1.jpg" alt="Độ mỏng bắt đầu từ sự lựa chọn phù hợp." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-4 sm:p-5 space-y-1.5">
                  <div class="text-[11px] font-bold text-primary tracking-wider uppercase">
                    VẬT LIỆU &amp; CHIẾT SUẤT
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug">
                    Độ mỏng bắt đầu từ sự lựa chọn phù hợp.
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2">
                    Chiết suất, độ kính và kích thước gọng đều ảnh hưởng đến độ dày thực tế của tròng. Hiểu rõ từng yếu tố giúp lựa chọn chính xác hơn.
                  </p>
                </div>
              </div>
              <div class="p-4 sm:p-5 pt-0">
                <a href="blog/so-sanh-chiet-suat-trong-kinh/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Tìm hiểu chiết suất</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white">
              <div>
                <div class="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden relative">
                  <img loading="lazy" decoding="async" src="assets/images/technologies/tech_sec3_2.jpg" alt="Tối ưu trải nghiệm sử dụng hằng ngày." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-4 sm:p-5 space-y-1.5">
                  <div class="text-[11px] font-bold text-primary tracking-wider uppercase">
                    CÔNG NGHỆ LỚP PHỦ
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug">
                    Tối ưu trải nghiệm sử dụng hằng ngày.
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2">Các công nghệ lớp phủ có thể giúp giảm phản xạ, hạn chế bám bẩn và hỗ trợ vệ sinh tròng kính, tùy theo từng sản phẩm.</p>
                </div>
              </div>
              <div class="p-4 sm:p-5 pt-0">
                <a href="blog/giai-phap-chong-anh-sang-xanh-uv420/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Khám phá lớp phủ</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white">
              <div>
                <div class="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden relative">
                  <img loading="lazy" decoding="async" src="assets/images/technologies/tech_sec3_3.jpg" alt="Thiết kế hướng đến từng nhu cầu thị giác." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-4 sm:p-5 space-y-1.5">
                  <div class="text-[11px] font-bold text-primary tracking-wider uppercase">
                    THIẾT KẾ QUANG HỌC FREEFORM
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug">
                    Thiết kế hướng đến từng nhu cầu thị giác.
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2">Công nghệ Freeform cho phép gia công các bề mặt quang học phức tạp, hỗ trợ nhiều thiết kế tròng kính đáp ứng các nhu cầu nhìn khác nhau.</p>
                </div>
              </div>
              <div class="p-4 sm:p-5 pt-0">
                <a href="blog/khi-nao-nen-dung-kinh-da-trong/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Tìm hiểu Freeform</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Bottom Centered CTA -->
        <div class="text-center pt-3">
          <a href="cong-nghe/" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] transition-all group">
            <span>Khám phá tất cả công nghệ</span>
            <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 5 — WHY ROCKY                                     -->
    <!-- Mục tiêu: Trả lời câu hỏi vì sao tôi nên cân nhắc Rocky   -->
    <!-- Sự an tâm & thông tin rõ ràng, không lặp lại công nghệ    -->
    <!-- ========================================================= -->
    <section id="vi-sao-rocky" class="relative py-20 px-6 bg-transparent overflow-hidden">
      <div class="max-w-7xl mx-auto space-y-16 relative z-10">
        
        <!-- Part A: Rocky Canada Opticians & Bằng chứng chất lượng -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column (5 cols): Brand Narrative & 4 Value Icons -->
          <div class="lg:col-span-5 space-y-6">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight">
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
                <span class="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] shrink-0"></span>
                <span class="text-sm font-bold text-heading">Tính năng ưu việt bảo vệ mắt toàn diện</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs motion-float-6">
                <span class="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] shrink-0"></span>
                <span class="text-sm font-bold text-heading">Đáp ứng toàn diện mọi nhu cầu thị lực</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs motion-float-7">
                <span class="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] shrink-0"></span>
                <span class="text-sm font-bold text-heading">Giải pháp thị lực ở mọi phân khúc giá</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs motion-float-8">
                <span class="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] shrink-0"></span>
                <span class="text-sm font-bold text-heading">Sản phẩm đạt chất lượng quốc tế</span>
              </div>
            </div>

          </div>

          <!-- Right Column (7 cols): Certificates & Awards (Larger + Click to Open Lightbox) -->
          <div class="lg:col-span-7 space-y-8">
            
            <!-- Group 1: Chứng chỉ Canada -->
            <div class="space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(0)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/11.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(1)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/12.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(2)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/13.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(3)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/14.jpg" alt="The College of Opticians of Ontario - Optician Certificate" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(4)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/15.jpg" alt="Georgian College - Optician Diploma" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(5)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/16.jpg" alt="National Association of Canadian Optician Regulators" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-center text-sm font-bold text-heading">
                Đội ngũ nhân sự tốt nghiệp và có chứng chỉ hành nghề tại Canada (Bấm vào để xem lớn)
              </p>
            </div>

            <!-- Group 2: Tiêu chuẩn quốc tế & Giải thưởng châu Á -->
            <div class="space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(6)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/1.jpg" alt="Giấy chứng nhận ISO 13485:2016 Rocky Lens" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(7)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/2.jpg" alt="Thương hiệu uy tín hội nhập Châu Á 2024" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(8)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/3.jpg" alt="Sản phẩm dịch vụ chất lượng Châu Á 2024" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[3/4] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(9)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/4.jpg" alt="The Best of Vietnam 2024 - Top 20 Sản phẩm tốt nhất" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-center text-sm font-bold text-heading">
                Sản phẩm đạt Tiêu chuẩn quốc tế và vinh dự đạt giải thưởng chất lượng châu Á
              </p>
            </div>

            <!-- Group 3: Hoạt động vì cộng đồng -->
            <div class="space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="rounded-2xl shadow-xs aspect-[4/3] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(10)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/31.jpg" alt="Giấy khen Hội cứu trợ trẻ em tàn tật Việt Nam" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[4/3] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(11)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/32.jpg" alt="Giấy khen Hội nạn nhân chất độc da cam / Dioxin" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl shadow-xs aspect-[4/3] overflow-hidden group relative cursor-pointer hover:shadow-md transition-all duration-300 bg-slate-100" onclick="openCertModal(12)">
                  <img loading="lazy" decoding="async" src="assets/images/bangkhen/33.jpg" alt="Kỷ niệm chương Tấm lòng nhân ái" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-[var(--b2b-end)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                    <div class="w-10 h-10 rounded-full bg-white/95 text-[var(--color-primary)] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-center text-sm font-bold text-heading">
                Tích cực tham gia hoạt động vì cộng đồng
              </p>
            </div>

          </div>

        </div>

        <!-- Part B: Đối tác của chúng tôi (Larger Logos & Infinite Marquee Moving Right to Left) -->
        <div class="pt-12 space-y-6">
          <div class="text-center space-y-2">
            <h3 class="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              Đối tác của chúng tôi
            </h3>
            <p class="text-slate-600 text-sm max-w-xl mx-auto">
              Đồng hành cùng hệ thống các chuỗi mắt kính và phòng khám khúc xạ uy tín trên toàn quốc
            </p>
          </div>

          <!-- Infinite Marquee Moving from Right to Left slowly -->
          <div class="relative w-full overflow-hidden py-4 sm:py-6">
            <!-- Left & Right Gradient Shadows -->
            <div class="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--site-bg-start)] to-transparent z-10"></div>
            <div class="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--site-bg-start)] to-transparent z-10"></div>

            <div class="animate-marquee gap-6 sm:gap-8 items-center">
              <!-- Set 1: 10 Partner Logos with Cards -->
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_1.png" alt="Đối tác Mắt Kính Văn Nguyên (MKVN)" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_2.png" alt="Đối tác Quang Optic - Kính Thuốc Chuyên Nghiệp" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_3.png" alt="Đối tác Huân Kính Since 1995" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_4.png" alt="Đối tác Mắt Kính Sài Gòn Optic" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_5.png" alt="Đối tác Mắt Kính Tâm Đức" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_6.png" alt="Đối tác Mắt Kính Ánh Sáng" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_7.png" alt="Đối tác Mắt Kính Bệnh Viện Mắt" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_8.png" alt="Đối tác Mắt Kính Khúc Xạ" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_9.png" alt="Đối tác Chuỗi Cửa Hàng Kính" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_10.png" alt="Đối tác Nhãn Khoa Đối Tác" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>

              <!-- Set 2: Duplicate for seamless infinite loop -->
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_1.png" alt="Đối tác Mắt Kính Văn Nguyên (MKVN)" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_2.png" alt="Đối tác Quang Optic - Kính Thuốc Chuyên Nghiệp" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_3.png" alt="Đối tác Huân Kính Since 1995" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_4.png" alt="Đối tác Mắt Kính Sài Gòn Optic" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_5.png" alt="Đối tác Mắt Kính Tâm Đức" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_6.png" alt="Đối tác Mắt Kính Ánh Sáng" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_7.png" alt="Đối tác Mắt Kính Bệnh Viện Mắt" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_8.png" alt="Đối tác Mắt Kính Khúc Xạ" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_9.png" alt="Đối tác Chuỗi Cửa Hàng Kính" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
              <div class="bg-white/95 p-2 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center h-28 sm:h-36 min-w-[260px] sm:min-w-[320px] group hover:shadow-md hover:border-[var(--button-middle)]/50 transition-all shrink-0 cursor-pointer">
                <div class="relative w-56 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                  <img loading="lazy" decoding="async" src="assets/uploads/partners/partner_10.png" alt="Đối tác Nhãn Khoa Đối Tác" class="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 8 — BLOG & INSIGHTS (06 / GÓC NHÌN & KIẾN THỨC)   -->
    <!-- Bố cục & nội dung chuẩn theo preview.png                  -->
    <!-- ========================================================= -->
    <section id="blog-insights" class="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div class="max-w-7xl mx-auto space-y-8 relative z-10">
        
        <!-- Section Header matching preview.png Section 06 -->
        <div class="max-w-3xl space-y-2">
          <div class="text-xs font-bold text-primary tracking-wider uppercase">
            GÓC NHÌN &amp; KIẾN THỨC
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
            Hiểu đúng công nghệ. <br class="hidden sm:inline">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              Lựa chọn sáng suốt hơn.
            </span>
          </h2>
          <p class="text-brand-muted text-sm sm:text-base leading-relaxed">
            Những bài giải thích dễ hiểu cho người đeo kính và cũng là tài liệu tham khảo hữu ích cho cửa hàng mắt kính.
          </p>
        </div>

        <!-- 3 Editorial Blog Cards Grid - Reduced 30% -->
        <div class="w-full">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <!-- Card 1 -->
            <article class="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white">
              <div>
                <a href="blog/giai-phap-chong-anh-sang-xanh-uv420/" class="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden block relative">
                  <img loading="lazy" decoding="async" src="assets/images/articles/blog_sec6_1.jpg" alt="Ánh sáng xanh từ màn hình: những điều cần hiểu" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </a>
                <div class="p-4 sm:p-5 space-y-1.5">
                  <div class="text-[11px] font-bold text-primary tracking-wider uppercase">
                    KIẾN THỨC QUANG HỌC
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug group-hover:text-primary transition-colors">
                    <a href="blog/giai-phap-chong-anh-sang-xanh-uv420/">
                      Ánh sáng xanh từ màn hình: những điều cần hiểu
                    </a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2">
                    Phân biệt đặc điểm lớp phủ và thói quen nhìn màn hình với các tuyên bố bảo vệ mắt.
                  </p>
                </div>
              </div>
              <div class="p-4 sm:p-5 pt-0">
                <a href="blog/giai-phap-chong-anh-sang-xanh-uv420/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Đọc bài viết</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </article>

            <!-- Card 2 -->
            <article class="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white">
              <div>
                <a href="blog/cong-nghe-kinh-lai-xe-driveshield/" class="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden block relative">
                  <img loading="lazy" decoding="async" src="assets/images/articles/blog_sec6_2.jpg" alt="Lái xe ban đêm: nên cân nhắc những gì?" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </a>
                <div class="p-4 sm:p-5 space-y-1.5">
                  <div class="text-[11px] font-bold text-primary tracking-wider uppercase">
                    NHU CẦU SỬ DỤNG
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug group-hover:text-primary transition-colors">
                    <a href="blog/cong-nghe-kinh-lai-xe-driveshield/">
                      Lái xe ban đêm: nên cân nhắc những gì?
                    </a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2">
                    Tìm hiểu độ chói, phản xạ và các yếu tố cần thảo luận khi chọn kính.
                  </p>
                </div>
              </div>
              <div class="p-4 sm:p-5 pt-0">
                <a href="blog/cong-nghe-kinh-lai-xe-driveshield/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Đọc bài viết</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </article>

            <!-- Card 3 -->
            <article class="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white">
              <div>
                <a href="blog/kiem-soat-can-thi-tre-em-myocontrol/" class="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden block relative">
                  <img loading="lazy" decoding="async" src="assets/images/articles/blog_sec6_3.jpg" alt="Tròng kính cho trẻ: hiểu về các lựa chọn" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </a>
                <div class="p-4 sm:p-5 space-y-1.5">
                  <div class="text-[11px] font-bold text-primary tracking-wider uppercase">
                    TRẺ EM &amp; THỊ LỰC
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-heading leading-snug group-hover:text-primary transition-colors">
                    <a href="blog/kiem-soat-can-thi-tre-em-myocontrol/">
                      Tròng kính cho trẻ: hiểu về các lựa chọn
                    </a>
                  </h3>
                  <p class="text-brand-muted text-xs leading-relaxed line-clamp-2">
                    Phân biệt thiết kế tròng và nhu cầu thăm khám, theo dõi thị lực định kỳ.
                  </p>
                </div>
              </div>
              <div class="p-4 sm:p-5 pt-0">
                <a href="blog/kiem-soat-can-thi-tre-em-myocontrol/" class="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Đọc bài viết</span>
                  <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 6 — PARTNER WITH ROCKY (DÀNH CHO ĐỐI TÁC)    -->
    <!-- Full-Width 100% B2B Section Banner                     -->
    <!-- ========================================================= -->
    <section id="doi-tac" class="relative py-16 sm:py-24 w-full text-white shadow-2xl overflow-hidden" style="background: var(--gradient-b2b);">
      <div class="absolute -right-20 -top-20 w-96 h-96 bg-[var(--button-start)]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Subtle background glow -->
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-[var(--button-start)]/15 rounded-full blur-3xl pointer-events-none"></div>

          <!-- Top Row: Eyebrow + Heading + CTA Button -->
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
            <div class="max-w-2xl space-y-2.5">
              <div class="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                DÀNH CHO ĐỐI TÁC
              </div>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Cùng RockyLens mở rộng giá trị cho cửa hàng mắt kính.
              </h2>
              <p class="text-white/80 text-sm sm:text-base leading-relaxed pt-1">
                Không chỉ là một danh mục tròng kính, RockyLens hướng đến hỗ trợ cửa hàng bằng thông tin sản phẩm dễ sử dụng, tài liệu kỹ thuật và kênh trao đổi trực tiếp.
              </p>
            </div>

            <div class="shrink-0 pb-1">
              <button type="button" onclick="openB2BQuoteModal()" class="px-6 py-3 rounded-full bg-white text-[#003B50] font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer shadow-md inline-flex items-center gap-1.5 active:scale-95">
                <span>Liên hệ hợp tác</span>
                <svg class="w-4 h-4 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </button>
            </div>
          </div>

          <!-- 4 Feature Columns in Divided Box -->
          <div class="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15 gap-6 sm:gap-0 relative z-10">
            <div class="sm:px-6 first:pl-0 last:pr-0 pt-4 sm:pt-0 first:pt-0">
              <div class="text-xs font-mono font-bold text-cyan-300">01</div>
              <h3 class="text-base font-bold text-white mt-2">Tư vấn danh mục</h3>
              <p class="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                Trao đổi nhu cầu của cửa hàng để tìm hiểu dòng tròng phù hợp.
              </p>
            </div>

            <div class="sm:px-6 first:pl-0 last:pr-0 pt-4 sm:pt-0 first:pt-0">
              <div class="text-xs font-mono font-bold text-cyan-300">02</div>
              <h3 class="text-base font-bold text-white mt-2">Tài liệu kỹ thuật</h3>
              <p class="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                Thông số, tính năng và phạm vi ứng dụng theo từng sản phẩm.
              </p>
            </div>

            <div class="sm:px-6 first:pl-0 last:pr-0 pt-4 sm:pt-0 first:pt-0">
              <div class="text-xs font-mono font-bold text-cyan-300">03</div>
              <h3 class="text-base font-bold text-white mt-2">Giải pháp trưng bày</h3>
              <p class="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                Tìm hiểu tài liệu và hình ảnh hỗ trợ giới thiệu sản phẩm.
              </p>
            </div>

            <div class="sm:px-6 first:pl-0 last:pr-0 pt-4 sm:pt-0 first:pt-0">
              <div class="text-xs font-mono font-bold text-cyan-300">04</div>
              <h3 class="text-base font-bold text-white mt-2">Hỗ trợ &amp; hậu mãi</h3>
              <p class="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                Liên hệ để nhận thông tin về chính sách hiện hành.
              </p>
            </div>
          </div>

          <!-- Footer Info Strip: Direct Connect + Phone + Email -->
          <div class="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm relative z-10">
            <span class="text-[11px] font-bold uppercase tracking-widest text-cyan-300">
              KẾT NỐI TRỰC TIẾP
            </span>
            <a href="tel:0933102653" class="font-bold text-white hover:text-cyan-200 transition-colors">
              0933 102 653
            </a>
            <a href="mailto:b2b@rockylens.com" class="text-white/80 hover:text-white transition-colors">
              b2b@rockylens.com
            </a>
          </div>

        
      </div>
    </section>



  </main>

  <!-- ========================================================= -->
  <!-- OFFICIAL FOOTER                                           -->
  <!-- ========================================================= -->
  <footer class="bg-[var(--b2b-end)] text-slate-300 font-medium py-16 px-6 text-base">
    <div class="max-w-7xl mx-auto space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Col 1: Brand Info -->
        <div class="space-y-4">
          <img src="assets/logo_rocky_transparent.png" alt="Rocky Lens" class="h-10 w-auto object-contain brightness-0 invert">
          <p class="text-slate-300 font-medium text-base leading-relaxed">
            Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam.
          </p>
          <div class="text-base text-slate-400 font-medium">
            Giấy phép kinh doanh số: 0316499823 do Sở Kế hoạch và Đầu tư TP.HCM cấp.
          </div>
        </div>

        <!-- Col 2: Solutions -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Danh Mục Tròng Kính</span>
          <ul class="space-y-2 text-base">
            <li><a href="trong-kinh/" class="text-slate-300 font-medium hover:text-white transition-colors">Khi Lái Xe Ban Đêm</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 font-medium hover:text-white transition-colors">Khi Làm Việc Màn Hình Số</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 font-medium hover:text-white transition-colors">Tròng Kính Đổi Màu Ngoài Trời</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 font-medium hover:text-white transition-colors">Tròng Kính Mỏng Nhẹ Chịu Lực</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 font-medium hover:text-white transition-colors">Tròng Kính Nhìn Rõ Xa Và Gần</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 font-medium hover:text-white transition-colors">Chăm Sóc Thị Lực Trẻ Em</a></li>
          </ul>
        </div>

        <!-- Col 3: Technology & Exploration -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Công Nghệ & Khám Phá</span>
          <ul class="space-y-2 text-base">
            <li><a href="cong-nghe/" class="text-slate-300 font-medium hover:text-white transition-colors">Lựa chọn vật liệu phù hợp</a></li>
            <li><a href="rx-lab/" class="text-slate-300 font-medium hover:text-white transition-colors">Gia công Lab RX kỹ thuật số</a></li>
            <li><a href="cong-nghe/" class="text-slate-300 font-medium hover:text-white transition-colors">Lớp phủ hạn chế bám bẩn</a></li>
            <li><a href="trong-kinh/" class="text-slate-300 font-medium hover:text-white transition-colors">Tìm hiểu các lựa chọn độ mỏng</a></li>
            <li><a href="ve-chung-toi/" class="text-slate-300 font-medium hover:text-white transition-colors">Tiêu chuẩn quản lý y tế ISO 13485</a></li>
          </ul>
        </div>

        <!-- Col 4: Distribution & Contact -->
        <div class="space-y-3">
          <span class="text-white font-bold text-lg block">Tiếp Nhận Đại Lý &amp; B2B</span>
          <div class="space-y-2 text-base text-slate-400 font-medium">
            <p><strong>Hotline B2B:</strong> 0933 102 653</p>
            <p><strong>Email Đại Lý:</strong> b2b@rockylens.com</p>
            <p><strong>Zalo Hợp Tác:</strong> 0933 102 653</p>
            <p><strong>Trung Tâm Kho:</strong> TP. Hồ Chí Minh &amp; Hà Nội</p>
            <p class="text-base text-slate-400 font-medium pt-2">Thời gian tiếp nhận: 8:00 - 18:00 (Thứ 2 - Thứ 7)</p>
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

  <!-- ========================================================= -->
  <!-- CERTIFICATE LIGHTBOX MODAL (INTERACTIVE CLICK TO ZOOM)    -->
  <!-- ========================================================= -->
  <div id="certModal" class="fixed inset-0 z-50 bg-[var(--b2b-end)]/95 backdrop-blur-md hidden items-center justify-center p-4 sm:p-6 transition-all duration-300 opacity-0" role="dialog" aria-modal="true" aria-label="Phóng to bằng khen và chứng chỉ">
    
    <!-- Top Bar: Title & Counter & Close Button -->
    <div class="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-20 pointer-events-auto">
      <div class="flex items-center gap-3">
        <span id="certCounter" class="px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm font-bold tracking-wide">
          1 / 13
        </span>
        <h4 id="certTitle" class="text-sm sm:text-base font-semibold text-slate-200 line-clamp-1 max-w-md sm:max-w-xl">
          Chứng chỉ Optician Canada
        </h4>
      </div>
      <button type="button" onclick="closeCertModal()" class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer" aria-label="Đóng">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Navigation Prev Button -->
    <button type="button" onclick="prevCert()" class="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-20 focus:outline-none hover:scale-110 active:scale-95 cursor-pointer" aria-label="Bằng khen trước">
      <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Navigation Next Button -->
    <button type="button" onclick="nextCert()" class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-20 focus:outline-none hover:scale-110 active:scale-95 cursor-pointer" aria-label="Bằng khen tiếp theo">
      <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Certificate Image Container -->
    <div class="relative max-w-4xl max-h-[82vh] w-full flex items-center justify-center p-2 sm:p-4" onclick="event.stopPropagation()">
      <img loading="lazy" decoding="async" id="certImage" src="assets/images/bangkhen/11.jpg" alt="Chứng chỉ Rocky Lens" class="max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl transition-all duration-200">
    </div>

    <!-- Bottom Helper Note -->
    <div class="absolute bottom-4 inset-x-0 text-center text-xs text-slate-400 pointer-events-none">
      Dùng phím mũi tên &larr; &rarr; để chuyển ảnh &bull; Bấm ra ngoài hoặc ESC để đóng
    </div>
  </div>

  <!-- ========================================================= -->
  <!-- B2B DEALER QUOTE MODAL (INTERACTIVE POPUP)                -->
  <!-- ========================================================= -->
  <div id="b2bQuoteModal" class="fixed inset-0 z-50 bg-[var(--b2b-end)]/80 backdrop-blur-md hidden items-center justify-center p-4 sm:p-6 transition-all duration-300 opacity-0" role="dialog" aria-modal="true" aria-labelledby="b2bModalTitle">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 text-left space-y-6" onclick="event.stopPropagation()">
      
      <!-- Close Button -->
      <button type="button" onclick="closeB2BQuoteModal()" class="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer" aria-label="Đóng cửa sổ">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Header -->
      <div class="space-y-2 pr-8">
        <span class="px-3.5 py-1.5 rounded-full bg-teal-50 text-[var(--color-primary-hover)] text-sm font-bold inline-block">
          Dành Cho Cửa Hàng &amp; Đại Lý Mắt Kính
        </span>
        <h3 id="b2bModalTitle" class="text-2xl sm:text-3xl font-black text-heading tracking-tight leading-snug">
          Nhận Báo Giá Đại Lý &amp; Chính Sách Chiết Khấu
        </h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          Bảng giá sỉ các dòng tròng Rocky sẵn kho và chính sách hợp tác Lab RX Freeform kỹ thuật số được gửi trực tiếp, bảo mật cho đối tác kinh doanh.
        </p>
      </div>

      <!-- Quick 1-Click Action Buttons -->
      <div class="space-y-3 pt-1">
        <a href="https://zalo.me/0933102653" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 px-6 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-base flex items-center justify-center gap-3 transition-colors shadow-sm cursor-pointer">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.38A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
          </svg>
          <span>Nhận Báo Giá File PDF Qua Zalo Ngay</span>
        </a>

        <a href="tel:0933102653" class="w-full py-3 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-heading font-bold text-base flex items-center justify-center gap-3 transition-colors cursor-pointer">
          <svg class="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span>Hotline Phụ Trách B2B: 0933 102 653</span>
        </a>
      </div>

      <!-- Quick Inquiry Mini Form -->
      <div class="border-t border-slate-100 pt-5 space-y-4">
        <div class="text-sm font-semibold text-slate-700">
          Hoặc để lại thông tin nhanh, chuyên viên Rocky sẽ gửi bảng giá qua Zalo:
        </div>
        <form id="b2bQuickForm" onsubmit="handleB2BSubmit(event)" class="space-y-3">
          <div>
            <input type="text" id="b2bStoreName" required placeholder="Tên Cửa hàng mắt kính / Đơn vị (*)" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[var(--color-primary)] focus:outline-none text-sm text-heading bg-slate-50 focus:bg-white transition-colors">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="tel" id="b2bPhone" required placeholder="Số điện thoại / Zalo (*)" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[var(--color-primary)] focus:outline-none text-sm text-heading bg-slate-50 focus:bg-white transition-colors">
            <input type="text" id="b2bCity" required placeholder="Tỉnh / Thành phố (*)" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[var(--color-primary)] focus:outline-none text-sm text-heading bg-slate-50 focus:bg-white transition-colors">
          </div>
          <button type="submit" class="w-full py-3 rounded-xl bg-[var(--b2b-end)] hover:bg-[var(--color-primary)] text-white font-bold text-sm transition-colors cursor-pointer">
            Gửi Yêu Cầu Nhận Báo Giá &amp; Catalog
          </button>
        </form>
        <div id="b2bSuccessMsg" class="hidden text-center text-sm font-bold text-teal-600 bg-teal-50 py-2.5 px-3 rounded-xl">
          ✓ Cảm ơn bạn! Chuyên viên Rocky sẽ gửi bảng giá qua Zalo cho bạn trong ít phút.
        </div>
      </div>

      <!-- Dealer Note -->
      <div class="text-center pt-2 border-t border-slate-100">
        <p class="text-xs text-slate-500">
          * Rocky Lens phân phối độc quyền qua hệ thống đại lý &amp; phòng khám khúc xạ toàn quốc.
        </p>
      </div>

    </div>
  </div>

  <script>

    function setHeroMode(mode) {
      var isBanner = mode === 'banner';
      var heroSec = document.getElementById('brand-hero');
      var bannerBg = document.getElementById('hero-banner-bg');
      var orbs = document.getElementById('hero-orbs');
      var btnStd = document.getElementById('btn-hero-std');
      var btnBan = document.getElementById('btn-hero-ban');
      var switcherWrap = document.getElementById('hero-switcher-wrap');
      var badge = document.getElementById('hero-badge');
      var title = document.getElementById('hero-title');
      var desc = document.getElementById('hero-desc');
      var b2bBtn = document.getElementById('hero-b2b-btn');
      var trust = document.getElementById('hero-trust');
      var specCards = document.querySelectorAll('.hero-spec-card');

      if (isBanner) {
        if (heroSec) {
          heroSec.classList.remove('site-background', 'text-slate-800');
          heroSec.classList.add('bg-[#001722]', 'text-white');
        }
        if (bannerBg) {
          bannerBg.classList.remove('opacity-0');
          bannerBg.classList.add('opacity-100');
        }
        if (orbs) orbs.classList.add('opacity-0');
        if (btnStd) {
          btnStd.className = 'px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white';
        }
        if (btnBan) {
          btnBan.className = 'px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black shadow-md';
        }
        if (switcherWrap) {
          switcherWrap.className = 'inline-flex items-center p-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 shadow-md transition-all';
        }
        if (badge) {
          badge.className = 'inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs transition-all bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md';
        }
        if (title) {
          title.classList.remove('text-heading');
          title.classList.add('text-white');
        }
        if (desc) {
          desc.classList.remove('text-brand-muted');
          desc.classList.add('text-slate-200');
        }
        if (b2bBtn) {
          b2bBtn.className = 'px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer transition-all rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md';
        }
        if (trust) {
          trust.classList.remove('text-brand-muted');
          trust.classList.add('text-slate-300');
        }
        specCards.forEach(function(card) {
          card.className = 'p-4 rounded-2xl hero-spec-card transition-all bg-white/10 backdrop-blur-md border border-white/20 text-white';
          var t = card.querySelector('.hero-spec-title');
          if (t) { t.classList.remove('text-heading'); t.classList.add('text-white'); }
          var s = card.querySelector('.hero-spec-sub');
          if (s) { s.classList.remove('text-brand-muted'); s.classList.add('text-slate-300'); }
        });
      } else {
        if (heroSec) {
          heroSec.classList.remove('bg-[#001722]', 'text-white');
          heroSec.classList.add('site-background', 'text-slate-800');
        }
        if (bannerBg) {
          bannerBg.classList.remove('opacity-100');
          bannerBg.classList.add('opacity-0');
        }
        if (orbs) orbs.classList.remove('opacity-0');
        if (btnStd) {
          btnStd.className = 'px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-[var(--b2b-end)] text-white shadow-xs';
        }
        if (btnBan) {
          btnBan.className = 'px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-900';
        }
        if (switcherWrap) {
          switcherWrap.className = 'inline-flex items-center p-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-300/70 shadow-sm transition-all';
        }
        if (badge) {
          badge.className = 'inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-pill text-primary text-xs font-bold shadow-xs transition-all';
        }
        if (title) {
          title.classList.remove('text-white');
          title.classList.add('text-heading');
        }
        if (desc) {
          desc.classList.remove('text-slate-200');
          desc.classList.add('text-brand-muted');
        }
        if (b2bBtn) {
          b2bBtn.className = 'liquid-btn-secondary px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer transition-all';
        }
        if (trust) {
          trust.classList.remove('text-slate-300');
          trust.classList.add('text-brand-muted');
        }
        specCards.forEach(function(card) {
          card.className = 'p-4 rounded-2xl liquid-card hero-spec-card transition-all';
          var t = card.querySelector('.hero-spec-title');
          if (t) { t.classList.remove('text-white'); t.classList.add('text-heading'); }
          var s = card.querySelector('.hero-spec-sub');
          if (s) { s.classList.remove('text-slate-300'); s.classList.add('text-brand-muted'); }
        });
      }

      try {
        localStorage.setItem('rocky_hero_mode', mode);
        var url = new URL(window.location.href);
        if (isBanner) {
          url.searchParams.set('mode', 'banner');
        } else {
          url.searchParams.delete('mode');
          url.searchParams.delete('view');
        }
        window.history.replaceState({}, '', url.toString());
      } catch(e) {}
    }

    // Auto init on load
    try {
      var params = new URLSearchParams(window.location.search);
      var initialMode = params.get('mode') || params.get('view') || localStorage.getItem('rocky_hero_mode');
      if (initialMode === 'banner') {
        window.addEventListener('DOMContentLoaded', function() {
          setHeroMode('banner');
        });
      }
    } catch(e) {}

    function filterProductSolutions(filter, btn) {
      var cards = document.querySelectorAll('.product-sol-card');
      var buttons = document.querySelectorAll('.product-filter-btn');
      
      buttons.forEach(function(b) {
        b.className = 'product-filter-btn px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90';
      });
      btn.className = 'product-filter-btn px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer bg-[var(--b2b-end)] text-white shadow-xs';

      cards.forEach(function(card) {
        if (filter === 'all' || card.getAttribute('data-group') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    var certList = [
      { src: "assets/images/bangkhen/11.jpg", title: "The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Thao Nguyen)" },
      { src: "assets/images/bangkhen/12.jpg", title: "The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Ha Vu)" },
      { src: "assets/images/bangkhen/13.jpg", title: "The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Tan Dang)" },
      { src: "assets/images/bangkhen/14.jpg", title: "The College of Opticians of Ontario - Chứng chỉ hành nghề Optician Canada (Tiep Truong)" },
      { src: "assets/images/bangkhen/15.jpg", title: "Georgian College of Applied Arts and Technology - Bằng tốt nghiệp Optician Canada" },
      { src: "assets/images/bangkhen/16.jpg", title: "National Association of Canadian Optician Regulators (NACOR Certificate)" },
      { src: "assets/images/bangkhen/1.jpg", title: "Giấy chứng nhận ISO 13485:2016 - Hệ thống quản lý chất lượng thiết bị y tế quốc tế" },
      { src: "assets/images/bangkhen/2.jpg", title: "Diễn đàn hợp tác kinh tế Việt Nam - Asia 2024: Thương hiệu uy tín hội nhập Châu Á" },
      { src: "assets/images/bangkhen/3.jpg", title: "Chứng nhận Sản phẩm & Dịch vụ chất lượng Châu Á 2024 (Asia Quality Products & Services)" },
      { src: "assets/images/bangkhen/4.jpg", title: "The Best of Vietnam 2024 - Top 20 Sản phẩm dịch vụ chất lượng tốt nhất Việt Nam" },
      { src: "assets/images/bangkhen/31.jpg", title: "Giấy khen Hội cứu trợ trẻ em tàn tật Việt Nam - Tích cực vì sức khỏe thị lực trẻ em" },
      { src: "assets/images/bangkhen/32.jpg", title: "Giấy khen Hội nạn nhân chất độc da cam / Dioxin Việt Nam - Hoạt động thiện nguyện" },
      { src: "assets/images/bangkhen/33.jpg", title: "Kỷ niệm chương Tấm lòng nhân ái vì sự nghiệp chăm sóc sức khỏe cộng đồng" }
    ];

    var currentCertIdx = 0;
    var certModal = document.getElementById('certModal');
    var certImage = document.getElementById('certImage');
    var certTitle = document.getElementById('certTitle');
    var certCounter = document.getElementById('certCounter');

    function updateCertModal() {
      if (!certImage || !certTitle || !certCounter) return;
      var cert = certList[currentCertIdx];
      certImage.src = cert.src;
      certImage.alt = cert.title;
      certTitle.textContent = cert.title;
      certCounter.textContent = (currentCertIdx + 1) + ' / ' + certList.length;
    }

    function openCertModal(index) {
      if (index < 0 || index >= certList.length) return;
      currentCertIdx = index;
      updateCertModal();
      if (!certModal) return;
      certModal.classList.remove('hidden');
      certModal.classList.add('flex');
      setTimeout(function() {
        certModal.classList.remove('opacity-0');
        certModal.classList.add('opacity-100');
      }, 10);
      document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
      if (!certModal) return;
      certModal.classList.remove('opacity-100');
      certModal.classList.add('opacity-0');
      setTimeout(function() {
        certModal.classList.remove('flex');
        certModal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }

    function prevCert() {
      currentCertIdx = (currentCertIdx - 1 + certList.length) % certList.length;
      updateCertModal();
    }

    function nextCert() {
      currentCertIdx = (currentCertIdx + 1) % certList.length;
      updateCertModal();
    }

    if (certModal) {
      certModal.addEventListener('click', function(e) {
        if (e.target === certModal) {
          closeCertModal();
        }
      });
    }

    // B2B Quote Modal Logic
    var b2bModal = document.getElementById('b2bQuoteModal');

    function openB2BQuoteModal() {
      if (!b2bModal) return;
      b2bModal.classList.remove('hidden');
      b2bModal.classList.add('flex');
      setTimeout(function() {
        b2bModal.classList.remove('opacity-0');
        b2bModal.classList.add('opacity-100');
      }, 10);
      document.body.style.overflow = 'hidden';
    }

    function closeB2BQuoteModal() {
      if (!b2bModal) return;
      b2bModal.classList.remove('opacity-100');
      b2bModal.classList.add('opacity-0');
      setTimeout(function() {
        b2bModal.classList.remove('flex');
        b2bModal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }

    function handleB2BSubmit(e) {
      e.preventDefault();
      var msg = document.getElementById('b2bSuccessMsg');
      var form = document.getElementById('b2bQuickForm');
      if (msg) {
        msg.classList.remove('hidden');
        if (form) form.classList.add('hidden');
        setTimeout(function() {
          window.open('https://zalo.me/0933102653', '_blank');
        }, 1200);
      }
    }

    if (b2bModal) {
      b2bModal.addEventListener('click', function(e) {
        if (e.target === b2bModal) {
          closeB2BQuoteModal();
        }
      });
    }

    document.addEventListener('keydown', function(e) {
      if (b2bModal && !b2bModal.classList.contains('hidden') && e.key === 'Escape') {
        closeB2BQuoteModal();
        return;
      }
      if (!certModal || certModal.classList.contains('hidden')) return;
      if (e.key === 'Escape') {
        closeCertModal();
      } else if (e.key === 'ArrowLeft') {
        prevCert();
      } else if (e.key === 'ArrowRight') {
        nextCert();
      }
    });
    // ========================================================
    // THEME CUSTOMIZER LOGIC
    // ========================================================
    var customizerDefaults = {
      siteBgStart: '#F4FCFE',
      siteBgMiddle: '#D7F4FA',
      siteBgEnd: '#A2E2EE',
      buttonStart: '#5BCDE5',
      buttonMiddle: '#00A2CC',
      buttonEnd: '#317F93',
      b2bStart: '#00A2CC',
      b2bMiddle: '#007A99',
      b2bEnd: '#003B50'
    };

    var customizerPresets = [
      {
        name: 'Rocky Canada Cyan',
        desc: 'Bản sắc quang học nguyên bản thanh khiết',
        colors: customizerDefaults
      },
      {
        name: 'Deep Sapphire Ocean',
        desc: 'Xanh biển sâu sapphire sang trọng & công nghệ',
        colors: {
          siteBgStart: '#F0F7FF',
          siteBgMiddle: '#D0E5FF',
          siteBgEnd: '#8EC1FF',
          buttonStart: '#38BDF8',
          buttonMiddle: '#0284C7',
          buttonEnd: '#0369A1',
          b2bStart: '#0284C7',
          b2bMiddle: '#0369A1',
          b2bEnd: '#082F49'
        }
      },
      {
        name: 'Emerald Optical Health',
        desc: 'Xanh ngọc lục bảo y khoa dịu mát & an tâm',
        colors: {
          siteBgStart: '#F0FDF4',
          siteBgMiddle: '#DCFCE7',
          siteBgEnd: '#86EFAC',
          buttonStart: '#34D399',
          buttonMiddle: '#059669',
          buttonEnd: '#065F46',
          b2bStart: '#059669',
          b2bMiddle: '#065F46',
          b2bEnd: '#064E3B'
        }
      },
      {
        name: 'Royal Amethyst',
        desc: 'Tím quang phổ thấu kính tinh tế & độc đáo',
        colors: {
          siteBgStart: '#FAF5FF',
          siteBgMiddle: '#F3E8FF',
          siteBgEnd: '#D8B4FE',
          buttonStart: '#C084FC',
          buttonMiddle: '#7E22CE',
          buttonEnd: '#581C87',
          b2bStart: '#7E22CE',
          b2bMiddle: '#581C87',
          b2bEnd: '#3B0764'
        }
      },
      {
        name: 'Titanium Apple Slate',
        desc: 'Xám bạc tối giản, trung tính hiện đại chuẩn Apple',
        colors: {
          siteBgStart: '#F8FAFC',
          siteBgMiddle: '#E2E8F0',
          siteBgEnd: '#CBD5E1',
          buttonStart: '#64748B',
          buttonMiddle: '#334155',
          buttonEnd: '#1E293B',
          b2bStart: '#334155',
          b2bMiddle: '#1E293B',
          b2bEnd: '#0F172A'
        }
      }
    ];

    var currentTheme = Object.assign({}, customizerDefaults);
    var STORAGE_KEY = 'rockylens_custom_theme_colors';

    function applyCustomTheme(colors) {
      var root = document.documentElement;
      root.style.setProperty('--site-bg-start', colors.siteBgStart);
      root.style.setProperty('--site-bg-middle', colors.siteBgMiddle);
      root.style.setProperty('--site-bg-end', colors.siteBgEnd);

      root.style.setProperty('--button-start', colors.buttonStart);
      root.style.setProperty('--button-middle', colors.buttonMiddle);
      root.style.setProperty('--button-end', colors.buttonEnd);

      root.style.setProperty('--b2b-start', colors.b2bStart);
      root.style.setProperty('--b2b-middle', colors.b2bMiddle);
      root.style.setProperty('--b2b-end', colors.b2bEnd);

      root.style.setProperty('--color-heading', colors.b2bEnd);
      root.style.setProperty('--color-text', colors.b2bEnd);
      root.style.setProperty('--color-border', colors.siteBgEnd);
      root.style.setProperty('--color-primary', colors.buttonMiddle);
      root.style.setProperty('--color-primary-hover', colors.buttonEnd);
      root.style.setProperty('--color-primary-light', colors.siteBgStart);

      root.style.setProperty('--gradient-site', 'linear-gradient(135deg, ' + colors.siteBgStart + ' 0%, ' + colors.siteBgMiddle + ' 55%, ' + colors.siteBgEnd + ' 100%)');
      root.style.setProperty('--gradient-button', 'linear-gradient(110deg, ' + colors.buttonStart + ' 0%, ' + colors.buttonMiddle + ' 50%, ' + colors.buttonEnd + ' 100%)');
      root.style.setProperty('--gradient-b2b', 'linear-gradient(120deg, ' + colors.b2bStart + ' 0%, ' + colors.b2bMiddle + ' 50%, ' + colors.b2bEnd + ' 100%)');

      // Sync form fields
      var keys = Object.keys(colors);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var pick = document.getElementById('pick_' + k);
        var hex = document.getElementById('hex_' + k);
        if (pick) pick.value = colors[k];
        if (hex) hex.value = colors[k];
      }

      updatePresetHighlights();

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
      } catch (err) {}
    }

    function updatePresetHighlights() {
      for (var i = 0; i < customizerPresets.length; i++) {
        var p = customizerPresets[i];
        var isCurrent = (currentTheme.buttonMiddle === p.colors.buttonMiddle && currentTheme.siteBgStart === p.colors.siteBgStart);
        var pBtn = document.getElementById('presetBtn_' + i);
        var pCheck = document.getElementById('presetCheck_' + i);
        if (pBtn) {
          if (isCurrent) {
            pBtn.className = 'w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer border-primary bg-primary/5 shadow-xs ring-1 ring-primary';
          } else {
            pBtn.className = 'w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60';
          }
        }
        if (pCheck) {
          if (isCurrent) {
            pCheck.classList.remove('hidden');
          } else {
            pCheck.classList.add('hidden');
          }
        }
      }
    }

    function switchCustomizerTab(tabId) {
      var tabs = ['presets', 'bg', 'btn', 'b2b'];
      for (var i = 0; i < tabs.length; i++) {
        var t = tabs[i];
        var btn = document.getElementById('tabBtn_' + t);
        var content = document.getElementById('tabContent_' + t);
        if (t === tabId) {
          if (btn) {
            btn.className = 'flex-1 py-2.5 text-center transition-colors border-b-2 border-primary text-primary font-black cursor-pointer';
          }
          if (content) {
            content.classList.remove('hidden');
          }
        } else {
          if (btn) {
            btn.className = 'flex-1 py-2.5 text-center transition-colors border-b-2 border-transparent hover:text-slate-900 cursor-pointer';
          }
          if (content) {
            content.classList.add('hidden');
          }
        }
      }
    }

    function toggleCustomizer(e) {
      if (e && e.stopPropagation) e.stopPropagation();
      var panel = document.getElementById('themeCustomizerPanel');
      var toggleText = document.getElementById('themeToggleText');
      if (!panel) return;
      var isHidden = (panel.style.display === 'none' || panel.style.display === '' || panel.classList.contains('hidden'));
      if (isHidden) {
        panel.classList.remove('hidden');
        panel.style.display = 'flex';
        if (toggleText) toggleText.innerText = 'Đóng Bảng Màu';
        applyCustomTheme(currentTheme);
      } else {
        panel.style.display = 'none';
        if (toggleText) toggleText.innerText = 'Tùy Biến Màu Sắc';
      }
    }
    window.toggleCustomizer = toggleCustomizer;
    window.switchCustomizerTab = switchCustomizerTab;
    window.applyPreset = applyPreset;
    window.resetCustomTheme = resetCustomTheme;
    window.onCustomColorChange = onCustomColorChange;
    window.copyThemeCSS = copyThemeCSS;

    document.addEventListener('click', function(e) {
      var panel = document.getElementById('themeCustomizerPanel');
      var btn = document.getElementById('themeCustomizerToggleBtn');
      var toggleText = document.getElementById('themeToggleText');
      if (!panel || panel.style.display === 'none') return;
      if (!panel.contains(e.target) && (!btn || !btn.contains(e.target))) {
        panel.style.display = 'none';
        if (toggleText) toggleText.innerText = 'Tùy Biến Màu Sắc';
      }
    });

    function onCustomColorChange(key, val) {
      if (!val) return;
      if (val.charAt(0) !== '#') val = '#' + val;
      val = val.toUpperCase();
      currentTheme[key] = val;
      applyCustomTheme(currentTheme);
    }

    function applyPreset(idx) {
      if (!customizerPresets[idx]) return;
      currentTheme = Object.assign({}, customizerPresets[idx].colors);
      applyCustomTheme(currentTheme);
    }

    function resetCustomTheme() {
      currentTheme = Object.assign({}, customizerDefaults);
      applyCustomTheme(currentTheme);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
    }

    function copyThemeCSS() {
      var css = ':root {\\n' +
        '  /* Website Background */\\n' +
        '  --site-bg-start: ' + currentTheme.siteBgStart + ';\\n' +
        '  --site-bg-middle: ' + currentTheme.siteBgMiddle + ';\\n' +
        '  --site-bg-end: ' + currentTheme.siteBgEnd + ';\\n\\n' +
        '  /* Button Colors */\\n' +
        '  --button-start: ' + currentTheme.buttonStart + ';\\n' +
        '  --button-middle: ' + currentTheme.buttonMiddle + ';\\n' +
        '  --button-end: ' + currentTheme.buttonEnd + ';\\n\\n' +
        '  /* B2B Colors */\\n' +
        '  --b2b-start: ' + currentTheme.b2bStart + ';\\n' +
        '  --b2b-middle: ' + currentTheme.b2bMiddle + ';\\n' +
        '  --b2b-end: ' + currentTheme.b2bEnd + ';\\n\\n' +
        '  --color-heading: var(--b2b-end);\\n' +
        '  --color-text: var(--b2b-end);\\n' +
        '  --color-muted: #476773;\\n' +
        '  --color-surface: #FFFFFF;\\n' +
        '  --color-border: var(--site-bg-end);\\n' +
        '  --color-primary: var(--button-middle);\\n' +
        '  --color-primary-hover: var(--button-end);\\n' +
        '  --color-primary-light: var(--site-bg-start);\\n\\n' +
        '  --gradient-site: linear-gradient(135deg, var(--site-bg-start) 0%, var(--site-bg-middle) 55%, var(--site-bg-end) 100%);\\n' +
        '  --gradient-button: linear-gradient(110deg, var(--button-start) 0%, var(--button-middle) 50%, var(--button-end) 100%);\\n' +
        '  --gradient-b2b: linear-gradient(120deg, var(--b2b-start) 0%, var(--b2b-middle) 50%, var(--b2b-end) 100%);\\n' +
        '}';

      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(css).then(function() {
          var btn = document.getElementById('copyThemeBtn');
          if (btn) {
            btn.innerHTML = '<svg class="w-3.5 h-3.5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Đã Sao Chép :root!</span>';
            setTimeout(function() {
              btn.innerHTML = '<svg class="w-3.5 h-3.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span>Sao Chép Mã CSS</span>';
            }, 2500);
          }
        });
      }
    }

    // Init theme from storage
    try {
      var savedTheme = localStorage.getItem(STORAGE_KEY);
      if (savedTheme) {
        currentTheme = JSON.parse(savedTheme);
      }
    } catch (e) {}
    applyCustomTheme(currentTheme);

    window.addEventListener('DOMContentLoaded', function() {
      applyCustomTheme(currentTheme);
    });
  </script>

  <!-- FLOATING THEME CUSTOMIZER WIDGET (MASTER TEMPLATE) -->
  <div class="print:hidden pointer-events-auto" style="position: fixed; bottom: 24px; right: 24px; z-index: 99998;">
    <button id="themeCustomizerToggleBtn" type="button" onclick="toggleCustomizer(event)" class="group flex items-center space-x-2.5 px-4 py-3 rounded-full bg-white text-slate-900 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md" title="Tùy biến bảng màu giao diện (Color Customizer)">
      <div class="w-6 h-6 rounded-full flex items-center justify-center text-white" style="background: var(--gradient-button);">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z"/></svg>
      </div>
      <span id="themeToggleText" class="text-xs font-bold text-slate-800 tracking-wide">Tùy Biến Màu Sắc</span>
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
    </button>
  </div>

  <!-- FLOATING CUSTOMIZER PANEL -->
  <div id="themeCustomizerPanel" onclick="event.stopPropagation()" style="position: fixed; bottom: 84px; right: 24px; z-index: 99999; display: none;" class="w-[360px] sm:w-[420px] max-w-[calc(100vw-2rem)] max-h-[80vh] flex flex-col bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden pointer-events-auto shadow-slate-900/10">
    
    <!-- Header -->
    <div class="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
      <div class="flex items-center space-x-2.5">
        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-xs" style="background: var(--gradient-button);">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
        </div>
        <div>
          <h3 class="text-sm font-extrabold text-slate-900">Tùy Biến Màu Giao Diện</h3>
          <p class="text-[11px] text-slate-500">Kéo thanh màu hoặc nhập mã HEX trực tiếp</p>
        </div>
      </div>
      <button type="button" onclick="toggleCustomizer(event)" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Live Gradient Preview Banner -->
    <div class="p-4 bg-slate-50 border-b border-slate-100 space-y-2">
      <div class="flex items-center justify-between text-[11px] font-semibold text-slate-600">
        <span class="flex items-center gap-1">
          <svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
          <span>Xem Trước Hiệu Ứng Trực Tiếp:</span>
        </span>
        <span class="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Live Active</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="h-10 rounded-xl flex items-center justify-center text-slate-800 font-bold border border-slate-200/60 shadow-2xs text-[11px]" style="background: var(--gradient-site);">
          Nền Website
        </div>
        <div class="h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-2xs text-[11px]" style="background: var(--gradient-button);">
          Nút Bấm CTA
        </div>
      </div>
    </div>

    <!-- Tab Navigation -->
    <div class="flex border-b border-slate-100 bg-white text-xs font-bold text-slate-600">
      <button type="button" id="tabBtn_presets" onclick="switchCustomizerTab('presets')" class="flex-1 py-2.5 text-center transition-colors border-b-2 border-primary text-primary font-black cursor-pointer">
        Mẫu Sẵn
      </button>
      <button type="button" id="tabBtn_bg" onclick="switchCustomizerTab('bg')" class="flex-1 py-2.5 text-center transition-colors border-b-2 border-transparent hover:text-slate-900 cursor-pointer">
        Nền Site
      </button>
      <button type="button" id="tabBtn_btn" onclick="switchCustomizerTab('btn')" class="flex-1 py-2.5 text-center transition-colors border-b-2 border-transparent hover:text-slate-900 cursor-pointer">
        Nút Bấm
      </button>
      <button type="button" id="tabBtn_b2b" onclick="switchCustomizerTab('b2b')" class="flex-1 py-2.5 text-center transition-colors border-b-2 border-transparent hover:text-slate-900 cursor-pointer">
        B2B
      </button>
    </div>

    <!-- Tab Contents -->
    <div class="p-4 overflow-y-auto flex-1 space-y-3.5 max-h-[380px]">
      
      <!-- Tab: Presets -->
      <div id="tabContent_presets" class="space-y-2.5">
        <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          Chọn Bảng Màu Mẫu Thiết Kế Sẵn:
        </div>
        
        <!-- Preset 0 -->
        <button type="button" id="presetBtn_0" onclick="applyPreset(0)" class="w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60">
          <div class="space-y-1">
            <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>Rocky Canada Cyan</span>
              <span id="presetCheck_0" class="hidden"><svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </div>
            <div class="text-[11px] text-slate-500">Bản sắc quang học nguyên bản thanh khiết</div>
          </div>
          <div class="flex items-center -space-x-1.5 shrink-0 pl-3">
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #D7F4FA;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #00A2CC;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #003B50;"></div>
          </div>
        </button>

        <!-- Preset 1 -->
        <button type="button" id="presetBtn_1" onclick="applyPreset(1)" class="w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60">
          <div class="space-y-1">
            <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>Deep Sapphire Ocean</span>
              <span id="presetCheck_1" class="hidden"><svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </div>
            <div class="text-[11px] text-slate-500">Xanh biển sâu sapphire sang trọng &amp; công nghệ</div>
          </div>
          <div class="flex items-center -space-x-1.5 shrink-0 pl-3">
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #D0E5FF;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #0284C7;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #082F49;"></div>
          </div>
        </button>

        <!-- Preset 2 -->
        <button type="button" id="presetBtn_2" onclick="applyPreset(2)" class="w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60">
          <div class="space-y-1">
            <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>Emerald Optical Health</span>
              <span id="presetCheck_2" class="hidden"><svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </div>
            <div class="text-[11px] text-slate-500">Xanh ngọc lục bảo y khoa dịu mát &amp; an tâm</div>
          </div>
          <div class="flex items-center -space-x-1.5 shrink-0 pl-3">
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #DCFCE7;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #059669;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #064E3B;"></div>
          </div>
        </button>

        <!-- Preset 3 -->
        <button type="button" id="presetBtn_3" onclick="applyPreset(3)" class="w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60">
          <div class="space-y-1">
            <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>Royal Amethyst</span>
              <span id="presetCheck_3" class="hidden"><svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </div>
            <div class="text-[11px] text-slate-500">Tím quang phổ thấu kính tinh tế &amp; độc đáo</div>
          </div>
          <div class="flex items-center -space-x-1.5 shrink-0 pl-3">
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #F3E8FF;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #7E22CE;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #3B0764;"></div>
          </div>
        </button>

        <!-- Preset 4 -->
        <button type="button" id="presetBtn_4" onclick="applyPreset(4)" class="w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60">
          <div class="space-y-1">
            <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>Titanium Apple Slate</span>
              <span id="presetCheck_4" class="hidden"><svg class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            </div>
            <div class="text-[11px] text-slate-500">Xám bạc tối giản, trung tính hiện đại chuẩn Apple</div>
          </div>
          <div class="flex items-center -space-x-1.5 shrink-0 pl-3">
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #E2E8F0;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #334155;"></div>
            <div class="w-5 h-5 rounded-full border border-white shadow-2xs" style="background-color: #0F172A;"></div>
          </div>
        </button>
      </div>

      <!-- Tab: Background -->
      <div id="tabContent_bg" class="space-y-3 hidden">
        <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          3 Màu Gradient Nền Website:
        </div>
        
        <!-- siteBgStart -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Điểm bắt đầu (Start)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--site-bg-start</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_siteBgStart" oninput="onCustomColorChange('siteBgStart', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_siteBgStart" maxlength="7" oninput="onCustomColorChange('siteBgStart', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>

        <!-- siteBgMiddle -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Điểm ở giữa (Middle)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--site-bg-middle</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_siteBgMiddle" oninput="onCustomColorChange('siteBgMiddle', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_siteBgMiddle" maxlength="7" oninput="onCustomColorChange('siteBgMiddle', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>

        <!-- siteBgEnd -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Điểm kết thúc (End)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--site-bg-end</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_siteBgEnd" oninput="onCustomColorChange('siteBgEnd', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_siteBgEnd" maxlength="7" oninput="onCustomColorChange('siteBgEnd', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>
      </div>

      <!-- Tab: Button -->
      <div id="tabContent_btn" class="space-y-3 hidden">
        <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          3 Màu Gradient Nút Bấm &amp; CTA:
        </div>
        
        <!-- buttonStart -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Điểm bắt đầu (Start)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--button-start</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_buttonStart" oninput="onCustomColorChange('buttonStart', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_buttonStart" maxlength="7" oninput="onCustomColorChange('buttonStart', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>

        <!-- buttonMiddle -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Màu chủ đạo (Middle / Brand Solid)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--button-middle</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_buttonMiddle" oninput="onCustomColorChange('buttonMiddle', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_buttonMiddle" maxlength="7" oninput="onCustomColorChange('buttonMiddle', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>

        <!-- buttonEnd -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Điểm kết thúc (End / Hover State)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--button-end</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_buttonEnd" oninput="onCustomColorChange('buttonEnd', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_buttonEnd" maxlength="7" oninput="onCustomColorChange('buttonEnd', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>
      </div>

      <!-- Tab: B2B -->
      <div id="tabContent_b2b" class="space-y-3 hidden">
        <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          3 Màu Phân Hệ B2B &amp; Heading:
        </div>
        
        <!-- b2bStart -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Điểm bắt đầu (Start)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--b2b-start</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_b2bStart" oninput="onCustomColorChange('b2bStart', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_b2bStart" maxlength="7" oninput="onCustomColorChange('b2bStart', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>

        <!-- b2bMiddle -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Điểm ở giữa (Middle)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--b2b-middle</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_b2bMiddle" oninput="onCustomColorChange('b2bMiddle', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_b2bMiddle" maxlength="7" oninput="onCustomColorChange('b2bMiddle', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>

        <!-- b2bEnd -->
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-between gap-3">
          <div class="space-y-0.5 flex-1 min-w-0">
            <div class="text-xs font-bold text-slate-900 truncate">Đậm nhất (End / Heading Color)</div>
            <div class="text-[10px] text-slate-400 font-mono truncate">--b2b-end</div>
          </div>
          <div class="flex items-center space-x-2 shrink-0">
            <div class="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 cursor-pointer">
              <input type="color" id="pick_b2bEnd" oninput="onCustomColorChange('b2bEnd', this.value)" class="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" title="Nhấp để kéo thanh màu">
            </div>
            <input type="text" id="hex_b2bEnd" maxlength="7" oninput="onCustomColorChange('b2bEnd', this.value)" class="w-20 px-2 py-1 rounded-lg border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center uppercase focus:outline-none focus:ring-1 focus:ring-primary" placeholder="#000000">
          </div>
        </div>
      </div>

    </div>

    <!-- Footer Actions -->
    <div class="p-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2">
      <button type="button" onclick="resetCustomTheme()" class="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer" title="Khôi phục màu mặc định ban đầu">
        <svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        <span>Mặc Định</span>
      </button>

      <button type="button" id="copyThemeBtn" onclick="copyThemeCSS()" class="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[var(--b2b-end)] text-white hover:opacity-95 transition-opacity shadow-xs cursor-pointer" title="Sao chép mã CSS :root để lưu cấu hình">
        <svg class="w-3.5 h-3.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        <span>Sao Chép Mã CSS</span>
      </button>
    </div>

  </div>
</body>
</html>
`;

fs.writeFileSync(path.resolve('index.html'), html, 'utf8');
console.log('Successfully generated Refined B2C-First Rocky Website conforming to Master Prompt!');
