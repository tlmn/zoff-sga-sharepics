import DraggableImage from '../inputs/draggableImage'
import PartnerLogoOverlay11 from '../../assets/backgrounds/partnerLogoOverlay--1-1'
import React from 'react'
import useDataContext from '../../lib/useDataContext'

const PartnerLogo11 = () => {
  const { state } = useDataContext()
  const { currentSlide } = state
  const {
    data: { partnerLogo },
  } = state.slides[state.currentSlide]
  return (
    <>
      {partnerLogo.url !== '' && (
        <div
          className="absolute bottom-0 right-0"
          style={{
            zIndex: 100,
            width: `401px`,
            height: `275px`,
            clipPath: `polygon(69% 0%, 100% 9%, 100% 100%, 0% 100%)`,
          }}
        >
          <DraggableImage
            propertyPath={`slides[${currentSlide}].data.partnerLogo.position`}
          />
          <div
            style={{
              backgroundImage: `url(${partnerLogo.url})`,
              backgroundSize: `${(partnerLogo.scale * 10 + 100) / 3}%`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `${partnerLogo.position.x + 200}px ${
                partnerLogo.position.y + 140
              }px`,
            }}
            className="absolute z-20 bottom-0 right-0 w-full h-full"
          />
          <PartnerLogoOverlay11 className="absolute bottom-0 right-0 z-10" />
        </div>
      )}
    </>
  )
}

export default PartnerLogo11
