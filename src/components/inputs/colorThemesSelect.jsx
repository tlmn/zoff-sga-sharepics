import {
  colorThemes,
  corporateThemes,
  secondaryThemes,
} from "../../config/vars";

import React from "react";

export default ({ state, setState }) => (
  <>
    <label>Corporate Design</label>
    <div className="grid-cols-2 grid">
      {corporateThemes.map((colorTheme) => (
        <div className="col-span-1">
          <input
            type="radio"
            value={
              colorThemes.filter((theme) => theme.label === colorTheme)[0].label
            }
            name="colorTheme"
            id={
              colorThemes.filter((theme) => theme.label === colorTheme)[0].name
            }
            onChange={(e) => setState({ ...state, colorTheme: e.target.value })}
          />
          <label
            htmlFor={
              colorThemes.filter((theme) => theme.label === colorTheme)[0].name
            }
            className="label__radio"
          >
            <div className="px-2">
              <img
                src={`/assets/images/colorThemes/${
                  colorThemes.filter((theme) => theme.label === colorTheme)[0]
                    .label
                }.png`}
                className={`colorThumbnail ${
                  state.colorTheme ===
                    colorThemes.filter((theme) => theme.label === colorTheme)[0]
                      .label && `border-lightGray`
                }`}
              />
            </div>
          </label>
        </div>
      ))}
    </div>
    <label>Geht auch ...</label>
    <div className="grid-cols-4 grid">
      {secondaryThemes.map((colorTheme) => (
        <div className="col-span-1">
          <input
            type="radio"
            value={
              colorThemes.filter((theme) => theme.label === colorTheme)[0].label
            }
            name="colorTheme"
            id={
              colorThemes.filter((theme) => theme.label === colorTheme)[0].name
            }
            onChange={(e) => setState({ ...state, colorTheme: e.target.value })}
          />
          <label
            htmlFor={
              colorThemes.filter((theme) => theme.label === colorTheme)[0].name
            }
            className="label__radio"
          >
            <div className="px-1">
              <img
                src={`/assets/images/colorThemes/${
                  colorThemes.filter((theme) => theme.label === colorTheme)[0]
                    .label
                }.png`}
                className={`colorThumbnail ${
                  state.colorTheme ===
                    colorThemes.filter((theme) => theme.label === colorTheme)[0]
                      .label && `border-lightGray`
                }`}
              />
            </div>
          </label>
        </div>
      ))}
    </div>
  </>
);
