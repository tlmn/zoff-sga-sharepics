import React, { useContext } from 'react'

import TemplateContext from '../templateContext'
import { html2image } from '../../lib/lib'

export default ({ fileName, buttonText = 'Download' }) => {
  const [state, setState] = useContext(TemplateContext)
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
