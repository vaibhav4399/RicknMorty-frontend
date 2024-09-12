const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['Oswald', 'Roboto', 'sans-serif'], 
      },
      colors: {
        bodyBackground: '#f8f8f8',
        bodyBackgroundDark: '#282828'
      },
      width: {
        w10: '10%',
        w20: '20%',
        w30: '30%',
        w40: '40%',
        w50: '50%',
        w60: '60%',
        w70: '70%',
        w80: '80%',
        w90: '90%',
      },
      height: {
        h10: '10%',
        h20: '20%',
        h30: '30%',
        h40: '40%',
        h50: '50%',
        h60: '60%',
        h70: '70%',
        h80: '80%',
        h90: '90%',
      }
    },
  },
  plugins: [],
}

