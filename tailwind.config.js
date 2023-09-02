/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor':'#272E4F',
        'secondaryColor':'#2C365D',
        'helperColor':'#FF5E3A',
        'helperColorSecond':'#F2F2F0'
      }
    },
  },
  plugins: [],
}

