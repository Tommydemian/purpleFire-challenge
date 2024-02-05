// import CategoryMenuButton from "./CategoryMenuButton";
// import NavLinks from "./NavLinks";
// import ContactButton from "./ContactButton";
import { NavDropdownButton } from "../NavDropdownButton/NavDropdownButton";
import styles from "./GlobalToolBox.module.css";

export const GlobalToolbar = () => {
  return (
    <div className={styles.globalToolBarContainer}>
      <div className="products-container">
        <div className={styles.contentConteiner}>
          <div>
            <NavDropdownButton label="All Categiries" />
          </div>
        </div>
      </div>
    </div>
  );
};
