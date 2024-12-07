/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'graduation-marks':
          'repeating-linear-gradient(to bottom, black, black 2px, transparent 1px, transparent 10px)',
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
