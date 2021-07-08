import React, { useContext } from 'react'

import BGQuoteImage21Blue from '../../assets/backgrounds/quoteImage/2-1/blue'
import BGQuoteImage21Green from '../../assets/backgrounds/quoteImage/2-1/green'
import BGQuoteImage21Purple from '../../assets/backgrounds/quoteImage/2-1/purple'
import BGQuoteImage21Yellow from '../../assets/backgrounds/quoteImage/2-1/yellow'
import DraggableImage from '../../components/inputs/draggableImage'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo21 from '../../components/templates/partnerLogo21'
import TemplateContext from '../../components/templateContext'

const TemplateQuoteImage21 = () => {
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
                        className="w-full h-full absolute z-10"
                        style={{
                            clipPath:
                                'polygon(0px 0px, 46% 0%, 52% 79.1%, 10.2% 80.5%, 0% 71%)',
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
                        'green' && <BGQuoteImage21Green />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'yellow' && <BGQuoteImage21Yellow />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'purple' && <BGQuoteImage21Purple />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'blue' && <BGQuoteImage21Blue />}
                </div>

                <div className="absolute top-0 right-0 h-full z-30 px-3 pt-3 pb-1 flex flex-col w-1/2">
                    {state.slides[state.currentSlide].data.body.content !==
                        '' && (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: `„${
                                    state.slides[state.currentSlide].data.body
                                        .content
                                }“`,
                            }}
                            className="font-ttnorms leading-normal"
                            style={{
                                fontSize: `${
                                    state.slides[state.currentSlide].data.body
                                        .options.scale.value / 2
                                }px`,
                            }}
                        />
                    )}

                    <div
                        className="mt-3 flex flex-col items-center text-xs"
                        style={{ transform: 'rotate(-3deg)' }}
                    >
                        {state.slides[state.currentSlide].data.description
                            .content !== '' && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: state.slides[state.currentSlide]
                                        .data.description.content,
                                }}
                                className="font-kapra uppercase font-bold italic text-white bg-black inline p-2 my-1 shadow leading-none"
                            />
                        )}
                        {state.slides[state.currentSlide].data.position
                            .content !== '' && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: state.slides[state.currentSlide]
                                        .data.position.content,
                                }}
                                className="font-kapra uppercase font-bold italic text-black bg-white inline p-2 my-1 shadow leading-none"
                            />
                        )}
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 w-full justify-center px-2 pb-1"
                    style={{ height: '6rem' }}
                >
                    <LogoText className="mx-auto" />
                </div>
                <PartnerLogo21 />
            </div>
        </div>
    )
}

export default TemplateQuoteImage21
