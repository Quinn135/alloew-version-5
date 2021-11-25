const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      white: colors.white,
      black: colors.black,
      yellow: colors.yellow,
      orange: colors.orange,
    },
    extend: {
      fontWeight: ['active', 'hover', 'focus'],
      fontColor: ['active', 'hover', 'focus'],
      backgroundColor: ['active', 'hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-elevation')(['responsive']),
  ],
}
