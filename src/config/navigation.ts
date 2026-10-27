export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export const mainNavigation: NavItem[] = [
  {
    title: 'Trang chủ',
    href: '/',
  },
  {
    title: 'Sản Phẩm',
    href: '/trong-kinh/',
  },
  {
    title: 'Công Nghệ',
    href: '/kham-pha-trong-kinh/',
  },
  {
    title: 'Blog',
    href: '/blog/',
  },
  {
    title: 'Đối tác',
    href: '/danh-cho-doi-tac/',
  },
];

export const footerNavigation = {
  products: [
    { title: 'Tất cả tròng kính', href: '/trong-kinh/' },
    { title: 'Tròng đơn tròng', href: '/trong-kinh/?category=don-trong' },
    { title: 'Tròng đa tròng Freeform', href: '/trong-kinh/?category=da-trong' },
    { title: 'Tròng đổi màu Trendy', href: '/trong-kinh/?category=doi-mau' },
    { title: 'Tròng lái xe DriveShield', href: '/trong-kinh/?category=lai-xe' },
    { title: 'Tròng kiểm soát cận thị', href: '/trong-kinh/?category=kiem-soat-can-thi' },
  ],
  knowledge: [
    { title: 'Blog & Insight thị giác', href: '/blog/' },
    { title: 'Chống ánh sáng xanh không ám vàng', href: '/blog/giai-phap-chong-anh-sang-xanh-uv420/' },
    { title: 'Kính lái xe ban đêm & đi mưa', href: '/blog/cong-nghe-kinh-lai-xe-driveshield/' },
    { title: 'Kiểm soát tăng độ cận ở trẻ em', href: '/blog/kiem-soat-can-thi-tre-em-myocontrol/' },
    { title: 'So sánh chiết suất 1.56, 1.60, 1.67, 1.74', href: '/blog/so-sanh-chiet-suat-trong-kinh/' },
  ],
  partner: [
    { title: 'Chính sách chiết khấu đại lý', href: '/danh-cho-doi-tac/' },
    { title: 'Gia công Lab RX kỹ thuật số', href: '/danh-cho-doi-tac/' },
    { title: 'Bộ kit trưng bày tại điểm bán', href: '/danh-cho-doi-tac/' },
    { title: 'Liên hệ hợp tác phân phối', href: '/lien-he/' },
  ],
  company: [
    { title: 'Về chúng tôi', href: '/ve-chung-toi/' },
    { title: 'Dành cho đối tác B2B', href: '/danh-cho-doi-tac/' },
    { title: 'Hệ thống phân phối', href: '/lien-he/' },
    { title: 'Liên hệ hợp tác', href: '/lien-he/' },
  ],
};
