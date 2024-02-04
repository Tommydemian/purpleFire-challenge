import React from "react";
import { InspirationsTextBlock } from "./InspirationsTextBlock/InspirationsTextBlock";
// import { Carousel } from "../../../components/Common/Carousel/Carousel";
import styles from "./InspirationsSection.module.css";

export const InspirationsSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="landing-container">
        {/* <Carousel /> */}
        <div className={styles.contentContainer}>
          <InspirationsTextBlock />
        </div>
      </div>
    </section>
  );
};
