import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({ state, setState, propertyPath, label, ...props }) => (
  <>
    <label htmlFor={propertyPath}>{label}</label>
    <textarea
      onChange={(e) =>
        updateProperty(
          { state, setState },
          propertyPath,
          e.target.value
        )
      }
      id={propertyPath}
      {...props}
    >
      {getProperty({state}, propertyPath)}
    </textarea>
  </>
);
