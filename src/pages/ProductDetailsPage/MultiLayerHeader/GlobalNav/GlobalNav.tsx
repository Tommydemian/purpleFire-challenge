import { useMobileContext } from "../../../../contexts/MobileContext";

import { ProductDetailsLogo } from "../../../../components/ProductDetailsPage/ProductsDetailsLogo/ProductDetailsLogo";
import { SearchBar } from "./SearchBar/SearchBar";
import { NavDropdownButton } from "../NavDropdownButton/NavDropdownButton";
import { HeartIcon } from "../../../../components/ProductDetailsPage/Icons/Heart";
import { CartIcon } from "../../../../components/ProductDetailsPage/Icons/Cart";
import { SearchIcon } from "../../../../components/ProductDetailsPage/Icons/Search";
import { UserIcon } from "../../../../components/ProductDetailsPage/Icons/User";
import { MobileHeartIcon } from "../../../../components/ProductDetailsPage/Icons/MobileHeart";
import { MobileCartIcon } from "../../../../components/ProductDetailsPage/Icons/MobileCart";

import { HamburguerMenuIcon } from "../../../../components/ProductDetailsPage/Icons/HamburguerMenu";

import styles from "./GlobalNav.module.css";

export const GlobalNav = () => {
  const { isMobile } = useMobileContext();
  return (
    <nav className={styles.globalNavContainer}>
      <div className="products-container">
        <div className={styles.contentContainer}>
          <span className={styles.logoContainer}>
            <ProductDetailsLogo />
          </span>
          {isMobile ? (
            <div className={styles.menuWrapper}>
              <HamburguerMenuIcon />
            </div>
          ) : (
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
          )}

          <div className={styles.userInteractionsContainer}>
            {isMobile ? (
              <>
                <SearchIcon />
                <UserIcon />
                <MobileHeartIcon />
                <div className={styles.cartIconContainer}>
                  <MobileCartIcon />
                  <span className={styles.cartBadge}>6</span>
                </div>
              </>
            ) : (
              <>
                <HeartIcon />
                <div className={styles.cartIconContainer}>
                  <CartIcon />
                  <span className={styles.cartBadge}>6</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
