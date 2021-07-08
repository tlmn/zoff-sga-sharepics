import React, { useContext } from 'react'

import BGStatement11Blue from '../../assets/backgrounds/statementImage/1-1/blue'
import BGStatement11Green from '../../assets/backgrounds/statementImage/1-1/green'
import BGStatement11Purple from '../../assets/backgrounds/statementImage/1-1/purple'
import BGStatement11Yellow from '../../assets/backgrounds/statementImage/1-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo11 from '../../components/templates/partnerLogo11'
import TemplateContext from '../../components/templateContext'
import { formatText } from '../../lib/lib'

const TemplateStatement11 = () => {
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
                        'green' && <BGStatement11Green />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'yellow' && <BGStatement11Yellow />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'purple' && <BGStatement11Purple />}
                    {state.slides[state.currentSlide].options.colorTheme ===
                        'blue' && <BGStatement11Blue />}
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-30 px-3 pt-3 pb-1 flex flex-col">
                    <div className="flex-1 flex flex-col justify-center">
                        {/* STATEMENT TEXT */}
                        <div className="self-center text-center flex flex-col justify-center items-center">
                            {state.slides[
                                state.currentSlide
                            ].data.body.lines.map(
                                (line) =>
                                    line.content !== '' && (
                                        <span
                                            className="font-kapra uppercase font-bold italic text-white bg-black inline p-2 my-1 shadow leading-none"
                                            style={{
                                                transform: 'rotate(-3deg)',
                                                fontSize: `${
                                                    state.slides[
                                                        state.currentSlide
                                                    ].data.body.options.scale
                                                        .value
                                                }px`,
                                                width: 'max-content',
                                            }}
                                        >
                                            {line.content}
                                        </span>
                                    )
                            )}
                        </div>
                        {/* STATEMENT DESCRIPTION */}
                        {state.slides[state.currentSlide].data.description
                            .content !== '' && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: formatText(
                                        state.slides[state.currentSlide].data
                                            .description.content
                                    ),
                                }}
                                className="self-center mt-3 text-s leading-normal font-ttnorms"
                            />
                        )}
                    </div>
                    {/* FOOTER */}
                    <div className="flex">
                        <div className="self-start flex-1">
                            <LogoText />
                        </div>
                    </div>
                </div>
                <PartnerLogo11 />
            </div>
        </div>
    )
}

export default TemplateStatement11
