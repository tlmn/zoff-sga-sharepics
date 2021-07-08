import React from 'react'

const InputIcon = ({ fillColor = '#fff' }) => (
  <svg width="20" height="20" viewBox="0 0 400 400" fill="none">
    <rect width="400" height="400" fill={fillColor} />
    <rect
      x="22"
      y="124"
      width="356"
      height="152"
      rx="15"
      stroke="black"
      strokeWidth="10"
    />
    <line x1="235" y1="84" x2="295" y2="84" stroke="black" strokeWidth="10" />
    <line x1="235" y1="318" x2="295" y2="318" stroke="black" strokeWidth="10" />
    <line x1="265" y1="89" x2="265" y2="323" stroke="black" strokeWidth="10" />
  </svg>
)
export default InputIcon
