<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# AI AGENT WORKFLOW & HANDOFF GUIDE

Tất cả các AI Agent (Claude, Cursor, Copilot, Gemini, GPT...) khi tiếp nhận repository này **BẮT BUỘC** đọc sổ tay hướng dẫn tại:
👉 [**README_AI.md**](README_AI.md)

### Nguyên tắc cốt lõi:
1. **Nhánh làm việc:** Luôn làm việc trên nhánh `source`. Nhánh `main` chỉ dùng để deploy tĩnh cho GitHub Pages (`../Rocky-Deploy`).
2. **Kiến trúc SSG thống nhất:** 100% Static HTML export (`output: 'export'`) từ Next.js (`out/`). Tuyệt đối KHÔNG cài đặt DB server (SQL/Prisma/MongoDB...), không tạo giỏ hàng/thanh toán e-commerce hay portal đại lý động.
3. **Single Source of Truth cho Trang Chủ:** `src/components/home/*.tsx` đọc trực tiếp từ `content/home_content.json`.
4. **Kiểm tra trước khi commit:**
   - Kiểm tra dữ liệu & ảnh: `npm.cmd run check` (`node scripts/check_site.mjs`)
   - Build tĩnh Next.js: `npm.cmd run build` (trên Windows PowerShell dùng `npm.cmd`).

---

### ⚡ BẢN ĐỒ ROUTE & COMPONENT (QUICK ROUTE MAP)
*Truy cập trực tiếp file tương ứng, KHÔNG scan thư mục từ đầu:*

| Route URL | File Component / Page chính | File Dữ liệu / Nội dung liên quan |
| :--- | :--- | :--- |
| **Trang chủ (`/`)** | `src/app/page.tsx`, `src/components/home/*.tsx` | `content/home_content.json` |
| **Catalogue Sản phẩm (`/san-pham`, `/trong-kinh`)** | `src/components/products/CatalogPageShell.tsx`, `src/features/products/ProductCatalogView.tsx` | `content/products/*.json`, `pricing-matrix.ts` |
| **Chi tiết sản phẩm (`/trong-kinh/[slug]`)** | `src/app/trong-kinh/[slug]/page.tsx` | `content/products/<slug>.json`, `pricing-matrix.ts` |
| **Công nghệ (`/cong-nghe`)** | `src/app/cong-nghe/page.tsx` | Dữ liệu trong page |
| **RX Lab (`/rx-lab`)** | `src/app/rx-lab/page.tsx` | Dữ liệu trong page |
| **Blog & Cẩm nang (`/blog`, `/kham-pha-trong-kinh`)** | `src/app/blog/page.tsx`, `[slug]/page.tsx` | `content/articles/**/*.md` |
| **Đối tác B2B (`/danh-cho-doi-tac`)** | `src/app/danh-cho-doi-tac/page.tsx` | `src/config/site.ts` |
| **Về chúng tôi (`/ve-chung-toi`)** | `src/app/ve-chung-toi/page.tsx` | `src/config/site.ts` |
| **Liên hệ & Kho (`/lien-he`)** | `src/app/lien-he/page.tsx` | `src/config/site.ts` |
| **Deploy GitHub Pages** | `scripts/deploy_to_github.py` | Đồng bộ `out/` sang `../Rocky-Deploy` |

### 🚀 NGUYÊN TẮC TỐC ĐỘ DÀNH CHO AI AGENT:
- **Tìm kiếm:** Luôn ưu tiên dùng `git ls-files` hoặc `git grep -n "keyword" src/` (truy xuất từ Git index siêu tốc, không dùng lệnh quét đĩa sâu qua `node_modules`/`.next`).
- **Phạm vi sửa đổi:** Tập trung chính xác vào component đích được yêu cầu, không sửa lan man sang các component khác nếu không có chỉ định.
- **Tối ưu thời gian phản hồi:** Với các chỉnh sửa CSS, HTML, text hoặc link đơn giản, không tự ý chạy full `npm run build` (tốn 20-30s build 53 trang tĩnh) trừ khi người dùng yêu cầu build/deploy hoặc sửa logic phức tạp.

---

### 🏛️ CODE QUALITY & ARCHITECTURE RULES

Trong suốt quá trình phát triển dự án, hãy tuân thủ các nguyên tắc:

1. **Modularization:** Chia code thành các module nhỏ, mỗi module đảm nhiệm một trách nhiệm cụ thể.
2. **Code Reusability:** Tái sử dụng các hàm, component và service thay vì viết code trùng lặp.
3. **Separation of Concerns:** Tách biệt Business Logic, UI, Database và API.
4. **Maintainability:** Ưu tiên code dễ đọc, dễ bảo trì và dễ mở rộng.
5. **File Size Management:** Tránh để một file chứa quá nhiều logic. Chủ động đề xuất tách file khi cần thiết.
6. **Backward Compatibility:** Khi refactor, phải đảm bảo không làm thay đổi hành vi hiện tại của ứng dụng.
7. **Testing:** Kiểm tra các chức năng liên quan sau mỗi lần refactor (`npm.cmd run check`, `npm.cmd run build`).
8. **Documentation:** Cập nhật cấu trúc thư mục và tài liệu khi có thay đổi kiến trúc.

> **Lưu ý:** Không refactor một cách máy móc. Chỉ tách module khi thực sự có lợi. Tránh tạo quá nhiều file nhỏ gây phức tạp không cần thiết.

#### Quy trình chuẩn trước khi refactor:
* Phân tích cấu trúc hiện tại.
* Xác định các đoạn code trùng lặp.
* Đề xuất phương án tổ chức lại.
* Đánh giá rủi ro ảnh hưởng đến chức năng cũ.


