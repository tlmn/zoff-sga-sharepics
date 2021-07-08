import React, { useContext } from 'react'

import TemplateContext from '../../components/templateContext'
import TemplateStatement11 from './template--1-1'
import TemplateStatement21 from './template--2-1'

export default () => {
  const [state] = useContext(TemplateContext)
  return (
    <div className="col-span-6 sticky" style={{ top: '2rem' }}>
      {state.slides[state.currentSlide].options.dimensions.height === 1080 ? (
        <TemplateStatement11 />
      ) : (
        <TemplateStatement21 />
      )}
    </div>
  )
}
