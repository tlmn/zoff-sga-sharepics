import { cloneDeepWith, get, initial, set } from "lodash";
import { colorCombinations, colorThemes } from "../config/vars";

import emojiRegex from "emoji-regex";
import htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import slugify from "react-slugify";
import { theme } from "../../tailwind.config";

const { colors } = theme;

export const html2image = async ({ state, setState }, fileName = "solid") => {
  setState({ ...state, templateScale: false });
  htmlToImage
    .toJpeg(state.slides[state.currentSlide].ref.current, {
      quality: 1,
      width: 1080,
      height: 1080,
    })
    .then(function (blob) {
      saveAs(blob, `sharepic-${slugify(fileName.substring)}`);
      setState({ ...state, templateScale: true });
    });
};
export const formatEmojis = (text = "") => {
  return text.replace(
    emojiRegex(),
    (m) => `<span class="not-italic" role="img">${m}</span>`
  );
};

export const getColor = (currentColorTheme, order) => {
  return get(
    colors,
    colorThemes.filter(
      (colorTheme) => colorTheme.label === currentColorTheme
    )[0]?.colors[order]
  );
};

export const getPrimaryColor = (currentState) => {
  return colors.filter((color) => color.name === currentState.primaryColor)[0]
    .value;
};

export const updateProperty = ({ setState }, path, newValue) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    set(prevCloned, path, newValue);
    return prevCloned;
  });
};

export const pushProperty = ({ setState }, path, newValue) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    get(prevCloned, path).push(newValue);
    return prevCloned;
  });
};

export const removeProperty = ({ setState }, path) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    set(prevCloned, path, initial(get(prevCloned, path)));
    return prevCloned;
  });
};

export const getProperty = ({ state }, path) => {
  return get(state, path);
};
