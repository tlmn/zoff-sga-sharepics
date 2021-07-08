import React from 'react'

const TextLeftIcon = ({ fillColor = '#fff' }) => (
  <svg width="20" height="20" viewBox="0 0 400 400" fill={fillColor}>
    <rect width="400" height="400" fill={fillColor} />
    <path
      d="M51 79H193H335"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <path
      d="M51 331H193H335"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <line
      x1="51"
      y1="203"
      x2="335"
      y2="203"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <line
      x1="51"
      y1="141"
      x2="255"
      y2="141"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <line
      x1="51"
      y1="265"
      x2="255"
      y2="265"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
  </svg>
)
export default TextLeftIcon
