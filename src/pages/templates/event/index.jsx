import React, { useRef, useState } from 'react'

import Controls from '../../../templates/event/controls'
import Template from '../../../templates/event/template'
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
          category: { content: 'Kundgebung' },
          meta: { content: 'SO. 12.6. 18 Uhr | Rathaus Lüneburg' },
          partnerLogo: { url: '' },
          body: {
            options: {
              scale: { value: 100, range: [70, 120] },
            },
            content: 'Solidarität mit dem Gesundheitssektor',
          },
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
