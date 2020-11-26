import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";

export default ({ propertyPath, label = "Textgröße" }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <label
        htmlFor={propertyPath}
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <input
        type="range"
        id={propertyPath}
        name="bodyTextScale"
        min={getProperty({ state, setState }, `${propertyPath}.range[0]`)}
        max={getProperty({ state, setState }, `${propertyPath}.range[1]`)}
        value={getProperty({ state, setState }, `${propertyPath}.value`)}
        onChange={(e) =>
          updateProperty(
            { state, setState },
            `${propertyPath}.value`,
            e.target.value
          )
        }
      />
    </>
  );
};
