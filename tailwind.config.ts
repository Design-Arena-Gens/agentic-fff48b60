import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2151FF',
          secondary: '#FF8A00',
          dark: '#0C1B4D',
          light: '#F3F6FF'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(15, 25, 78, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
