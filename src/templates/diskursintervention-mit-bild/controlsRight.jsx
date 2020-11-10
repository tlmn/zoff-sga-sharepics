import IconReset from "../../assets/svg/reset";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
    <>
      <label>Hintergrundbild</label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={(e) =>
          e.target.files[0] !== null &&
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                image: {
                  ...state.slides[state.currentSlide].data.image,
                  url: URL.createObjectURL(e.target.files[0]),
                },
              },
            }),
          })
        }
      />
      <label>Zoomfaktor für Bild</label>
      <input
        type="range"
        id="imageScale"
        name="imageScale"
        min="0"
        defaultValue={state.slides[state.currentSlide].data.image.scale}
        max="30"
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                image: {
                  ...state.slides[state.currentSlide].data.image,
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
        className=" p-1 mt-2 btn-download flex items-center"
        onClick={() =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                image: {
                  ...state.slides[state.currentSlide].data.image,
                  position: { x: 0, y: 0 },
                },
              },
            }),
          })
        }
      >
        <IconReset width="30"/> Bildausschnitt
      </button>
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
        rows={3}
        cols={30}
      />
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
      <button
        className="btn-download"
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
