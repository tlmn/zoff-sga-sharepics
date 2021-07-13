import BGQuote11Blue from '../../assets/backgrounds/quote/1-1/blue'
import BGQuote11Green from '../../assets/backgrounds/quote/1-1/green'
import BGQuote11Purple from '../../assets/backgrounds/quote/1-1/purple'
import BGQuote11Yellow from '../../assets/backgrounds/quote/1-1/yellow'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo11 from '../../components/templates/partnerLogo11'
import React from 'react'
import { formatText } from '../../lib/lib'
import useDataContext from '../../lib/useDataContext'

const TemplateQuote11 = () => {
  const { state } = useDataContext()
  const { templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { author, position, partnerLogo, body },
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
        {colorTheme === 'green' && <BGQuote11Green />}
        {colorTheme === 'yellow' && <BGQuote11Yellow />}
        {colorTheme === 'purple' && <BGQuote11Purple />}
        {colorTheme === 'blue' && <BGQuote11Blue />}
      </div>

      <div className="absolute top-0 right-0 h-full z-30 px-4 pt-4 pb-1 flex flex-col w-full font-medium">
        {body.content !== '' && (
          <span
            dangerouslySetInnerHTML={{
              __html: `„${formatText(body.content)}“`,
            }}
            className="font-ttnorms leading-normal"
            style={{
              fontSize: `${body.options.scale.value}px`,
            }}
          />
        )}

        <div
          className="mt-3 flex flex-col items-center"
          style={{ transform: 'rotate(-3deg)' }}
        >
          {author.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: formatText(author.content),
              }}
              className="font-kapra uppercase font-bold italic text-white bg-black inline p-2 my-1 shadow leading-none overflow-hidden text-base"
              style={{ maxHeight: '32rem' }}
            />
          )}
          {position.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: formatText(position.content),
              }}
              className="font-kapra uppercase font-bold italic text-black bg-white inline p-2 my-1 shadow leading-none text-s"
            />
          )}
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full flex ${
          partnerLogo.url === '' ? `justify-center` : `justify-start`
        } px-2 pb-1`}
      >
        <LogoText />
      </div>
      <PartnerLogo11 />
    </div>
  )
}

export default TemplateQuote11
