import React, { useContext } from 'react'
import { getProperty, updateProperty } from '../../lib/lib'

import TemplateContext from '../templateContext'

export default ({ propertyPath, label = 'Textgröße', ...props }) => {
  const [state, setState] = useContext(TemplateContext)
  return (
    <div className="flex flex-col">
      <label
        htmlFor={propertyPath}
        dangerouslySetInnerHTML={{ __html: label }}
        className="uppercase text-black font-bold"
      />
      <input
        type="range"
        id={propertyPath}
        name="bodyTextScale"
        min={getProperty({ state, setState }, `${propertyPath}.range[0]`)}
        max={getProperty({ state, setState }, `${propertyPath}.range[1]`)}
        value={getProperty({ state, setState }, `${propertyPath}.value`)}
        onChange={(e) =>
          updateProperty({ setState }, `${propertyPath}.value`, e.target.value)
        }
        {...props}
      />
    </div>
  )
}
