import React, { useRef, useState } from 'react'

import Controls from '../../../templates/quote-image/controls'
import Template from '../../../templates/quote-image/template'
import TemplateContext from '../../../components/templateContext'
import TemplateLayout from '../../../components/templateLayout'

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        options: {
          dimensions: { width: 1080, height: 1080 },
          colorTheme: 'green',
        },
        data: {
          image: {
            url: '',
            position: { x: 0, y: 0 },
            scale: 0,
          },
          body: {
            options: {
              scale: { value: 40, range: [35, 70] },
            },
            content:
              'Arme Menschen und Familien leiden am meisten unter der Corona-Pandemie. Solidarisch wäre es, wenn Reiche ihren fairen Anteil zur Bewältigung der Corona- und der Klimakrise leisten würden',
          },
          description: {
            options: {
              scale: { value: 70, range: [50, 140] },
            },
            content: 'Autor:in / Quelle',
          },
          position: {
            options: {
              scale: { value: 70, range: [50, 140] },
            },
            content: 'Organisation',
          },
          partnerLogo: { url: '' },
        },
        ref: useRef(null),
      },
    ],
    templateScale: true,
  })

  return (
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateLayout>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-6">
          <Controls />
        </div>
      </TemplateLayout>
    </TemplateContext.Provider>
  )
}
