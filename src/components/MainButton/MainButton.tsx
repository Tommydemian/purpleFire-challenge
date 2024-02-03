import React from "react";
import styles from "./MainButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  section?: "landing" | "product";
  variant?: boolean;
};

export const MainButton: React.FC<Props> = ({
  children,
  section,
  variant,
  ...rest
}) => {
  let buttonStyle = styles.button;

  if (section) {
    buttonStyle =
      section === "landing"
        ? `${styles.button} ${styles.buttonLanding}`
        : variant
        ? styles.buttonProductDetailsVariant
        : styles.buttonProductDetails;
  }

  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
};
