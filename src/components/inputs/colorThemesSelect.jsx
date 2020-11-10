import React from "react";
import { colorThemes } from "../../config/vars";

export default ({ state, setState }) => (
  <>
    <label>Corporate Design</label>
    <div className="grid-cols-2 grid">
      {colorThemes.map((colorTheme) => (
        <div className="col-span-1">
          <input
            type="radio"
            value={colorTheme.label}
            name="colorTheme"
            id={colorTheme.name}
            onChange={(e) => setState({ ...state, colorTheme: e.target.value })}
          />
          <label htmlFor={colorTheme.name} className="label__radio">
            <div className="px-2">
              <img
                src={`/assets/images/colorThemes/${colorTheme.label}.png`}
                className={`colorThumbnail ${
                  state.colorTheme === colorTheme.label && `border-lightGray`
                }`}
              />
            </div>
          </label>
        </div>
      ))}
    </div>
  </>
);
