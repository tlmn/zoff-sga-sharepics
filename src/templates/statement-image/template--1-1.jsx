import BGStatementImage11Blue from '../../assets/backgrounds/statementImage/1-1/blue'
import BGStatementImage11Green from '../../assets/backgrounds/statementImage/1-1/green'
import BGStatementImage11Purple from '../../assets/backgrounds/statementImage/1-1/purple'
import BGStatementImage11Yellow from '../../assets/backgrounds/statementImage/1-1/yellow'
import DraggableImage from '../../components/inputs/draggableImage'
import LogoText from '../../assets/svg/logo-text'
import PartnerLogo11 from '../../components/templates/partnerLogo11'
import React from 'react'
import useDataContext from '../../lib/useDataContext'

const TemplateStatementImage11 = () => {
  const { state } = useDataContext()
  const { templateScale, currentSlide } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { image, body, partnerLogo },
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
          className="w-full h-full absolute"
          style={{
            clipPath: 'polygon(0px 0px, 100% 0%, 100% 79.5%, 0% 84%',
            zIndex: 40,
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
                  : `/assets/images/defaultImages/crowd.jpg`
              })`,
              backgroundSize: `${image.scale * 10 + 100}%`,
              backgroundRepeat: 'repeat',
              backgroundPosition: `${image.position.x}px ${image.position.y}px`,
            }}
          />
        </div>
        {colorTheme === 'green' && <BGStatementImage11Green />}
        {colorTheme === 'yellow' && <BGStatementImage11Yellow />}
        {colorTheme === 'purple' && <BGStatementImage11Purple />}
        {colorTheme === 'blue' && <BGStatementImage11Blue />}
      </div>

      <div className="flex-1 top-0 right-0 px-3 pt-3 pb-1 flex flex-col justify-end mb-4">
        <div className="z-50 flex flex-col items-center">
          {body.lines.map(
            (line) =>
              line.content !== '' && (
                <span
                  className={`font-kapra uppercase font-bold italic text-black bg-${colorTheme} inline p-2 my-1 shadow leading-none`}
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
      </div>
      <div
        className={`w-full flex ${
          partnerLogo.url === '' ? `justify-center` : `justify-start`
        } px-2 pb-1`}
      >
        <LogoText />
      </div>
      <PartnerLogo11 />
    </div>
  )
}

export default TemplateStatementImage11
