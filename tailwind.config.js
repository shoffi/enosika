module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html'],
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        enose: {
          bg : '#FAF8F7',
          blue : '#07689F',
          blue2 : '#055B8C',
          orange1 : '#FFF7F6',
          orange2 : '#E4ABA3',
          orange3 : '#FF6751',
          orange4 : '#FF5C44',
          orange5 : '#DE4B31',
        }
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'even', 'hover', 'focus'],
  },
  plugins: [],
}
