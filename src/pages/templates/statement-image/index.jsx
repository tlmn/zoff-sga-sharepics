import React, { useRef, useState } from 'react'

import Controls from '../../../templates/statement-image/controls'
import Template from '../../../templates/statement-image/template'
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
                            min: 1,
                            max: 4,
                            scale: { value: 70, range: [60, 100] },
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
                        content: 'Organisation',
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
