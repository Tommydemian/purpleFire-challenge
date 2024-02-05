import { SVGProps } from "react";
export const RightCircledArrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      x={1}
      y={49}
      stroke="#A06056"
      strokeWidth={2}
      rx={24}
      transform="rotate(-90 1 49)"
    />
    <path
      fill="#A06056"
      fillRule="evenodd"
      d="M22.207 32.707a1 1 0 0 1-1.414-1.414L27.086 25l-6.293-6.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7Z"
      clipRule="evenodd"
    />
  </svg>
);
