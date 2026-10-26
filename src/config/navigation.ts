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
    title: 'Sản phẩm',
    href: '/trong-kinh/',
    children: [
      {
        title: 'Tất cả tròng kính',
        href: '/trong-kinh/',
        description: 'Xem toàn bộ catalogue tròng kính phân phối chính hãng',
      },
      {
        title: 'Tròng đơn tròng kỹ thuật số',
        href: '/trong-kinh/?category=don-trong',
        description: 'Tròng kính siêu mỏng độ nét cao cho tật khúc xạ',
      },
      {
        title: 'Tròng đa tròng Freeform',
        href: '/trong-kinh/?category=da-trong',
        description: 'Giải pháp êm ái cho người lão thị nhìn xa - trung - gần',
      },
      {
        title: 'Tròng hỗ trợ điều tiết',
        href: '/trong-kinh/?category=ho-tro-dieu-tiet',
        description: 'Giảm mỏi mắt khi làm việc máy tính và thiết bị số',
      },
      {
        title: 'Tròng đổi màu thông minh',
        href: '/trong-kinh/?category=doi-mau',
        description: 'Tự động biến đổi sắc thái theo cường độ tia UV',
      },
      {
        title: 'Tròng chuyên dụng lái xe ban đêm',
        href: '/trong-kinh/?category=lai-xe',
        description: 'Giảm chói đèn pha xe và tăng tương phản khi lái xe',
      },
    ],
  },
  {
    title: 'Công nghệ & Kiến thức',
    href: '/kham-pha-trong-kinh/',
    children: [
      {
        title: 'Hiểu về tròng kính',
        href: '/kham-pha-trong-kinh/?cat=kien-thuc',
        description: 'Kiến thức quang học cơ bản và cấu tạo tròng mắt kính',
      },
      {
        title: 'Chọn tròng theo nhu cầu',
        href: '/kham-pha-trong-kinh/?cat=huong-dan',
        description: 'Hướng dẫn chọn tròng cho dân văn phòng, lái xe, cận nặng',
      },
      {
        title: 'Công nghệ quang học',
        href: '/kham-pha-trong-kinh/?cat=cong-nghe',
        description: 'Lớp phủ nano, phôi monomer MR, Freeform HD & Photochromic',
      },
    ],
  },
  {
    title: 'Dành cho đối tác',
    href: '/danh-cho-doi-tac/',
  },
  {
    title: 'Về chúng tôi',
    href: '/ve-chung-toi/',
  },
  {
    title: 'Liên hệ',
    href: '/lien-he/',
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
    { title: 'So sánh chiết suất 1.56, 1.60, 1.67, 1.74', href: '/kham-pha-trong-kinh/bai-viet/so-sanh-chiet-suat-trong-kinh/' },
    { title: 'Tròng kính đổi màu hoạt động thế nào?', href: '/kham-pha-trong-kinh/bai-viet/co-che-hoat-dong-trong-doi-mau/' },
    { title: 'Khi nào nên sử dụng kính đa tròng?', href: '/kham-pha-trong-kinh/bai-viet/khi-nao-nen-dung-kinh-da-trong/' },
    { title: 'Tác hại của ánh sáng xanh và giải pháp UV420', href: '/kham-pha-trong-kinh/bai-viet/giai-phap-chong-anh-sang-xanh-uv420/' },
  ],
  partner: [
    { title: 'Chính sách hợp tác đại lý', href: '/danh-cho-doi-tac/' },
    { title: 'Quy trình gia công Lab RX', href: '/danh-cho-doi-tac/#lab-rx' },
    { title: 'Hỗ trợ POSM & Máy móc', href: '/danh-cho-doi-tac/#ho-tro' },
    { title: 'Tải Catalogue & Thông số kỹ thuật', href: '/documents/Rocky_Lens_Catalogue_2025.pdf' },
  ],
  company: [
    { title: 'Lịch sử thương hiệu Canada Opticians', href: '/ve-chung-toi/' },
    { title: 'Chứng nhận chất lượng ISO & CE', href: '/ve-chung-toi/#chung-nhan' },
    { title: 'Mạng lưới phân phối toàn quốc', href: '/lien-he/' },
    { title: 'Kênh liên hệ trực tiếp', href: '/lien-he/' },
  ],
};
