import React, { useContext } from 'react'

import PartnerLogoOverlay11 from '../../assets/backgrounds/partnerLogoOverlay--1-1'
import TemplateContext from '../templateContext'

const PartnerLogo11 = () => {
  const [state] = useContext(TemplateContext)
  return (
    <>
      {state.slides[state.currentSlide].data.partnerLogo.url !== '' && (
        <div className="absolute w-full h-full" style={{ zIndex: 100 }}>
          <div
            style={{ maxWidth: '12rem' }}
            className="absolute z-20 bottom-0 right-0  pr-2 pb-2"
          >
            <img
              src={state.slides[state.currentSlide].data.partnerLogo.url}
              alt=""
            />
          </div>
          <PartnerLogoOverlay11 className="absolute bottom-0 right-0 z-10" />
        </div>
      )}
    </>
  )
}

export default PartnerLogo11
