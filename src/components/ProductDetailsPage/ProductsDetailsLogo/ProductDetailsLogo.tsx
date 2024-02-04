import { CustomIcon } from "../../Common/CustomIcon/CustomIcon";
import styles from "./ProductDetailsLogo.module.css";

export const ProductDetailsLogo = () => {
  return (
    <div className={styles.logoContainer}>
      <a href="#" className={styles.logo}>
        Needus
      </a>
      <CustomIcon
        name="material-symbols:circle"
        style={{ color: "#E73C17", height: ".6rem" }}
      />
    </div>
  );
};
