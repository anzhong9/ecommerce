/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    fontFamily: {
      'gt' : ['GT America',]
    },
    colors: {
      ...require('tailwindcss/colors'),
      'primary': '#F9F9F9',
      'secondary': '#1F1F1F',
      'tgrey': '#33302D',
      'whitey':'#F8F3ED;',
      'txwhite':'#FCF9F7',
      'btn1':'#0F1428',
      'whitey2':'#F5F6FB',

    },
    
    
  },
  extend: {
  },
  plugins: [],
}

