import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

import hamburguerMenu from "../../assets/images/LandingPage/hamburguerMenu.png";
import { navLinks } from "../../data/LandingPage/navlinksData";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <img
        src={hamburguerMenu}
        className={styles.hamburguerMenu}
        alt="hamburguer menu icon"
      />
      <nav className={styles.navLinks}>
        {navLinks.map((link) => (
          <a key={link} href={`/${link}`} className={styles.navLink}>
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};
