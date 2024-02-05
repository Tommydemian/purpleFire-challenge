import { SVGProps } from "react";
export const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 4.5-4 4 4 4"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M16 .5H0v16h16z" />
      </clipPath>
    </defs>
  </svg>
);
