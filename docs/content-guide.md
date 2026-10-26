# Cẩm Nang Quản Lý Nội Dung (Content Guide)

Hướng dẫn thêm mới, chỉnh sửa sản phẩm tròng kính, bài viết kiến thức và cấu hình thương hiệu mà không cần can thiệp vào mã nguồn JSX.

---

## 1. Thêm Mới Sản Phẩm Tròng Kính

Mỗi sản phẩm là một file JSON đặt tại thư mục:
`content/products/<slug-san-pham>.json`

### Mẫu Cấu Trúc JSON Chuẩn:
```json
{
  "id": "prod-013",
  "slug": "rocky-bluecut-super-pro",
  "status": "published",
  "name": "Tròng Kính Rocky BlueCut Super Pro 1.60",
  "tagline": "Khẩu hiệu ngắn gọn về tính năng",
  "brandId": "rocky-lens",
  "categoryIds": ["don-trong"],
  "technologyIds": ["uv420-bluecut", "nano-shmc"],
  "refractiveIndex": "1.60",
  "images": [
    "/images/products/category-solution-1.png"
  ],
  "featuredImage": "/images/products/category-solution-1.png",
  "badge": "Mới Nhất",
  "shortDescription": "Mô tả ngắn gọn từ 2-3 câu về sản phẩm...",
  "targetAudience": [
    "Dân văn phòng làm việc máy tính thường xuyên",
    "Người có độ cận từ -1.00 đến -5.00 Diop"
  ],
  "benefits": [
    {
      "title": "Chống Ánh Sáng Xanh UV420",
      "description": "Lọc triệt để bước sóng 400 - 420nm có hại.",
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
  "relatedArticleIds": [
    "giai-phap-chong-anh-sang-xanh-uv420"
  ],
  "relatedProductIds": [],
  "seo": {
    "title": "Tròng Kính Rocky BlueCut Super Pro 1.60 | Rocky Lens",
    "description": "Mô tả SEO tối ưu 150-160 ký tự...",
    "keywords": ["tròng kính 1.60", "bluecut pro"]
  }
}
```

> **Lưu ý:** Chỉ điền các trường thông số khi có dữ liệu thật. Không tự tạo thông số giả.

---

## 2. Thêm Mới Bài Viết Kiến Thức / Cẩm Nang

Bài viết được viết bằng định dạng Markdown (.md) đặt trong một trong ba thư mục con:
- `content/articles/kien-thuc/`
- `content/articles/cong-nghe/`
- `content/articles/huong-dan/`

### Mẫu Bài Viết Chuẩn:
```markdown
---
id: "art-008"
slug: "tieu-chuan-chiet-suat-cho-nguoi-can-nang"
title: "Tiêu Chuẩn Lựa Chọn Chiết Suất Kính Cho Người Cận Nặng"
description: "Mô tả tóm tắt nội dung bài viết hiển thị ở card xem trước..."
category: "kien-thuc"
categoryName: "Kiến thức quang học"
coverImage: "/images/articles/myopia 1.png"
publishedAt: "2025-04-01"
author: "Chuyên Gia Kỹ Thuật Rocky Lens"
readTime: "5 phút đọc"
relatedProductIds:
  - "rocky-167-ultra-thin-bluecut"
  - "rocky-174-ultra-high-index"
tags:
  - "Cận thị nặng"
  - "Chiết suất 1.74"
---

# Tiêu Đề Bài Viết H1

Nội dung mở đầu...

## 1. Tiêu Đề Mục Lớn H2
Nội dung chi tiết...

### Tiểu mục H3
Chi tiết nhỏ hơn...

- Gạch đầu dòng thứ nhất
- Gạch đầu dòng thứ hai
```

---

## 3. Kiểm Tra Nội Dung Tự Động

Sau khi thêm mới hoặc sửa đổi nội dung, chạy lệnh kiểm tra tính toàn vẹn:
```bash
node scripts/validate-content.js
```
Lệnh này sẽ quét toàn bộ ID, Slug, Frontmatter để đảm bảo không bị trùng lặp hoặc thiếu sót dữ liệu.
