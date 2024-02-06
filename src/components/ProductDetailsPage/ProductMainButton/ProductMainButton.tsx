import React from "react";
import styles from "./ProductMainButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  secondary?: boolean;
  addToCart?: boolean;
  isMobile?: boolean;
};

export const ProductMainButton: React.FC<Props> = ({
  children,
  secondary,
  addToCart,
  isMobile,
  ...rest
}) => {
  let buttonClass = `${styles.button}`;

  if (secondary) {
    buttonClass += ` ${styles.secondaryBtn}`;
  } else if (addToCart) {
    buttonClass += ` ${styles.addToCartBtn}`;
  } else if (isMobile) {
    buttonClass += ` ${styles.isMobile}`;
  } else {
    buttonClass += ` ${styles.primaryBtn}`;
  }
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
