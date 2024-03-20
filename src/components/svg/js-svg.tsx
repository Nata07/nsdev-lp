import * as React from "react"

export function JSSvg(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.678 14.17l2.744-1.67c.529.944 1.01 1.742 2.166 1.742 1.107 0 1.805-.433 1.805-2.129V.598h3.37v11.563c0 3.507-2.046 5.104-5.03 5.104a5.208 5.208 0 01-3.005-.76A5.248 5.248 0 01.68 14.167v.001zm11.915-.365l2.743-1.597a3.68 3.68 0 001.366 1.51 3.652 3.652 0 001.955.546c1.397 0 2.286-.701 2.286-1.67 0-1.16-.914-1.572-2.454-2.252l-.84-.359c-2.43-1.04-4.043-2.346-4.043-5.104 0-2.54 1.925-4.475 4.933-4.475a4.955 4.955 0 012.8.63 4.99 4.99 0 011.99 2.08l-2.624 1.693a2.303 2.303 0 00-.859-1.064 2.285 2.285 0 00-1.307-.387 1.458 1.458 0 00-1.125.368 1.473 1.473 0 00-.488 1.083c0 1.017.626 1.427 2.069 2.056l.842.363c2.864 1.234 4.476 2.492 4.476 5.322 0 3.048-2.383 4.718-5.583 4.718-3.129 0-5.15-1.5-6.137-3.46"
        fill="#FDE635"
      />
    </svg>
  )
}

