import { SVGProps } from "@/utils/types-svg";

export function ClientsSvg({ width, height}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 33"
      fill="none"
    >
      <g
        clipPath="url(#clip0_725_5546)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10.5 20.97a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM1.277 25.97a11 11 0 0118.443 0"
          stroke="#7C7C8A"
        />
        <path
          d="M21.5 20.97a10.991 10.991 0 019.221 5M19.086 8.433A6.5 6.5 0 1121.5 20.971"
          stroke="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_725_5546">
          <path fill="#fff" transform="translate(0 .97)" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

