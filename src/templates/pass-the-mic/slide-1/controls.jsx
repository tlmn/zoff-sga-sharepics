import ColorSelect from "../../../components/colorsSelect";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <div className="p-1 bg-turquoise">
    <ColorSelect state={state} setState={setState} />
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
      onChange={(e) =>
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
          "selbstrepraesentation-2"
        )
      }
    >
      Download
    </button>
  </div>
);
