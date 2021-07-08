import React, { useContext } from 'react'

import TemplateContext from '../../components/templateContext'
import TemplateEvent11 from './template--1-1'
import TemplateEvent21 from './template--2-1'

export default () => {
    const [state] = useContext(TemplateContext)
    return (
        <div className="col-span-6 sticky" style={{ top: '2rem' }}>
            {state.slides[state.currentSlide].options.dimensions.height ===
            1080 ? (
                <TemplateEvent11 />
            ) : (
                <TemplateEvent21 />
            )}
        </div>
    )
}
