import { useMobileContext } from "../../../../contexts/MobileContext";

import styles from "./HeroContent.module.css";

import scrollDownImg from "../../../../assets/images/LandingPage/scrollDown.png";
import brownScrollDownImg from "../../../../assets/images/LandingPage/scrollDownBrown.png";

export const HeroContent = () => {
  const { isMobile } = useMobileContext();

  const handleScroll = () => {
    const nextSection = document.getElementById("services-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.heroContentContainer}`}>
      <h4 className={styles.heroSubtitle}>HOME DESIGN</h4>
      <h1 className={styles.heroTitle}>Elegance for Interiors & Exteriors</h1>
      <p className={styles.heroDescription}>
        We provide everyone with modern, trendy, quality furniture
      </p>
      <button className={styles.scrollDownButton} onClick={handleScroll}>
        <img
          className={styles.scrollDownIcon}
          src={isMobile ? scrollDownImg : brownScrollDownImg}
          alt="scroll-down icon"
        />
      </button>
    </div>
  );
};
