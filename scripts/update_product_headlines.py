import os
import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRODUCTS_DIR = os.path.join(ROOT_DIR, "content", "products")

PRODUCT_UPDATES = {
    "rocky-156-bluecut-shmc.json": {
        "consumerHeadline": "Ngồi Máy Tính & Làm Việc Văn Phòng",
        "materialSubtitle": "Rocky 1.56 BlueCut UV420 • Phôi quang học NK-55 lọc ánh sáng xanh màn hình & chống chói"
    },
    "rocky-160-mr8-aspheric.json": {
        "consumerHeadline": "Chạy Bộ & Vận Động Thể Thao (Chống Va Đập)",
        "materialSubtitle": "Rocky 1.60 MR-8 Aspheric • Phôi Mitsui MR-8 (Nhật Bản) dẻo dai chống vỡ cho gọng khoan & xẻ cước"
    },
    "rocky-167-ultra-thin-bluecut.json": {
        "consumerHeadline": "Cận Độ Cao Mỏng Nhẹ & Thẩm Mỹ",
        "materialSubtitle": "Rocky 1.67 Aspheric BlueCut • Phôi siêu mỏng Mitsui MR-7 mỏng hơn 35%, tích hợp lọc ánh sáng xanh UV420"
    },
    "rocky-174-ultra-high-index.json": {
        "consumerHeadline": "Cận Nặng Siêu Mỏng - Nhẹ Tối Đa",
        "materialSubtitle": "Rocky 1.74 Freeform Aspheric • Phôi cao cấp Mitsui MR-174 mỏng hơn 45%, triệt tiêu quang sai vùng biên"
    },
    "rocky-trendy-photochromic-grey.json": {
        "consumerHeadline": "Di Chuyển & Ngoài Trời Nắng (Đổi Màu Khói)",
        "materialSubtitle": "Rocky Trendy Smart Khói 1.56/1.60 • Phủ Spin-Coat đổi màu khói râm chuẩn CAT 3, chống tia UV400"
    },
    "rocky-trendy-photochromic-brown.json": {
        "consumerHeadline": "Ngoài Trời Nắng Gắt & Thời Trang (Đổi Màu Trà)",
        "materialSubtitle": "Rocky Trendy Sun Brown 1.60 • Phôi dẻo dai MR-8 đổi màu trà dịu mắt, chống va đập và tia UV tuyệt đối"
    },
    "rocky-driveshield-night-vision.json": {
        "consumerHeadline": "Lái Xe Ban Đêm & Đi Mưa Chống Chói Đèn Pha",
        "materialSubtitle": "Rocky DriveShield 1.60 • Phủ Ruby AR Multi-Matrix lọc phổ chói pha LED & trượt nước mưa tối đa"
    },
    "rocky-antifatigue-relax.json": {
        "consumerHeadline": "Làm Việc Cả Ngày & Chống Mỏi Mắt Điện Tử",
        "materialSubtitle": "Rocky Digital Relax 1.56/1.60 • Trợ lực điều tiết +0.60 ADD thư giãn cơ mắt khi tập trung làm việc lâu"
    },
    "rocky-myocontrol-dims-kids.json": {
        "consumerHeadline": "Kiểm Soát Tăng Độ Cận Cho Trẻ Em & Học Sinh",
        "materialSubtitle": "Rocky MyoControl D.I.M.S 1.59/1.60 • Mảng vi thấu kính phân kỳ chu biên giảm tới 60% tiến triển cận thị"
    },
    "rocky-freeform-progressive-hd.json": {
        "consumerHeadline": "Đa Tròng Đọc Sách, Điện Thoại & Đi Lại (Tuổi 40+)",
        "materialSubtitle": "Rocky Freeform HD 1.56/1.60 • Quang học Freeform 3D chuyển tiếp êm ái, xóa bỏ ranh giới xa - trung - gần"
    },
    "rocky-progressive-short-corridor.json": {
        "consumerHeadline": "Đa Tròng Gọng Nhỏ Thời Trang & Mỏng Nhẹ",
        "materialSubtitle": "Rocky Compact Pro 1.67 • Hành lang ngắn 11-13mm trên phôi Mitsui MR-7 chuyên dụng cho dáng gọng nhỏ"
    },
    "rocky-polarized-driving-sports.json": {
        "consumerHeadline": "Thể Thao Dã Ngoại, Đạp Xe & Chạy Bộ (Chống Lóa)",
        "materialSubtitle": "Rocky Polarized HD 1.50/1.60 • Phim phân cực chuyên dụng triệt tiêu 99% ánh sáng lóa phản xạ từ mặt nước và đường"
    }
}

def update_products():
    print("=== UPDATING CONSUMER HEADLINES & MATERIAL SUBTITLES ===")
    for filename, updates in PRODUCT_UPDATES.items():
        file_path = os.path.join(PRODUCTS_DIR, filename)
        if not os.path.exists(file_path):
            print(f"[WARN] File not found: {filename}")
            continue
        
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        data["consumerHeadline"] = updates["consumerHeadline"]
        data["materialSubtitle"] = updates["materialSubtitle"]
        
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            
        print(f"✓ {filename}")
        print(f"    Headline: {updates['consumerHeadline']}")
        print(f"    Subtitle: {updates['materialSubtitle']}")

    print("\n✅ All 12 product JSON files updated successfully!")

if __name__ == "__main__":
    update_products()
