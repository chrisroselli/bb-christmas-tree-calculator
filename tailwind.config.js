/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057A3',
          light: '#60A5FA',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#e3121a',
          light: '#FCD34D',
          dark: '#B45309',
        },
      },
    },
  },
  plugins: [],
};
