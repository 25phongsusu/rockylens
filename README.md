# Rocky Lens - Canada Opticians 🇨🇦
### B2B Optical Lab & Wholesale Solutions Portal

Giao diện web chuyên nghiệp cho thương hiệu **Rocky Lens** (Canada Opticians), được phát triển và chuyển thể trực tiếp từ các file thiết kế chuyên dụng (**`web.psd`** và **`web 2.psd`**), đồng bộ chuẩn mực nhận diện thương hiệu từ [rockylens.com](https://rockylens.com/).

---

## ✨ Điểm Nổi Bật Của Giao Diện

1. **Giao diện 2-Trong-1 (Chuyển đổi mượt mà bằng thanh điều hướng):**
   - **🏛️ Giao diện 1: B2B Wholesale Portal & Optical Lab (từ `web.psd`):**
     - Hero section với hiệu ứng trôi nổi 3D của tròng kính quang học.
     - Giới thiệu phòng Lab kỹ thuật số CanRx và công nghệ gia công Freeform 24h.
     - **Thanh trượt mô phỏng quang học Trước/Sau (Before/After Slider):** So sánh trực quan góc nhìn thực tế chống lóa đèn ban đêm của dòng tròng lái xe **Rocky DriveShield**.
     - Hệ thống bản đồ mạng lưới 1.200+ đại lý toàn quốc và bảo chứng y khoa (**ISO 13485:2016, FDA, CE**).
     - Form đăng ký đại lý B2B nhiều bước với **thanh thông tin cố định bên trái (Sticky Panel)** bám theo màn hình khi điền form.
   - **🔍 Giao diện 2: Tra Cứu Giải Pháp Tròng Kính & Cẩm Nang Tư Vấn (từ `web 2.psd`):**
     - 10 nhóm giải pháp tròng kính chuyên biệt: Trẻ em (MyoControl), Văn phòng (Office Progressive), Lái xe đêm (DriveShield), Chống vỡ (Impact Polycarbonate), Đổi màu (Photochromic), Lọc ánh sáng xanh (BlueCut SHMC), Siêu mỏng (1.74 High Index), v.v.
     - Bộ lọc tìm kiếm thông minh theo nhóm nhu cầu thị lực.
     - Thẻ thông số chi tiết (ABBE value, chiết suất, bảo hành lớp phủ).

2. **Typography Chuẩn Hãng (Đồng Bộ 100% Từ `rockylens.com`):**
   - **Font chủ đạo:** `SF Pro Display` (San Francisco Pro Display của Apple, đầy đủ các trọng số Light 300, Regular 400, Medium 500, Semibold 600, Bold 700, Heavy 800) lưu trữ định dạng web `.woff2` và `.otf`.
   - **Font thư pháp / chữ ký:** `Dancing Script` (Google Fonts).

3. **Công Cụ Thử Nghiệm Màu Nền Logo Thời Gian Thực (Background Inspector):**
   - Hỗ trợ đổi nhanh 4 màu nền: **Trắng Y Khoa (#FFF - 10/10)**, **Ivory Quà Tặng (#FBF9F5)**, **Deep Teal Nhận Diện (#0B7B8A - tự động đóng khung thẻ trắng)**, và **Midnight Navy (#0E253A - tự động chuyển Logo âm bản chữ trắng)**.

---

## 🚀 Trải Nghiệm Nhanh

Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào:
```bash
# Hoặc sử dụng live server / http server bất kỳ
npx serve .
# Hoặc python
python -m http.server 8000
```

---

## 📁 Cấu Trúc Thư Mục

```
rockylens/
├── index.html                 # Giao diện web hoàn chỉnh (HTML5, Tailwind CSS, JavaScript)
├── README.md                  # Hướng dẫn dự án
├── .gitignore                 # Loại trừ file tạm và tư liệu dung lượng lớn
├── assets/                    # Thư mục tài nguyên tối ưu cho web
│   ├── fonts/sf-pro-display/  # Bộ font chính thức SF Pro Display (.woff2 & .otf)
│   ├── logo_rocky_*.png       # Logo chuẩn vector trong suốt & âm bản chữ trắng
│   ├── lens_transparent.png   # Tròng kính 3D tách nền trong suốt
│   ├── driveshield_*.png      # Ảnh so sánh quang học Before/After trích từ bao bì thật
│   ├── map_preview.png        # Bản đồ mạng lưới phân phối toàn quốc
│   └── thumb_card_*.png       # 10 ảnh đại diện cho các nhóm giải pháp
├── web.psd                    # File thiết kế gốc B2B Portal (19 MB)
└── web 2.psd                  # File thiết kế gốc Giải pháp tròng kính (7 MB)
```
