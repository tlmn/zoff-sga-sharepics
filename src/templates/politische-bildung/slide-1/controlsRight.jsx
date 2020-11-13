import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => {
  const currentSlide = 1;
  return (
    <>
      <label>Text</label>
      <textarea
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(currentSlide, 1, {
              ...state.slides[currentSlide],
              data: {
                ...state.slides[currentSlide].data,
                body: {
                  ...state.slides[currentSlide].data.body,
                  content: e.target.value,
                },
              },
            }),
          })
        }
        value={state.slides[currentSlide].data.body.content}
        className="border-1"
        rows={10}
        cols={60}
      />
      <label>Textgröße</label>
      <input
        type="range"
        id="bodyTextScale"
        name="bodyTextScale"
        min={state.slides[currentSlide].data.body.scaleRange[0]}
        max={state.slides[currentSlide].data.body.scaleRange[1]}
        value={state.slides[currentSlide].data.body.scale}
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(currentSlide, 1, {
              ...state.slides[currentSlide],
              data: {
                ...state.slides[currentSlide].data,
                body: {
                  ...state.slides[currentSlide].data.body,
                  scale: e.target.value,
                },
              },
            }),
          })
        }
      />
      <button
        className="btn btn-download"
        onClick={() =>
          html2image(
            {
              state,
              setState,
            },
            `politische-bildung-1-${state.slides[1].data.body.content}`
          )
        }
      >
        Download
      </button>
    </>
  );
};
