import ColorThemesSelect from "../../../components/colorThemesSelect";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <div className="p-1 bg-turquoise">
    <ColorThemesSelect state={state} setState={setState} />
    <textarea
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              body: {
                ...state.slides[1].data.body,
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[1].data.body.content}
      className="border-1"
      rows={10}
      cols={60}
    />
    <input
      type="range"
      id="bodyTextScale"
      name="bodyTextScale"
      min={state.slides[1].data.body.scaleRange[0]}
      max={state.slides[1].data.body.scaleRange[1]}
      value={state.slides[1].data.body.scale}
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              body: {
                ...state.slides[1].data.body,
                scale: e.target.value,
              },
            },
          }),
        })
      }
    />
    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              author: { content: e.target.value },
            },
          }),
        })
      }
      value={state.slides[1].data.author.content}
    />
    <button
      className="btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `mitglieder-2-${state.slides[1].data.body.content}`
        )
      }
    >
      Download
    </button>
  </div>
);
