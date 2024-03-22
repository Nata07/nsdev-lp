import { SVGProps } from "@/utils/types-svg";

export function FigmaSvg({ width, height}: SVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1623_84)">
        <path
          d="M7.75 46.5a7.753 7.753 0 007.75-7.75V31H7.75A7.753 7.753 0 000 38.75a7.753 7.753 0 007.75 7.75z"
          fill="#0ACF83"
        />
        <path
          d="M0 23.25a7.753 7.753 0 017.75-7.75h7.75V31H7.75A7.753 7.753 0 010 23.25z"
          fill="#A259FF"
        />
        <path
          d="M0 7.75A7.753 7.753 0 017.75 0h7.75v15.5H7.75A7.753 7.753 0 010 7.75z"
          fill="#F24E1E"
        />
        <path
          d="M15.5 0h7.75A7.753 7.753 0 0131 7.75a7.753 7.753 0 01-7.75 7.75H15.5V0z"
          fill="#FF7262"
        />
        <path
          d="M31 23.25A7.753 7.753 0 0123.25 31a7.753 7.753 0 01-7.75-7.75 7.753 7.753 0 017.75-7.75A7.753 7.753 0 0131 23.25z"
          fill="#1ABCFE"
        />
      </g>
      <defs>
        <clipPath id="clip0_1623_84">
          <path fill="#fff" d="M0 0H31V46.5H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
