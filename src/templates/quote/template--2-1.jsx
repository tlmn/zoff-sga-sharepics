import BGQuote21Blue from '../../assets/backgrounds/quote/2-1/blue'
import BGQuote21Green from '../../assets/backgrounds/quote/2-1/green'
import BGQuote21Purple from '../../assets/backgrounds/quote/2-1/purple'
import BGQuote21Yellow from '../../assets/backgrounds/quote/2-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo21 from '../../components/templates/partnerLogo21'
import React from 'react'
import { formatText } from '../../lib/lib'
import useDataContext from '../../lib/useDataContext'

const TemplateQuote21 = () => {
  const { state } = useDataContext()
  const { templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { author, position, body },
    ref,
  } = state.slides[state.currentSlide]
  return (
    <div
      className={`flex flex-col ${
        templateScale ? `absolute template-scale--2-1` : `relative`
      }  text-lg`}
      ref={ref}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="w-full h-full absolute top-0 left-0">
        {colorTheme === 'green' && <BGQuote21Green />}
        {colorTheme === 'yellow' && <BGQuote21Yellow />}
        {colorTheme === 'purple' && <BGQuote21Purple />}
        {colorTheme === 'blue' && <BGQuote21Blue />}
      </div>

      <div className="absolute top-0 right-0 h-full z-30 px-4 pt-4 pb-1 flex flex-col w-full font-bold">
        {body.content !== '' && (
          <span
            dangerouslySetInnerHTML={{
              __html: `„${formatText(body.content)}“`,
            }}
            className="font-ttnorms font-medium leading-normal"
            style={{
              fontSize: `${body.options.scale.value / 2}px`,
            }}
          />
        )}

        <div
          className="mt-1 font-medium flex flex-col items-center"
          style={{ transform: 'rotate(-3deg)' }}
        >
          {author.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: formatText(author.content),
              }}
              className="font-kapra uppercase font-bold italic text-white bg-black inline p-1 my-1 shadow leading-none text-xs"
            />
          )}
          {position.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: formatText(position.content),
              }}
              className="font-kapra uppercase font-bold italic text-black bg-white inline p-1 my-1 shadow leading-none text-2xs"
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
  )
}

export default TemplateQuote21
