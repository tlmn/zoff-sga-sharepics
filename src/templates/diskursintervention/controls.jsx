import ColorThemesSelect from "../../components/colorThemesSelect";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
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
                category: { content: e.target.value },
              },
            }),
          })
        }
        value={state.slides[0].data.category.content}
      />
      <textarea
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(0, 1, {
              ...state.slides[0],
              data: {
                ...state.slides[0].data,
                body: {
                  ...state.slides[0].data.body,
                  content: e.target.value,
                },
              },
            }),
          })
        }
        value={state.slides[0].data.body.content}
        className="border-1"
        rows={3}
        cols={30}
      />
      <input
        type="range"
        id="bodyTextScale"
        name="bodyTextScale"
        min={state.slides[0].data.body.scaleRange[0]}
        max={state.slides[0].data.body.scaleRange[1]}
        value={state.slides[0].data.body.scale}
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(0, 1, {
              ...state.slides[0],
              data: {
                ...state.slides[0].data,
                body: {
                  ...state.slides[0].data.body,
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
            ...state.slides.splice(0, 1, {
              ...state.slides[0],
              data: {
                ...state.slides[0].data,
                localBranch: { content: e.target.value },
              },
            }),
          })
        }
        value={state.slides[0].data.localBranch.content}
      />
      <button
        className="btn-download"
        onClick={() =>
          html2image(
            {
              state,
              setState,
            },
            state.slides[0].data.body.content
          )
        }
      >
        Download
      </button>
    </div>
  );
};
