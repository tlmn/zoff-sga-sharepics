import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({ state, setState, propertyPath, label, ...props }) => (
  <>
    <label htmlFor={propertyPath}>{label}</label>
    <input
      type="text"
      value={getProperty({ state }, propertyPath)}
      onChange={(e) =>
        updateProperty(
          { state, setState },
          propertyPath,
          e.target.value
        )
      }
      id={propertyPath}
      {...props}
    />
  </>
);
