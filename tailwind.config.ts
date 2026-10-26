import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            DEFAULT: '#0B7B8A',
            hover: '#096370',
            light: '#EBF7F9',
            border: '#B2E2E8',
          },
          navy: {
            DEFAULT: '#050E10',
            surface: '#0A1B22',
            card: '#102A36',
          },
          gold: {
            DEFAULT: '#D97706',
            hover: '#B45309',
            light: '#FEF3C7',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
