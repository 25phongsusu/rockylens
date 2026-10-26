export interface SiteConfig {
  name: string;
  legalName: string;
  shortName: string;
  domain: string;
  url: string;
  slogan: string;
  description: string;
  emails: {
    contact: string;
    b2b: string;
  };
  phones: {
    hotline: string;
    hotlineDisplay: string;
    office: string;
  };
  zalo: {
    url: string;
    display: string;
  };
  addresses: {
    title: string;
    street: string;
    city: string;
    isPrimary?: boolean;
  }[];
  colors: {
    primaryTeal: string;
    deepNavy: string;
    slateDark: string;
    accentGold: string;
  };
  social: {
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Rocky Lens',
  legalName: 'Công Ty TNHH Mắt Kính Rocky Việt Nam',
  shortName: 'Rocky Lens',
  domain: 'rockylens.com',
  url: 'https://rockylens.com',
  slogan: 'Giải pháp tròng kính cho tầm nhìn hiện đại',
  description: 'Nhà phân phối tròng kính quang học chính hãng Canada Opticians tại Việt Nam. Cung cấp giải pháp tròng đơn tròng, đa tròng Freeform, đổi màu thông minh, chống ánh sáng xanh UV420 và tròng chuyên dụng lái xe.',
  emails: {
    contact: 'info@rockylens.com',
    b2b: 'daily@rockylens.com',
  },
  phones: {
    hotline: '0908692888',
    hotlineDisplay: '0908 692 888',
    office: '028 38 692 888',
  },
  zalo: {
    url: 'https://zalo.me/0908692888',
    display: '0908 692 888 (Zalo B2B)',
  },
  addresses: [
    {
      title: 'Tổng kho & Trung tâm Lab RX Miền Nam',
      street: '123 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3',
      city: 'TP. Hồ Chí Minh',
      isPrimary: true,
    },
    {
      title: 'Chi nhánh & Trung tâm Phân phối Miền Bắc',
      street: '45 Nguyễn Du, Phường Bùi Thị Xuân, Quận Hai Bà Trưng',
      city: 'Hà Nội',
      isPrimary: false,
    },
  ],
  colors: {
    primaryTeal: '#0B7B8A',
    deepNavy: '#050E10',
    slateDark: '#0F172A',
    accentGold: '#D97706',
  },
  social: {
    facebook: 'https://facebook.com/rockylensvietnam',
  },
};
