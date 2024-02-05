import { SVGProps } from "react";
export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      clipPath="url(#a)"
    >
      <path d="M11.25 7.5H25M11.25 15H25M11.25 22.5H25M6.25 7.5v.013M6.25 15v.012M6.25 22.5v.012" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
