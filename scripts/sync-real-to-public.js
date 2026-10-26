import fs from 'fs';
import path from 'path';

const srcDir = 'assets/images/real';
const destDir = 'public/images/real';
fs.mkdirSync(destDir, { recursive: true });

fs.readdirSync(srcDir).forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  console.log(`Copied ${file} to public/images/real/`);
});
