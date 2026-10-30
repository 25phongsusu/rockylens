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
1. **Nhánh làm việc:** Luôn làm việc trên nhánh `source`. Nhánh `main` chỉ dùng để deploy tĩnh cho GitHub Pages.
2. **Kiến trúc SSG:** 100% Static HTML export (`output: 'export'`). Tuyệt đối KHÔNG cài đặt DB server (SQL/Prisma/MongoDB...), không tạo giỏ hàng/thanh toán e-commerce hay portal đại lý động.
3. **Single Source of Truth cho Trang Chủ:** Sửa nội dung tại `content/home_content.json` rồi chạy `python scripts/sync_home.py --apply`. Không sửa chay trực tiếp `index.html`.
4. **Kiểm tra trước khi commit:**
   - Kiểm tra dữ liệu: `python scripts/sync_home.py --check`
   - Build tĩnh Next.js: `npm.cmd run build` (trên Windows PowerShell dùng `npm.cmd`).

