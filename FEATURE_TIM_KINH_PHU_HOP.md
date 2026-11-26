# Đặc tả tính năng: Tìm Kính Phù Hợp Bằng AI (`/tim-kinh-phu-hop`) — Rocky Lens

Tài liệu này mô tả chi tiết kiến trúc, thuật toán và hướng dẫn triển khai tính năng **Quét khuôn mặt AI & Trắc nghiệm chọn gọng/tròng kính phù hợp** cho dự án **Rocky Lens** (`output: 'export'` — 100% Static HTML).

---

## 1. Mục tiêu & Phạm vi

Xây dựng trang `/tim-kinh-phu-hop` cho phép người dùng:
1. **Quét khuôn mặt bằng Camera hoặc Tải ảnh lên** (hoặc chọn thủ công dáng mặt nếu không muốn bật camera).
2. **Tự động phân tích 478 điểm mốc (landmarks)** ngay trên trình duyệt bằng **MediaPipe `FaceLandmarker`** để xác định dáng khuôn mặt (`Oval`, `Round`, `Square`, `Heart`, `Diamond`, `Oblong`).
3. **Thử dáng gọng kính trực tiếp lên ảnh (2D Virtual Frame Overlay)** theo đúng tọa độ mắt & sống mũi.
4. **Trả lời nhanh 2–3 bước về nhu cầu thị lực & độ khúc xạ** (Làm việc máy tính, Lái xe ban đêm, Đi nắng đổi màu, Đa tròng, Độ cận/viễn/loạn...).
5. **Nhận kết quả cá nhân hóa**:
   - Dáng gọng kính & kích thước gọng phù hợp nhất với khuôn mặt.
   - Danh sách **tròng kính Rocky Lens** phù hợp nhất (lấy trực tiếp từ `content/products/*.json` qua `getAllProducts()`).

---

## 2. Ràng buộc kiến trúc của Rocky Lens

* **100% Static Export (`next.config.ts` dùng `output: 'export'`):**
  * **KHÔNG** tạo API route động như `/api/face-detection` (sẽ lỗi khi export tĩnh).
  * Toàn bộ AI nhận diện khuôn mặt, tính tỷ lệ hình học và lọc gợi ý sản phẩm chạy **100% phía Client (Browser)**.
* **Tương thích `basePath` (`/rockylens` khi production):**
  * Mọi đường dẫn tài nguyên tĩnh trong `public/` (WASM, file model `.task`, icon/SVG gọng kính) **bắt buộc** bọc qua helper `assetUrl()` từ `src/lib/utils/index.ts`.
* **Đồng bộ Design System (`src/app/globals.css`):**
  * Dùng các CSS variables có sẵn: `--color-heading`, `--color-text`, `--color-muted`, `--color-border`, `--gradient-button`, class `.button-primary`.

---

## 3. Cài đặt thư viện & Chuẩn bị Model AI

### Bước 1: Cài `@mediapipe/tasks-vision`
Chạy tại thư mục `C:\Users\phong\Desktop\Rocky`:
```powershell
npm.cmd install @mediapipe/tasks-vision
```

### Bước 2: Self-host WASM & Model vào `public/mediapipe/`
Để chạy ổn định trên GitHub Pages / DirectAdmin mà không phụ thuộc CDN ngoài:
```powershell
New-Item -ItemType Directory -Force -Path "public\mediapipe\wasm" | Out-Null
Copy-Item -Path "node_modules\@mediapipe\tasks-vision\wasm\*" -Destination "public\mediapipe\wasm\" -Recurse -Force
curl.exe -L -o "public\mediapipe\face_landmarker.task" "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
```

Khi khởi tạo trong code, dùng `assetUrl('/mediapipe/wasm')` và `assetUrl('/mediapipe/face_landmarker.task')`.

---

## 4. Cấu trúc file đề xuất

```text
src/
├── app/
│   └── tim-kinh-phu-hop/
│       └── page.tsx                          # Server Component: load getAllProducts(false) + metadata SEO
└── features/
    └── face-finder/
        ├── types.ts                          # Kiểu dữ liệu FaceShape, QuizState, FaceMetrics, Recommendation
        ├── face-shape-analyzer.ts            # Wrapper MediaPipe FaceLandmarker + tính tỷ lệ 478 landmarks
        ├── frame-lens-recommendations.ts     # Logic mapping: Dáng mặt -> Gọng kính; Nhu cầu/Độ cận -> Tròng Rocky Lens
        ├── FrameTryOnCanvas.tsx              # Vẽ ảnh/camera + overlay lưới landmark & gọng kính SVG theo góc mắt
        └── FaceFinderWizard.tsx              # Client Component chính: Wizard 4 bước + Kết quả
```

---

## 5. Thuật toán phân tích khuôn mặt (MediaPipe 478 Landmarks)

### 5.1. Cấu hình `FaceLandmarker`
* `baseOptions`: `{ modelAssetPath: assetUrl('/mediapipe/face_landmarker.task'), delegate: 'CPU' }`
* `runningMode`: `'IMAGE'` (ổn định trên mọi thiết bị di động & desktop)
* `numFaces`: `1`
* Trước khi đưa ảnh vào model, dùng HTML5 `<canvas>` resize ảnh tối đa chiều rộng ~`960px` (`image/jpeg`, quality `0.9`) để quét nhanh (< 500ms).

### 5.2. Các điểm mốc (Landmark Indices) quan trọng
Trên hệ tọa độ chuẩn hóa `[0..1]` của MediaPipe Face Mesh (478 điểm):
* **Đỉnh trán / Chân tóc ước lượng:** điểm `10` (mở rộng lên trên ~12–15% chiều cao mặt để bù phần trán trên nếu cần)
* **Cằm:** điểm `152`
* **Độ rộng trán (Forehead Width):** khoảng cách giữa `54` (trái) và `284` (phải) hoặc `103` – `332`
* **Độ rộng gò má (Cheekbone Width):** khoảng cách giữa `234` (trái) và `454` (phải)
* **Độ rộng xương hàm (Jaw Width):** khoảng cách giữa `172` (trái) và `397` (phải) hoặc `58` – `288`
* **Tâm mắt trái / phải (dùng cho 2D Try-On):** trung điểm khóe mắt hoặc điểm `468` (iris trái) & `473` (iris phải), sống mũi `168` / `6`.

### 5.3. Công thức tính tỷ lệ & Phân loại 6 dáng mặt
Tính các tỷ lệ chuẩn hóa theo `cheekboneWidth` (hoặc `faceWidth`):
* `lengthToWidth = faceLength / cheekboneWidth`
* `foreheadToCheek = foreheadWidth / cheekboneWidth`
* `jawToCheek = jawWidth / cheekboneWidth`
* `foreheadToJaw = foreheadWidth / jawWidth`

Quy tắc phân loại gợi ý:
1. **Dài (Oblong):** `lengthToWidth >= 1.48`
2. **Tròn (Round):** `lengthToWidth <= 1.22` và `jawToCheek >= 0.80` (đường nét mềm, hàm không quá hẹp)
3. **Vuông (Square):** `lengthToWidth <= 1.32` và `jawToCheek >= 0.86` và `Math.abs(foreheadToJaw - 1) <= 0.12`
4. **Trái tim (Heart):** `foreheadToJaw >= 1.15` và `jawToCheek <= 0.78`
5. **Kim cương (Diamond):** `foreheadToCheek <= 0.88` và `jawToCheek <= 0.82` (gò má rộng nhất)
6. **Trái xoan (Oval):** Các trường hợp cân đối còn lại (`1.22 < lengthToWidth < 1.48`).

> **Lưu ý UX:** Luôn trả về thêm chỉ số % độ tin cậy hoặc các tỷ lệ đo được (`Dài/Rộng`, `Trán/Hàm`) để người dùng thấy rõ lý do AI kết luận, đồng thời cho phép bấm chọn lại dáng mặt thủ công nếu ánh sáng chụp chưa chuẩn.

---

## 6. Luồng giao diện Wizard 4 bước (`FaceFinderWizard.tsx`)

### Bước 1: Xác định dáng khuôn mặt
* **Tab A — Quét AI (Mặc định):**
  * Nút **Mở Camera** (`getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 960 } } })`) kèm khung oval căn mặt trên màn hình.
  * Nút **Tải ảnh chân dung** (upload file `.jpg/.png/.webp`).
  * Sau khi chụp/tải ảnh: chạy `FaceLandmarker`, hiển thị kết quả dáng mặt + cho phép bật/tắt **Thử gọng kính 2D trực tiếp lên ảnh** (xoay/scale tự động theo tọa độ 2 mắt `468`, `473` và sống mũi `168`).
* **Tab B — Chọn thủ công:** 6 card minh họa dáng mặt (`Oval`, `Round`, `Square`, `Heart`, `Diamond`, `Oblong`).

### Bước 2: Nhu cầu sử dụng & Môi trường
Cho phép chọn 1 hoặc nhiều nhu cầu (map với `NEED_CATALOG` / `TECH_CATALOG` trong `src/features/products/catalog-config.ts`):
* Làm việc máy tính / Thiết kế đồ họa (Chống ánh sáng xanh, không ám vàng)
* Hay đi ngoài trời / Thời trang (Đổi màu quang học Photochromic)
* Lái xe ban đêm / Đi mưa (DriveShield chống chói)
* Đọc sách & nhìn xa gần (Đa tròng Freeform / Hai tròng)
* Trẻ em / Học sinh đang tăng độ cận (Kiểm soát cận thị MyoControl)
* Dùng gọng khoan / Không viền (Chống va đập, độ bền cao)

### Bước 3: Mức độ khúc xạ & Phong cách gọng
* **Độ cận/viễn:**
  * Nhẹ (`< 2.00D`) $\rightarrow$ Gợi ý chiết suất `1.56` hoặc `1.60`
  * Trung bình (`2.00D – 4.00D`) $\rightarrow$ Gợi ý chiết suất `1.60` hoặc `1.67`
  * Cao (`> 4.00D`) $\rightarrow$ Gợi ý chiết suất siêu mỏng `1.67` hoặc `1.74`
* **Gu phong cách (tùy chọn):** Tối giản / Cổ điển / Hiện đại / Thể thao.

### Bước 4: Trang kết quả cá nhân hóa
1. **Tóm tắt hồ sơ khuôn mặt:** Dáng mặt + tỷ lệ đo được + ảnh thử gọng 2D.
2. **Gợi ý Gọng kính hợp mặt:**
   * Dáng gọng nên chọn (kèm giải thích vì sao hợp) & dáng gọng nên tránh.
   * Gợi ý kích thước gọng (Size S / M / L dựa theo chiều rộng mặt tương đối).
3. **Gợi ý Tròng kính Rocky Lens phù hợp nhất:**
   * Hiển thị top 2–4 sản phẩm từ `content/products/*.json` khớp với nhu cầu & độ khúc xạ ở Bước 2–3.
   * Mỗi card có ảnh, tên, chiết suất, giá tham khảo, nút xem chi tiết `/trong-kinh/[slug]/`.
4. **CTA hành động:** Nút **Tìm đại lý Rocky Lens gần nhất** (`/lien-he/`) và **Tư vấn qua Zalo** (`https://zalo.me/0933102653`).

---

## 7. Bảng Mapping gợi ý chuẩn

### 7.1. Dáng mặt $\rightarrow$ Dáng gọng kính
| Dáng mặt | Dáng gọng nên chọn | Dáng gọng nên tránh |
| :--- | :--- | :--- |
| **Tròn (Round)** | Vuông, Chữ nhật, Đa giác, Mắt mèo góc cạnh | Gọng tròn nhỏ |
| **Vuông (Square)** | Tròn, Oval, Browline bo cong, Aviator | Gọng vuông sắc cạnh, quá dày |
| **Trái xoan (Oval)** | Hầu hết các dáng (Vuông, Tròn, Oval, Mắt mèo) | Gọng quá to che mất tỷ lệ mặt |
| **Trái tim (Heart)** | Oval, Tròn, Aviator, Gọng khoan không viền | Gọng quá nặng phần trên |
| **Kim cương (Diamond)** | Mắt mèo, Oval, Browline, Gọng không viền | Gọng hẹp hơn gò má |
| **Dài (Oblong)** | Gọng bản to/cao (Oversized, Vuông lớn, Aviator) | Gọng quá nhỏ hoặc quá dẹt |

### 7.2. Nhu cầu & Độ khúc xạ $\rightarrow$ Slug sản phẩm Rocky Lens
Tham chiếu các slug có sẵn trong `content/products/*.json`:
* **Máy tính / Đồ họa:** `rocky-156-bluecut-shmc`, `rocky-smart-bluecontrol`, `rocky-anh-sang-xanh-bluecut`
* **Ngoài trời / Đổi màu:** `rocky-trendy-photochromic-grey`, `rocky-chameleon-photochromic`, `rocky-doi-mau-trendy`, `rocky-doi-mau-smart`
* **Lái xe ban đêm:** `rocky-driveshield-night-vision`, `rocky-driveshield-ruby`
* **Đa tròng / Lão thị:** `rocky-freeform-progressive-hd`, `rocky-da-trong-freeform`, `rocky-hai-trong-invisible`
* **Trẻ em cận thị:** `rocky-myocontrol-dims-kids`, `rocky-myopia-control`
* **Gọng khoan / Chống va đập:** `rocky-160-mr8-aspheric`, `rocky-kinh-khoan-chong-va-dap`
* **Độ cận cao / Siêu mỏng:** `rocky-167-ultra-thin-bluecut`, `rocky-chong-tia-uv-167`, `rocky-174-ultra-high-index`

---

## 8. Tích hợp vào hệ thống & Kiểm thử

1. **Điều hướng (`src/config/navigation.ts`):** Thêm mục `{ title: 'Tìm Kính AI', href: '/tim-kinh-phu-hop/' }` vào `mainNavigation` hoặc đặt CTA nổi bật ở trang chủ (`HeroSection.tsx` / `Header.tsx`).
2. **Sitemap (`src/app/sitemap.ts`):** Thêm route `/tim-kinh-phu-hop/` vào danh sách URL tĩnh.
3. **Kiểm tra dữ liệu & build tĩnh:**
   ```powershell
   npm.cmd run check
   npm.cmd run build
   ```
   Đảm bảo `out/tim-kinh-phu-hop/index.html` được sinh ra thành công và không có lỗi hydration hoặc đường dẫn `basePath`.
