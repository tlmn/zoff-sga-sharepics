import ColorThemesSelect from "../../components/inputs/colorThemesSelect";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
    <>
      <label htmlFor="input__titel">Titel</label>
      <input
        id="input__titel"
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

      <label htmlFor="input__text">Text</label>
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
        id="input__text"
        rows={3}
        cols={30}
      />

      <label htmlFor="input__textSize">Textgröße</label>
      <input
        type="range"
        id="input__textSize"
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

      <label htmlFor="input__localBranch">Lokalgruppe (optional)</label>
      <textarea
        id="input__localBranch"
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
      >
        {state.slides[0].data.localBranch.content}
      </textarea>
      <button
        className="btn btn-download"
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
    </>
  );
};
