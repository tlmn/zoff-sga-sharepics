import React, { useContext } from 'react'

import BGEvent11Blue from '../../assets/backgrounds/event/1-1/blue'
import BGEvent11Green from '../../assets/backgrounds/event/1-1/green'
import BGEvent11Purple from '../../assets/backgrounds/event/1-1/purple'
import BGEvent11Yellow from '../../assets/backgrounds/event/1-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo11 from '../../components/templates/partnerLogo11'
import TemplateContext from '../../components/templateContext'

const TemplateEvent11 = () => {
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
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'green' && <BGEvent11Green />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'yellow' && <BGEvent11Yellow />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'purple' && <BGEvent11Purple />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'blue' && <BGEvent11Blue />}
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-30 px-3 pt-3 pb-1 flex flex-col">
                    <div className="flex flex-col items-center">
                        {state.slides[state.currentSlide].data.category
                            .content !== '' && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: state.slides[state.currentSlide]
                                        .data.category.content,
                                }}
                                className="font-kapra uppercase font-bold italic text-white bg-black inline-block p-2 mb-1 shadow leading-none text-s"
                                style={{
                                    maxWidth: 'max-content',
                                    transform: 'rotate(-3deg)',
                                }}
                            />
                        )}
                        {state.slides[state.currentSlide].data.meta.content !==
                            '' && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: state.slides[state.currentSlide]
                                        .data.meta.content,
                                }}
                                className="font-ttnorms mt-2 uppercase text-black bg-white font-bold inline p-2 mb-1 leading-none text-s"
                                style={{ maxWidth: 'max-content' }}
                            />
                        )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center px-3">
                        {/* QUOTE TEXT */}
                        <div className="self-center text-center flex flex-col items-center justify-center">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: state.slides[state.currentSlide]
                                        .data.body.content,
                                }}
                                className="font-kapra italic uppercase font-bold"
                                style={{
                                    fontSize: `${
                                        state.slides[state.currentSlide].data
                                            .body.options.scale.value
                                    }px`,
                                }}
                            />
                        </div>
                    </div>
                    {/* FOOTER */}
                    <div className="flex">
                        <div
                            className={`absolute bottom-0 left-0 w-full flex ${
                                state.slides[state.currentSlide].data
                                    .partnerLogo.url === ''
                                    ? `justify-center`
                                    : `justify-start`
                            } px-2 pb-1`}
                        >
                            <LogoText />
                        </div>
                    </div>
                </div>
                <PartnerLogo11 />
            </div>
        </div>
    )
}

export default TemplateEvent11
