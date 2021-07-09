import React, { useContext } from 'react'

import BGQuote21Blue from '../../assets/backgrounds/quote/2-1/blue'
import BGQuote21Green from '../../assets/backgrounds/quote/2-1/green'
import BGQuote21Purple from '../../assets/backgrounds/quote/2-1/purple'
import BGQuote21Yellow from '../../assets/backgrounds/quote/2-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo21 from '../../components/templates/partnerLogo21'
import TemplateContext from '../../components/templateContext'

const TemplateQuote21 = () => {
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
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'green' && <BGQuote21Green />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'yellow' && <BGQuote21Yellow />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'purple' && <BGQuote21Purple />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'blue' && <BGQuote21Blue />}
                </div>

                <div className="absolute top-0 right-0 h-full z-30 px-4 pt-4 pb-1 flex flex-col w-full font-bold">
                    {state.slides[state.currentSlide].data.body.content !==
                        '' && (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: `„${
                                    state.slides[state.currentSlide].data.body
                                        .content
                                }“`,
                            }}
                            className="font-ttnorms font-medium leading-normal"
                            style={{
                                fontSize: `${
                                    state.slides[state.currentSlide].data.body
                                        .options.scale.value / 2
                                }px`,
                            }}
                        />
                    )}

                    <div
                        className="mt-1 font-medium flex flex-col items-center text-xs"
                        style={{ transform: 'rotate(-3deg)' }}
                    >
                        {state.slides[state.currentSlide].data.author
                            .content !== '' && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: state.slides[state.currentSlide]
                                        .data.author.content,
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
                <div className="flex justify-center items-end w-full h-full mb-1">
                    <div style={{ height: '6rem' }}>
                        <LogoText />
                    </div>
                </div>
                <PartnerLogo21 />
            </div>
        </div>
    )
}

export default TemplateQuote21
