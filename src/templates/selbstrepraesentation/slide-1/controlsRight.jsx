import React, { useContext } from "react";

import BgImage from "../../../components/inputs/bgImage";
import TemplateContext from "../../../components/templateContext";
import { html2image } from "../../../lib/lib";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <BgImage currentSlide={1} />
      <button
        className="btn btn-download"
        onClick={() =>
          html2image(
            {
              state,
              setState,
            },
            `selbstrepraesentation-2-${state.slides[0].data.body.content}`
          )
        }
      >
        Download
      </button>
    </>
  );
};
