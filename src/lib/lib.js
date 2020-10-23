import { colorCombinations, colors } from "../config/vars";

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
