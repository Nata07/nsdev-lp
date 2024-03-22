import { SVGProps } from "@/utils/types-svg";

export function PcMobileSvg({ width, height}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 33"
      fill="none"
    >
      <g
        clipPath="url(#clip0_725_5561)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M30 24.97v-12a2 2 0 00-2-2h-6a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2z"
          stroke="#7C7C8A"
        />
        <path d="M16 26.97h-5" stroke="#fff" />
        <path
          d="M20 22.97H5a2 2 0 01-2-2v-12a2 2 0 012-2h18a2 2 0 012 2v2"
          stroke="#7C7C8A"
        />
        <path d="M24 14.97h2" stroke="#fff" />
      </g>
      <defs>
        <clipPath id="clip0_725_5561">
          <path fill="#fff" transform="translate(0 .97)" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
