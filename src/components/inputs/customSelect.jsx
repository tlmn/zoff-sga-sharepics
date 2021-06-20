import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";

export default ({
  options,
  propertyPath,
  label,
  disabled = false,
  ...props
}) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <div className="flex items-center">
      {label && (
        <label htmlFor={propertyPath} style={{ minWidth: "12rem" }}>
          {label}
        </label>
      )}

      <select
        type="text"
        value={getProperty({ state }, propertyPath)}
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        disabled={disabled}
        style={{ minWidth: "10rem", marginBottom: "0 !important" }}
        {...props}
      >
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};
