import React from "react";
import styles from "./InspirationsTextBlock.module.css";
import { inspirationsData } from "../../../../data/LandingPage/inspirationsData";

export const InspirationsTextBlock = () => {
  return (
    <div className={styles.blockContainer}>
      <h3 className={styles.heading}>{inspirationsData.title}</h3>
      <p className={styles.description}>{inspirationsData.description}</p>
    </div>
  );
};
