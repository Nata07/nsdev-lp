import { SVGProps } from "@/utils/types-svg";

export function TeamSvg({ width, height}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 41"
      fill="none"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          d="M8.329 4.81a4.085 4.085 0 00-4.085 4.084v5.752h1.5V8.894A2.585 2.585 0 018.33 6.31h9.087v-1.5H8.329zm27.428 22.423v-.75h-1.5v5.756a2.585 2.585 0 01-2.584 2.584h-9.087v1.5h9.087a4.085 4.085 0 004.085-4.084v-5.006z"
          fill="#FF0088"
        />
        <path
          d="M16.666 35.572H5.828a.834.834 0 01-.834-.833v-.677a3.502 3.502 0 013.492-3.492h5.522a3.501 3.501 0 013.491 3.492v.677c0 .46-.373.833-.833.833zM33.34 20.567H22.502a.834.834 0 01-.834-.834v-.677a3.501 3.501 0 013.491-3.492h5.523a3.501 3.501 0 013.491 3.492v.677c0 .46-.373.834-.834.834zM11.246 26.403a3.335 3.335 0 11.013 0h-.013zM27.92 11.395a3.335 3.335 0 11.013 0h-.013z"
          stroke="#E1E1E6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
