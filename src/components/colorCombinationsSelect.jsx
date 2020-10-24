import React from "react";
import { colorCombinations } from "../config/vars";

export default ({ state, setState }) => (
  <select
    // eslint-disable-next-line jsx-a11y/no-onchange
    onChange={(e) => setState({ ...state, colorCombination: e.target.value })}
    className="border-2 border-black"
    value={state.colorCombination}
  >
    {colorCombinations.map((colorCombination) => (
      <option label={colorCombination.name}>{colorCombination.label}</option>
    ))}
  </select>
);
