import IconReset from "../../assets/svg/reset";
import React from "react";

export default ({ state, setState, currentSlide }) => (
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
          ...state.slides.splice(currentSlide, 1, {
            ...state.slides[currentSlide],
            data: {
              ...state.slides[currentSlide].data,
              image: {
                ...state.slides[currentSlide].data.image,
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
      defaultValue={state.slides[currentSlide].data.image.scale}
      max="30"
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(currentSlide, 1, {
            ...state.slides[currentSlide],
            data: {
              ...state.slides[currentSlide].data,
              image: {
                ...state.slides[currentSlide].data.image,
                scale: e.target.value,
              },
            },
          }),
        })
      }
    />

    <button
      className="btn flex justify-center mb-2"
      onClick={() =>
        setState({
          ...state,
          ...state.slides.splice(currentSlide, 1, {
            ...state.slides[currentSlide],
            data: {
              ...state.slides[currentSlide].data,
              image: {
                ...state.slides[currentSlide].data.image,
                position: { x: 0, y: 0 },
              },
            },
          }),
        })
      }
    >
      <IconReset height="20" className="block mr-1" /> Bildausschnitt
    </button>
  </>
);
