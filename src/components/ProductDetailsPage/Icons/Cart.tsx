import { SVGProps } from "react";
export const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#191919"
      d="M0 2.25a.75.75 0 0 1 .75-.75H3a.75.75 0 0 1 .728.568L4.335 4.5H21.75a.75.75 0 0 1 .736.888l-2.25 12A.75.75 0 0 1 19.5 18H6a.75.75 0 0 1-.737-.612L3.015 5.41 2.415 3H.75A.75.75 0 0 1 0 2.25ZM4.653 6l1.97 10.5h12.255L20.847 6H4.653ZM7.5 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7.5 19.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm10.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
    />
  </svg>
);
