import BgImage from "../../../components/inputs/bgImage";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <>
    <BgImage state={state} setState={setState} currentSlide={1} />
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
