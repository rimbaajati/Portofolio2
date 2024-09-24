/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#A04747',
        dark: '#343131',
        semidark: '#D8A25E',
        blue :'#7EACB5',
        navy : '#227B94',
        yellow : '#FADFA1',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
