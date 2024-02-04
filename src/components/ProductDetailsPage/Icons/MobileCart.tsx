import { SVGProps } from "react";
export const MobileCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      clipPath="url(#a)"
    >
      <path d="M5 17.5a1.667 1.667 0 1 0 0-3.333A1.667 1.667 0 0 0 5 17.5ZM14.167 17.5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z" />
      <path d="M14.167 14.167H5V2.5H3.333" />
      <path d="M5 4.167 16.667 5l-.834 5.833H5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
