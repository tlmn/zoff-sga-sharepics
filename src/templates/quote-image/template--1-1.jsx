import React, { useContext } from 'react'

import BGQuoteImage11Blue from '../../assets/backgrounds/quoteImage/1-1/blue'
import BGQuoteImage11Green from '../../assets/backgrounds/quoteImage/1-1/green'
import BGQuoteImage11Purple from '../../assets/backgrounds/quoteImage/1-1/purple'
import BGQuoteImage11Yellow from '../../assets/backgrounds/quoteImage/1-1/yellow'
import DraggableImage from '../../components/inputs/draggableImage'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo11 from '../../components/templates/partnerLogo11'
import TemplateContext from '../../components/templateContext'
import { formatText } from '../../lib/lib'

const TemplateQuoteImage11 = () => {
  const [state] = useContext(TemplateContext)
  const { currentSlide, templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { image, description, position, body, partnerLogo },
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
        <div
          className="w-full h-full absolute z-10"
          style={{
            clipPath: 'polygon(0 0, 46% 0%, 52% 81.5%, 30% 82.4%,0% 71%)',
          }}
        >
          <DraggableImage
            propertyPath={`slides[${currentSlide}].data.image.position`}
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
                image.url !== ''
                  ? image.url
                  : `/assets/images/defaultImages/quote-1.jpg`
              })`,
              backgroundSize: `${image.scale * 10 + 100}%`,
              backgroundRepeat: 'repeat',
              backgroundPosition:
                image.position.x === 0 &&
                image.position.y === 0 &&
                image.url === ''
                  ? `-234px -93px`
                  : `${image.position.x - 234}px ${image.position.y - 93}px`,
            }}
          />
        </div>
        {colorTheme === 'green' && <BGQuoteImage11Green />}
        {colorTheme === 'yellow' && <BGQuoteImage11Yellow />}
        {colorTheme === 'purple' && <BGQuoteImage11Purple />}
        {colorTheme === 'blue' && <BGQuoteImage11Blue />}
      </div>

      <div className="absolute top-0 right-0 h-full z-30 px-3 pt-3 pb-1 flex flex-col w-1/2">
        {body.content !== '' && (
          <span
            dangerouslySetInnerHTML={{
              __html: `„${formatText(body.content)}“`,
            }}
            className="font-ttnorms leading-normal overflow-hidden"
            style={{
              fontSize: `${body.options.scale.value}px`,
              maxHeight: '42rem',
            }}
          />
        )}

        <div
          className="mt-3 flex flex-col items-center"
          style={{ transform: 'rotate(-3deg)' }}
        >
          {description.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: formatText(description.content),
              }}
              className="font-kapra uppercase font-bold italic text-white bg-black inline p-2 my-1 shadow leading-none text-base"
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

export default TemplateQuoteImage11
