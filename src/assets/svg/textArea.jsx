import React from "react";

const TextAreaIcon = ({ fillColor = "#fff" }) => (
  <svg width="20" height="20" viewBox="0 0 400 400" fill="none">
    <rect width="400" height="400" fill={fillColor} />
    <line
      x1="62.5"
      y1="106.5"
      x2="337.5"
      y2="106.5"
      stroke="black"
      strokeWidth="25"
      strokeLinecap="round"
    />
    <line
      x1="62.5"
      y1="169.5"
      x2="287.5"
      y2="169.5"
      stroke="black"
      strokeWidth="25"
      stroke-linecap="round"
    />
    <line
      x1="62.5"
      y1="232.5"
      x2="337.5"
      y2="232.5"
      stroke="black"
      strokeWidth="25"
      strokeLinecap="round"
    />
    <line
      x1="62.5"
      y1="295.5"
      x2="307.5"
      y2="295.5"
      stroke="black"
      strokeWidth="25"
      strokeLinecap="round"
    />
    <rect
      x="22"
      y="56"
      width="356"
      height="287"
      rx="15"
      stroke="black"
      strokeWidth="10"
    />
  </svg>
);

export default TextAreaIcon;
