import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import TemplateContext from "../templateContext";
import { useContext } from "react";

const CheckBox = ({ propertyPath, label = "" }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={propertyPath}
        value={getProperty({ state }, propertyPath)}
        onChange={() =>
          updateProperty(
            { state, setState },
            propertyPath,
            !getProperty({ state }, propertyPath)
          )
        }
      />
      {label !== "" && <label htmlFor={propertyPath}>{label}</label>}
    </div>
  );
};
export default CheckBox;
