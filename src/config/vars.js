export const colors = [
  { name: "red", value: "#FF5858" },
  { name: "green", value: "#56E5A1" },
  { name: "yellow", value: "#FFE81D" },
  { name: "purple", value: "#C738B8" },
  { name: "blue", value: "#0094FF" },
  { name: "black", value: "#1D1D1D" },
  { name: "white", value: "#FFFFFF" }
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
  "black_red",
  "red_black",
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
    label: "green_black",
    name: "türkis & schwarz",
    colors: ["green", "black"],
  },
];

export const primaryColors = [
  { label: "green", name: "türkis" },
  { label: "violet", name: "violet" },
  { label: "red", name: "rot" },
];

export const templates = [
  {
    name: "Statement",
    link: "templates/statement",
    thumbnailSrc: "../assets/images/templates/statement.png",
  },
  {
    name: "Zitat",
    link: "templates/quote",
    thumbnailSrc: "../assets/images/templates/quote.png",
  },
  {
    name: "Termin",
    link: "templates/event",
    thumbnailSrc: "../assets/images/templates/event.png",
  },
  {
    name: "Bild + Statement",
    link: "templates/image-statement",
    thumbnailSrc: "../assets/images/templates/image-statement.png",
  },
];
