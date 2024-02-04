import React from "react";
import styles from "./LegalLinks.module.css";

export const LegalLinks = () => {
  return (
    <section className={styles.legalLinksSection}>
      <a href="#" className={styles.legalLink}>
        Privacy policy
      </a>
      <a href="#" className={styles.legalLink}>
        Terms of service
      </a>
      <a href="#" className={styles.legalLink}>
        Language
      </a>
    </section>
  );
};
