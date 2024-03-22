import { SVGProps } from "@/utils/types-svg";

export function TailwindSvg({ width, height}: SVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.901.987c-3.417 0-5.553 1.688-6.407 5.063 1.282-1.687 2.777-2.32 4.485-1.898.975.24 1.672.939 2.443 1.712 1.256 1.26 2.71 2.718 5.887 2.718 3.417 0 5.552-1.688 6.407-5.063-1.282 1.687-2.777 2.32-4.485 1.898-.975-.24-1.672-.939-2.443-1.712C17.532 2.445 16.078.987 12.9.987zM6.494 8.582c-3.417 0-5.553 1.687-6.407 5.063 1.281-1.688 2.776-2.321 4.485-1.899.975.24 1.672.94 2.443 1.713 1.256 1.26 2.71 2.717 5.886 2.717 3.418 0 5.553-1.688 6.408-5.063-1.282 1.688-2.777 2.32-4.486 1.899-.974-.241-1.671-.94-2.442-1.713-1.257-1.26-2.71-2.717-5.887-2.717z"
        fill="url(#paint0_linear_1259_2747)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1259_2747"
          x1={-0.625}
          y1={5.84768}
          x2={21.3726}
          y2={18.6885}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0ECCAD" />
          <stop offset={1} stopColor="#0ED7B5" />
        </linearGradient>
      </defs>
    </svg>
  )
}