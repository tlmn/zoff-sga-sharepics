import React, { useContext, useRef } from 'react'

import Draggable from 'react-draggable'
import TemplateContext from '../templateContext'
import { updateProperty } from '../../lib/lib'

const DraggableImage = ({ propertyPath, className }) => {
    const [state, setState] = useContext(TemplateContext)
    const refDraggable = useRef(null)
    return (
        <>
            <Draggable
                onStart={(e, data) => {
                    updateProperty({ setState }, propertyPath, {
                        x: data.x,
                        y: data.y,
                    })
                }}
                onDrag={(e, data) => {
                    updateProperty({ setState }, propertyPath, {
                        x: data.x,
                        y: data.y,
                    })
                }}
                onStop={() => {
                    refDraggable.current.style.transform = 'translate(0px, 0px)'
                }}
            >
                <div
                    className={`relative top-0 left-0 right-0 w-full h-full z-50 cursor-move ${className}`}
                    ref={refDraggable}
                />
            </Draggable>
        </>
    )
}

export default DraggableImage
