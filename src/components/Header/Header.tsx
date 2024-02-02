import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import hamburguerMenu from "../../assets/images/LandingPage/hamburguerMenu.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <img src={hamburguerMenu} alt="hamburguer menu icon" />
    </div>
  );
};
