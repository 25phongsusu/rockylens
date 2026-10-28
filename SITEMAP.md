# 🗺️ ROCKY LENS — PROJECT SITEMAP & ARCHITECTURE INDEX

> **Mục đích**: File chỉ mục tổng quan toàn bộ dự án. Dùng để tham chiếu nhanh khi cần chỉnh sửa nội dung, hình ảnh hoặc cấu trúc website.
> **Cập nhật**: 2026-10-28

---

## 📐 Kiến trúc tổng quan

```
Rocky/
├── src/                          # SOURCE CODE (Next.js 16 + React 19 + Tailwind 4)
│   ├── app/                      # App Router — Các trang web (routes)
│   ├── components/               # UI Components
│   │   ├── home/                 # ★ 11 section trang chủ
│   │   ├── layout/               # Header, Footer, MobileNav
│   │   ├── common/               # B2BQuoteModal, ThemeCustomizer
│   │   ├── content/              # ArticleCard, MarkdownContent
│   │   ├── products/             # ProductCard, ProductGrid, Filters
│   │   ├── shared/               # Breadcrumbs, ContactCTA, SectionHeading
│   │   └── ui/                   # Button
│   ├── config/                   # site.ts (thông tin công ty), navigation.ts (menu)
│   ├── features/                 # Business logic (product-types, article-types, filters, services)
│   ├── lib/                      # Utilities (load-products, load-articles, SEO, structured-data)
│   └── styles/                   # globals.css (CSS variables, design tokens)
│
├── content/                      # ★ DỮ LIỆU GỐC (Source of Truth)
│   ├── products/                 # 12 file .json — Chi tiết từng sản phẩm tròng kính
│   ├── articles/                 # 7 file .md — Bài viết blog (Markdown + frontmatter)
│   ├── technologies/             # technologies.json — Danh sách công nghệ
│   └── brands/                   # brands.json — Thông tin thương hiệu
│
├── public/                       # Static assets cho Next.js (dev server & SSG build)
│   ├── images/                   # Ảnh gốc (products, articles, technologies, bangkhen, etc.)
│   ├── uploads/                  # Ảnh tải lên (solutions, partners)
│   ├── documents/                # Tài liệu PDF
│   └── assets/                   # Mirror copy cho static HTML (fonts, images, uploads)
│
├── scripts/                      # Build scripts
│   ├── build-unified-liquid-master.js   # ★ Static HTML generator (2694 dòng) → index.html
│   ├── sync-out-to-root.js              # Đồng bộ out/ → root (cho GitHub Pages)
│   └── prune-unused-assets.js           # Dọn ảnh không dùng
│
├── index.html                    # ★ Trang chủ static (từ build script)
├── 404.html                      # Trang lỗi static
└── [blog|trong-kinh|...]/        # Các thư mục route static (từ Next.js SSG → sync)
```

---

## 🏠 TRANG CHỦ — 7 Section (Thứ tự hiển thị)

| # | Section | Component (Next.js) | Static HTML `id` | Dòng trong build script |
|---|---------|---------------------|-------------------|------------------------|
| 1 | **Hero** — Tiêu đề + CTA | `HeroSection.tsx` | `(top of page)` | L487–L596 |
| 2 | **Triết lý thương hiệu** — 3 cột giá trị | `BrandPhilosophy.tsx` | `#triet-ly` | L597–L673 |
| 3 | **Danh mục sản phẩm** — 6 solution cards + hover specs | `ProductCategories.tsx` | `#trong-kinh` | L674–L1123 |
| 4 | **Công nghệ** — 3 tech cards | `TechnologyHighlights.tsx` | `#cong-nghe` | L1124–L1240 |
| 5 | **Vì sao Rocky** — Chứng chỉ + Đối tác marquee | `WhyRockySection.tsx` | `#vi-sao-rocky` | L1241–L1532 |
| 6 | **Blog & Góc nhìn** — 3 bài viết | `BlogSection.tsx` | `#blog-insights` | L1533–L1649 |
| 7 | **Dành cho đối tác** — B2B CTA | `PartnerSection.tsx` | `#doi-tac` | L1650–L1740 |

**Layout chung**: Header (L497) · Footer (L1741) · B2B Modal (L1860) · ThemeCustomizer (L1960) · Scripts (L2026–L2694)

---

## 📄 CÁC TRANG WEB (Routes)

| URL Path | File `src/app/` | Mô tả |
|----------|-----------------|-------|
| `/` | `page.tsx` | Trang chủ (7 sections ở trên) |
| `/trong-kinh/` | `trong-kinh/page.tsx` | Listing tất cả sản phẩm tròng kính |
| `/trong-kinh/[slug]/` | `trong-kinh/[slug]/page.tsx` | Chi tiết 1 sản phẩm |
| `/blog/` | `blog/page.tsx` | Listing bài viết |
| `/blog/[slug]/` | `blog/[slug]/page.tsx` | Chi tiết 1 bài viết |
| `/kham-pha-trong-kinh/` | `kham-pha-trong-kinh/page.tsx` | Trang khám phá công nghệ |
| `/kham-pha-trong-kinh/bai-viet/[slug]/` | `kham-pha-trong-kinh/bai-viet/[slug]/page.tsx` | Bài viết khám phá |
| `/danh-cho-doi-tac/` | `danh-cho-doi-tac/page.tsx` | Trang B2B đối tác |
| `/ve-chung-toi/` | `ve-chung-toi/page.tsx` | Giới thiệu công ty |
| `/lien-he/` | `lien-he/page.tsx` | Liên hệ |

---

## 📦 DỮ LIỆU SẢN PHẨM (`content/products/`)

| File | Slug | Tên sản phẩm |
|------|------|---------------|
| `rocky-156-bluecut-shmc.json` | `rocky-156-bluecut-shmc` | Rocky 1.56 BlueCut UV420 SHMC |
| `rocky-160-mr8-aspheric.json` | `rocky-160-mr8-aspheric` | Rocky 1.60 MR-8 Aspheric |
| `rocky-167-ultra-thin-bluecut.json` | `rocky-167-ultra-thin-bluecut` | Rocky 1.67 Ultra Thin BlueCut |
| `rocky-174-ultra-high-index.json` | `rocky-174-ultra-high-index` | Rocky 1.74 Ultra High Index |
| `rocky-antifatigue-relax.json` | `rocky-antifatigue-relax` | Rocky AntiFatigue Relax |
| `rocky-driveshield-night-vision.json` | `rocky-driveshield-night-vision` | Rocky DriveShield Night Vision |
| `rocky-freeform-progressive-hd.json` | `rocky-freeform-progressive-hd` | Rocky Freeform Progressive HD |
| `rocky-myocontrol-dims-kids.json` | `rocky-myocontrol-dims-kids` | Rocky MyoControl DIMS Kids |
| `rocky-polarized-driving-sports.json` | `rocky-polarized-driving-sports` | Rocky Polarized Driving Sports |
| `rocky-progressive-short-corridor.json` | `rocky-progressive-short-corridor` | Rocky Progressive Short Corridor |
| `rocky-trendy-photochromic-brown.json` | `rocky-trendy-photochromic-brown` | Rocky Trendy Photochromic Brown |
| `rocky-trendy-photochromic-grey.json` | `rocky-trendy-photochromic-grey` | Rocky Trendy Photochromic Grey |

---

## 📝 BÀI VIẾT BLOG (`content/articles/`)

| Thư mục | File | Slug |
|---------|------|------|
| `cong-nghe/` | `co-che-hoat-dong-trong-doi-mau.md` | `co-che-hoat-dong-trong-doi-mau` |
| `cong-nghe/` | `cong-nghe-kinh-lai-xe-driveshield.md` | `cong-nghe-kinh-lai-xe-driveshield` |
| `cong-nghe/` | `giai-phap-chong-anh-sang-xanh-uv420.md` | `giai-phap-chong-anh-sang-xanh-uv420` |
| `huong-dan/` | `huong-dan-ve-sinh-bao-quan-trong-kinh.md` | `huong-dan-ve-sinh-bao-quan-trong-kinh` |
| `huong-dan/` | `khi-nao-nen-dung-kinh-da-trong.md` | `khi-nao-nen-dung-kinh-da-trong` |
| `kien-thuc/` | `kiem-soat-can-thi-tre-em-myocontrol.md` | `kiem-soat-can-thi-tre-em-myocontrol` |
| `kien-thuc/` | `so-sanh-chiet-suat-trong-kinh.md` | `so-sanh-chiet-suat-trong-kinh` |

---

## 🖼️ THƯ MỤC HÌNH ẢNH (`public/`)

| Thư mục | Nội dung |
|---------|----------|
| `images/products/` | Ảnh sản phẩm tròng kính |
| `images/articles/` | Ảnh bìa bài viết blog |
| `images/technologies/` | Ảnh minh họa công nghệ |
| `images/bangkhen/` | Bằng khen, chứng chỉ, giải thưởng |
| `images/company/` | Ảnh công ty |
| `images/about/` | Ảnh trang giới thiệu |
| `images/real/` | Ảnh thực tế |
| `images/danhmuc/` | Ảnh danh mục |
| `uploads/solutions/` | Ảnh giải pháp (dùng trong ProductCategories) |
| `uploads/partners/` | Logo đối tác |

---

## ⚙️ CẤU HÌNH QUAN TRỌNG

| File | Vai trò |
|------|---------|
| `src/config/site.ts` | Tên công ty, hotline, email, Zalo, địa chỉ, social links |
| `src/config/navigation.ts` | Menu chính + Footer links |
| `src/styles/globals.css` | CSS variables (colors, gradients, design tokens) |
| `content/technologies/technologies.json` | Danh sách công nghệ tròng kính |
| `content/brands/brands.json` | Thông tin thương hiệu |

---

## 🔄 QUY TRÌNH BUILD

```
npm run build:all
```

Thực hiện 3 bước tuần tự:

1. **`node scripts/build-unified-liquid-master.js`** → Tạo `index.html` (trang chủ static, standalone)
2. **`next build`** → SSG toàn bộ routes → thư mục `out/`
3. **`node scripts/sync-out-to-root.js`** → Copy `out/` ra root + fix asset paths cho GitHub Pages

---

## ⚠️ VẤN ĐỀ SONG TRÙNG (DUAL-SOURCE)

Nội dung trang chủ tồn tại ở **2 nơi** cần đồng bộ:

| Nội dung | Next.js Component (`src/`) | Static Script (`scripts/`) |
|----------|---------------------------|---------------------------|
| Hero text | `HeroSection.tsx` L28-34 | `build-unified-liquid-master.js` L487-596 |
| Product cards (6) | `ProductCategories.tsx` L6-103 | `build-unified-liquid-master.js` L674-1123 |
| Tech cards (3) | `TechnologyHighlights.tsx` L4-29 | `build-unified-liquid-master.js` L1124-1240 |
| Blog cards (3) | `BlogSection.tsx` L4-26 | `build-unified-liquid-master.js` L1533-1649 |
| Partner features | `PartnerSection.tsx` L6-27 | `build-unified-liquid-master.js` L1650-1740 |
| WhyRocky certs | `WhyRockySection.tsx` L7-43 | `build-unified-liquid-master.js` L1241-1532 |
| Header nav | `Header.tsx` | `build-unified-liquid-master.js` L497-596 |
| Footer | `Footer.tsx` | `build-unified-liquid-master.js` L1741-1859 |

> **Giải pháp**: Sử dụng script `scripts/sync-content.py` để tự động đồng bộ dữ liệu từ components → static HTML.
