import React, { useContext } from 'react'

import BGEvent21Blue from '../../assets/backgrounds/event/2-1/blue'
import BGEvent21Green from '../../assets/backgrounds/event/2-1/green'
import BGEvent21Purple from '../../assets/backgrounds/event/2-1/purple'
import BGEvent21Yellow from '../../assets/backgrounds/event/2-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo21 from '../../components/templates/partnerLogo21'
import TemplateContext from '../../components/templateContext'

const TemplateEvent21 = () => {
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
                        'green' && <BGEvent21Green />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'yellow' && <BGEvent21Yellow />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'purple' && <BGEvent21Purple />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'blue' && <BGEvent21Blue />}
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
                    <div className="flex justify-center items-center w-full mb-1">
                        <div style={{ height: '6rem' }}>
                            <LogoText />
                        </div>
                    </div>
                </div>
                <PartnerLogo21 />
            </div>
        </div>
    )
}

export default TemplateEvent21
