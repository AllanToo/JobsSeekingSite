/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js,ts,jsx,tsx}", // Include html for better coverage
   
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],

      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}