# 🤖 ROCKY LENS — AI AGENT & DEVELOPER HANDBOOK (README_AI)

> **DÀNH CHO TẤT CẢ CÁC AI MODEL (GPT, Claude, Gemini, DeepSeek, Cursor, Copilot...):**  
> Trước khi thực hiện bất kỳ lệnh nào, chỉnh sửa file hoặc cập nhật tính năng trong repository này, bạn **BẮT BUỘC** phải đọc kỹ toàn bộ tài liệu hướng dẫn này để tránh làm hỏng cấu trúc dữ liệu, pipeline đồng bộ và cơ chế build của dự án.

---

## 1. BẢN CHẤT DỰ ÁN & CÁC NGUYÊN TẮC BẤT BIẾN

### 1.1. Thông tin chung
- **Thương hiệu:** **Rocky Lens (Canada Opticians)** — Phân phối tròng kính quang học chính hãng tại Việt Nam.
- **Mục tiêu:** Website giới thiệu năng lực thương hiệu, chính sách hợp tác **B2B** (chuỗi cửa hàng mắt kính, phòng khám nhãn khoa, đại lý) song song với cẩm nang tri thức thị lực **B2C**.
- **Mô hình kiến trúc:** **100% Static Site Generation (SSG)**, hoàn toàn không cần server runtime động khi xuất bản.

### 1.2. ⚠️ 7 ĐIỀU TUYỆT ĐỐI CẤM (ZERO-TOLERANCE RULES)
1. ❌ **KHÔNG** cài đặt hay sử dụng Database/ORM (SQL, MySQL, PostgreSQL, SQLite, MongoDB, Prisma...).
2. ❌ **KHÔNG** tạo hệ thống backend động, server runtime, API route runtime động hay Server Actions cần database.
3. ❌ **KHÔNG** tạo giỏ hàng, thanh toán trực tuyến, đặt hàng e-commerce (đây là trang B2B Catalogue & Thương hiệu).
4. ❌ **KHÔNG** tạo chức năng đăng nhập, đăng ký tài khoản thành viên hay portal đại lý động.
5. ❌ **KHÔNG** tự ý sửa chay nội dung trên file `index.html` tại thư mục gốc mà không qua cơ chế Single Source of Truth (`content/home_content.json` + `python scripts/sync_home.py`).
6. ❌ **KHÔNG** can thiệp hoặc xoá nhánh `source` (đây là nhánh phát triển gốc).
7. ❌ **KHÔNG** bịa đặt thông số quang học, chuẩn tiêu chuẩn y khoa, hoặc thay đổi thông tin liên hệ khi chưa có yêu cầu từ người dùng.

---

## 2. KIẾN TRÚC KÉP & CƠ CHẾ ĐỒNG BỘ DỮ LIỆU (DUAL-ARCHITECTURE)

Dự án sở hữu cấu trúc **Hybrid SSG**:
```
                      ┌──────────────────────────────┐
                      │  content/home_content.json   │  <── SINGLE SOURCE OF TRUTH (Trang chủ)
                      └──────────────┬───────────────┘
                                     │
                    python scripts/sync_home.py --apply
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
┌─────────────────────────────────┐         ┌─────────────────────────────────────┐
│ 1. Next.js App Router (v16+)    │         │ 2. Standalone Master Page           │
│    `src/components/home/*.tsx`  │         │    `scripts/build-unified-liquid...`│
│    `src/app/**`                 │         │                   │                 │
│                 │               │         │                   ▼                 │
│                 ▼               │         │              `index.html`           │
│    Build SSG ra thư mục `out/`  │         │       (Trang đơn tĩnh siêu tốc)     │
└─────────────────────────────────┘         └─────────────────────────────────────┘
```

1. **Hệ thống Next.js (App Router, React 19, Tailwind v4):**
   - Quản lý toàn bộ các trang: Trang chủ (`/`), Sản phẩm (`/trong-kinh/`), Chi tiết sản phẩm (`/trong-kinh/[slug]/`), Công nghệ (`/cong-nghe/`), RX Lab Freeform (`/rx-lab/`), Blog/Cẩm nang (`/blog/` & `/kham-pha-trong-kinh/`), Đối tác (`/danh-cho-doi-tac/`), Về chúng tôi (`/ve-chung-toi/`), Liên hệ (`/lien-he/`).
   - Cấu hình xuất bản tĩnh: `output: 'export'` trong [`next.config.ts`](file:///c:/Users/phong/Desktop/Rocky/next.config.ts) sinh mã HTML vào thư mục `out/`.
2. **Hệ thống Master Landing Page Độc Lập (`index.html` tại root):**
   - File `index.html` và thư mục `assets/` tại gốc được sinh bởi `scripts/build-unified-liquid-master.js`.
   - Phục vụ tải trang siêu tốc và tương thích trực tiếp với GitHub Pages khi truy cập thư mục gốc.
3. **Cơ chế Single Source of Truth:**
   - Khi chỉnh sửa nội dung trang chủ (Headline, Banner, Mô tả 6 dòng sản phẩm, 3 trụ cột công nghệ, triết lý, CTA...), **luôn cập nhật file `content/home_content.json` trước**, sau đó chạy lệnh đồng bộ để tự động cập nhật cả Next.js và `index.html`.

---

## 3. CƠ CHẾ PHÂN NHÁNH GIT & WORKFLOW TRIỂN KHAI

| Nhánh Git | Mục đích & Trạng thái |
| :--- | :--- |
| **`source`** *(Hiện tại)* | **Nhánh làm việc chính (Working Branch).** Mọi thao tác code, thêm tính năng, sửa bug, cập nhật nội dung BẮT BUỘC thực hiện tại đây. |
| **`main`** | **Nhánh phân phối tĩnh GitHub Pages (`25phongsusu.github.io/rockylens/`).** Không sửa code trực tiếp tại đây! Nhánh này được cập nhật tự động thông qua script `deploy_to_github.py`. |

### Quy trình tự động Deploy (Rocky -> Rocky-Deploy -> GitHub):
```bash
# Sau khi sửa đổi và kiểm tra trên nhánh source:
python scripts/deploy_to_github.py --push
```
*Script sẽ tự động build Next.js, đồng bộ sang thư mục `../Rocky-Deploy`, commit và push lên nhánh `main` của GitHub.*

---

## 4. BẢN ĐỒ THƯ MỤC & VỊ TRÍ CẬP NHẬT (KEY MAP)

```
Rocky/
├── content/                     # DỮ LIỆU TĨNH (Nguồn dữ liệu duy nhất)
│   ├── home_content.json        # Single source of truth cho trang chủ
│   ├── products/                # Dữ liệu sản phẩm (*.json)
│   ├── articles/                # Dữ liệu bài viết (*.md)
│   │   ├── kien-thuc/
│   │   ├── cong-nghe/
│   │   └── huong-dan/
│   ├── brands/                  # Danh sách thương hiệu & đối tác (*.json)
│   └── technologies/            # Dữ liệu các giải pháp công nghệ (*.json)
├── src/
│   ├── app/                     # Next.js App Router (29+ static routes)
│   │   ├── cong-nghe/           # Trang chuyên sâu Công nghệ quang học
│   │   ├── rx-lab/              # Trang chuyên sâu Năng lực RX Lab Freeform
│   │   ├── trong-kinh/          # Danh mục & Chi tiết tròng kính [slug]
│   │   ├── blog/                # Blog & Cẩm nang thị lực [slug]
│   │   ├── kham-pha-trong-kinh/ # Trung tâm kiến thức & hỏi đáp
│   │   ├── danh-cho-doi-tac/    # Chính sách đại lý & B2B
│   │   ├── ve-chung-toi/        # Giới thiệu & Chứng nhận y tế
│   │   └── lien-he/             # Thông tin liên hệ & Hệ thống kho
│   ├── components/
│   │   ├── home/                # 8 Section trang chủ (Hero, Products, Tech, etc.)
│   │   ├── layout/              # Header, Footer, MobileNav, SubNav
│   │   └── shared/              # Card sản phẩm, ArticleCard, Modal, Lightbox...
│   ├── config/
│   │   ├── site.ts              # THÔNG TIN TOÀN CÔNG TY (Hotline, Zalo, Kho, Email)
│   │   └── navigation.ts        # CẤU TRÚC MENU TOÀN TRANG
│   └── lib/
│       ├── content/             # Trình đọc JSON & Markdown ở build-time
│       └── seo/                 # Cấu hình Metadata, Schema.org JSON-LD
├── scripts/                     # CÔNG CỤ TỰ ĐỘNG HÓA
│   ├── sync_home.py             # Đồng bộ JSON -> Next.js TSX & Master index.html
│   ├── build-unified-liquid-master.js # Build root index.html
│   └── deploy_to_github.py      # Build & Deploy lên nhánh GitHub Pages
├── public/                      # Static Assets cho Next.js (images, documents, banners)
└── index.html                   # Standalone Master Landing Page
```

---

## 5. HƯỚNG DẪN XỬ LÝ CÁC TÁC VỤ PHỔ BIẾN (PLAYBOOKS CHO AI)

### 📌 Tác vụ 1: Thay đổi thông tin công ty (Hotline, Zalo, Kho, Email)
1. Mở file [`src/config/site.ts`](file:///c:/Users/phong/Desktop/Rocky/src/config/site.ts) và cập nhật:
   - `siteConfig.phones`: Số hotline chính và máy bàn.
   - `siteConfig.zalo`: Link Zalo OA / chat trực tiếp.
   - `siteConfig.emails`: Email liên hệ & email phòng đại lý B2B.
   - `siteConfig.addresses`: Địa chỉ kho tổng Hà Nội & TP.HCM.
2. Kiểm tra xem các trường liên quan trong `content/home_content.json` (section `contact`) có cần đồng bộ không.
3. Chạy lệnh: `python scripts/sync_home.py --apply`.

### 📌 Tác vụ 2: Chỉnh sửa nội dung Trang Chủ (Hero, Khẩu hiệu, Giới thiệu)
1. **Tuyệt đối không sửa tay `index.html`!**
2. Mở [`content/home_content.json`](file:///c:/Users/phong/Desktop/Rocky/content/home_content.json) và sửa text tại section tương ứng (`hero`, `features`, `products`, `technology`, `philosophy`, `education`, `partners`, `contact`).
3. Chạy lệnh đồng bộ:
   ```bash
   python scripts/sync_home.py --apply
   ```
4. Build lại file `index.html` gốc:
   ```bash
   node scripts/build-unified-liquid-master.js
   ```

### 📌 Tác vụ 3: Thêm mới hoặc chỉnh sửa Tròng Kính (Sản phẩm)
1. Mở thư mục `content/products/`.
2. Tạo file JSON mới: `content/products/<slug-san-pham>.json`.
3. Điền đúng cấu trúc bắt buộc:
   ```json
   {
     "id": "prod-xxx",
     "slug": "ten-san-pham-khong-dau",
     "status": "published",
     "name": "Tên sản phẩm đầy đủ",
     "tagline": "Khẩu hiệu ngắn",
     "brandId": "rocky-lens",
     "categoryIds": ["don-trong"],
     "technologyIds": ["uv420-bluecut"],
     "refractiveIndex": "1.60",
     "images": ["/images/products/ten-anh.png"],
     "featuredImage": "/images/products/ten-anh.png",
     "badge": "Mới",
     "shortDescription": "Mô tả ngắn...",
     "targetAudience": ["Người làm việc văn phòng"],
     "benefits": [{ "title": "Ưu điểm", "description": "Chi tiết...", "icon": "ShieldCheck" }],
     "specifications": {
       "refractiveIndex": "1.60",
       "designType": "Aspheric (ASP)",
       "coating": "Nano SHMC",
       "material": "MR-8",
       "abbeValue": "41",
       "uvProtection": "UV420",
       "sku": "RL-PRO-160"
     },
     "seo": { "title": "SEO Title", "description": "SEO Description" }
   }
   ```
4. Đặt ảnh sản phẩm trong thư mục `public/images/products/`.
5. Next.js sẽ tự động sinh trang chi tiết `/trong-kinh/<slug>/` nhờ hàm `generateStaticParams()` có sẵn.

### 📌 Tác vụ 4: Thêm bài viết mới (Cẩm nang thị lực / Công nghệ)
1. Tạo file Markdown `.md` trong thư mục `content/articles/kien-thuc/` (hoặc `cong-nghe/`, `huong-dan/`).
2. Khai báo Frontmatter đầy đủ:
   ```markdown
   ---
   id: "art-xxx"
   slug: "tieu-chuan-chiet-suat-kinh"
   title: "Tiêu Chuẩn Lựa Chọn Chiết Suất Kính"
   description: "Tóm tắt bài viết 150-160 ký tự..."
   category: "kien-thuc"
   categoryName: "Kiến thức quang học"
   coverImage: "/images/articles/ten-anh.png"
   publishedAt: "2026-10-30"
   author: "Chuyên Gia Quang Học Rocky Lens"
   readTime: "5 phút đọc"
   tags: ["Chiết suất", "Cận thị"]
   ---

   # Tiêu đề bài viết
   Nội dung bài viết...
   ```
3. Bài viết sẽ xuất hiện tự động trên cả `/blog/` và `/kham-pha-trong-kinh/bai-viet/[slug]`.

---

## 6. LƯU Ý KỸ THUẬT & CÁC CẠM BẪY THƯỜNG GẶP (GOTCHAS)

### ⚠️ Lưu ý về môi trường Windows PowerShell
- Trên một số máy Windows có chính sách bảo mật PowerShell (`about_Execution_Policies`), chạy trực tiếp lệnh `npm` có thể bị lỗi `UnauthorizedAccess` với file `npm.ps1`.
- 👉 **Giải pháp:** Sử dụng **`npm.cmd`** thay vì `npm` (ví dụ: `npm.cmd run build`, `npm.cmd run dev`).

### ⚠️ Kiểm tra dữ liệu (Validation)
- File `scripts/validate-content.js` cũ **không tồn tại**.
- 👉 **Giải pháp:** Sử dụng công cụ chuẩn:
  ```bash
  python scripts/sync_home.py --check
  ```
  Lệnh này sẽ kiểm tra tính toàn vẹn của schema, 6 sản phẩm nổi bật, 3 trụ cột công nghệ và 3 bài viết.

### ⚠️ Next.js 16+ Static Export Constraints
- Dự án chạy Next.js v16+ với Turbopack và `output: 'export'`.
- Mọi trang metadata như `src/app/robots.ts` và `src/app/sitemap.ts` **bắt buộc** phải có:
  ```typescript
  export const dynamic = 'force-static';
  ```
- Mọi trang động `[slug]` **bắt buộc** phải có hàm `generateStaticParams()`.
- Component nào có `useSearchParams()` bắt buộc phải bọc trong `<Suspense>`.
- KHÔNG import module `fs`, `path` trong Client Components (`'use client'`).

### ⚠️ Đường dẫn BasePath trên GitHub Pages
- Trong [`next.config.ts`](file:///c:/Users/phong/Desktop/Rocky/next.config.ts), `basePath` khi deploy GitHub Pages được gán là `/rockylens`.
- Khi viết liên kết nội bộ trong component React, hãy sử dụng thẻ `<Link href="/...">` từ `'next/link'` để Next.js tự động xử lý tiền tố `basePath`.

---

## 7. BẢNG TRA CỨU LỆNH NHANH (QUICK CHEATSHEET)

| Tác vụ | Lệnh thực thi | Mục đích |
| :--- | :--- | :--- |
| **Kiểm tra dữ liệu** | `python scripts/sync_home.py --check` | Kiểm tra tính hợp lệ của `home_content.json` |
| **Đồng bộ nội dung** | `python scripts/sync_home.py --apply` | Đồng bộ JSON sang components Next.js & Master HTML |
| **Build trang gốc** | `node scripts/build-unified-liquid-master.js` | Sinh file `index.html` độc lập tại root |
| **Chạy dev server** | `npm.cmd run dev` | Khởi động máy chủ phát triển cục bộ (`localhost:3000`) |
| **Biên dịch toàn bộ** | `npm.cmd run build` | Biên dịch Next.js SSG ra thư mục `out/` (39+ routes) |
| **Build tổng thể** | `npm.cmd run build:static` | Chạy cả sync + build master HTML |
| **Deploy GitHub** | `python scripts/deploy_to_github.py --push` | Đóng gói và đẩy artifacts lên nhánh `origin/main` |

---

## 8. TIÊU CHUẨN DESIGN & BRAND VOICE

- **Màu chủ đạo (Primary Optical Teal):** `#0B7B8A` (Hover: `#096370`, Light: `#EBF7F9`)
- **Màu nền tối (Deep Optical Navy):** `#050E10` (Surface: `#0A1B22`)
- **Màu điểm nhấn (Accent Gold / Amber):** `#D97706` (Light: `#FEF3C7`)
- **Phong cách thị giác:** Tối giản, hiện đại, kính quang học cao cấp (Canada Opticians), hiệu ứng thấu kính quang sai khúc xạ (Glassmorphism & Optical Flare).
- **Văn phong (Tone of Voice):** Chuyên nghiệp, đáng tin cậy B2B, chuẩn y khoa, minh bạch thông số kỹ thuật, không dùng văn phong giật gân rẻ tiền.

---
*Tài liệu này được biên soạn độc quyền cho repository Rocky Lens. Khi bàn giao cho bất kỳ AI nào tiếp theo, hãy yêu cầu đọc file này trước tiên.*
