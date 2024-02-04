import { NavDropdownButton } from "../NavDropdownButton/NavDropdownButton";

import styles from "./TopBar.module.css";

export const TopBar = () => {
  return (
    <div className={styles.topBarContainer}>
      <div className={`products-container ${styles.topBar}`}>
        <span className={styles.topBarText}>
          Welcome to Needus & Get the best product
        </span>
        <div>
          <ul role="list" className={styles.topBarList}>
            <li className={styles.topBarListItem}>
              <NavDropdownButton className={styles.topBarButton} label="ENG" />
            </li>
            <span style={{ color: "#fff", paddingInline: "1em" }}>|</span>
            <li className={styles.topBarListItem}>
              <NavDropdownButton className={styles.topBarButton} label="USD" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
