import React from "react"

export default function SVGContainer({ textSize, text, style, ringColor, textColor }) {
  return (
    <svg
      width="320"
      height="320"
      class="absolute top-0 visible"
      xmlns="http://www.w3.org/2000/svg"
      font-size={`${textSize}rem`}
      style={{position:'absolute',top:0}}
      id="mysvg"
    >
      <defs>
        <linearGradient
          id="profileRingGradient"
          x1="195"
          y1="260"
          x2="234"
          y2="197"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={ringColor}></stop>
          <stop offset="1" stop-color="#000000" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 160 160
  m -133.75, 0
  a 133.75,133.75 0 1,0 267.5,0
  a 133.75,133.75 0 1,0 -267.5,0"
        id="profileRingTextPath"
        fill="none"
        stroke="url(#profileRingGradient)"
        stroke-width="52.5"
      ></path>
      <text dy="0.3em" font-size="1em">
        <textPath style={{...style, fill: textColor}} startOffset="2%" xlinkHref="#profileRingTextPath">
          {text}
        </textPath>
      </text>
    </svg>
  )
}
