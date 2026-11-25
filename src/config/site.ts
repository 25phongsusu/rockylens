export interface SiteConfig {
  name: string;
  legalName: string;
  shortName: string;
  domain: string;
  url: string;
  taxId: string;
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

const resolvedUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_BASE_PATH === '/rockylens' || process.env.NODE_ENV === 'production'
    ? 'https://25phongsusu.github.io/rockylens'
    : 'https://rockylens.com');

export const siteConfig: SiteConfig = {
  name: 'Rocky Lens',
  legalName: 'Công ty Cổ phần Clearly Vietnam',
  shortName: 'Rocky Lens',
  domain: 'rockylens.com',
  url: resolvedUrl,
  taxId: '0316499823',
  slogan: 'Nhà phân phối tròng kính từ Canada',
  description: 'Rocky Lens – Trung tâm phân phối tròng kính B2B & gia công Lab công nghệ quốc tế tại Việt Nam. Cung cấp sỉ tròng cận, đổi màu, chống ánh sáng xanh cho cửa hàng kính.',
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
