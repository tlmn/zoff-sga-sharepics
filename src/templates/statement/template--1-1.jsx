import BGStatement11Blue from '../../assets/backgrounds/statementImage/1-1/blue'
import BGStatement11Green from '../../assets/backgrounds/statementImage/1-1/green'
import BGStatement11Purple from '../../assets/backgrounds/statementImage/1-1/purple'
import BGStatement11Yellow from '../../assets/backgrounds/statementImage/1-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo11 from '../../components/templates/partnerLogo11'
import React from 'react'
import { formatText } from '../../lib/lib'
import useDataContext from '../../lib/useDataContext'

const TemplateStatement11 = () => {
  const { state } = useDataContext()
  const { templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { description, body, partnerLogo },
    ref,
  } = state.slides[state.currentSlide]
  return (
    <div
      className={`flex flex-col ${
        templateScale ? `absolute template-scale--1-1` : `relative`
      }  text-lg`}
      ref={ref}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="w-full h-full absolute top-0 left-0">
        {colorTheme === 'green' && <BGStatement11Green />}
        {colorTheme === 'yellow' && <BGStatement11Yellow />}
        {colorTheme === 'purple' && <BGStatement11Purple />}
        {colorTheme === 'blue' && <BGStatement11Blue />}
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-30 px-3 pt-3 pb-1 flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          {/* STATEMENT TEXT */}
          <div className="self-center text-center flex flex-col justify-center items-center">
            {body.lines.map(
              (line) =>
                line.content !== '' && (
                  <span
                    className="font-kapra uppercase font-bold italic text-white bg-black inline p-2 my-1 shadow leading-none"
                    style={{
                      transform: 'rotate(-3deg)',
                      fontSize: `${body.options.scale.value}px`,
                      width: 'max-content',
                    }}
                  >
                    {line.content}
                  </span>
                )
            )}
          </div>
          {/* STATEMENT DESCRIPTION */}
          {description.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: formatText(description.content),
              }}
              className="self-center mt-3 text-s leading-normal font-ttnorms"
            />
          )}
        </div>
        {/* FOOTER */}
        <div className="flex">
          <div
            className={`w-full flex ${
              partnerLogo.url === '' ? `justify-center` : `justify-start`
            } px-2 pb-1`}
          >
            <LogoText />
          </div>
        </div>
      </div>
      <PartnerLogo11 />
    </div>
  )
}

export default TemplateStatement11
