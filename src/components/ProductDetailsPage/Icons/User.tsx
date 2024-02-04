import { SVGProps } from "react";
export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
      <path d="M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5.14 15.707a3.333 3.333 0 0 1 3.193-2.374h3.334a3.333 3.333 0 0 1 3.195 2.38" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
