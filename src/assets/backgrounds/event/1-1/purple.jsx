import React from 'react'

const BGEvent11Purple = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1080"
      height="1080"
      fill="none"
      viewBox="0 0 1080 1080"
    >
      <g mask="url(#mask0)">
        <path fill="#FF5858" d="M0 0H1080V1080H0z" />
        <g filter="url(#filter0_d)">
          <path
            fill="#C738B8"
            d="M-188-123.777L318.728 945.928l684.862-510.551L-188-123.777z"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="1199.59"
          height="1077.7"
          x="-192"
          y="-123.777"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default BGEvent11Purple
