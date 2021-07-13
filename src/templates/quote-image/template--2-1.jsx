import React, { useContext } from 'react'

import BGQuoteImage21Blue from '../../assets/backgrounds/quoteImage/2-1/blue'
import BGQuoteImage21Green from '../../assets/backgrounds/quoteImage/2-1/green'
import BGQuoteImage21Purple from '../../assets/backgrounds/quoteImage/2-1/purple'
import BGQuoteImage21Yellow from '../../assets/backgrounds/quoteImage/2-1/yellow'
import DraggableImage from '../../components/inputs/draggableImage'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo21 from '../../components/templates/partnerLogo21'
import TemplateContext from '../../components/templateContext'
import { formatText } from '../../lib/lib'

const TemplateQuoteImage21 = () => {
  const [state] = useContext(TemplateContext)
  const { currentSlide, templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { image, description, position, body },
    ref,
  } = state.slides[state.currentSlide]
  return (
    <div className="">
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
          <div
            className="w-full h-full absolute z-10"
            style={{
              clipPath:
                'polygon(0px 0px, 46% 0%, 52% 79.1%, 10.2% 80.5%, 0% 71%)',
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
                backgroundSize: `${image.scale * 10 + 50}%`,
                backgroundRepeat: 'repeat',
                backgroundPosition: `${image.position.x}px ${image.position.y}px`,
              }}
            />
          </div>
          {colorTheme === 'green' && <BGQuoteImage21Green />}
          {colorTheme === 'yellow' && <BGQuoteImage21Yellow />}
          {colorTheme === 'purple' && <BGQuoteImage21Purple />}
          {colorTheme === 'blue' && <BGQuoteImage21Blue />}
        </div>

        <div className="absolute top-0 right-0 h-full z-30 px-3 pt-3 pb-1 flex flex-col w-1/2">
          {body.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: `„${formatText(body.content)}“`,
              }}
              className="font-ttnorms leading-normal overflow-hidden"
              style={{
                fontSize: `${body.options.scale.value / 1.5}px`,
                maxHeight: '16rem',
              }}
            />
          )}

          <div
            className="mt-2 flex flex-col items-center"
            style={{ transform: 'rotate(-3deg)' }}
          >
            {description.content !== '' && (
              <span
                dangerouslySetInnerHTML={{
                  __html: formatText(description.content),
                }}
                className="font-kapra uppercase font-bold italic text-white bg-black inline p-1 mb-1 shadow leading-none text-s"
              />
            )}
            {position.content !== '' && (
              <span
                dangerouslySetInnerHTML={{
                  __html: formatText(position.content),
                }}
                className="font-kapra uppercase font-bold italic text-black bg-white inline p-1 my-1 shadow leading-none text-xs"
              />
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full flex justify-center px-2 pb-1"
          style={{ height: '6rem' }}
        >
          <LogoText className="mx-auto" />
        </div>
        <PartnerLogo21 />
      </div>
    </div>
  )
}

export default TemplateQuoteImage21
