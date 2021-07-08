import React from 'react'

const BGEvent11Yellow = () => {
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
            fill="#FFE81D"
            d="M1259.82 166.026L91.275 197.576 374.65 932.395l885.171-766.369z"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="1176.54"
          height="774.369"
          x="87.275"
          y="166.026"
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

export default BGEvent11Yellow
