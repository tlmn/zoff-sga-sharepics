import BgImage from "../../components/inputs/bgImage";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
    <>
      <BgImage state={state} setState={setState} currentSlide="0" />
      <label>Text</label>
      <textarea
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                body: {
                  ...state.slides[state.currentSlide].data.body,
                  content: e.target.value,
                },
              },
            }),
          })
        }
        value={state.slides[state.currentSlide].data.body.content}
        className="border-1"
        rows={2}
        cols={30}
      />
      <label>Textgröße</label>
      <input
        type="range"
        id="bodyTextScale"
        name="bodyTextScale"
        min={state.slides[state.currentSlide].data.body.scaleRange[0]}
        max={state.slides[state.currentSlide].data.body.scaleRange[1]}
        value={state.slides[state.currentSlide].data.body.scale}
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                body: {
                  ...state.slides[state.currentSlide].data.body,
                  scale: e.target.value,
                },
              },
            }),
          })
        }
      />
      <label>Lokalgruppe (optional)</label>
      <textarea
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
        rows={2}
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
            state.slides[state.currentSlide].data.body.content
          )
        }
      >
        Download
      </button>
    </>
  );
};
