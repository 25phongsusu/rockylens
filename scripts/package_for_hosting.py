#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ROCKY LENS — Hosting Deployment Packaging Engine
================================================
Packages the static build for root custom domain (rockylens.com)
on DirectAdmin or cPanel web hosting.

Output: `rockylens_deploy.zip` in project root
"""

import os
import sys
import shutil
import zipfile
import subprocess

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "out")
ZIP_OUTPUT = os.path.join(ROOT_DIR, "rockylens_deploy.zip")

HTACCESS_CONTENT = """# Rocky Lens Apache / DirectAdmin Optimization Configuration
Options -Indexes

# Error 404
ErrorDocument 404 /404.html

# Charset
AddDefaultCharset UTF-8

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirect HTTP to HTTPS (uncomment if SSL is active)
  # RewriteCond %{HTTPS} off
  # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
"""

def main():
    print("1. Synchronizing Home Content...")
    subprocess.run([sys.executable, os.path.join(ROOT_DIR, "scripts", "sync_home.py"), "--apply"], check=True)

    print("2. Building Next.js for root domain (NEXT_PUBLIC_BASE_PATH='')...")
    env = os.environ.copy()
    env["NEXT_PUBLIC_BASE_PATH"] = ""
    res = subprocess.run(["npm.cmd", "run", "build"], env=env, cwd=ROOT_DIR)
    if res.returncode != 0:
        print("[ERROR] Build failed!")
        sys.exit(1)

    print("3. Creating .htaccess in out/...")
    with open(os.path.join(OUT_DIR, ".htaccess"), "w", encoding="utf-8") as f:
        f.write(HTACCESS_CONTENT)

    print(f"4. Packaging files into {ZIP_OUTPUT}...")
    if os.path.exists(ZIP_OUTPUT):
        os.remove(ZIP_OUTPUT)

    file_count = 0
    with zipfile.ZipFile(ZIP_OUTPUT, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(OUT_DIR):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, OUT_DIR)
                zf.write(full_path, rel_path)
                file_count += 1

    size_mb = os.path.getsize(ZIP_OUTPUT) / (1024 * 1024)
    print(f"[SUCCESS] Packaged {file_count} files into '{ZIP_OUTPUT}' ({size_mb:.2f} MB).")

if __name__ == "__main__":
    main()
