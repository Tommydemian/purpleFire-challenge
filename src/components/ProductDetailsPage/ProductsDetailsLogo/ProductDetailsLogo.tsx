import { useMobileContext } from "../../../contexts/MobileContext";
import { CustomIcon } from "../../Common/CustomIcon/CustomIcon";
import styles from "./ProductDetailsLogo.module.css";

export const ProductDetailsLogo = () => {
  const { isMobile } = useMobileContext();

  const iconheight = isMobile ? ".3rem" : ".6rem";
  return (
    <div className={styles.logoContainer}>
      <a href="#" className={styles.logo}>
        Needus
      </a>
      <CustomIcon
        name="material-symbols:circle"
        style={{ color: "#E73C17", height: iconheight }}
      />
    </div>
  );
};
