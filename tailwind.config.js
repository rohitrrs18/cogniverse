/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#050505',
        surface: '#111111',
        silver: {
          DEFAULT: '#C0C0C0',
          light: '#E8E8E8',
          dark: '#8A8A8A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-silver': 'linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #8A8A8A 100%)',
      },
    },
  },
  plugins: [],
};