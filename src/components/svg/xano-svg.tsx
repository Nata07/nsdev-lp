export function XanoSvg(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 246 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1623_49)">
        <mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={-1}
          y={0}
          width={247}
          height={172}
        >
          <path d="M-.016.01h246v171h-246V.01z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <path
            d="M166.227 80.802L246.318 5.02h-70.393l-44.894 42.486 34.932 33.041.264.255zM165.963 90.421l-34.932 33.054 44.894 42.476h70.393l-80.091-75.783-.264.253z"
            fill="#0461BD"
          />
          <path
            d="M76.26 5.02H5.868l85.03 80.47-85.03 80.459h70.394l85.05-80.459-85.05-80.47z"
            fill="#0E99E1"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1623_49">
          <path fill="#fff" d="M0 0H246V171H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}