import React from 'react'

const FieldSet = ({ legend = '', children }) => (
  <fieldset>
    {legend && (
      <legend className="text-white bg-black uppercase font-kapra font-bold p-1 w-full shadow">
        {legend}
      </legend>
    )}
    <div className="p-2">{children}</div>
  </fieldset>
)
export default FieldSet
