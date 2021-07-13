import React from 'react'
import { html2image } from '../../lib/lib'
import useDataContext from '../../lib/useDataContext'

export default ({ fileName, buttonText = 'Download' }) => {
  const { state, setState } = useDataContext()

  return (
    <button
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          fileName
        )
      }
    >
      {buttonText}
    </button>
  )
}
