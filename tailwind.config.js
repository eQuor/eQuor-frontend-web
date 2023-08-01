/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors:{
        "dark-blue" : "#012970",
        "light-blue": "#4154F1",
        "pop-green" : "#8BD870",
        "error-red" : "#F7DDDC"
      },
    },
  },
  plugins: [],
}
