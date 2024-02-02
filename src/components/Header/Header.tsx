import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import hamburguerMenu from "../../assets/images/LandingPage/hamburguerMenu.png";

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
        <a href="/products" className={styles.navLink}>
          Products
        </a>
        <a href="/rooms" className={styles.navLink}>
          Rooms
        </a>
        <a href="/services" className={styles.navLink}>
          Services
        </a>
        <a href="/inspirations" className={styles.navLink}>
          Inspirations
        </a>
      </nav>
    </div>
  );
};
