import { colorCombinations, colors } from "../config/vars";

import emojiRegex from "emoji-regex";

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
      colorCombinations.filter(
        (colorCombination) =>
          colorCombination.label === currentState.colorCombination
      )[0].colors[order]
  )[0].value;
};
