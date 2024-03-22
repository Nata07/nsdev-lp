import { SVGProps } from "@/utils/types-svg"

export function HtmlSvg({ width, height}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 26"
      fill="none"
    >
      <path
        d="M12.024 21.097l6.04-1.607.816-8.675H8.137L7.87 7.927h11.277l.297-2.83H4.604l.831 8.548H15.66l-.341 3.67-3.295.852-3.294-.853-.207-2.36H5.555l.43 4.536 6.04 1.607zM.258.39H23.79l-2.122 23.04-9.645 2.56-9.644-2.56L.258.39z"
        fill="#E44D26"
      />
    </svg>
  )
}

