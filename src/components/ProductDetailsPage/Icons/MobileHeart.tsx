import { SVGProps } from "react";
export const MobileHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M16.25 11.31 10 17.5l-6.25-6.19m0 0A4.168 4.168 0 1 1 10 5.838a4.166 4.166 0 1 1 6.25 5.477"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
