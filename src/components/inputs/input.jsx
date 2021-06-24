import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";

export default ({ propertyPath, label, ...props }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <input
        type="text"
        value={getProperty({ state }, propertyPath)}
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        className="font-normal"
        style={{ boxShadow: "inset 2px 2px 6px -1px rgba(0,0,0,0.4)" }}
        {...props}
      />
    </>
  );
};
