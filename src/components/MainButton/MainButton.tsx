import React from "react";
import styles from "./MainButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  section: "landing" | "product";
  variant?: boolean;
};

export const MainButton: React.FC<Props> = ({
  children,
  section,
  variant,
  ...rest
}) => {
  return (
    <button
      className={
        section === "landing"
          ? styles.button
          : section === "product" && variant
          ? styles.buttonProductDetailsVariant
          : styles.buttonProductDetails
      }
      {...rest}
    >
      {children}
    </button>
  );
};
