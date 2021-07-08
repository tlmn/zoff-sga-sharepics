import React, { useContext } from 'react'

import BGStatementImage11Blue from '../../assets/backgrounds/statementImage/1-1/blue'
import BGStatementImage11Green from '../../assets/backgrounds/statementImage/1-1/green'
import BGStatementImage11Purple from '../../assets/backgrounds/statementImage/1-1/purple'
import BGStatementImage11Yellow from '../../assets/backgrounds/statementImage/1-1/yellow'
import DraggableImage from '../../components/inputs/draggableImage'
import LogoText from '../../assets/svg/logo-text'
import TemplateContext from '../../components/templateContext'

const TemplateStatementImage11 = () => {
    const [state] = useContext(TemplateContext)
    return (
        <div className="">
            <div
                className={`flex flex-col ${
                    state.templateScale
                        ? `absolute template-scale--1-1`
                        : `relative`
                }  text-lg`}
                ref={state.slides[state.currentSlide].ref}
                style={{
                    width: `${
                        state.slides[state.currentSlide].options.dimensions
                            .width
                    }px`,
                    height: `${
                        state.slides[state.currentSlide].options.dimensions
                            .height
                    }px`,
                }}
            >
                <div className="w-full h-full absolute top-0 left-0">
                    <div
                        className="w-full h-full absolute z-40"
                        style={{
                            clipPath:
                                'polygon(0px 0px, 100% 0%, 100% 79.5%, 0% 84%',
                        }}
                    >
                        <DraggableImage
                            propertyPath={`slides[${state.currentSlide}].data.image.position`}
                        />
                        <div
                            className="w-full h-full absolute top-0 left-0 z-30"
                            style={{
                                background:
                                    'linear-gradient(179.99deg, rgba(0, 0, 0, 0) 47.98%, #000000 77.8%)',
                                mixBlendMode: 'multiply',
                            }}
                        />
                        <div
                            className="absolute top-0 left-0 z-20 object-cover h-full w-full"
                            style={{
                                backgroundImage: `url(${
                                    state.slides[state.currentSlide].data.image
                                        .url !== ''
                                        ? state.slides[state.currentSlide].data
                                              .image.url
                                        : `/assets/images/defaultImages/crowd.jpg`
                                })`,
                                backgroundSize: `${
                                    state.slides[state.currentSlide].data.image
                                        .scale *
                                        10 +
                                    100
                                }%`,
                                backgroundRepeat: 'repeat',
                                backgroundPosition: `${
                                    state.slides[state.currentSlide].data.image
                                        .position.x
                                }px ${
                                    state.slides[state.currentSlide].data.image
                                        .position.y
                                }px`,
                            }}
                        />
                    </div>
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'green' && <BGStatementImage11Green />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'yellow' && <BGStatementImage11Yellow />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'purple' && <BGStatementImage11Purple />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'blue' && <BGStatementImage11Blue />}
                </div>

                <div className="absolute top-0 right-0 z-50  px-3 pt-3 pb-1 flex flex-col">
                    {state.slides[state.currentSlide].data.body.lines.map(
                        (line) =>
                            line.content !== '' && (
                                <span
                                    className="font-kapra uppercase font-bold italic text-black bg-green inline p-2 my-1 shadow leading-none"
                                    style={{
                                        transform: 'rotate(-3deg)',
                                        fontSize: `${
                                            state.slides[state.currentSlide]
                                                .data.body.options.scale.value
                                        }px`,
                                        width: 'max-content',
                                    }}
                                >
                                    {line.content}
                                </span>
                            )
                    )}
                </div>
                <div className="absolute bottom-0 left-0 w-full justify-center px-2 pb-1">
                    <LogoText />
                </div>
            </div>
        </div>
    )
}

export default TemplateStatementImage11
