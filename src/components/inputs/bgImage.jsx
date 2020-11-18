import IconReset from "../../assets/svg/reset";
import React from "react";
import { updateProperty } from "../../lib/lib";

export default ({ state, setState, currentSlide }) => (
  <>
    <label htmlFor="bgImage__fileName">Hintergrundbild</label>
    <input
      type="file"
      id="bgImage__fileName"
      name="file"
      onChange={(e) =>
        e.target.files[0] !== null &&
        updateProperty(
          { state, setState },
          `slides[${currentSlide}].data.image.url`,
          URL.createObjectURL(e.target.files[0])
        )
      }
    />
    <label htmlFor="bgImage__scale">Zoomfaktor für Bild</label>
    <input
      type="range"
      id="bgImage__scale"
      name="imageScale"
      min="0"
      defaultValue={state.slides[currentSlide].data.image.scale}
      max="30"
      onChange={(e) =>
        updateProperty(
          { state, setState },
          `slides[${currentSlide}].data.image.scale`,
          e.target.value
        )
      }
    />

    <button
      className="btn flex justify-center mb-2"
      onClick={() =>
        updateProperty(
          { state, setState },
          `slides[${currentSlide}].data.image.position`,
          { x: 0, y: 0 }
        )
      }
      type="button"
    >
      <IconReset height="20" className="block mr-1" /> Bildausschnitt
    </button>
  </>
);
