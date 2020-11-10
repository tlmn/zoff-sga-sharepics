import BgImage from "../../../components/inputs/bgImage";
import ColorThemesSelect from "../../../components/inputs/colorThemesSelect";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <>
    <BgImage state={state} setState={setState} currentSlide={0}/>

    <label>Text</label>
    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(0, 1, {
            ...state.slides[0],
            data: {
              ...state.slides[0].data,
              statement: {
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[0].data.statement.content}
    />
    
    <button
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `mitglieder-1-${state.slides[0].data.statement.content}`
        )
      }
    >
      Download
    </button>
  </>
);
