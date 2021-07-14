import React, { useRef } from 'react'
import { getProperty, updateProperty } from '../../lib/lib'

import IconRemove from '../../assets/svg/remove'
import IconReset from '../../assets/svg/reset'
import IconUpload from '../../assets/svg/upload'
import useDataContext from '../../lib/useDataContext'

export default ({
  propertyPath,
  label,
  scale = true,
  reset = true,
  remove = false,
}) => {
  const { state, setState } = useDataContext()
  const inputFileRef = useRef(null)
  return (
    <>
      {label && <label htmlFor={propertyPath}>{label}</label>}
      <div className="flex items-center gap-1">
        <input
          type="file"
          id={propertyPath}
          name="file"
          onChange={(e) => {
            if (e.target.files[0] !== null) {
              updateProperty(
                { setState },
                `${propertyPath}.url`,
                URL.createObjectURL(e.target.files[0])
              )
              e.target.value = null
            }
          }}
          ref={inputFileRef}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => inputFileRef.current.click()}
          className="btn flex justify-center items-center"
        >
          <IconUpload className="mr-1" /> Bild
        </button>
        {scale && getProperty({ state }, `${propertyPath}.url`) !== '' && (
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
        {reset && getProperty({ state }, `${propertyPath}.url`) !== '' && (
          <button
            className="btn flex justify-center items-center"
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
        {remove && getProperty({ state }, `${propertyPath}.url`) !== '' && (
          <button
            className="btn flex justify-center items-center"
            onClick={() =>
              updateProperty({ setState }, `${propertyPath}.url`, '')
            }
            disabled={
              getProperty({ state }, `${propertyPath}.url`) === ''
                ? true
                : false
            }
          >
            <IconRemove height="20" className="block mr-1" />
            entfernen
          </button>
        )}
      </div>
    </>
  )
}
