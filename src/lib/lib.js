import { colorThemes, colors } from "../config/vars";

import emojiRegex from "emoji-regex";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export const html2image = async ({ state, setState }, fileName = "solid") => {
  setState({ ...state, templateScale: false });
  htmlToImage
    .toJpeg(state.slides[state.currentSlide].ref.current, {
      quality: 1,
      width: 1080,
      height: 1080,
    })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `sharepic-${slugify(fileName.substring(0, 20))}.jpg`;
      link.href = dataUrl;
      link.click();
      setState({ ...state, templateScale: true });
    });
};
export const formatEmojis = (text = "") => {
  return text.replace(
    emojiRegex(),
    (m) => `<span class="not-italic" role="img">${m}</span>`
  );
};

export const getColor = (currentState, order) => {
  return colors.filter(
    (color) =>
      color.name ===
      colorThemes.filter(
        (colorTheme) => colorTheme.label === currentState.colorTheme
      )[0].colors[order]
  )[0].value;
};

export const getPrimaryColor = (currentState) => {
  return colors.filter((color) => color.name === currentState.primaryColor)[0]
    .value;
};
