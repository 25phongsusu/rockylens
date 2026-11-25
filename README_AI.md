# 🤖 ROCKY LENS — AI AGENT & DEVELOPER HANDBOOK (README_AI)

> **DÀNH CHO TẤT CẢ AI AGENT & DEVELOPER:**  
> Đọc tài liệu này trước khi chỉnh sửa cấu trúc dữ liệu, component hoặc quy trình build/deploy.

---

## 1. BẢN CHẤT DỰ ÁN & NGUYÊN TẮC CỐT LÕI

- **Thương hiệu:** **Rocky Lens (Canada Opticians)** — Phân phối tròng kính quang học chính hãng tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam.
- **Kiến trúc:** **100% Static Site Generation (SSG)** bằng Next.js (`output: 'export'`, xuất ra `out/`).

### ⚠️ Các điều tuyệt đối tránh:
1. ❌ **KHÔNG** cài đặt Database/ORM, server runtime, giỏ hàng/thanh toán e-commerce hay cổng đăng nhập động.
2. ❌ **KHÔNG** sửa trực tiếp thư mục `out/` hoặc đẩy code nguồn lên nhánh `main` (chỉ làm việc trên nhánh `source`).
3. ❌ **KHÔNG** bịa thông số quang học hay thay đổi hotline/email/địa chỉ khi chưa có yêu cầu.
4. ✅ **Luôn bọc đường dẫn ảnh/tài liệu local qua `assetUrl()`** (`src/lib/utils/index.ts`) để tương thích cả localhost (`/`) lẫn GitHub Pages (`NEXT_PUBLIC_BASE_PATH=/rockylens`).

---

## 2. KIẾN TRÚC THỐNG NHẤT (SINGLE NEXT.JS SSG PIPELINE)

```
content/home_content.json  ──▶  src/components/home/*.tsx
content/products/*.json    ──▶  src/lib/content/load-products.ts  ──▶ Next.js Build (out/) ──▶ Rocky-Deploy (main)
content/articles/**/*.md   ──▶  src/lib/content/load-articles.ts
```

---

## 3. PHÂN NHÁNH GIT & DEPLOY

| Nhánh Git | Mục đích |
| :--- | :--- |
| **`source`** | Nhánh phát triển chính (`Rocky`). |
| **`main`** | Nhánh static hosting cho GitHub Pages (`../Rocky-Deploy`, cập nhật tự động qua script). |

```bash
# Kiểm tra toàn vẹn dữ liệu & asset:
npm.cmd run check

# Build tĩnh ra thư mục out/:
npm.cmd run build

# Kiểm tra, build và đẩy thẳng lên GitHub Pages:
python scripts/deploy_to_github.py --push
```

---

## 4. HƯỚNG DẪN TÁC VỤ THƯỜNG GẶP

- **Sửa Trang Chủ:** Chỉnh trực tiếp `content/home_content.json` (`src/components/home/*.tsx` tự đọc JSON khi build).
- **Sửa Hotline / Email / Địa chỉ:** Sửa tại `src/config/site.ts` (`Header`, `Footer`, `PartnerSection`, `ContactCTA` dùng chung).
- **Sửa Menu / Footer links:** Sửa tại `src/config/navigation.ts`.
- **Thêm Sản phẩm mới:** Tạo `content/products/<slug>.json`, đặt ảnh vào `public/images/products/` (hoặc `public/uploads/solutions/`), thêm vào `NEED_CATALOG` / `TECH_CATALOG` trong `src/features/products/ProductCatalogView.tsx` (và `pricing-matrix.ts` nếu có bảng biến thể giá riêng).
- **Thêm Bài viết mới:** Tạo file `.md` trong `content/articles/kien-thuc/` (hoặc `cong-nghe/`, `huong-dan/`) kèm frontmatter đầy đủ.
- **Kiểm tra sau khi sửa:** Chạy `npm.cmd run check` và `npm.cmd run build`.

---

## 5. CODE QUALITY & ARCHITECTURE RULES

Trong suốt quá trình phát triển dự án, hãy tuân thủ các nguyên tắc:

1. **Modularization:** Chia code thành các module nhỏ, mỗi module đảm nhiệm một trách nhiệm cụ thể.
2. **Code Reusability:** Tái sử dụng các hàm, component và service thay vì viết code trùng lặp.
3. **Separation of Concerns:** Tách biệt Business Logic, UI, Database và API.
4. **Maintainability:** Ưu tiên code dễ đọc, dễ bảo trì và dễ mở rộng.
5. **File Size Management:** Tránh để một file chứa quá nhiều logic. Chủ động đề xuất tách file khi cần thiết.
6. **Backward Compatibility:** Khi refactor, phải đảm bảo không làm thay đổi hành vi hiện tại của ứng dụng.
7. **Testing:** Kiểm tra các chức năng liên quan sau mỗi lần refactor.
8. **Documentation:** Cập nhật cấu trúc thư mục và tài liệu khi có thay đổi kiến trúc.

> **Lưu ý:** Không refactor một cách máy móc. Chỉ tách module khi thực sự có lợi. Tránh tạo quá nhiều file nhỏ gây phức tạp không cần thiết.

### Trước khi refactor:
* Phân tích cấu trúc hiện tại.
* Xác định các đoạn code trùng lặp.
* Đề xuất phương án tổ chức lại.
* Đánh giá rủi ro ảnh hưởng đến chức năng cũ.

