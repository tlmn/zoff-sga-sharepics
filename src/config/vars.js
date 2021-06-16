export const colors = [
  { name: "darkGray", value: "#252525" },
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

export const corporateThemes = [
  "darkGray_turquoise",
  "turquoise_darkGray",
  "violet_red",
  "red_violet",
];

export const secondaryThemes = [
  "darkGray_red",
  "red_darkGray",
  "red_white",
  "white_red",
];

export const colorThemes = [
  {
    label: "darkGray_turquoise",
    name: "dunkelgrau & türkis",
    colors: ["darkGray", "turquoise"],
  },
  {
    label: "turquoise_darkGray",
    name: "türkis & dunkelgrau",
    colors: ["turquoise", "darkGray"],
  },
  {
    label: "violet_red",
    name: "violett & rot",
    colors: ["violet", "red"],
  },
  {
    label: "red_violet",
    name: "rot & violett",
    colors: ["red", "violet"],
  },
  {
    label: "darkGray_red",
    name: "dunkelgrau & rot",
    colors: ["darkGray", "red"],
  },
  {
    label: "red_darkGray",
    name: "rot & dunkelgrau",
    colors: ["red", "darkGray"],
  },
  {
    label: "red_white",
    name: "rot & weiß",
    colors: ["red", "white"],
  },
  {
    label: "white_red",
    name: "weiß & rot",
    colors: ["white", "red"],
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
