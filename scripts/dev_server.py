#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
RockyLens Instant Local Dev Server
Serves Rocky workspace directly:
- / -> index.html (Master landing page, hot-updated in 0.2s)
- /assets, /images, /uploads -> static media
- /trong-kinh, /san-pham, /ve-chung-toi -> out/ prebuilt static pages
"""

import http.server
import socketserver
import os
import sys

PORT = 3000
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "out")

class RockyDevHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = path.split('?', 1)[0].split('#', 1)[0]
        clean_path = path.lstrip('/')
        
        # 1. Root index.html
        if not clean_path or clean_path == 'index.html':
            return os.path.join(ROOT, "index.html")
            
        # 2. Files in workspace root (assets, images, uploads, documents, etc.)
        local_root = os.path.join(ROOT, clean_path.replace('/', os.sep))
        if os.path.exists(local_root) and not os.path.isdir(local_root):
            return local_root
            
        # 3. Directories in workspace root that contain index.html
        if os.path.isdir(local_root):
            idx_file = os.path.join(local_root, "index.html")
            if os.path.exists(idx_file):
                return idx_file

        # 4. Files in out/ (Next.js prebuilt pages)
        local_out = os.path.join(OUT, clean_path.replace('/', os.sep))
        if os.path.exists(local_out):
            if os.path.isdir(local_out):
                idx_file = os.path.join(local_out, "index.html")
                if os.path.exists(idx_file):
                    return idx_file
            return local_out

        # 5. Check if out/<clean_path>/index.html exists
        idx_candidate = os.path.join(OUT, clean_path.replace('/', os.sep), "index.html")
        if os.path.exists(idx_candidate):
            return idx_candidate

        return super().translate_path(path)

    def end_headers(self):
        # Disable browser caching for instant preview
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), RockyDevHandler) as httpd:
        print(f"🚀 RockyLens Instant Dev Server is LIVE at http://localhost:{PORT}")
        print(f"   Root: {ROOT}")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
