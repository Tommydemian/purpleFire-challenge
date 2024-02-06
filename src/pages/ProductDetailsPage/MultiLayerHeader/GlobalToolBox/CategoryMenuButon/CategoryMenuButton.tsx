import { useState, useEffect, useRef } from "react";
import { NavDropdownButton } from "../../NavDropdownButton/NavDropdownButton";
import { MenuIcon } from "../../../../../components/ProductDetailsPage/Icons/Menu";

import styles from "./CategoryMenuButton.module.css";

export const CategoryMenuButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef(null);

  const handleDropwdownVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <div className={styles.menuButtonContainer}>
      <MenuIcon className={styles.menuicon} />

      <NavDropdownButton
        iconActive={true}
        onIconClick={handleDropwdownVisibility}
        className={styles.text}
        label="All Categories"
      />
      {isVisible && (
        <div ref={dropdownRef} className={styles.dropdown}>
          <ul>
            <li>category 1</li>
            <li>category 2</li>
            <li>category 3</li>
            <li>category 4</li>
            <li>category 5</li>
            <li>category 6</li>
          </ul>
        </div>
      )}
    </div>
  );
};
