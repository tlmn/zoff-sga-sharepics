import React, { useContext } from 'react'

import PartnerLogoOverlay21 from '../../assets/backgrounds/partnerLogoOverlay--2-1'
import TemplateContext from '../templateContext'

const PartnerLogo21 = () => {
  const [state] = useContext(TemplateContext)
  return (
    <>
      {state.slides[state.currentSlide].data.partnerLogo.url !== '' && (
        <div className="absolute w-full h-full">
          <div
            style={{ maxWidth: '7rem' }}
            className="absolute z-20 bottom-0 right-0  pr-2 pb-2"
          >
            <img
              src={state.slides[state.currentSlide].data.partnerLogo.url}
              className="object-cover"
              alt=""
            />
          </div>
          <PartnerLogoOverlay21 className="absolute bottom-0 right-0 z-10" />
        </div>
      )}
    </>
  )
}

export default PartnerLogo21
