import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('index.html', 'utf8');
const regex = /src=["']([^"']+)["']/g;
const matches = [];
let match;
while ((match = regex.exec(html)) !== null) {
  matches.push(match[1]);
}

const unique = [...new Set(matches)];
const missing = [];
for (const src of unique) {
  if (src.startsWith('http') || src.startsWith('data:') || src.endsWith('.js') || src.endsWith('.css') || src === '') continue;
  if (!fs.existsSync(src)) {
    missing.push(src);
  }
}

console.log('Total local image references in index.html:', unique.length);
console.log('Missing images count:', missing.length);
if (missing.length > 0) {
  console.log('Missing list:', missing);
} else {
  console.log('✓ All image paths in index.html exist on disk!');
}
