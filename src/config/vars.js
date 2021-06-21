export const colors = [
  { name: "orange", value: "#F55511" },
  { name: "red", value: "#E2190C" },
  { name: "turquoise", value: "#00FFC2" },
  { name: "violet", value: "#C9CEFF" },
  { name: "white", value: "#fff" },
];

export const textPositions = [
  { label: "oben", value: "start" },
  { label: "mitte", value: "center" },
  { label: "unten", value: "end" },
];

export const colorCombinations = [
  "orange_white",
  "white_orange",
  "black_white",
  "white_black",
];

export const secondaryThemes = [
  "darkGray_red",
  "red_darkGray",
  "red_white",
  "white_red",
];

export const colorThemes = [
  {
    label: "orange_white",
    name: "orange & weiß",
    colors: ["orange", "white"],
  },
  {
    label: "white_orange",
    name: "weiß & orange",
    colors: ["white", "orange"],
  },
  {
    label: "black_white",
    name: "schwarz & weiß",
    colors: ["black", "white"],
  },
  {
    label: "white_black",
    name: "weiß & schwarz",
    colors: ["white", "black"],
  },
  {
    label: "turquoise_black",
    name: "türkis & schwarz",
    colors: ["turquoise", "black"],
  },
];

export const primaryColors = [
  { label: "turquoise", name: "türkis" },
  { label: "violet", name: "violet" },
  { label: "red", name: "rot" },
];

export const templates = [
  {
    name: "News",
    link: "templates/news",
    thumbnailSrc: "../assets/images/templates/news.png",
  },
  {
    name: "Zitat",
    link: "templates/quote",
    thumbnailSrc: "../assets/images/templates/quote.png",
  },
  {
    name: "Aktion",
    link: "templates/action",
    thumbnailSrc: "../assets/images/templates/action.png",
  },
  {
    name: "Sicherer Hafen",
    link: "templates/safe-harbour",
    thumbnailSrc: "../assets/images/templates/safe-harbour.png",
  },
  {
    name: "Text",
    link: "templates/text",
    thumbnailSrc: "../assets/images/templates/text.png",
  },
  {
    name: "Header",
    link: "templates/header",
    thumbnailSrc: "../assets/images/templates/header.jpg",
  },
];
