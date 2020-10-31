module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'smaller': {'max': '1024px'},
      'mobile': {'max': '776px'}
    },
    height: {
      cmobile: '842px'
    },
    extend: {
      colors: {
        'accent-1': '#333',
        'primary': '#FF0505',
        'secondary': '#FF7830',
        'dark': '#18181A'
      },
    },
  },
  variants: {},
  plugins: [],
}
