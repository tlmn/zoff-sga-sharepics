import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";
import { colorThemes } from "../../config/vars";

const ColorThemeSelector = ({ colorThemeOptions, propertyPath }) => {
  const [state, setState] = useContext(TemplateContext);

  return (
    <div className="flex justify-center mb-2">
      {colorThemeOptions.map(
        (colorThemeOption) =>
          colorThemeOption !== "" && (
            <div>
              <input
                type="radio"
                value={
                  colorThemes.filter(
                    (theme) => theme.label === colorThemeOption
                  )[0]?.label
                }
                name="colorTheme"
                id={`${propertyPath}-${
                  colorThemes.filter(
                    (theme) => theme.label === colorThemeOption
                  )[0]?.name
                }`}
                onChange={(e) =>
                  updateProperty({ setState }, propertyPath, e.target.value)
                }
              />
              <label
                htmlFor={`${propertyPath}-${
                  colorThemes.filter(
                    (theme) => theme.label === colorThemeOption
                  )[0]?.name
                }`}
                className="label__radio"
              >
                <div className="px-2">
                  <img
                    style={{ maxHeight: "4rem" }}
                    alt={`Farbschema Vorschau für ${
                      colorThemes.filter(
                        (theme) => theme.label === colorThemeOption
                      )[0]?.name
                    }`}
                    src={`/assets/images/colorThemes/${
                      colorThemes.filter(
                        (theme) => theme.label === colorThemeOption
                      )[0]?.label
                    }.png`}
                    className={`colorThumbnail shadow ${
                      getProperty({ state }, propertyPath) ===
                        colorThemes.filter(
                          (theme) => theme.label === colorThemeOption
                        )[0]?.label && `border-black`
                    }`}
                  />
                </div>
              </label>
            </div>
          )
      )}
    </div>
  );
};

export default ColorThemeSelector;
