module.exports = {
  purge:{
    enabled: true
    ,
    content: [
      './public/index.html',
      ],
  }, 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: {
          light: '#c6d0df',
          DEFAULT: '#a5c4d5',
          dark: '#8fbbce',
        },
        white: {
          DEFAULT: '#fff',
        },
        straw: {
          light: '#ffeaca',
          DEFAULT: '#ead7ac',
          dark: '#e5c089',
        },
        gray: {
          light: '#3B3B3B',
          DEFAULT: '#363636',
          dark: '#242424',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
