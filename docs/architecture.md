# Kiến Trúc Hệ Thống Website Quang Học Rocky Lens

## 1. Tổng Quan Kiến Trúc (Architecture Overview)

Dự án áp dụng mô hình **Lightweight Modular Monolith** trên nền tảng **Next.js (App Router)** và **TypeScript strict mode**, được tối ưu hóa cho **Static Site Generation (SSG)** và tĩnh hóa 100% (`output: 'export'`).

```
┌────────────────────────────────────────────────────────┐
│                   ROUTES (src/app)                     │
│  /  •  /trong-kinh/  •  /kham-pha-trong-kinh/          │
│  /danh-cho-doi-tac/  •  /ve-chung-toi/  •  /lien-he/   │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                 COMPONENTS (src/components)            │
│  Layout • Home (8 Sections) • Products • Content • UI  │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                 FEATURES (src/features)                │
│  Products Service & Filters • Articles Service         │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                 LIB & CONTENT LOADERS                  │
│  Load Products (JSON) • Load Articles (Markdown/Front) │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                 DATA FILES (content/)                  │
│  content/products/*.json  •  content/articles/**/*.md  │
│  content/brands/*.json    •  content/technologies/*.json│
└────────────────────────────────────────────────────────┘
```

## 2. Các Tầng Chức Năng (Layers)

1. **Routes (`src/app/`):**
   - Đảm bảo đúng 6 mục điều hướng cấp 1 theo MASTER PROMPT V3.
   - Các trang chi tiết động (`/trong-kinh/[slug]/` và `/kham-pha-trong-kinh/bai-viet/[slug]/`) sử dụng hàm `generateStaticParams()` để tạo sẵn toàn bộ file HTML tĩnh tại thời điểm build.

2. **Components (`src/components/`):**
   - Phân tách theo miền nghiệp vụ: `layout/`, `home/`, `products/`, `content/`, `shared/`, `ui/`.
   - Giữ mã nguồn JSX sạch sẽ, không dồn logic truy xuất file vào view.

3. **Features (`src/features/`):**
   - Quản lý kiểu dữ liệu (`product-types.ts`, `article-types.ts`).
   - Xử lý logic lọc phía client (`product-filters.ts`).

4. **Content & Data Access (`src/lib/content/` & `content/`):**
   - Hoàn toàn **KHÔNG dùng SQL**, Prisma hay bất kỳ database engine nào.
   - Toàn bộ dữ liệu sản phẩm lưu dưới dạng file JSON độc lập.
   - Toàn bộ bài viết lưu dưới dạng Markdown kèm Frontmatter.
   - Đọc dữ liệu chỉ thực thi trong luồng Node.js build time, không mang module `fs` sang client bundle.

5. **SEO & Structured Data (`src/lib/seo/`):**
   - Tự động sinh `sitemap.xml` và `robots.txt` từ danh sách các slug đã published.
   - Tích hợp schema JSON-LD: `Organization`, `WebSite`, `BreadcrumbList`, `Product`, `Article`.

## 3. Không Gian Lưu Trữ Tài Nguyên (Assets)
- `public/images/banners/`: Ảnh banner độ phân giải cao cho Hero, Về chúng tôi, Lab RX.
- `public/images/products/`: Ảnh sản phẩm, giải pháp khúc xạ, bao bì.
- `public/images/brands/`: Logo thương hiệu, logo đối tác bệnh viện mắt.
- `public/images/technologies/`: Đồ họa minh họa công nghệ (BlueCut, Photochromic, Freeform, DriveShield).
- `public/images/articles/`: Ảnh bìa và sơ đồ minh họa bài viết.
- `public/images/company/`: Ảnh thực tế đội ngũ, cơ sở vật chất, chứng nhận ISO.
- `public/documents/`: Bảng giá lẻ, catalogue PDF tải về.
