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
      xlg: '998px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [],
};
