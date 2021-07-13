import React from 'react'
import TemplateStatementImage11 from './template--1-1'
import TemplateStatementImage21 from './template--2-1'
import useDataContext from '../../lib/useDataContext'

export default () => {
  const { state } = useDataContext()
  return (
    <div className="col-span-6 sticky" style={{ top: '2rem' }}>
      {state.slides[state.currentSlide].options.dimensions.height === 1080 ? (
        <TemplateStatementImage11 />
      ) : (
        <TemplateStatementImage21 />
      )}
    </div>
  )
}
