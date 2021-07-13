import PartnerLogoOverlay11 from '../../assets/backgrounds/partnerLogoOverlay--1-1'
import React from 'react'
import useDataContext from '../../lib/useDataContext'

const PartnerLogo11 = () => {
  const { state } = useDataContext()
  const {
    data: { partnerLogo },
  } = state.slides[state.currentSlide]
  return (
    <>
      {partnerLogo.url !== '' && (
        <div className="absolute w-full h-full" style={{ zIndex: 100 }}>
          <div
            style={{ maxWidth: '12rem' }}
            className="absolute z-20 bottom-0 right-0  pr-2 pb-2"
          >
            <img src={partnerLogo.url} alt="" />
          </div>
          <PartnerLogoOverlay11 className="absolute bottom-0 right-0 z-10" />
        </div>
      )}
    </>
  )
}

export default PartnerLogo11
