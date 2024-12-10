/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'], // Add your custom font
      },
      colors: {
        primary: {
          DEFAULT: '#0057A3',
          light: '#19c1f3',
        },
        secondary: {
          DEFAULT: '#e3121a',
        },
      },
    },
  },
  plugins: [],
};
