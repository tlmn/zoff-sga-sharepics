module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: ["items-start", "items-center", "items-end"],
    },
  },
  theme: {
    extend: {},
    colors: {
      orange: "#F55511",
      lightOrange: "#F5B511",
      turquoise: "#45EEBF",
      yellow: "#D79E0D",
      white: "#FFFFFF",
      black: "#000000",
      darkGray: "#3E3E3E",
      lightGray: "#D7D7D7",
    },
    spacing: {
      0: "0",
      1: "8px",
      "1.5": "16px",
      2: "20px",
      3: "50px",
      4: "90px",
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
      move: "move",
    },
    fontFamily: {
      sans: "Rubik",
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
