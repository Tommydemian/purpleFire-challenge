import { SVGProps } from "react";
export const LeftCircledArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <rect
      width={48}
      height={48}
      x={49}
      y={1}
      stroke="#A06056"
      strokeWidth={2}
      rx={24}
      transform="rotate(90 49 1)"
    />
    <path
      fill="#A06056"
      fillRule="evenodd"
      d="M27.793 17.293a1 1 0 0 1 1.414 1.414L22.914 25l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7Z"
      clipRule="evenodd"
    />
  </svg>
);
