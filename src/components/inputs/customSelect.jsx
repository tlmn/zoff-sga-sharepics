import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({
  state,
  setState,
  availableValues,
  propertyPath,
  label,
  ...props
}) => (
  <>
    <label htmlFor={propertyPath}>{label}</label>
    <select
      type="text"
      value={getProperty({ state }, propertyPath)}
      onChange={(e) =>
        updateProperty({ state, setState }, propertyPath, e.target.value)
      }
      id={propertyPath}
      {...props}
    >
      {availableValues.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  </>
);
