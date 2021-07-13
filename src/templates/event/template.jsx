import React from 'react'
import TemplateEvent11 from './template--1-1'
import TemplateEvent21 from './template--2-1'
import useDataContext from '../../lib/useDataContext'

export default () => {
  const { state } = useDataContext()

  return (
    <div className="col-span-6 sticky" style={{ top: '2rem' }}>
      {state.slides[state.currentSlide].options.dimensions.height === 1080 ? (
        <TemplateEvent11 />
      ) : (
        <TemplateEvent21 />
      )}
    </div>
  )
}
