import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        blue: '#377dff',
        gren: '#38c899',
        orange: '#ffab00',
        red: '#ff5630',
        neltral: {
          '01': '#fefefe',
          '02': '#f3f5f7',
          '03': '#e8ecef',
          '04': '#6c7275',
          '05': '#343839',
          '06': '#232627',
          '07': '#141718',
        },
      },
    },
  },
  plugins: [],
};
export default config;
