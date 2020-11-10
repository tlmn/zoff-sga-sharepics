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
    <input
      type="range"
      id="bodyTextScale"
      name="bodyTextScale"
      min={state.slides[2].data.body.scaleRange[0]}
      max={state.slides[2].data.body.scaleRange[2]}
      value={state.slides[2].data.body.scale}
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(2, 1, {
            ...state.slides[2],
            data: {
              ...state.slides[2].data,
              body: {
                ...state.slides[2].data.body,
                scale: e.target.value,
              },
            },
          }),
        })
      }
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
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `mitglieder-3-${state.slides[2].data.body.content}`
        )
      }
    >
      Download
    </button>
  </div>
);
