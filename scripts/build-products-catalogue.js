import fs from 'fs';
import path from 'path';

// Load all 12 products from content/products/
const productsDir = path.resolve('content/products');
const productFiles = fs.readdirSync(productsDir).filter(f => f.endsWith('.json'));
const products = productFiles.map(f => JSON.parse(fs.readFileSync(path.join(productsDir, f), 'utf8')));

// Map local image paths for static catalogue
products.forEach(p => {
  if (p.featuredImage && p.featuredImage.startsWith('/images/')) {
    p.localImage = '../assets' + p.featuredImage;
    if (!fs.existsSync(p.localImage.replace('../', ''))) {
      p.localImage = '../assets/images/real/sol_anh_sang_xanh.png';
    }
  } else {
    p.localImage = '../assets/images/real/sol_anh_sang_xanh.png';
  }
});

const html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catalogue Tròng Kính Quang Học Rocky Lens Canada</title>
  <meta name="description" content="Toàn bộ catalogue tròng kính quang học chính hãng Canada Opticians phân phối bởi Clearly Vietnam. Đơn tròng, đa tròng Freeform, lọc ánh sáng xanh, đổi màu và lái xe đêm.">
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            rocky: {
              teal: '#0B7B8A',
              tealDark: '#086370',
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
            sans: ["'SF Pro Display'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"]
          }
        }
      }
    }
  </script>

  <style>
    @font-face {
      font-family: "SF Pro Display";
      src: url("../assets/fonts/sf-pro-display/SF-Pro-Display-Regular.woff2") format("woff2");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("../assets/fonts/sf-pro-display/SF-Pro-Display-Medium.woff2") format("woff2");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("../assets/fonts/sf-pro-display/SF-Pro-Display-Semibold.woff2") format("woff2");
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("../assets/fonts/sf-pro-display/SF-Pro-Display-Bold.woff2") format("woff2");
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }

    * {
      font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    html, body {
      overflow-x: clip;
      max-width: 100%;
      background-color: #F5F5F7;
      color: #0F172A;
      font-size: 16px;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    .apple-nav-blur {
      background-color: rgba(245, 245, 247, 0.90);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .motion-item {
      animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  </style>
</head>
<body class="bg-[#F5F5F7] text-[#0F172A] selection:bg-[#0B7B8A] selection:text-white">

  <!-- TOP SLIM BAR -->
  <div class="bg-[#0E253A] text-white py-2.5 px-6 text-base">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-teal-300 font-semibold text-base">Rocky Lens Canada</span>
        <span class="text-slate-300 text-base hidden sm:inline">Phân phối độc quyền bởi Clearly Vietnam</span>
      </div>
      <div class="flex items-center gap-6 text-base font-medium">
        <a href="tel:0933102653" class="text-white hover:text-teal-300 transition-colors">Hotline: 0933 102 653</a>
        <a href="https://zalo.me/0933102653" target="_blank" rel="noopener noreferrer" class="text-teal-300 hover:text-white transition-colors">Zalo B2B</a>
      </div>
    </div>
  </div>

  <!-- NAVIGATION BAR -->
  <header class="sticky top-0 z-40 apple-nav-blur">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
      
      <a href="../" class="flex items-center gap-3">
        <img src="../assets/logo_rocky_transparent.png" alt="Rocky Lens Canada" class="h-9 sm:h-10 w-auto object-contain">
      </a>

      <nav class="hidden lg:flex items-center gap-7 text-base font-semibold text-slate-800">
        <a href="../" class="hover:text-[#0B7B8A] transition-colors">Trang chủ</a>
        <a href="../#trong-kinh" class="text-[#0B7B8A] font-bold">Tròng kính</a>
        <a href="../#kham-pha-kien-thuc" class="hover:text-[#0B7B8A] transition-colors">Khám phá tròng kính</a>
        <a href="../#ve-chung-toi" class="hover:text-[#0B7B8A] transition-colors">Về chúng tôi</a>
        <a href="../#doi-tac" class="hover:text-[#0B7B8A] transition-colors">Dành cho đối tác</a>
        <a href="../#lien-he" class="hover:text-[#0B7B8A] transition-colors">Liên hệ</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="../#bao-gia" class="px-5 py-2.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center">
          Báo giá đại lý
        </a>
      </div>

    </div>
  </header>

  <!-- HERO SECTION WITH DISPLAY TYPOGRAPHY & FOCAL POINT -->
  <section class="pt-12 sm:pt-16 pb-12 px-6">
    <div class="max-w-7xl mx-auto space-y-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-8 space-y-4">
          <h1 class="text-3xl sm:text-5xl lg:text-7xl font-black text-[#0E253A] tracking-tight leading-[1.08] motion-item">
            Catalogue Tròng Kính Rocky
          </h1>
          <p class="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed motion-item">
            Toàn bộ 12 giải pháp quang học chính hãng Canada Opticians: từ đơn tròng kỹ thuật số 1.56 đến 1.74 siêu mỏng, đa tròng Freeform HD, chống ánh sáng xanh UV420 và tròng kiểm soát cận thị.
          </p>
        </div>

        <div class="lg:col-span-4 flex justify-center motion-item">
          <div class="bg-white p-6 rounded-3xl w-full text-center space-y-2">
            <span class="text-4xl font-black text-[#0B7B8A] block">12 Dòng Tròng</span>
            <span class="text-base font-semibold text-slate-800 block">Sẵn hàng kho TP.HCM & Hà Nội</span>
            <p class="text-sm text-slate-600">Giao hàng 2h nội thành • Chiết khấu sỉ trực tiếp</p>
          </div>
        </div>
      </div>

      <!-- Search & Category Filters -->
      <div class="space-y-4 pt-4">
        <!-- Live Search -->
        <div class="max-w-md">
          <input type="text" id="catalogue-search" placeholder="Tìm theo tên tròng, chiết suất 1.56, 1.60, 1.67, 1.74, BlueCut..." 
                 oninput="filterProducts()" 
                 class="w-full px-5 py-3.5 rounded-2xl bg-white text-base text-slate-800 border-0 focus:ring-2 focus:ring-[#0B7B8A] outline-none">
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap items-center gap-2 pt-1 text-sm font-semibold">
          <button onclick="setCategory('all')" id="filter-all" class="cat-pill px-4 py-2 rounded-full bg-[#0B7B8A] text-white transition-colors">Tất cả (12)</button>
          <button onclick="setCategory('don-trong')" id="filter-don-trong" class="cat-pill px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 transition-colors">Đơn tròng (4)</button>
          <button onclick="setCategory('da-trong')" id="filter-da-trong" class="cat-pill px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 transition-colors">Đa tròng Freeform (3)</button>
          <button onclick="setCategory('loc-anh-sang-xanh')" id="filter-loc-anh-sang-xanh" class="cat-pill px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 transition-colors">Lọc ánh sáng xanh (3)</button>
          <button onclick="setCategory('doi-mau')" id="filter-doi-mau" class="cat-pill px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 transition-colors">Đổi màu UV (2)</button>
          <button onclick="setCategory('lai-xe')" id="filter-lai-xe" class="cat-pill px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 transition-colors">Lái xe đêm (1)</button>
          <button onclick="setCategory('kiem-soat-can-thi')" id="filter-kiem-soat-can-thi" class="cat-pill px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 transition-colors">Cận thị trẻ em (1)</button>
        </div>
      </div>

    </div>
  </section>

  <!-- PRODUCTS GRID -->
  <section class="pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${products.map((p, idx) => `
          <div class="product-item bg-white rounded-3xl overflow-hidden flex flex-col justify-between motion-item" 
               data-categories="${(p.categoryIds || []).join(' ')}"
               data-search="${(p.name + ' ' + (p.tagline || '') + ' ' + (p.refractiveIndex || '') + ' ' + (p.badge || '')).toLowerCase()}">
            <div>
              <div class="h-64 bg-slate-900 overflow-hidden relative flex items-center justify-center p-4">
                <img src="${p.localImage}" alt="${p.name}" class="max-h-full max-w-full object-contain">
                <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E253A] text-teal-300 text-sm font-bold">
                  Chiết Suất ${p.refractiveIndex || '1.60'}
                </span>
                ${p.badge ? `<span class="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B7B8A] text-white text-sm font-bold">${p.badge}</span>` : ''}
              </div>
              <div class="p-6 space-y-3">
                <h3 class="text-xl font-bold text-[#0E253A] leading-snug">${p.name}</h3>
                <p class="text-slate-600 text-base leading-relaxed line-clamp-3">${p.tagline || p.shortDescription}</p>
                <div class="pt-2 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span class="px-3 py-1 rounded-lg bg-[#F5F5F7]">Phôi Mitsui</span>
                  <span class="px-3 py-1 rounded-lg bg-[#F5F5F7]">Nano Sapphire</span>
                  <span class="px-3 py-1 rounded-lg bg-[#F5F5F7]">Chuẩn 0.01D</span>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <a href="https://zalo.me/0933102653" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors block text-center">
                Tư Vấn & Báo Giá Đại Lý (Zalo)
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <div id="no-results" class="hidden py-16 text-center space-y-3">
        <p class="text-xl font-bold text-slate-700">Không tìm thấy sản phẩm phù hợp</p>
        <p class="text-base text-slate-500">Vui lòng thử từ khóa khác hoặc nhấn "Tất cả" để xem toàn bộ danh mục.</p>
      </div>
    </div>
  </section>

  <!-- BẢNG PHÂN TÍCH & SO SÁNH CHIẾT SUẤT VẬT LIỆU (TÍCH HỢP Ở DƯỚI CATALOGUE TRÒNG KÍNH) -->
  <section class="py-20 px-6 bg-white">
    <div class="max-w-7xl mx-auto space-y-12">
      
      <div class="max-w-3xl motion-item">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
          So Sánh Chiết Suất Vật Liệu (Refractive Index)
        </h2>
        <p class="text-slate-600 text-base sm:text-lg mt-3">
          Lựa chọn chiết suất phù hợp giữa độ mỏng nhẹ, độ sắc nét quang sai Abbe và kết cấu gọng kính của khách hàng.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- 1.56 -->
        <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-4 motion-item">
          <div class="flex items-center justify-between">
            <span class="text-3xl font-black text-[#0B7B8A]">1.56</span>
            <span class="text-sm font-semibold text-slate-700 bg-white px-3 py-1 rounded-full">Phổ thông</span>
          </div>
          <h3 class="text-xl font-bold text-[#0E253A]">Hard Resin Tiêu Chuẩn</h3>
          <div class="space-y-2 text-base bg-white p-4 rounded-2xl">
            <div class="flex justify-between">
              <span class="text-slate-600">Độ Abbe:</span>
              <span class="font-bold text-[#0E253A]">36</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Độ mỏng:</span>
              <span class="font-bold text-[#0E253A]">Tiêu chuẩn cơ sở</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Dải độ tối ưu:</span>
              <span class="font-bold text-[#0E253A]">Dưới 3.00D</span>
            </div>
          </div>
          <p class="text-base text-slate-700">Phù hợp gọng nguyên khung kim loại hoặc nhựa acetat có viền dày.</p>
        </div>

        <!-- 1.60 MR-8 -->
        <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-4 motion-item">
          <div class="flex items-center justify-between">
            <span class="text-3xl font-black text-[#0B7B8A]">1.60</span>
            <span class="text-sm font-semibold text-teal-900 bg-teal-100 px-3 py-1 rounded-full">Bền dẻo cao</span>
          </div>
          <h3 class="text-xl font-bold text-[#0E253A]">Monomer Mitsui MR-8™</h3>
          <div class="space-y-2 text-base bg-white p-4 rounded-2xl">
            <div class="flex justify-between">
              <span class="text-slate-600">Độ Abbe:</span>
              <span class="font-bold text-[#0E253A]">41 (Rất nét)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Độ mỏng:</span>
              <span class="font-bold text-[#0E253A]">Mỏng hơn 15%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Dải độ tối ưu:</span>
              <span class="font-bold text-[#0E253A]">Từ 2.00D đến 5.00D</span>
            </div>
          </div>
          <p class="text-base text-slate-700">Độ dẻo dai cao, đặc biệt khuyên dùng cho gọng xẻ cước và gọng bắt ốc không viền.</p>
        </div>

        <!-- 1.67 MR-7 -->
        <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-4 motion-item">
          <div class="flex items-center justify-between">
            <span class="text-3xl font-black text-[#0B7B8A]">1.67</span>
            <span class="text-sm font-semibold text-slate-700 bg-white px-3 py-1 rounded-full">Siêu mỏng nhẹ</span>
          </div>
          <h3 class="text-xl font-bold text-[#0E253A]">Monomer Mitsui MR-7™</h3>
          <div class="space-y-2 text-base bg-white p-4 rounded-2xl">
            <div class="flex justify-between">
              <span class="text-slate-600">Độ Abbe:</span>
              <span class="font-bold text-[#0E253A]">32</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Độ mỏng:</span>
              <span class="font-bold text-[#0E253A]">Mỏng hơn 25%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Dải độ tối ưu:</span>
              <span class="font-bold text-[#0E253A]">Từ 4.00D đến 8.00D</span>
            </div>
          </div>
          <p class="text-base text-slate-700">Giảm trọng lượng đáng kể trên sống mũi, thẩm mỹ cao cho người cận độ vừa đến cao.</p>
        </div>

        <!-- 1.74 MR-174 -->
        <div class="bg-[#F5F5F7] p-6 rounded-3xl space-y-4 motion-item">
          <div class="flex items-center justify-between">
            <span class="text-3xl font-black text-[#0B7B8A]">1.74</span>
            <span class="text-sm font-semibold text-amber-950 bg-amber-100 px-3 py-1 rounded-full">Mỏng nhất</span>
          </div>
          <h3 class="text-xl font-bold text-[#0E253A]">Monomer Mitsui MR-174™</h3>
          <div class="space-y-2 text-base bg-white p-4 rounded-2xl">
            <div class="flex justify-between">
              <span class="text-slate-600">Độ Abbe:</span>
              <span class="font-bold text-[#0E253A]">33</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Độ mỏng:</span>
              <span class="font-bold text-[#0E253A]">Mỏng hơn 40%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Dải độ tối ưu:</span>
              <span class="font-bold text-[#0E253A]">Trên 7.00D</span>
            </div>
          </div>
          <p class="text-base text-slate-700">Mép kính mỏng phẳng hoàn hảo, thích hợp người cận nặng mong muốn tính thẩm mỹ tối đa.</p>
        </div>

      </div>

    </div>
  </section>

  <!-- QUICK CONSULT CTA -->
  <section class="py-16 px-6 bg-[#0E253A] text-white">
    <div class="max-w-4xl mx-auto text-center space-y-6">
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">Bạn Cần Báo Giá Sỉ Cho Đại Lý?</h2>
      <p class="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Liên hệ ngay đội ngũ quản lý phân phối Clearly Vietnam để nhận bảng giá chiết khấu đại lý cấp 1 và chính sách hỗ trợ tủ kệ trưng bày.
      </p>
      <div class="pt-2 flex flex-wrap items-center justify-center gap-4">
        <a href="tel:0933102653" class="px-8 py-4 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors">
          Hotline: 0933 102 653
        </a>
        <a href="https://zalo.me/0933102653" target="_blank" rel="noopener noreferrer" class="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0E253A] font-bold text-base transition-colors">
          Nhắn Zalo B2B
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-[#071521] text-white py-12 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
      <div class="flex items-center gap-3">
        <img src="../assets/logo_rocky_transparent.png" alt="Rocky Lens" class="h-8 w-auto object-contain">
        <span>© 2026 Clearly Vietnam. Rocky Lens Canada.</span>
      </div>
      <div class="flex items-center gap-6">
        <a href="../" class="hover:text-white transition-colors">Trang chủ</a>
        <a href="../#trong-kinh" class="hover:text-white transition-colors">Tròng kính</a>
        <a href="../#doi-tac" class="hover:text-white transition-colors">Dành cho đối tác</a>
        <a href="../#lien-he" class="hover:text-white transition-colors">Liên hệ</a>
      </div>
    </div>
  </footer>

  <script>
    let currentCategory = 'all';

    function setCategory(cat) {
      currentCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.classList.remove('bg-[#0B7B8A]', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700');
      });
      const activeBtn = document.getElementById('filter-' + cat);
      if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-slate-700');
        activeBtn.classList.add('bg-[#0B7B8A]', 'text-white');
      }
      filterProducts();
    }

    function filterProducts() {
      const q = (document.getElementById('catalogue-search').value || '').toLowerCase().trim();
      const items = document.querySelectorAll('.product-item');
      let visibleCount = 0;

      items.forEach(item => {
        const categories = item.getAttribute('data-categories') || '';
        const searchContent = item.getAttribute('data-search') || '';
        
        const matchesCategory = (currentCategory === 'all') || categories.includes(currentCategory);
        const matchesQuery = !q || searchContent.includes(q);

        if (matchesCategory && matchesQuery) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      const noResults = document.getElementById('no-results');
      if (visibleCount === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    }
  </script>
</body>
</html>`;

fs.writeFileSync('trong-kinh/index.html', html, 'utf8');
console.log('Successfully regenerated trong-kinh/index.html conforming to taste-skill and Master Prompt V3!');
