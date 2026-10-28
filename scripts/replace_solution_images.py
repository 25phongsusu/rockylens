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
        "label": "Khi lái xe & ban đêm (DI CHUYỂN)"
    },
    {
        "source": os.path.join(ROOT_DIR, "làm việc.png"),
        "target_filename": "sol_chong_tia_uv.png",
        "label": "Làm việc với màn hình (HỌC TẬP & LÀM VIỆC)"
    },
    {
        "source": os.path.join(ROOT_DIR, "đổi màu.png"),
        "target_filename": "sol_doi_mau.png",
        "label": "Tròng kính đổi màu (NGOÀI TRỜI)"
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
    print("=== OPTIMIZING AND REPLACING SOLUTION IMAGES ===")
    
    # 1. Resize and save temp optimized images
    temp_files = {}
    for item in MAPPING:
        src_path = item["source"]
        if not os.path.exists(src_path):
            print(f"[ERROR] Source image not found: {src_path}")
            sys.exit(1)
        
        print(f"\nProcessing {item['label']}:")
        print(f"  Source: {src_path}")
        with Image.open(src_path) as img:
            print(f"  Original dimensions: {img.size}, mode: {img.mode}")
            resized = img.resize((800, 800), Image.Resampling.LANCZOS)
            temp_path = os.path.join(ROOT_DIR, f"temp_{item['target_filename']}")
            resized.save(temp_path, format="PNG", optimize=True)
            size_kb = os.path.getsize(temp_path) / 1024
            print(f"  Optimized to 800x800: {size_kb:.1f} KB -> {temp_path}")
            temp_files[item["target_filename"]] = temp_path

    # 2. Copy to all matching locations in Rocky
    print("\n--- Copying to Rocky workspace ---")
    for item in MAPPING:
        fn = item["target_filename"]
        tmp = temp_files[fn]
        with open(tmp, 'rb') as f:
            data = f.read()
        
        for subdir in SUBDIRS:
            dest_dir = os.path.join(ROOT_DIR, subdir)
            dest_file = os.path.join(dest_dir, fn)
            # Only write if folder exists or if file already existed
            if os.path.exists(dest_dir):
                with open(dest_file, 'wb') as df:
                    df.write(data)
                print(f"  [Rocky] Updated: {subdir}/{fn}")

    # 3. Copy to all matching locations in Rocky-Deploy
    if os.path.exists(DEPLOY_DIR):
        print("\n--- Copying to Rocky-Deploy repository ---")
        for item in MAPPING:
            fn = item["target_filename"]
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

    # 4. Clean up temp files
    for tmp in temp_files.values():
        if os.path.exists(tmp):
            os.remove(tmp)

    print("\n✅ All solution images replaced successfully!")

if __name__ == "__main__":
    process_images()
