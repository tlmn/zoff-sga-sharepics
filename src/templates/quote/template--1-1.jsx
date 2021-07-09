import React, { useContext } from 'react'

import BGQuote11Blue from '../../assets/backgrounds/quote/1-1/blue'
import BGQuote11Green from '../../assets/backgrounds/quote/1-1/green'
import BGQuote11Purple from '../../assets/backgrounds/quote/1-1/purple'
import BGQuote11Yellow from '../../assets/backgrounds/quote/1-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo11 from '../../components/templates/partnerLogo11'
import TemplateContext from '../../components/templateContext'

const TemplateQuote11 = () => {
    const [state] = useContext(TemplateContext)
    return (
        <div
            className={`flex flex-col ${
                state.templateScale
                    ? `absolute template-scale--1-1`
                    : `relative`
            }  text-lg`}
            ref={state.slides[state.currentSlide].ref}
            style={{
                width: `${
                    state.slides[state.currentSlide].options.dimensions.width
                }px`,
                height: `${
                    state.slides[state.currentSlide].options.dimensions.height
                }px`,
            }}
        >
            <div className="w-full h-full absolute top-0 left-0">
                {state.slides[state.currentSlide].options.colorTheme ===
                    'green' && <BGQuote11Green />}
                {state.slides[state.currentSlide].options.colorTheme ===
                    'yellow' && <BGQuote11Yellow />}
                {state.slides[state.currentSlide].options.colorTheme ===
                    'purple' && <BGQuote11Purple />}
                {state.slides[state.currentSlide].options.colorTheme ===
                    'blue' && <BGQuote11Blue />}
            </div>

            <div className="absolute top-0 right-0 h-full z-30 px-4 pt-4 pb-1 flex flex-col w-full font-medium">
                {state.slides[state.currentSlide].data.body.content !== '' && (
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
                                    .options.scale.value
                            }px`,
                        }}
                    />
                )}

                <div
                    className="mt-3 flex flex-col items-center text-s"
                    style={{ transform: 'rotate(-3deg)' }}
                >
                    {state.slides[state.currentSlide].data.author.content !==
                        '' && (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: state.slides[state.currentSlide].data
                                    .author.content,
                            }}
                            className="font-kapra uppercase font-bold italic text-white bg-black inline p-2 my-1 shadow leading-none"
                        />
                    )}
                    {state.slides[state.currentSlide].data.position.content !==
                        '' && (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: state.slides[state.currentSlide].data
                                    .position.content,
                            }}
                            className="font-kapra uppercase font-bold italic text-black bg-white inline p-2 my-1 shadow leading-none"
                        />
                    )}
                </div>
            </div>
            <div
                className={`absolute bottom-0 left-0 w-full flex ${
                    state.slides[state.currentSlide].data.partnerLogo.url === ''
                        ? `justify-center`
                        : `justify-start`
                } px-2 pb-1`}
            >
                <LogoText />
            </div>
            <PartnerLogo11 />
        </div>
    )
}

export default TemplateQuote11
