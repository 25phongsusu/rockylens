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
  legalName: 'Công ty Cổ phần Clearly Vietnam',
  shortName: 'Rocky Lens',
  domain: 'rockylens.com',
  url: 'https://rockylens.com',
  slogan: 'Rõ tầm nhìn, trọn cuộc sống',
  description: 'Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam.',
  emails: {
    contact: 'info@rockylens.com',
    b2b: 'info@rockylens.com',
  },
  phones: {
    hotline: '0933102653',
    hotlineDisplay: '0933 102 653',
    office: '0933 102 653',
  },
  zalo: {
    url: 'https://zalo.me/0933102653',
    display: '0933 102 653 (Zalo Hỗ Trợ)',
  },
  addresses: [
    {
      title: 'Văn phòng TP. Hồ Chí Minh',
      street: 'TP. Hồ Chí Minh & Hà Nội',
      city: 'TP. Hồ Chí Minh',
      isPrimary: true,
    },
  ],
  colors: {
    primaryTeal: 'var(--button-middle)',
    deepNavy: 'var(--b2b-end)',
    slateDark: 'var(--b2b-end)',
    accentGold: 'var(--button-start)',
  },
  social: {
    facebook: 'https://facebook.com/rockylensvietnam',
  },
};
