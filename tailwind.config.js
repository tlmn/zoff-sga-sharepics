module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    options: {
      whitelist: ['items-start', 'items-center', 'items-end'],
    },
  },
  theme: {
    extend: {},
    colors: {
      red: '#FF5858',
      green: '#56E5A1',
      yellow: '#FFE81D',
      purple: '#C738B8',
      blue: '#0094FF',
      black: '#1D1D1D',
      white: '#FFFFFF',
    },
    spacing: {
      0: '0',
      1: '8px',
      2: '20px',
      3: '40px',
      4: '80px',
    },
    lineHeight: {
      none: 1,
      tight: 1.15,
      normal: 1.2,
    },
    fontSize: {
      'input-small': '12px',
      'input-base': '16px',
      'input-md': '20px',
      xs: '24px',
      s: '40px',
      base: '50px',
      md: '60px',
      lg: '70px',
      xl: '80px',
      '2xl': '90px',
      '3xl': '120px',
      '4xl': '240px',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      move: 'move',
    },
    fontFamily: {
      kapra: 'KapraNeuePro',
      ttnorms: 'TT Norms W01',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: {
        default: '0.8rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
  },
  variants: {
    margin: ['last'],
  },
  options: { important: true },
}
