import { useMobileContext } from "../../../contexts/MobileContext";

import { InspirationsTextBlock } from "./InspirationsTextBlock/InspirationsTextBlock";
import { ArrowsAndCounter } from "../../../components/Common/Carousel/SimpleCarousel/ArrowsAndConunter/ArrowsAndCounter";

import styles from "./InspirationsSection.module.css";

export const InspirationsSection = () => {
  const { isMobile } = useMobileContext();

  return (
    <section className={styles.sectionContainer}>
      <div className="landing-container">
        <div className={styles.contentContainer}>
          <InspirationsTextBlock />
          {!isMobile && <ArrowsAndCounter />}
        </div>
      </div>
    </section>
  );
};
