const Color = require("color");

const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      darkGray: { default: "#252525", lighter: lighten("#252525", 0.8) },
      red: "#E2190C",
      turquoise: "#00FFC2",
      violet: "#C9CEFF",
      white: "#fff",
    },
    spacing: {
      0: "0",
      1: "8px",
      2: "20px",
      3: "40px",
      4: "80px",
    },
    lineHeight: {
      none: 1,
      tight: 1.15,
      normal: 1.2,
    },
    fontSize: {
      small: "12px",
      base: "18px",
      md: "30px",
      lg: "40px",
      xl: "48px",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
    },
    fontFamily: {
      headline: "Gilroy ExtraBold",
      body: "Hind",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        default: "0.8rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  variants: {
    margin: ["last"],
  },
  options: { important: true },
};
