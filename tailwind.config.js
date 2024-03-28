/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        black: {
          0: '#fff',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          1000: '#000',
        },
        red: {
          100: '#fff5f5',
          200: '#ffdfdf',
          700: '#ff503c',
          900: '#e61e0a',
          950: '#b40000',
          1000: '#280400',
        },
        panel: {
          grey: '#141414',
          2: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
};
