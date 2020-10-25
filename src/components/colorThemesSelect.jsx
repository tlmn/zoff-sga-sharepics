import React from "react";
import { colorThemes } from "../config/vars";

export default ({ state, setState }) => (
  <select
    // eslint-disable-next-line jsx-a11y/no-onchange
    onChange={(e) => setState({ ...state, colorTheme: e.target.value })}
    className="border-2 border-black"
    value={state.colorTheme}
  >
    {colorThemes.map((colorTheme) => (
      <option label={colorTheme.name}>{colorTheme.label}</option>
    ))}
  </select>
);
