module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGreen: '#86bb46',
        lightOrange: '#faab04',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
    screens: {
      xs: '425px',
      xsm: '575px',
      sm: '640px',
      md: '768px',
      xlg: '992px',
      lg: '1100px',
      xl: '1200px',
      '2xl': '1440px',
    },
  },
  plugins: [],
};
