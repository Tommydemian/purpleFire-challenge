import React from "react";
import styles from "./PrimaryNavigation.module.css";
import { navLinks } from "../../data/LandingPage/navlinksData";

export const PrimaryNavigation = () => {
  return (
    <nav className={styles.primaryNavigation}>
      <ul aria-label="Primary" role="list" className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`/${link}`} className={styles.navLink}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
