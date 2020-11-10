import ColorThemesSelect from "../../../components/inputs/colorThemesSelect";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <div className="p-1 bg-turquoise">
    <ColorThemesSelect state={state} setState={setState} />
    <textarea
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(2, 1, {
            ...state.slides[2],
            data: {
              ...state.slides[2].data,
              body: {
                ...state.slides[2].data.body,
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[2].data.body.content}
      className="border-1"
      rows={10}
      cols={60}
    />
    <textarea
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(2, 1, {
            ...state.slides[2],
            data: {
              ...state.slides[2].data,
              localBranch: { content: e.target.value },
            },
          }),
        })
      }
    >
      {state.slides[2].data.localBranch.content}
    </textarea>
    <button
      className="btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `politische-bildung-3-${state.slides[0].data.body.content}`
        )
      }
    >
      Download
    </button>
  </div>
);
