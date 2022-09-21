/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx}",
    "./Landing/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary' : '#3FA0D0',
        'primary-dark': '#0E3850',
        'dark': '#000000',
      },
    },
  },
  plugins: [],
}