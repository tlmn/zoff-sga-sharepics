import React from "react";
import { colorCombinations } from "../config/vars";

export default ({ state, setState }) => (
  <select
    onChange={(e) => setState({ ...state, colorCombination: e.target.value })}
    className="border-2 border-black"
  >
    {colorCombinations.map((colorCombination) => (
      <option label={colorCombination.name}>{colorCombination.label}</option>
    ))}
  </select>
);
