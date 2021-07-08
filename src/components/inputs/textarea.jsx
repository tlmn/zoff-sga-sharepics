import React, { useContext } from 'react'
import { getProperty, updateProperty } from '../../lib/lib'

import TemplateContext from '../templateContext'

export default ({ propertyPath, label, ...props }) => {
  const [state, setState] = useContext(TemplateContext)
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <textarea
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        {...props}
        rows={5}
      >
        {getProperty({ state }, propertyPath)}
      </textarea>
    </>
  )
}
