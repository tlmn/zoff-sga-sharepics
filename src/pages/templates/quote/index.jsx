import React, { useRef, useState } from 'react'

import Controls from '../../../templates/quote/controls'
import { Provider as DataContextProvider } from '../../../lib/useDataContext'
import Template from '../../../templates/quote/template'
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
          body: {
            options: {
              scale: { value: 60, range: [40, 70] },
            },
            content:
              'Arme Menschen und Familien eiden am meisten unter der Corona-Pandemie. Solidarisch wäre es, wenn Reiche ihren fairen Anteil zur Bewältigung der Corona- und der Klimakrise leisten würden',
          },
          author: {
            content: 'Matthias Hiksch',
          },
          position: {
            content: '',
          },
          partnerLogo: { url: '', position: { x: 0, y: 0 }, scale: 0 },
        },
        ref: useRef(null),
      },
    ],
    templateScale: true,
  })

  return (
    <DataContextProvider value={{ state, setState }}>
      <TemplateLayout>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-6">
          <Controls />
        </div>
      </TemplateLayout>
    </DataContextProvider>
  )
}
