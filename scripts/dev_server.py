#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
RockyLens Local Static Preview Server
Serves compiled Next.js static export (`out/`) and `public/` assets on http://localhost:3000.
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

        if not clean_path or clean_path == 'index.html':
            out_index = os.path.join(OUT, "index.html")
            if os.path.exists(out_index):
                return out_index

        rel_path = clean_path.replace('/', os.sep)
        for base in (OUT, os.path.join(ROOT, "public")):
            candidate = os.path.join(base, rel_path)
            if os.path.exists(candidate):
                if os.path.isdir(candidate):
                    idx = os.path.join(candidate, "index.html")
                    if os.path.exists(idx):
                        return idx
                else:
                    return candidate
            idx = os.path.join(candidate, "index.html")
            if os.path.exists(idx):
                return idx

        return super().translate_path(path)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()


if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), RockyDevHandler) as httpd:
        print(f"🚀 RockyLens Static Preview Server is LIVE at http://localhost:{PORT}")
        print(f"   Serving: {OUT}")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
