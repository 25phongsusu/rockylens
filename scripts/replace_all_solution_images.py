import os
import sys
from PIL import Image

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEPLOY_DIR = os.path.abspath(os.path.join(ROOT_DIR, "..", "Rocky-Deploy"))

MAPPING = [
    {
        "source": os.path.join(ROOT_DIR, "xe.png"),
        "target_filename": "sol_kinh_lai_xe.png",
        "label": "Card 1: Khi lái xe & ban đêm (DI CHUYỂN)"
    },
    {
        "source": os.path.join(ROOT_DIR, "làm việc.png"),
        "target_filename": "sol_chong_tia_uv.png",
        "label": "Card 2: Làm việc với màn hình (HỌC TẬP & LÀM VIỆC)"
    },
    {
        "source": os.path.join(ROOT_DIR, "đổi màu.png"),
        "target_filename": "sol_doi_mau.png",
        "label": "Card 3: Tròng kính đổi màu (NGOÀI TRỜI)"
    },
    {
        "source": os.path.join(ROOT_DIR, "mỏng nhẹ.png"),
        "target_filename": "sol_kinh_khoan_va_dap.png",
        "label": "Card 4: Mỏng nhẹ & gọng không viền (THẨM MỸ & ĐỘ MỎNG)"
    },
    {
        "source": os.path.join(ROOT_DIR, "đa tròng.png"),
        "target_filename": "sol_da_trong.png",
        "label": "Card 5: Nhu cầu nhìn xa & gần (NHIỀU KHOẢNG NHÌN)"
    },
    {
        "source": os.path.join(ROOT_DIR, "học đường.png"),
        "target_filename": "sol_kiem_soat_can_thi.png",
        "label": "Card 6: Thị lực học đường (TRẺ EM & HỌC ĐƯỜNG)"
    }
]

SUBDIRS = [
    "public/uploads/solutions",
    "public/assets/uploads/solutions",
    "public/images/technologies",
    "public/assets/images/technologies",
    "public/images/real",
    "public/assets/images/real",
    "uploads/solutions",
    "assets/uploads/solutions",
    "images/technologies",
    "assets/images/technologies",
    "images/real",
    "assets/images/real",
    "out/uploads/solutions",
    "out/assets/uploads/solutions",
    "out/images/technologies",
    "out/assets/images/technologies",
    "out/images/real",
    "out/assets/images/real"
]

DEPLOY_SUBDIRS = [
    "uploads/solutions",
    "assets/uploads/solutions",
    "images/technologies",
    "assets/images/technologies",
    "images/real",
    "assets/images/real",
    "public/uploads/solutions",
    "public/assets/uploads/solutions",
    "public/images/technologies",
    "public/assets/images/technologies",
    "public/images/real",
    "public/assets/images/real"
]

def process_images():
    print("=== OPTIMIZING AND REPLACING ALL 6 SOLUTION IMAGES ===")
    
    temp_files = {}
    for item in MAPPING:
        src_path = item["source"]
        if not os.path.exists(src_path):
            print(f"[SKIP] Source image not found: {src_path}")
            continue
        
        print(f"\nProcessing {item['label']}:")
        print(f"  Source: {src_path}")
        with Image.open(src_path) as img:
            print(f"  Original: {img.size}, {img.mode}")
            resized = img.resize((800, 800), Image.Resampling.LANCZOS)
            temp_path = os.path.join(ROOT_DIR, f"temp_{item['target_filename']}")
            resized.save(temp_path, format="PNG", optimize=True)
            size_kb = os.path.getsize(temp_path) / 1024
            print(f"  Optimized 800x800: {size_kb:.1f} KB -> {temp_path}")
            temp_files[item["target_filename"]] = temp_path

    # Copy to Rocky
    print("\n--- Copying to Rocky workspace ---")
    for item in MAPPING:
        fn = item["target_filename"]
        if fn not in temp_files:
            continue
        tmp = temp_files[fn]
        with open(tmp, 'rb') as f:
            data = f.read()
        
        for subdir in SUBDIRS:
            dest_dir = os.path.join(ROOT_DIR, subdir)
            dest_file = os.path.join(dest_dir, fn)
            if os.path.exists(dest_dir):
                with open(dest_file, 'wb') as df:
                    df.write(data)
                print(f"  [Rocky] Updated: {subdir}/{fn}")

    # Copy to Rocky-Deploy
    if os.path.exists(DEPLOY_DIR):
        print("\n--- Copying to Rocky-Deploy repository ---")
        for item in MAPPING:
            fn = item["target_filename"]
            if fn not in temp_files:
                continue
            tmp = temp_files[fn]
            with open(tmp, 'rb') as f:
                data = f.read()
            
            for subdir in DEPLOY_SUBDIRS:
                dest_dir = os.path.join(DEPLOY_DIR, subdir)
                dest_file = os.path.join(dest_dir, fn)
                if os.path.exists(dest_dir):
                    with open(dest_file, 'wb') as df:
                        df.write(data)
                    print(f"  [Rocky-Deploy] Updated: {subdir}/{fn}")

    # Clean up temp
    for tmp in temp_files.values():
        if os.path.exists(tmp):
            os.remove(tmp)

    print("\n✅ All 6 solution images successfully replaced and synchronized!")

if __name__ == "__main__":
    process_images()
