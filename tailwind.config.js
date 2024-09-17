/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
        white: 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        barlowSemiCondensed: ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
