import styles from "./Logo.module.css";

type Props = {
  section?: "header" | "footer";
};

export const Logo: React.FC<Props> = ({ section }) => {
  return (
    <a
      href="#"
      className={
        section === "footer"
          ? `${styles.logo} ${styles.footerLogo}`
          : styles.logo
      }
    >
      antic
    </a>
  );
};
