/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8f4',
          100: '#d5ede3',
          200: '#addecb',
          300: '#7ecaae',
          400: '#4fb18e',
          500: '#2d9470',
          600: '#1f7759',
          700: '#1a6049',
          800: '#174d3b',
          900: '#144032',
          950: '#0a241c',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc170',
          400: '#ff9d37',
          500: '#ff8210',
          600: '#f06806',
          700: '#c74e07',
          800: '#9e3d0e',
          900: '#7f340f',
          950: '#451805',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
