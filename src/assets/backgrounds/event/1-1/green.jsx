import React from "react";

const BGEvent11Green = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1080"
      height="1080"
      fill="none"
      viewBox="0 0 1080 1080"
    >
      <g mask="url(#mask0)">
        <path fill="#FF5858" d="M0 0H1080V1080H0z"/>
        <g filter="url(#filter0_d)">
          <path
            fill="#56E5A1"
            d="M1282.5 572L-125.5 2.5 111 901l1171.5-329z"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="1416"
          height="906.5"
          x="-129.5"
          y="2.5"
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
  );
};

export default BGEvent11Green;
