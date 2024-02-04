import { ProductDetailsLogo } from "../../../../components/ProductDetailsPage/ProductsDetailsLogo/ProductDetailsLogo";
import { SearchBar } from "./SearchBar/SearchBar";
import { NavDropdownButton } from "../NavDropdownButton/NavDropdownButton";
import { HeartIcon } from "../../../../components/ProductDetailsPage/Icons/Heart";
import { CartIcon } from "../../../../components/ProductDetailsPage/Icons/Cart";

import styles from "./GlobalNav.module.css";

export const GlobalNav = () => {
  return (
    <nav className={styles.globalNavContainer}>
      <div className="products-container">
        <div className={styles.contentContainer}>
          <ProductDetailsLogo />
          <div className={styles.searchBox}>
            <SearchBar />
            <NavDropdownButton
              className={styles.allCategoriesButton}
              label="All Categories"
              iconColor="#191919"
            />
            <div className="user-actions">
              <a className={styles.authLink} href="#" aria-label="Login">
                Login
              </a>
              <span className={styles.authLinksSeparator}>|</span>
              <a className={styles.authLink} href="#" aria-label="Sign up">
                Signup
              </a>
            </div>
          </div>
          <div className={styles.userInteractionsContainer}>
            <HeartIcon />
            <div className={styles.cartIconContainer}>
              <CartIcon />
              <span className={styles.cartBadge}>6</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
