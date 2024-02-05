import { NavDropdownButton } from "../../NavDropdownButton/NavDropdownButton";
import { MenuIcon } from "../../../../../components/ProductDetailsPage/Icons/Menu";

import styles from "./CategoryMenuButton.module.css";

export const CategoryMenuButton = () => {
  return (
    <>
      <div className={styles.menuButtonContainer}>
        <MenuIcon />
        <NavDropdownButton label="All Categories" />
        <div className={styles.dropdown}>Hola</div>
      </div>
    </>
  );
};
