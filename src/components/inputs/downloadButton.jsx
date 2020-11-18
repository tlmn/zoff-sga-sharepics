import { getProperty, html2image } from "../../lib/lib";

import React from "react";

export default ({ state, setState, fileNamePath, buttonText = "Download" }) => (
  <button
    className="btn btn-download"
    onClick={() =>
      html2image(
        {
          state,
          setState,
        },
        getProperty({ state }, fileNamePath)
      )
    }
  >
    {buttonText}
  </button>
);
