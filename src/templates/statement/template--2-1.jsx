import BGStatement21Blue from '../../assets/backgrounds/statementImage/2-1/blue'
import BGStatement21Green from '../../assets/backgrounds/statementImage/2-1/green'
import BGStatement21Purple from '../../assets/backgrounds/statementImage/2-1/purple'
import BGStatement21Yellow from '../../assets/backgrounds/statementImage/2-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo21 from '../../components/templates/partnerLogo21'
import React from 'react'
import { formatText } from '../../lib/lib'
import useDataContext from '../../lib/useDataContext'

const TemplateStatement21 = () => {
  const { state } = useDataContext()
  const { templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { description, body },
    ref,
  } = state.slides[state.currentSlide]
  return (
    <div
      className={`flex flex-col absolute // border-1 border-white // ${
        templateScale ? `template-scale--2-1` : `relative`
      }  text-lg`}
      ref={ref}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="w-full h-full absolute top-0 left-0">
        {colorTheme === 'green' && <BGStatement21Green />}
        {colorTheme === 'yellow' && <BGStatement21Yellow />}
        {colorTheme === 'purple' && <BGStatement21Purple />}
        {colorTheme === 'blue' && <BGStatement21Blue />}
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="p-1 flex flex-col justify-center">
            {/* STATEMENT TEXT */}
            <div className="self-center text-center flex flex-col justify-center items-center">
              {body.lines.map(
                (line) =>
                  line.content !== '' && (
                    <span
                      className="font-kapra uppercase font-bold italic text-white bg-black inline p-2 mb-1 shadow leading-none"
                      style={{
                        transform: 'rotate(-3deg)',
                        fontSize: `${body.options.scale.value / 2.5}px`,
                        width: 'max-content',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: formatText(line.content),
                      }}
                    />
                  )
              )}
            </div>
            {/* STATEMENT DESCRIPTION */}
            {description.content !== '' && (
              <span
                dangerouslySetInnerHTML={{
                  __html: description.content,
                }}
                className="self-center mt-3 text-2xs leading-normal font-ttnorms"
              />
            )}
          </div>
        </div>
        {/* FOOTER */}
        <div className="flex justify-center items-center w-full mb-1">
          <div style={{ height: '6rem' }}>
            <LogoText />
          </div>
        </div>
        <PartnerLogo21 />
      </div>
    </div>
  )
}

export default TemplateStatement21
