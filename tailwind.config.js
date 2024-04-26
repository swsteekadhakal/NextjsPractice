/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*',
    './component/**/*'
    ],
  theme: {
    extend: {
      colors: {
        'brown-tone': '#582f0e',
        'green-tone': '#7b8264',
        'mummy-brown':'#7f4f24',
        'off-white': '#f8fcf4',
        'dark-green': '#464d38',
        'footer-green': '#a8ac84'

      }
    },
  },
  plugins: [],
}
