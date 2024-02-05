import { productNavLinks } from "../../../../../data/ProductDetailsPage/productNavLinksData";
import { NavDropdownButton } from "../../NavDropdownButton/NavDropdownButton";
import styles from "./NavLinks.module.css";

export const NavLinks = () => {
  return (
    <nav className={styles.categoryLinks}>
      <ul className={styles.linkList} role="list">
        {productNavLinks.map((link) => (
          <li key={link.id}>
            <a href="#">
              <NavDropdownButton
                className={styles.link}
                label={link.name}
                iconColor="#fff"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
