import { getProperty, updateProperty } from '../../lib/lib'

import React from 'react'
import { colorThemes } from '../../config/vars'
import useDataContext from '../../lib/useDataContext'

const ColorThemeSelector = ({ colorThemeOptions, propertyPath }) => {
  const { state, setState } = useDataContext()

  return (
    <div className="flex justify-center items-end">
      {colorThemeOptions.map(
        (colorThemeOption) =>
          colorThemeOption !== '' && (
            <div className="flex-1">
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
                <div className="flex flex-col items-center px-1 text-center">
                  <span
                    className="text-black text-center mb-1"
                    dangerouslySetInnerHTML={{
                      __html: colorThemes.filter(
                        (theme) => theme.label === colorThemeOption
                      )[0]?.topic,
                    }}
                  />
                  <img
                    style={{
                      maxHeight: '4rem',
                      height: '4rem',
                      maxWidth: '4rem',
                      width: '4rem',
                    }}
                    alt={`Farbschema Vorschau für Farbe "${
                      colorThemes.filter(
                        (theme) => theme.label === colorThemeOption
                      )[0]?.topic
                    }"`}
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
  )
}

export default ColorThemeSelector
