import React, { useRef, useState } from 'react'

import Controls from '../../../templates/statement-image/controls'
import { Provider as DataContextProvider } from '../../../lib/useDataContext'
import Template from '../../../templates/statement-image/template'
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
              min: 1,
              max: 4,
              scale: { value: 90, range: [60, 120] },
              lineTemplate: {
                content: 'Neue Textzeile',
                inputType: 'input',
              },
            },
            lines: [
              {
                content: 'Raus aus der Krise!',
                inputType: 'input',
              },
              {
                content: 'Nicht zurück!',
                inputType: 'input',
              },
            ],
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
