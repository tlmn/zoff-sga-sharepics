import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import TemplateContext from "../templateContext";
import { useContext } from "react";

const CheckBox = ({ propertyPath, label = "", disabled = false }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={propertyPath}
        checked={getProperty({ state }, propertyPath)}
        onChange={() =>
          updateProperty(
            { setState },
            propertyPath,
            !getProperty({ state }, propertyPath)
          )
        }
        style={{ width: "unset", marginBottom: "0 !important" }}
        disabled={disabled}
        className="mr-1"
      />
      {label !== "" && (
        <label htmlFor={propertyPath} className="flex-1">
          {label}
        </label>
      )}
    </div>
  );
};
export default CheckBox;
