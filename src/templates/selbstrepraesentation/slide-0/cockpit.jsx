import ColorThemesSelect from "../../../components/colorThemesSelect";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <div className="p-1 bg-turquoise">
    <ColorThemesSelect state={state} setState={setState} />
    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(0, 1, {
            ...state.slides[0],
            data: {
              ...state.slides[0].data,
              body: {
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[0].data.body.content}
    />
    <button
      className="btn-download"
      onClick={() =>
        html2image({
          state,
          setState,
          ...state.slides[0].data.body.content,
        })
      }
    >
      Download
    </button>
  </div>
);
