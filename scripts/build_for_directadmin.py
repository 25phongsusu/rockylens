#!/usr/bin/env python3
# ==============================================================================
# ROCKY LENS — BUILD & PACKAGE ENGINE FOR DIRECTADMIN (HOSTING)
# Target Domain: https://rockylens.com (Root BasePath = "")
# Output: rockylens_directadmin.zip
# ==============================================================================

import os
import sys
import shutil
import subprocess
import zipfile

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "out")
ZIP_OUTPUT = os.path.join(ROOT_DIR, "rockylens_directadmin.zip")


def print_step(msg):
    print(f"\n=======================================================")
    print(f"📦 {msg}")
    print(f"=======================================================")


def run_cmd(cmd, env_vars=None):
    print(f"  > Executing: {cmd}")
    env = os.environ.copy()
    if env_vars:
        env.update(env_vars)
    res = subprocess.run(cmd, shell=True, cwd=ROOT_DIR, env=env)
    if res.returncode != 0:
        print(f"[ERROR] Command failed with code {res.returncode}: {cmd}")
        sys.exit(res.returncode)


def main():
    print_step("BƯỚC 1: KIỂM TRA TÍNH TOÀN VẸN DỮ LIỆU & HÌNH ẢNH")
    run_cmd("node scripts/check_site.mjs")

    print_step("BƯỚC 2: BUILD TĨNH NEXT.JS CHO TÊN MIỀN GỐC (ROOT DOMAIN rockylens.com)")
    # Set NEXT_PUBLIC_BASE_PATH="" to ensure no /rockylens subpath
    run_cmd("npx.cmd next build", env_vars={"NEXT_PUBLIC_BASE_PATH": ""})

    print_step("BƯỚC 3: ĐỒNG BỘ CẤU HÌNH DIRECTADMIN (.htaccess, robots.txt, sitemap.xml)")
    files_to_copy = [
        ("public/.htaccess", os.path.join(OUT_DIR, ".htaccess")),
        ("public/robots.txt", os.path.join(OUT_DIR, "robots.txt")),
        ("public/_redirects", os.path.join(OUT_DIR, "_redirects")),
    ]

    for src_rel, dst_path in files_to_copy:
        src_path = os.path.join(ROOT_DIR, src_rel)
        if os.path.exists(src_path):
            shutil.copy2(src_path, dst_path)
            print(f"  ✓ Copied {src_rel} -> out/{os.path.basename(dst_path)}")

    print_step("BƯỚC 4: ĐÓNG GÓI TỆP ZIP SẴN SÀNG UPLOAD DIRECTADMIN")
    if os.path.exists(ZIP_OUTPUT):
        os.remove(ZIP_OUTPUT)

    total_files = 0
    with zipfile.ZipFile(ZIP_OUTPUT, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(OUT_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, OUT_DIR)
                zipf.write(file_path, arcname)
                total_files += 1

    zip_size_mb = os.path.getsize(ZIP_OUTPUT) / (1024 * 1024)
    print(f"  ✓ Đã đóng gói thành công: rockylens_directadmin.zip ({zip_size_mb:.2f} MB)")
    print(f"  ✓ Tổng số tệp trong gói: {total_files} files")

    print("\n" + "=" * 65)
    print("🎉 HOÀN TẤT ĐÓNG GÓI CHO DIRECTADMIN!")
    print("=" * 65)
    print(f"Tệp cần upload: {ZIP_OUTPUT}")
    print("\nHướng dẫn 3 bước thao tác trên DirectAdmin:")
    print("  1. Đăng nhập DirectAdmin -> Vào 'File Manager'.")
    print("  2. Mở thư mục 'domains/rockylens.com/public_html/' (hoặc 'public_html').")
    print("  3. Nén/xóa file cũ -> Bấm 'Upload Files' chọn file 'rockylens_directadmin.zip' -> Chuột phải chọn 'Extract' (Giải nén).")
    print("=" * 65 + "\n")


if __name__ == "__main__":
    main()
