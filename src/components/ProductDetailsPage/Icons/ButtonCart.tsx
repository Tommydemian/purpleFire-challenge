import { SVGProps } from "react";
export const ButtonCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#6F6F6F"
        d="M.5.938A.313.313 0 0 1 .813.625h.937a.312.312 0 0 1 .303.237l.253 1.013h7.256a.312.312 0 0 1 .307.37l-.937 5a.313.313 0 0 1-.307.255H3a.313.313 0 0 1-.307-.255l-.937-4.99-.25-1.005H.812A.312.312 0 0 1 .5.937ZM2.439 2.5l.82 4.375h5.107l.82-4.375H2.44Zm1.186 5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM8 7.5A1.25 1.25 0 1 0 8 10a1.25 1.25 0 0 0 0-2.5Zm-4.375.625a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25Zm4.375 0a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h10v10H.5z" />
      </clipPath>
    </defs>
  </svg>
);
