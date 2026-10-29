import os
import shutil
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEPLOY_DIR = os.path.abspath(os.path.join(ROOT_DIR, "..", "Rocky-Deploy"))

SRC_DIR = os.path.join(ROOT_DIR, "public", "images", "technologies")

DEST_DIRS = [
    os.path.join(ROOT_DIR, "public", "assets", "images", "technologies"),
    os.path.join(ROOT_DIR, "out", "images", "technologies"),
    os.path.join(ROOT_DIR, "out", "assets", "images", "technologies"),
    os.path.join(DEPLOY_DIR, "images", "technologies"),
    os.path.join(DEPLOY_DIR, "assets", "images", "technologies"),
    os.path.join(DEPLOY_DIR, "public", "images", "technologies"),
    os.path.join(DEPLOY_DIR, "public", "assets", "images", "technologies"),
]

def main():
    print("=== SYNCHRONIZING TECHNOLOGY HIGHLIGHT IMAGES ===")
    
    tech_files = ["tech_sec3_1.jpg", "tech_sec3_2.jpg", "tech_sec3_3.jpg"]
    
    for f in tech_files:
        src_path = os.path.join(SRC_DIR, f)
        if not os.path.exists(src_path):
            print(f"[ERROR] Source not found: {src_path}")
            sys.exit(1)
        size = os.path.getsize(src_path)
        print(f"\nSource: {f} ({size} bytes)")
        
        for d in DEST_DIRS:
            os.makedirs(d, exist_ok=True)
            dest_file = os.path.join(d, f)
            shutil.copy2(src_path, dest_file)
            print(f"  ✓ Copied to: {os.path.relpath(dest_file, os.path.dirname(ROOT_DIR))}")

    print("\n✅ Technology highlight images are now 100% synchronized across all folders!")

if __name__ == "__main__":
    main()
