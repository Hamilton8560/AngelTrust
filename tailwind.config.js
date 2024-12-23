/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1F44',
          800: '#162B4D',
          700: '#1C3654',
        },
        gold: {
          500: '#C5A572',
          600: '#B08F5C',
          700: '#97784C',
        },
      },
    },
  },
  plugins: [],
};