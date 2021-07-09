import React, { useContext } from 'react'

import BGStatementImage21Blue from '../../assets/backgrounds/statementImage/2-1/blue'
import BGStatementImage21Green from '../../assets/backgrounds/statementImage/2-1/green'
import BGStatementImage21Purple from '../../assets/backgrounds/statementImage/2-1/purple'
import BGStatementImage21Yellow from '../../assets/backgrounds/statementImage/2-1/yellow'
import DraggableImage from '../../components/inputs/draggableImage'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo21 from '../../components/templates/partnerLogo21'
import TemplateContext from '../../components/templateContext'

const TemplateStatementImage21 = () => {
    const [state] = useContext(TemplateContext)
    return (
        <div className="">
            <div
                className={`flex flex-col ${
                    state.templateScale
                        ? `absolute template-scale--2-1`
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
                        className="w-full h-full absolute z-30"
                        style={{
                            clipPath:
                                'polygon(0px 0px, 100% 0%, 100% 77.5%, 10.2% 80.5%, 0% 71%)',
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
                                        : `/assets/images/defaultImages/quote-1.jpg`
                                })`,
                                backgroundSize: `${
                                    state.slides[state.currentSlide].data.image
                                        .scale *
                                        10 +
                                    50
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
                        'green' && <BGStatementImage21Green />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'yellow' && <BGStatementImage21Yellow />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'purple' && <BGStatementImage21Purple />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'blue' && <BGStatementImage21Blue />}
                </div>
                <div className="flex flex-col w-full h-full px-3 pt-3 pb-1">
                    <div className="flex flex-1 flex-col items-center justify-center">
                        <div className="flex flex-col items-center z-30">
                            {state.slides[
                                state.currentSlide
                            ].data.body.lines.map(
                                (line) =>
                                    line.content !== '' && (
                                        <span
                                            className="font-kapra uppercase font-bold italic text-black bg-green inline p-2 my-1 shadow leading-none"
                                            style={{
                                                transform: 'rotate(-3deg)',
                                                fontSize: `${
                                                    state.slides[
                                                        state.currentSlide
                                                    ].data.body.options.scale
                                                        .value / 2
                                                }px`,
                                                width: 'max-content',
                                            }}
                                        >
                                            {line.content}
                                        </span>
                                    )
                            )}
                        </div>
                    </div>
                    <div
                        className="w-full flex justify-center px-2 pb-1"
                        style={{ height: '6rem' }}
                    >
                        <LogoText className="mx-auto" />
                    </div>
                </div>
                <PartnerLogo21 />
            </div>
        </div>
    )
}

export default TemplateStatementImage21
