import ColorThemesSelect from "../../components/colorThemesSelect";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
    <div className="p-1 bg-turquoise">
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
      <button
        className="block border-2 border-black p-1 mt-2"
        onChange={(e) =>
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
        Reset Bildausschnitt
      </button>
      <ColorThemesSelect state={state} setState={setState} />
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
          html2image({
            state,
            setState,
            ...state.slides[state.currentSlide].data.body.content,
          })
        }
      >
        Download
      </button>
    </div>
  );
};
