/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./Pages/**/*.html",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

