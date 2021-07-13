import React, { useContext } from 'react'
import { getProperty, updateProperty } from '../../lib/lib'

import TemplateContext from '../templateContext'
import { colorThemes } from '../../config/vars'

const ColorThemeSelector = ({ colorThemeOptions, propertyPath }) => {
  const [state, setState] = useContext(TemplateContext)

  return (
    <div className="flex justify-center items-end">
      {colorThemeOptions.map(
        (colorThemeOption) =>
          colorThemeOption !== '' && (
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
                <div className="flex flex-col items-center px-2 text-center">
                  <span
                    className="text-black text-center mb-1"
                    dangerouslySetInnerHTML={{
                      __html: colorThemes.filter(
                        (theme) => theme.label === colorThemeOption
                      )[0]?.topic,
                    }}
                  />
                  <img
                    style={{ maxHeight: '4rem' }}
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
