import { CategoryMenuButton } from "./CategoryMenuButon/CategoryMenuButton";
import { NavLinks } from "./NavLinks/NavLinks";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import styles from "./GlobalToolBox.module.css";

export const GlobalToolBox = () => {
  return (
    <div className={styles.globalToolBarContainer}>
      <div className="products-container">
        <div className={styles.contentColumns}>
          <CategoryMenuButton />

          <NavLinks />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
