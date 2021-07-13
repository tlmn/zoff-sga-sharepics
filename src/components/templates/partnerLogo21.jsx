import PartnerLogoOverlay21 from '../../assets/backgrounds/partnerLogoOverlay--2-1'
import React from 'react'
import useDataContext from '../../lib/useDataContext'

const PartnerLogo21 = () => {
  const { state } = useDataContext()
  const {
    data: { partnerLogo },
  } = state.slides[state.currentSlide]
  return (
    <>
      {partnerLogo.url !== '' && (
        <div className="absolute w-full h-full">
          <div
            style={{ maxWidth: '7rem' }}
            className="absolute z-20 bottom-0 right-0  pr-2 pb-2"
          >
            <img src={partnerLogo.url} className="object-cover" alt="" />
          </div>
          <PartnerLogoOverlay21 className="absolute bottom-0 right-0 z-10" />
        </div>
      )}
    </>
  )
}

export default PartnerLogo21
