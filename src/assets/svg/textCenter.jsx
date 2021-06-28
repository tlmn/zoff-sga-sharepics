import React from "react";

const TextCenterIcon = ({ fillColor = "#fff" }) => (
  <svg width="20" height="20" viewBox="0 0 400 400" fill={fillColor}>
    <rect width="400" height="400" fill={fillColor} />
    <path
      d="M58 79H200H342"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <path
      d="M58 331H200H342"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <line
      x1="58"
      y1="203"
      x2="342"
      y2="203"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <line
      x1="98"
      y1="141"
      x2="302"
      y2="141"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
    <line
      x1="98"
      y1="265"
      x2="302"
      y2="265"
      stroke="black"
      strokeWidth="30"
      strokeLinecap="round"
    />
  </svg>
);

export default TextCenterIcon;
