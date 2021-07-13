import React from 'react'
import TemplateStatement11 from './template--1-1'
import TemplateStatement21 from './template--2-1'
import useDataContext from '../../lib/useDataContext'

export default () => {
  const { state } = useDataContext()
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
