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
  const { templateScale } = state
  const {
    options: {
      dimensions: { width, height },
      colorTheme,
    },
    data: { meta, category, body },
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
          {colorTheme === 'green' && <BGEvent21Green />}
          {colorTheme === 'yellow' && <BGEvent21Yellow />}
          {colorTheme === 'purple' && <BGEvent21Purple />}
          {colorTheme === 'blue' && <BGEvent21Blue />}
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-30 px-3 pt-3 pb-1 flex flex-col">
          <div className="flex flex-col items-center">
            {category.content !== '' && (
              <span
                dangerouslySetInnerHTML={{
                  __html: category.content,
                }}
                className="font-kapra uppercase font-bold italic text-white bg-black inline-block p-1 mb-1 shadow leading-none text-xs"
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
                className="font-ttnorms mt-2 uppercase text-black bg-white font-bold inline p-1 mb-1 leading-none text-xs"
                style={{ maxWidth: 'max-content' }}
              />
            )}
          </div>
          <div className="flex-1 flex flex-col justify-center px-3">
            {/* QUOTE TEXT */}
            <div className="self-center text-center flex flex-col items-center justify-center">
              <span
                dangerouslySetInnerHTML={{
                  __html: body.content,
                }}
                className="font-kapra italic uppercase font-bold"
                style={{
                  fontSize: `${body.options.scale.value / 1.5}px`,
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
