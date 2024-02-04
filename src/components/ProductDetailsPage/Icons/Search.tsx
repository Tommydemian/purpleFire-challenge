import { SVGProps } from "react";
export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M8.333 14.167a5.833 5.833 0 1 0 0-11.667 5.833 5.833 0 0 0 0 11.667ZM17.5 17.5l-5-5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
