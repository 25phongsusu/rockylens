# HƯỚNG DẪN DÀNH CHO AI AGENT & DEVELOPER (MAINTENANCE & CONTRIBUTION GUIDE)

> **Dành cho AI Agent:** Khi người dùng yêu cầu chỉnh sửa, cập nhật, bảo trì hoặc phát triển thêm tính năng cho dự án này, bạn **BẮT BUỘC** phải đọc và tuân thủ các quy tắc trong tài liệu này trước khi thực hiện bất kỳ thay đổi nào.

---

## 1. BẢN CHẤT DỰ ÁN & NGUYÊN TẮC BẤT BIẾN

Website này là trang giới thiệu thương hiệu và catalogue phân phối tròng kính quang học chính hãng **Rocky Lens (Canada Opticians)** tại Việt Nam.

- **Định hướng kinh doanh:** **B2B-first** (cung cấp giải pháp cho chuỗi cửa hàng mắt kính, phòng khám nhãn khoa, đại lý) kết hợp **Kiến thức B2C** (giáo dục thị trường, tư vấn chọn tròng cho người tiêu dùng).
- **Kiến trúc công nghệ:** **Next.js (App Router)**, **TypeScript strict mode**, **Tailwind CSS v4**.
- **Chế độ xuất bản:** **Static Site Generation (SSG)** (`output: 'export'`), tĩnh hóa 100% file HTML vào thư mục `out/`.

### ⚠️ NHỮNG ĐIỀU TUYỆT ĐỐI CẤM (STRICT PROHIBITIONS):
1. **KHÔNG** sử dụng SQL, MySQL, PostgreSQL, SQLite, MongoDB hay Prisma.
2. **KHÔNG** cài đặt database server hoặc tạo backend runtime động.
3. **KHÔNG** tạo hệ thống đăng nhập, đăng ký thành viên hoặc portal đại lý trực tuyến.
4. **KHÔNG** tạo giỏ hàng, thanh toán, đặt hàng online (đây là website giới thiệu & catalogue B2B, không phải e-commerce).
5. **KHÔNG** tạo form backend thu thập thông tin người dùng.
6. **KHÔNG** tự ý bịa đặt thông số kỹ thuật quang học, tiêu chuẩn y tế hoặc thông tin liên hệ.
7. **KHÔNG** sử dụng Server Actions hoặc dynamic API Routes (do website xuất bản static export).

---

## 2. CẤU TRÚC ĐIỀU HƯỚNG BẮT BUỘC

### 6 Menu Điều Hướng Cấp 1 (Đúng Thứ Tự Bất Biến):
1. **Trang chủ (`/`):** Tích hợp đầy đủ 8 Section.
2. **Sản phẩm (`/trong-kinh/`):** Catalogue kèm bộ lọc client-side (nhóm, chiết suất, công nghệ, từ khóa).
   - Chi tiết sản phẩm: `/trong-kinh/[slug]/`
3. **Công nghệ & Kiến thức (`/kham-pha-trong-kinh/`):** Trung tâm kiến thức quang học, hỏi đáp FAQ.
   - Chi tiết bài viết: `/kham-pha-trong-kinh/bai-viet/[slug]/`
4. **Dành cho đối tác (`/danh-cho-doi-tac/`):** Chính sách bán buôn B2B, gia công Lab RX Freeform, hỗ trợ kệ POSM.
5. **Về chúng tôi (`/ve-chung-toi/`):** Nền tảng Canada Opticians, chứng nhận ISO 9001 và hình ảnh hoạt động.
6. **Liên hệ (`/lien-he/`):** Hotline, Zalo B2B Official và địa chỉ 2 tổng kho Miền Nam & Miền Bắc.

### 8 Section Trang Chủ Bắt Buộc (Thứ Tự Bất Biến):
1. `HeroSection` (Section 01 — Hero Banner với 2 CTA B2B & B2C)
2. `ProductCategories` (Section 02 — Danh mục tròng kính)
3. `TechnologyHighlights` (Section 03 — Công nghệ nổi bật)
4. `EducationPreview` (Section 04 — Khám phá & Hiểu về tròng kính B2C)
5. `PartnerSection` (Section 05 — Giải pháp dành cho đối tác B2B)
6. `CompanyPreview` (Section 06 — Về doanh nghiệp & Năng lực)
7. `ContactSection` (Section 07 — Liên hệ & Kết nối trực tiếp)
8. `Footer` (Section 08 — Thông tin pháp nhân, điều hướng và khuyến cáo y tế)

---

## 3. HƯỚNG DẪN CẬP NHẬT NỘI DUNG

### 3.1. Cập Nhật Thông Tin Doanh Nghiệp (Hotline, Zalo, Địa Chỉ Kho)
Tất cả thông tin doanh nghiệp được tập trung tại file duy nhất:
👉 [`src/config/site.ts`](file:///c:/Users/phong/Desktop/Rocky/src/config/site.ts)
- `siteConfig.phones`: Hotline và số điện thoại bàn.
- `siteConfig.zalo`: Đường dẫn Zalo Official và text hiển thị.
- `siteConfig.emails`: Hộp thư tiếp nhận khách hàng và đối tác B2B.
- `siteConfig.addresses`: Địa chỉ kho hàng và văn phòng đại diện.

### 3.2. Cập Nhật Menu Điều Hướng
👉 [`src/config/navigation.ts`](file:///c:/Users/phong/Desktop/Rocky/src/config/navigation.ts)

### 3.3. Thêm Mới Hoặc Sửa Sản Phẩm
Tạo file JSON trong thư mục: `content/products/<slug-san-pham>.json`.
Cấu trúc chuẩn:
```json
{
  "id": "prod-013",
  "slug": "rocky-bluecut-super-pro",
  "status": "published",
  "name": "Tròng Kính Rocky BlueCut Super Pro 1.60",
  "tagline": "Khẩu hiệu ngắn gọn",
  "brandId": "rocky-lens",
  "categoryIds": ["don-trong"],
  "technologyIds": ["uv420-bluecut", "nano-shmc"],
  "refractiveIndex": "1.60",
  "images": ["/images/products/category-solution-1.png"],
  "featuredImage": "/images/products/category-solution-1.png",
  "badge": "Mới Nhất",
  "shortDescription": "Mô tả ngắn 2-3 câu...",
  "targetAudience": ["Đối tượng 1", "Đối tượng 2"],
  "benefits": [
    {
      "title": "Tên lợi ích",
      "description": "Chi tiết lợi ích...",
      "icon": "ShieldCheck"
    }
  ],
  "specifications": {
    "refractiveIndex": "1.60",
    "designType": "Aspheric (ASP)",
    "sphRange": "-8.00 đến +4.00",
    "cylRange": "0.00 đến -2.00",
    "diameter": "70mm / 75mm",
    "coating": "Nano SHMC",
    "material": "Mitsui MR-8",
    "abbeValue": "41",
    "uvProtection": "UV400 & UV420",
    "sku": "RL-PRO-160"
  },
  "documents": [
    {
      "title": "Catalogue & Thông Số",
      "url": "/documents/Rocky_Lens_Catalogue_2025.pdf",
      "size": "4.2 MB",
      "type": "PDF"
    }
  ],
  "relatedArticleIds": ["giai-phap-chong-anh-sang-xanh-uv420"],
  "relatedProductIds": [],
  "seo": {
    "title": "Tròng Kính Rocky BlueCut Super Pro 1.60 | Rocky Lens",
    "description": "Mô tả SEO chuẩn 150-160 ký tự...",
    "keywords": ["tròng kính 1.60"]
  }
}
```

### 3.4. Thêm Mới Hoặc Sửa Bài Viết Kiến Thức
Tạo file Markdown `.md` trong:
- `content/articles/kien-thuc/`
- `content/articles/cong-nghe/`
- `content/articles/huong-dan/`

Phải có phần Frontmatter đầy đủ:
```markdown
---
id: "art-008"
slug: "tieu-chuan-chiet-suat-kinh"
title: "Tiêu Chuẩn Lựa Chọn Chiết Suất Kính"
description: "Mô tả tóm tắt..."
category: "kien-thuc"
categoryName: "Kiến thức quang học"
coverImage: "/images/articles/myopia 1.png"
publishedAt: "2025-04-01"
author: "Chuyên Gia Quang Học Rocky Lens"
readTime: "5 phút đọc"
relatedProductIds: ["rocky-167-ultra-thin-bluecut"]
tags: ["Chiết suất", "Cận nặng"]
---

# Tiêu Đề Bài Viết H1
Nội dung...
```

---

## 4. DESIGN TOKENS & MÃ MÀU CHUẨN

- **Màu chủ đạo (Primary Optical Teal):** `#0B7B8A` (Hover: `#096370`, Nền nhạt: `#EBF7F9`)
- **Màu thương hiệu tối (Deep Navy Surface):** `#050E10` (Background phụ: `#0A1B22`)
- **Màu điểm nhấn (Accent Gold / Amber):** `#D97706` (Nền nhạt: `#FEF3C7`)
- **Màu nền chung:** `#FFFFFF` và `#F8FAFC`
- **Màu văn bản:** `#0F172A` (chính), `#475569` (phụ), `#94A3B8` (muted)

---

## 5. QUY TRÌNH KIỂM THỬ BẮT BUỘC TRƯỚC KHI BÀN GIAO

Mỗi khi AI Agent thực hiện thay đổi, **BẮT BUỘC** phải chạy 2 bước sau:

### Bước 1: Kiểm định tính toàn vẹn dữ liệu
```bash
node scripts/validate-content.js
```
*Lệnh này kiểm tra tính duy nhất của ID, Slug, tính hợp lệ của Frontmatter và các trường bắt buộc.*

### Bước 2: Kiểm tra biên dịch tĩnh (Static Build Check)
```bash
npm run build
```
*Lệnh này đảm bảo toàn bộ mã nguồn TypeScript, JSX, cấu hình SSG và 29+ trang tĩnh biên dịch 100% không có lỗi.*

---

## 6. LƯU Ý KỸ THUẬT QUAN TRỌNG (TECHNICAL GOTCHAS)

1. **`package.json` bắt buộc là `"type": "module"`**: Tất cả mã nguồn sử dụng cú pháp ESM (`import` / `export`).
2. **Metadata Routes (`src/app/robots.ts`, `src/app/sitemap.ts`)**: Bắt buộc phải có dòng `export const dynamic = 'force-static';` để Next.js hỗ trợ static export.
3. **Trang chi tiết động (`[slug]`)**: Phải luôn xuất khẩu hàm `generateStaticParams()` để sinh trước toàn bộ trang HTML.
4. **Client Components**: Chỉ dùng `'use client'` khi có tương tác người dùng (ví dụ: bộ lọc `ProductCatalogView`, menu di động `MobileNavigation`). Khi dùng `useSearchParams()`, phải bọc trong `<Suspense>`.
5. **Assets tĩnh**: Tất cả hình ảnh phải đặt trong `public/` (không đặt trong thư mục `assets/` ngoài root) và được gọi qua đường dẫn tuyệt đối bắt đầu bằng `/images/...`.
