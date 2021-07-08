import React, { useContext, useRef } from 'react'
import { getProperty, updateProperty } from '../../lib/lib'

import IconReset from '../../assets/svg/reset'
import IconUpload from '../../assets/svg/upload'
import TemplateContext from '../templateContext'

export default ({ propertyPath, label, scale = true, reset = true }) => {
  const [state, setState] = useContext(TemplateContext)
  const inputFileRef = useRef(null)
  return (
    <>
      {label && <label htmlFor={propertyPath}>{label}</label>}
      <div className="flex items-center gap-1">
        <input
          type="file"
          id={propertyPath}
          name="file"
          onChange={(e) =>
            e.target.files[0] !== null &&
            updateProperty(
              { setState },
              `${propertyPath}.url`,
              URL.createObjectURL(e.target.files[0])
            )
          }
          ref={inputFileRef}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => inputFileRef.current.click()}
          className="btn flex justify-center"
        >
          <IconUpload className="mr-1" /> Bild
        </button>
        {scale && (
          <input
            type="range"
            id={`${propertyPath}.scale`}
            name="imageScale"
            min="0"
            defaultValue={getProperty({ state }, `${propertyPath}.scale`)}
            max="30"
            onChange={(e) =>
              updateProperty(
                { setState },
                `${propertyPath}.scale`,
                e.target.value
              )
            }
            style={{
              margin: '0 !important',
              padding: '0 !important',
            }}
          />
        )}
        {reset && (
          <button
            className="btn flex justify-center"
            onClick={() =>
              updateProperty({ setState }, `${propertyPath}.position`, {
                x: 0,
                y: 0,
              })
            }
            type="button"
          >
            <IconReset height="20" className="block mr-1" />
            Ausschnitt
          </button>
        )}
      </div>
    </>
  )
}
