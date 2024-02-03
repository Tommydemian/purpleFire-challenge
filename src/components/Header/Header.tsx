import { Logo } from "../Logo/Logo";
import { PrimaryNavigation } from "../PrimaryNavigation/PrimaryNavigation";
import styles from "./Header.module.css";

import hamburguerMenu from "../../assets/images/LandingPage/hamburguerMenu.png";
import contactImage from "../../assets/images/LandingPage/contact.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="landing-container">
        <div className={styles.navWrapper}>
          {/* <div className={styles.navLogoWrapper}> */}
          <Logo />

          <img
            src={hamburguerMenu}
            className={styles.hamburguerMenu}
            alt="hamburguer menu icon"
          />

          <PrimaryNavigation />

          <img
            className={styles.contactIcon}
            src={contactImage}
            style={{ zIndex: 100 }}
            alt="get in contact icon"
          />
        </div>
      </div>
    </header>
  );
};
