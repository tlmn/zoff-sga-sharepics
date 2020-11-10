import ColorThemesSelect from "../../../components/inputs/colorThemesSelect";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <div className="p-1 bg-turquoise">
    <ColorThemesSelect state={state} setState={setState} />
    <input
      type="file"
      id="file"
      name="file"
      onChange={(e) =>
        e.target.files[0] !== null &&
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              image: {
                ...state.slides[1].data.image,
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
      defaultValue={state.slides[1].data.image.scale}
      max="30"
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              image: {
                ...state.slides[1].data.image,
                scale: e.target.value,
              },
            },
          }),
        })
      }
    />
    <button
      className="block border-2 border-black p-1 mt-2"
      onClick={(e) =>
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              image: {
                ...state.slides[1].data.image,
                position: { x: 0, y: 0 },
              },
            },
          }),
        })
      }
    >
      Reset Bildausschnitt
    </button>
    <button
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `selbstrepraesentation-2-${state.slides[0].data.body.content}`
        )
      }
    >
      Download
    </button>
  </div>
);
