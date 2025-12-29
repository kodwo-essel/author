/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        sans: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      colors: {
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#5A5A5A',
        },
        cream: '#FAF8F5',
        accent: {
          DEFAULT: '#B8836D',
          dark: '#9A6B56',
        },
        primary: {
          100: '#E8E4DF',
        },
      },
    },
  },
  plugins: [],
};
