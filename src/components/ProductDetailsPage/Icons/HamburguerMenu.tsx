import { SVGProps } from "react";
export const HamburguerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M.75 9.75V8.375h16.5V9.75H.75Zm0-5.5h16.5v1.375H.75V4.25ZM17.25.125V1.5H.75V.125h16.5ZM.75 12.5v1.375h16.5V12.5H.75Z"
    />
  </svg>
);
