import React from "react";
import { primaryColors } from "../../config/vars";

export default ({ state, setState }) => (
  <select
    // eslint-disable-next-line jsx-a11y/no-onchange
    onChange={(e) => setState({ ...state, primaryColor: e.target.value })}
    className="border-2 border-black"
    value={state.primaryColor}
  >
    {primaryColors.map((primaryColor) => (
      <option label={primaryColor.name}>{primaryColor.label}</option>
    ))}
  </select>
);
