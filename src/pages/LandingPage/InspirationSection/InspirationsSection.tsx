import React from "react";
import { InspirationsTextBlock } from "./InspirationsTextBlock/InspirationsTextBlock";
import styles from "./InspirationsSection.module.css";

export const InspirationsSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="landing-container">
        <div className={styles.contentContainer}>
          <InspirationsTextBlock />
        </div>
      </div>
    </section>
  );
};
