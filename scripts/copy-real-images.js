import fs from 'fs';
import path from 'path';

const copies = [
  { src: 'assets/uploads/solutions/sol_anh_sang_xanh.png', dest: 'assets/images/real/sol_anh_sang_xanh.png' },
  { src: 'assets/uploads/solutions/sol_doi_mau.png', dest: 'assets/images/real/sol_doi_mau.png' },
  { src: 'assets/uploads/solutions/sol_da_trong.png', dest: 'assets/images/real/sol_da_trong.png' },
  { src: 'assets/images/about/6.jpg', dest: 'assets/images/real/6.jpg' }
];

copies.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.error(`Source not found: ${src}`);
  }
});
