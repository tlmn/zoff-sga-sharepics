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
  const { templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { meta, partnerLogo, category, body },
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
        {colorTheme === 'green' && <BGEvent11Green />}
        {colorTheme === 'yellow' && <BGEvent11Yellow />}
        {colorTheme === 'purple' && <BGEvent11Purple />}
        {colorTheme === 'blue' && <BGEvent11Blue />}
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-30 px-3 pt-4 pb-1 flex flex-col">
        <div className="flex flex-col items-center">
          {category.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: category.content,
              }}
              className="font-kapra uppercase font-bold italic text-white bg-black inline-block p-2 mb-1 shadow leading-none text-s"
              style={{
                maxWidth: 'max-content',
                transform: 'rotate(-3deg)',
              }}
            />
          )}
          {meta.content !== '' && (
            <span
              dangerouslySetInnerHTML={{
                __html: meta.content,
              }}
              className="font-ttnorms mt-2 uppercase text-black bg-white font-bold inline p-2 mb-1 leading-none text-s"
              style={{ maxWidth: 'max-content' }}
            />
          )}
        </div>
        <div className="flex-1 flex flex-col px-3 pt-4">
          {/* QUOTE TEXT */}
          <div className="text-center flex flex-col items-center justify-center">
            <span
              dangerouslySetInnerHTML={{
                __html: body.content,
              }}
              className="font-kapra italic uppercase font-bold"
              style={{
                fontSize: `${body.options.scale.value}px`,
              }}
            />
          </div>
        </div>
        {/* FOOTER */}
        <div className="flex">
          <div
            className={`absolute bottom-0 left-0 w-full flex ${
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

export default TemplateEvent11
