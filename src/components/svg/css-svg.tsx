import { SVGProps } from "@/utils/types-svg"

export function CssSvg({ width, height}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 24"
      fill="none"
    >
      <path
        d="M4.081.189L3.223 4.59h17.94l-.581 2.847H2.655l-.87 4.388h17.939l-1.003 5.021-7.234 2.385-6.27-2.385.435-2.161H1.243L.2 19.956l10.363 3.954 11.946-3.954 1.584-7.946.317-1.595L26.443.19H4.08z"
        fill="#42A5F5"
      />
    </svg>
  )
}

