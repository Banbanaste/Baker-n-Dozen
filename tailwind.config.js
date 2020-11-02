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
      larger: { min: "768px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#FF0505",
        secondary: "#FF7830",
        dark: "#18181A",
        very_blue: "#000FFF",
        very_purple: "#9B30FF",
      },
      width: {
        850: "850px",
      },
      maxWidth: {
        card: "22rem",
        850: "850px",
      },
    },
  },
  variants: {},
  plugins: [],
};
