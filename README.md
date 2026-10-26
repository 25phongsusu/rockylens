# Rocky Lens — Optical B2B & B2C Brand & Catalogue Website

Website thương hiệu, giới thiệu năng lực phân phối và catalogue tròng kính quang học chính hãng **Rocky Lens (Canada Opticians)** tại Việt Nam.

Dự án được xây dựng theo chuẩn **MASTER PROMPT V3**, lấy định hướng **B2B-first** (cung ứng cửa hàng kính mắt, phòng khám nhãn khoa, chuỗi bán lẻ) song song với khu vực **Kiến thức B2C** (giáo dục thị trường, hướng dẫn chọn tròng cho người tiêu dùng).

> 🤖 **Dành cho AI Agent & Developer:** Trước khi cập nhật hoặc chỉnh sửa dự án, hãy đọc kỹ tài liệu:  
> 👉 [**AI_AGENT_INSTRUCTIONS.md**](AI_AGENT_INSTRUCTIONS.md) (Quy tắc bất biến, cấu trúc dữ liệu, cách thêm sản phẩm/bài viết và quy trình kiểm thử).

---

## 1. Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** Next.js (App Router) v16+
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4, Optical Design Tokens
- **Icons:** Lucide React
- **Data Architecture:** Static JSON (`content/products/`) + Markdown (`content/articles/`)
- **Export Mode:** 100% Static HTML/CSS/JS (`output: 'export'`)
- **Cơ sở dữ liệu:** **KHÔNG SQL / KHÔNG Prisma / KHÔNG Database Server**.

---

## 2. Cấu Trúc Điều Hướng & Sitemap

### 6 Mục Điều Hướng Cấp 1 Bắt Buộc:
1. **Trang chủ (`/`):** Tổng quan thương hiệu với đúng 8 Section theo trình tự Master Prompt V3.
2. **Sản phẩm (`/trong-kinh/`):** Catalogue 12+ dòng sản phẩm với bộ lọc tương tác client-side (chiết suất, danh mục, công nghệ, từ khóa).
   - Chi tiết sản phẩm: `/trong-kinh/[slug]/`
3. **Công nghệ & Kiến thức (`/kham-pha-trong-kinh/`):** Cẩm nang thị lực, hỏi đáp FAQ và bài phân tích kỹ thuật.
   - Chi tiết bài viết: `/kham-pha-trong-kinh/bai-viet/[slug]/`
4. **Dành cho đối tác (`/danh-cho-doi-tac/`):** Giải pháp B2B, chính sách chiết khấu, dịch vụ Lab RX và hỗ trợ POSM.
5. **Về chúng tôi (`/ve-chung-toi/`):** Lịch sử Canada Opticians, chứng nhận ISO 9001 và hình ảnh cơ sở thực tế.
6. **Liên hệ (`/lien-he/`):** Thông tin Hotline, Zalo B2B và địa chỉ tổng kho 2 miền (không dùng form cơ sở dữ liệu).

---

## 3. Cài Đặt & Chạy Dự Án

### Yêu cầu môi trường:
- Node.js >= 18.17 (Khuyến nghị Node 20 hoặc 24)
- npm >= 9

### Khởi động môi trường phát triển (Development):
```bash
npm run dev
```
Truy cập: `http://localhost:3000`

### Kiểm tra nội dung (Content Validation):
```bash
node scripts/validate-content.js
```

### Build & Xuất Bản Tĩnh (Static Export):
```bash
npm run build
```
Toàn bộ mã nguồn tĩnh sẵn sàng triển khai sẽ được sinh tại thư mục `out/`. Có thể đưa trực tiếp lên cPanel, Apache, Nginx, Vercel, Netlify hoặc Cloudflare Pages mà không cần Node.js runtime server.

---

## 4. Danh Sách Thông Tin Doanh Nghiệp Cần Cập Nhật Trước Khi Xuất Bản

Tất cả thông tin được quản lý tập trung tại file cấu hình duy nhất: `src/config/site.ts`.

| Thông Tin | Giá Trị Hiện Tại | Trạng Thái |
| :--- | :--- | :--- |
| **Tên pháp nhân** | Công Ty TNHH Mắt Kính Rocky Việt Nam | Chuẩn cấu hình |
| **Hotline chính** | 0908 692 888 | Cần đối soát số thực tế nếu thay đổi |
| **Hotline văn phòng** | 028 38 692 888 | Cần đối soát số máy bàn thực tế |
| **Zalo B2B** | https://zalo.me/0908692888 | Cần gắn số điện thoại Zalo Official |
| **Email đại lý** | daily@rockylens.com | Cần kích hoạt hộp thư tên miền |
| **Email liên hệ** | info@rockylens.com | Cần kích hoạt hộp thư tên miền |
| **Địa chỉ Miền Nam** | 123 Võ Văn Tần, Phường Võ Thị Sáu, Q.3, TP.HCM | Cần cập nhật địa chỉ kho thực tế |
| **Địa chỉ Miền Bắc** | 45 Nguyễn Du, P. Bùi Thị Xuân, Q. Hai Bà Trưng, Hà Nội | Cần cập nhật địa chỉ kho thực tế |
| **Catalogue PDF** | `/documents/Rocky_Lens_Catalogue_2025.pdf` | Đã liên kết bản PDF catalogue 2025 |

---

## 5. Tài Liệu Kèm Theo
- [Kiến trúc hệ thống](docs/architecture.md)
- [Cẩm nang quản lý nội dung](docs/content-guide.md)
