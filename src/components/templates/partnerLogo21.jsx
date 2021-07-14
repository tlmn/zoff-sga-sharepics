import DraggableImage from '../inputs/draggableImage'
import PartnerLogoOverlay21 from '../../assets/backgrounds/partnerLogoOverlay--2-1'
import React from 'react'
import useDataContext from '../../lib/useDataContext'

const PartnerLogo21 = () => {
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
            width: `215px`,
            height: `140px`,
            clipPath: `polygon(72% 0%, 100% 19%, 100% 100%, 0% 100%)`,
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
          <PartnerLogoOverlay21 className="absolute bottom-0 right-0 z-10" />
        </div>
      )}
    </>
  )
}

export default PartnerLogo21
