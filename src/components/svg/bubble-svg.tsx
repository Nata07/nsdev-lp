import { SVGProps } from "@/utils/types-svg";

export function BubbleSvg({ width, height}: SVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 81 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65 52.5C65 63.822 55.822 73 44.5 73S24 63.822 24 52.5 33.178 32 44.5 32 65 41.178 65 52.5zm-31.947 0c0 6.322 5.125 11.447 11.447 11.447 6.322 0 11.447-5.125 11.447-11.447 0-6.322-5.125-11.447-11.447-11.447-6.322 0-11.447 5.125-11.447 11.447z"
        fill="#fff"
      />
      <path d="M24 16h8v43a8 8 0 01-8-8V16z" fill="#fff" />
      <circle cx={21} cy={68} r={5} fill="#00F" />
    </svg>
  )
}
