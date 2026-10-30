export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: 'all' | 'hoi-nghi' | 'cong-dong' | 'dao-tao' | 'doi-tac';
  categoryLabel: string;
  badge: string;
  date: string;
  year: string;
  location: string;
  venue: string;
  coverImage: string;
  gallery: {
    src: string;
    caption: string;
  }[];
  summary: string;
  description: string[];
  keyHighlights: string[];
  partnerCallout?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export const eventCategories = [
  { id: 'all', label: 'Tất Cả Sự Kiện' },
  { id: 'hoi-nghi', label: 'Hội Nghị Nhãn Khoa' },
  { id: 'cong-dong', label: 'Khám Mắt Cộng Đồng' },
  { id: 'dao-tao', label: 'Hội Thảo & RX Lab' },
  { id: 'doi-tac', label: 'Sự Kiện Đại Lý & B2B' },
] as const;

export const eventsList: EventItem[] = [
  {
    id: 'hoi-nghi-nhan-khoa-vos-2023',
    slug: 'hoi-nghi-nhan-khoa-vos-2023',
    title: 'Hội Nghị Nhãn Khoa Toàn Quốc (VOS) — Khẳng Định Vị Thế Công Nghệ Canada',
    category: 'hoi-nghi',
    categoryLabel: 'Hội Nghị Nhãn Khoa',
    badge: 'Sự Kiện Trọng Điểm',
    date: 'Thường niên 2023 - 2024',
    year: '2023',
    location: 'TP. Hồ Chí Minh & Toàn quốc',
    venue: 'Trung tâm Hội nghị Triển lãm Quốc tế',
    coverImage: '/images/events/nhan-khoa-2023-gian-hang-rocky.jpg',
    gallery: [
      {
        src: '/images/events/nhan-khoa-2023-gian-hang-rocky.jpg',
        caption: 'Gian hàng trưng bày giải pháp quang học Rocky Lens Canada tại Hội nghị Nhãn khoa',
      },
      {
        src: '/images/events/nhan-khoa-2023-bac-si-chuyen-gia.jpg',
        caption: 'Đón tiếp các Bác sĩ chuyên khoa mắt và Chuyên gia khúc xạ đến tham quan và trao đổi chuyên môn',
      },
      {
        src: '/images/events/nhan-khoa-2023-hoi-nghi-toan-canh.jpg',
        caption: 'Toàn cảnh hội trường báo cáo khoa học với sự tham gia của các chuyên gia đầu ngành',
      },
      {
        src: '/images/events/nhan-khoa-2023-giao-luu-khach-hang.jpg',
        caption: 'Tư vấn trực tiếp tính năng tròng kính kiểm soát cận thị MyoControl và tròng Freeform RX',
      },
      {
        src: '/images/events/nhan-khoa-2023-doi-ngu-rocky.jpg',
        caption: 'Đội ngũ chuyên viên kỹ thuật quang học Rocky Lens & Clearly Vietnam tại sự kiện',
      },
    ],
    summary:
      'Rocky Lens tự hào đồng hành cùng Hội đồng Nhãn khoa Việt Nam, giới thiệu công nghệ phôi tròng kiểm soát tiến triển cận thị học đường MyoControl và giải pháp tròng kính đặt đánh Freeform RX cá nhân hóa.',
    description: [
      'Tại Hội nghị Nhãn khoa thường niên quy tụ hàng ngàn bác sĩ chuyên khoa mắt và chuyên viên khúc xạ trên toàn quốc, Rocky Lens Canada đã mang đến không gian triển lãm công nghệ quang học hiện đại với thông điệp: "Đột phá tầm nhìn chuẩn xác theo thể trạng mắt người Việt".',
      'Điểm nhấn của gian hàng là chuỗi chuyên đề về: Tròng kiểm soát cận thị MyoControl thế hệ mới áp dụng cấu trúc vi điểm phân kỳ ngoại vi, giải pháp tròng kính lái xe ban đêm DriveShield loại bỏ 98% ánh sáng chói lóa đèn xe pha ngược chiều, và năng lực gia công Lab RX chính xác đến từng 0.5 độ khúc xạ.',
      'Sự kiện đã thu hút hơn 500 lượt y bác sĩ, chủ phòng khám và kỹ thuật viên khúc xạ ghé thăm, trải nghiệm trực tiếp hệ thống đo kiểm quang học và đăng ký nhận mẫu thử nghiệm lâm sàng.',
    ],
    keyHighlights: [
      'Trưng bày trọn bộ giải pháp tròng kính phôi Mitsui MR-Series đạt chuẩn ISO 13485:2016',
      'Giới thiệu giải pháp kiểm soát cận thị học đường MyoControl được các bác sĩ đánh giá cao',
      'Kết nối hợp tác kỹ thuật với hơn 120 phòng khám nhãn khoa và bệnh viện mắt toàn quốc',
    ],
    stats: [
      { value: '500+', label: 'Bác sĩ & Chuyên gia tham quan' },
      { value: '120+', label: 'Phòng khám mắt liên kết' },
      { value: '100%', label: 'Tròng kính đạt kiểm định quốc tế' },
    ],
    partnerCallout: 'Các bác sĩ nhãn khoa và phòng khám khúc xạ có nhu cầu hợp tác mẫu thử nghiệm tròng MyoControl, vui lòng liên hệ bộ phận Y khoa Rocky Lens.',
  },
  {
    id: 'kham-mat-hoc-duong-can-tho',
    slug: 'kham-mat-hoc-duong-can-tho',
    title: 'Hành Trình Mắt Sáng Học Đường — Khám Thị Lực & Trao Tặng Kính Tại Cần Thơ',
    category: 'cong-dong',
    categoryLabel: 'Khám Mắt Cộng Đồng',
    badge: 'Hoạt Động Vì Cộng Đồng',
    date: 'Tháng 3/2024',
    year: '2024',
    location: 'TP. Cần Thơ & ĐBSCL',
    venue: 'Các điểm trường THCS & Tiểu học địa bàn Cần Thơ',
    coverImage: '/images/events/kham-mat-can-tho-hoc-duong-1.jpg',
    gallery: [
      {
        src: '/images/events/kham-mat-can-tho-hoc-duong-1.jpg',
        caption: 'Chương trình tầm soát khúc xạ học đường do Rocky Lens tài trợ tại Cần Thơ',
      },
      {
        src: '/images/events/kham-mat-can-tho-do-thi-luc.jpg',
        caption: 'Chuyên viên khúc xạ đo khám mắt kỹ lưỡng cho từng em học sinh bằng thiết bị đo hiện đại',
      },
      {
        src: '/images/events/kham-mat-can-tho-trao-kinh.jpg',
        caption: 'Trao tặng kính thuốc chuẩn quang học miễn phí cho các em học sinh có hoàn cảnh khó khăn',
      },
      {
        src: '/images/events/kham-mat-can-tho-hoc-duong-2.jpg',
        caption: 'Học sinh háo hức xếp hàng chờ đo thị lực và nhận cẩm nang hướng dẫn bảo vệ mắt',
      },
    ],
    summary:
      'Dự án trách nhiệm xã hội thường niên của Rocky Lens & Clearly Vietnam, thực hiện khám thị lực khúc xạ cho hơn 1,000 em học sinh và trao tặng hàng trăm cặp kính thuốc đạt chuẩn chất lượng Canada.',
    description: [
      'Nhận thấy thực trạng gia tăng tỷ lệ tật khúc xạ học đường tại khu vực Đồng bằng Sông Cửu Long, Rocky Lens đã phối hợp cùng các đoàn y bác sĩ thiện nguyện và phòng giáo dục địa phương tổ chức chiến dịch "Mắt Sáng Học Đường".',
      'Đội ngũ kỹ thuật viên mang theo trang thiết bị đo khúc xạ điện tử di động, bảng thử thị lực tiêu chuẩn quốc tế và phôi tròng kính Rocky Lens chính hãng để thăm khám trực tiếp cho từng em học sinh.',
      'Toàn bộ các em được phát hiện có tật khúc xạ (cận thị, loạn thị, viễn thị) đều được cấp kính hoàn toàn miễn phí, sử dụng phôi tròng chống trầy xước Nano Hard và lọc ánh sáng xanh bảo vệ mắt tuổi học trò.',
    ],
    keyHighlights: [
      'Thực hiện đo khám sàng lọc thị lực miễn phí cho hơn 1,000 học sinh tiểu học và THCS',
      'Trao tặng hơn 350 cặp kính thuốc Rocky Lens hoàn chỉnh cho các em có hoàn cảnh khó khăn',
      'Phát sổ tay hướng dẫn tư thế ngồi học và quy tắc 20-20-20 bảo vệ mắt trước màn hình tivi, điện thoại',
    ],
    stats: [
      { value: '1,000+', label: 'Học sinh được đo khám' },
      { value: '350+', label: 'Cặp kính thuốc trao tặng' },
      { value: '0đ', label: 'Chi phí đối với học sinh' },
    ],
    partnerCallout: 'Rocky Lens luôn sẵn sàng đồng hành cùng các tổ chức thiện nguyện, trường học và địa phương trong các chiến dịch bảo vệ thị lực học đường.',
  },
  {
    id: 'hoi-thao-dao-tao-rx-lab',
    slug: 'hoi-thao-dao-tao-rx-lab',
    title: 'Hội Thảo Đào Tạo Kỹ Thuật Gia Công Lab RX & Kỹ Năng Tư Vấn Đa Tròng Freeform',
    category: 'dao-tao',
    categoryLabel: 'Hội Thảo & RX Lab',
    badge: 'Chuyển Giao Công Nghệ',
    date: 'Thường niên định kỳ',
    year: '2024',
    location: 'TP. Hồ Chí Minh & Hà Nội',
    venue: 'Trung tâm Đào tạo Kỹ thuật Rocky Lens Lab',
    coverImage: '/images/events/hoi-thao-chuyen-giao-cong-nghe-1.jpg',
    gallery: [
      {
        src: '/images/events/hoi-thao-chuyen-giao-cong-nghe-1.jpg',
        caption: 'Hội thảo chuyên sâu về công nghệ mài phay mặt sau Freeform kỹ thuật số cho kỹ thuật viên',
      },
      {
        src: '/images/events/hoi-thao-chuyen-giao-cong-nghe-2.jpg',
        caption: 'Hướng dẫn thực hành định tâm 3D, đo khoảng cách đồng tử PD và chiều cao đồng tử SEG',
      },
      {
        src: '/images/events/hoi-nghi-khach-hang-tri-an.jpg',
        caption: 'Giao lưu, giải đáp vướng mắc thực tế trong quá trình mài lắp gọng khoan siêu mỏng',
      },
    ],
    summary:
      'Chương trình đào tạo kỹ thuật chuyên sâu dành riêng cho kỹ thuật viên mài lắp và chủ tiệm kính đại lý. Chuyển giao công nghệ định tâm 3D, xử lý gọng khoan siêu mỏng và kỹ thuật tư vấn đa tròng không bơi hình.',
    description: [
      'Gia công tròng kính đặt đánh Freeform RX và mài lắp kính đa tròng đòi hỏi độ chính xác tuyệt đối. Nhằm nâng cao năng lực chuyên môn cho các đại lý đối tác, Rocky Lens định kỳ tổ chức các khóa huấn luyện chuyên đề tại hai trung tâm kỹ thuật lớn.',
      'Nội dung khóa học kết hợp 30% lý thuyết khúc xạ quang học nâng cao và 70% thực hành trực tiếp trên máy cắt mài tự động 3D, máy quét gọng Tracer và bộ dụng cụ căn chỉnh gọng kính chuyên dụng.',
      'Học viên được trang bị kiến thức phân tích toa kính phức tạp (độ loạn cao, lăng kính Prism), cách xử lý rìa tròng mỏng đẹp thẩm mỹ cho gọng kim loại mảnh hoặc gọng khoan không vành.',
    ],
    keyHighlights: [
      'Đào tạo phương pháp xác định tâm quang học đa tròng chính xác từng milimet',
      'Thực hành xử lý phôi MR-8/MR-7 chống vỡ tuyệt đối trên gọng bắt ốc không viền',
      'Cấp chứng chỉ hoàn thành khóa đào tạo kỹ thuật viên quang học Rocky Lens',
    ],
    stats: [
      { value: '300+', label: 'Kỹ thuật viên tốt nghiệp' },
      { value: '100%', label: 'Thời lượng thực hành máy Lab' },
      { value: '24/7', label: 'Hỗ trợ kỹ thuật qua Hotline Lab' },
    ],
    partnerCallout: 'Đại lý phân phối của Rocky Lens được cử nhân viên tham gia các khóa đào tạo định kỳ hoàn toàn miễn phí.',
  },
  {
    id: 'le-cong-bo-doi-tac-chien-luoc-trendy',
    slug: 'le-cong-bo-doi-tac-chien-luoc-trendy',
    title: 'Lễ Công Bố Đối Tác Chiến Lược & Ra Mắt Dòng Tròng Kính Đổi Màu Trendy',
    category: 'doi-tac',
    categoryLabel: 'Sự Kiện Đại Lý & B2B',
    badge: 'Kết Nối Mạng Lưới',
    date: 'Quý II/2024',
    year: '2024',
    location: 'TP. Hồ Chí Minh',
    venue: 'Khách sạn Quốc tế Pullman & Trung tâm Sự kiện',
    coverImage: '/images/events/su-kien-doi-tac-chien-luoc.jpg',
    gallery: [
      {
        src: '/images/events/su-kien-doi-tac-chien-luoc.jpg',
        caption: 'Lễ vinh danh các đại lý và nhà thuốc mắt kính tiêu biểu đạt chứng nhận phân phối Rocky Lens',
      },
      {
        src: '/images/events/le-ra-mat-san-pham-moi.jpg',
        caption: 'Không gian ra mắt 5 gam màu thời trang tròng kính đổi màu thông minh Trendy Photochromic',
      },
      {
        src: '/images/events/banner-su-kien-chinh.jpg',
        caption: 'Ban lãnh đạo Rocky Lens & Clearly Vietnam chia sẻ chiến lược phát triển mạng lưới đại lý 2024-2026',
      },
    ],
    summary:
      'Sự kiện kết nối hơn 300 đại lý phân phối tiêu biểu toàn quốc, vinh danh các đối tác xuất sắc và chính thức giới thiệu dải màu tròng kính đổi màu thời trang thế hệ mới theo xu hướng quốc tế.',
    description: [
      'Nhằm tri ân sự đồng hành của hệ thống đại lý kính mắt trên 63 tỉnh thành, Rocky Lens cùng Clearly Vietnam đã long trọng tổ chức "Hội Nghị Khách Hàng & Vinh Danh Đối Tác Chiến Lược".',
      'Tại buổi lễ, đại diện hãng đã công bố gói chính sách hỗ trợ đại lý toàn diện: Cung cấp kệ trưng bày demo cao cấp, máy kiểm tra ánh sáng xanh - tia UV tại điểm bán, tài liệu đào tạo nhân viên và chiết khấu lợi nhuận vượt trội.',
      'Điểm nhấn đặc biệt là màn trình diễn biến đổi màu sắc tức thì của bộ sưu tập Rocky Trendy Photochromic với các sắc màu thời thượng: Khói (Grey), Nâu (Brown), Xanh Ngọc Lam (Emerald Green), Tím Thạch Anh (Amethyst) và Xanh Sapphire.',
    ],
    keyHighlights: [
      'Gặp gỡ, vinh danh hơn 300 chủ doanh nghiệp và chuỗi cửa hàng mắt kính uy tín',
      'Trải nghiệm công nghệ hạt phân tử nhạy sáng Spin Coating đổi màu siêu tốc chỉ sau 15 giây',
      'Trao tặng bộ ấn phẩm POSM và kit công cụ kiểm tra tròng kính cho đại lý tham dự',
    ],
    stats: [
      { value: '300+', label: 'Đại lý mắt kính tham dự' },
      { value: '5 Màu', label: 'Tròng đổi màu thời trang Trendy' },
      { value: '15 Giây', label: 'Tốc độ đổi màu ra nắng' },
    ],
    partnerCallout: 'Đăng ký trở thành Đại lý ủy quyền chính thức ngay hôm nay để nhận trọn bộ công cụ bán hàng và chính sách độc quyền.',
  },
];

export const allGalleryPhotos = [
  {
    src: '/images/events/nhan-khoa-2023-gian-hang-rocky.jpg',
    title: 'Gian hàng Rocky Lens tại VOS',
    tag: 'Hội nghị Nhãn khoa',
    desc: 'Không gian triển lãm công nghệ quang học Canada thu hút đông đảo khách tham quan chuyên ngành.',
  },
  {
    src: '/images/events/nhan-khoa-2023-bac-si-chuyen-gia.jpg',
    title: 'Giao lưu chuyên gia Nhãn khoa',
    tag: 'Hội nghị Nhãn khoa',
    desc: 'Các bác sĩ nhãn khoa tìm hiểu chuyên sâu về cơ chế kiểm soát cận thị của tròng MyoControl.',
  },
  {
    src: '/images/events/nhan-khoa-2023-hoi-nghi-toan-canh.jpg',
    title: 'Hội trường báo cáo khoa học VOS',
    tag: 'Hội nghị Nhãn khoa',
    desc: 'Phiên thảo luận toàn cảnh về các tiến bộ kỹ thuật trong chăm sóc thị giác hiện đại.',
  },
  {
    src: '/images/events/nhan-khoa-2023-giao-luu-khach-hang.jpg',
    title: 'Tư vấn giải pháp thị lực',
    tag: 'Hội nghị Nhãn khoa',
    desc: 'Chuyên viên kỹ thuật Rocky Lens giải đáp thông số quang học cho chủ cửa hàng mắt kính.',
  },
  {
    src: '/images/events/nhan-khoa-2023-doi-ngu-rocky.jpg',
    title: 'Đội ngũ kỹ thuật viên Rocky Lens',
    tag: 'Hội nghị Nhãn khoa',
    desc: 'Đội ngũ nhân sự tận tâm, chuyên nghiệp luôn sẵn sàng hỗ trợ khách hàng và đại lý.',
  },
  {
    src: '/images/events/kham-mat-can-tho-hoc-duong-1.jpg',
    title: 'Khám mắt học đường Cần Thơ',
    tag: 'Khám Mắt Cộng Đồng',
    desc: 'Chương trình khám mắt thiện nguyện vì tầm nhìn tương lai của trẻ em miền Tây sông nước.',
  },
  {
    src: '/images/events/kham-mat-can-tho-do-thi-luc.jpg',
    title: 'Quy trình đo khúc xạ cẩn trọng',
    tag: 'Khám Mắt Cộng Đồng',
    desc: 'Từng em học sinh được kiểm tra thị lực kỹ càng bằng máy đo khúc xạ tự động và kính thử.',
  },
  {
    src: '/images/events/kham-mat-can-tho-trao-kinh.jpg',
    title: 'Trao tặng kính thuốc miễn phí',
    tag: 'Khám Mắt Cộng Đồng',
    desc: 'Niềm vui của các em nhỏ khi nhận cặp kính thuốc mới tinh, giúp nhìn rõ bảng lớp mỗi ngày.',
  },
  {
    src: '/images/events/kham-mat-can-tho-hoc-duong-2.jpg',
    title: 'Lan tỏa thông điệp chăm sóc mắt',
    tag: 'Khám Mắt Cộng Đồng',
    desc: 'Hướng dẫn các thói quen tốt giữ gìn đôi mắt sáng khỏe cho thế hệ tương lai.',
  },
  {
    src: '/images/events/hoi-thao-chuyen-giao-cong-nghe-1.jpg',
    title: 'Đào tạo kỹ thuật Lab RX',
    tag: 'Hội Thảo & RX Lab',
    desc: 'Khóa học chuyển giao công nghệ gia công kỹ thuật số Freeform cho kỹ thuật viên cửa hàng.',
  },
  {
    src: '/images/events/hoi-thao-chuyen-giao-cong-nghe-2.jpg',
    title: 'Thực hành đo đạc quang học 3D',
    tag: 'Hội Thảo & RX Lab',
    desc: 'Hướng dẫn sử dụng thiết bị quét gọng 3D và tinh chỉnh thông số lắp ráp tròng gọng khoan.',
  },
  {
    src: '/images/events/hoi-nghi-khach-hang-tri-an.jpg',
    title: 'Tri ân khách hàng & Đại lý',
    tag: 'Hội Thảo & RX Lab',
    desc: 'Buổi gặp gỡ thân mật giữa đại diện hãng và các đối tác đại lý kính mắt thân thiết.',
  },
  {
    src: '/images/events/le-ra-mat-san-pham-moi.jpg',
    title: 'Ra mắt tròng đổi màu Trendy',
    tag: 'Sự Kiện Đại Lý & B2B',
    desc: 'Màn ra mắt ấn tượng của 5 sắc màu tròng đổi màu công nghệ tân tiến nhất hiện nay.',
  },
  {
    src: '/images/events/su-kien-doi-tac-chien-luoc.jpg',
    title: 'Vinh danh đối tác chiến lược',
    tag: 'Sự Kiện Đại Lý & B2B',
    desc: 'Trao kỷ niệm chương và chứng nhận đại lý phân phối chính thức cho các đối tác tiêu biểu.',
  },
  {
    src: '/images/events/banner-su-kien-chinh.jpg',
    title: 'Hội nghị phát triển thương hiệu',
    tag: 'Sự Kiện Đại Lý & B2B',
    desc: 'Định hướng chiến lược mở rộng chuỗi cung ứng quang học Canada tại Việt Nam.',
  },
];
