module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smaller: { max: "1024px" },
      mobile: { max: "850px" },
      phone: { max: "768px" },
      tablet: { min: "425px" },
      non_phone: { min: "769px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
    },
    fontFamily: {
      Futura: ["Futura", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        landscape: "url('/images/background.svg')",
        bison: "url('/images/bison.png')",
      }),
      colors: {
        light_burg: "#9D3A53",
        tone: "#EEDCC3",
        burg: "#67001a",
        ruby: "#9B2443",
        primary: "#FF0505",
        secondary: "#FF7830",
        code: "#00ff44",
        light: "#FAFAFA",
        dark: "#17181A",
        very_blue: "#000FFF",
        very_purple: "#9B30FF",
      },
      width: {
        850: "850px",
        72: "20rem",
        78: "24rem",
        84: "29rem",
        88: "35rem",
        96: "45rem",
      },
      height: {
        72: "20rem",
        78: "24rem",
        84: "29rem",
        88: "35rem",
        96: "45rem",
      },
      maxWidth: {
        card: "22rem",
        16: "16rem",
        72: "20rem",
        78: "24rem",
        84: "29rem",
        88: "35rem",
        96: "45rem",
        100: "50rem",
        "screen-1xl": "1440px",
      },
      maxHeight: {
        16: "16rem",
        72: "20rem",
        78: "24rem",
        84: "29rem",
        88: "35rem",
        96: "45rem",
      },
      borderWidth: {
        15: "15px",
      },
      margin: {
        700: "700px",
        500: "500px",
      },
    },
  },
  variants: {},
  plugins: [],
};
