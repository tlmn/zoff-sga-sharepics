import React, { useContext } from 'react'
import { getProperty, html2image } from '../../lib/lib'

import TemplateContext from '../templateContext'

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
