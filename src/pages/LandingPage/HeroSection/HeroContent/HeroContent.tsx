import styles from "./HeroContent.module.css";

import scrollDownImg from "../../../../assets/images/LandingPage/scrollDown.png";

export const HeroContent = () => {
  return (
    <div className={styles.heroContentContainer}>
      <h4 className={styles.heroSubtitle}>HOME DESIGN</h4>
      <h1 className={styles.heroTitle}>Elegance for Interiors & Exteriors</h1>
      <p className={styles.heroDescription}>
        We provide everyone with modern, trendy, quality furniture
      </p>
      <img
        className={styles.scrollDownIcon}
        src={scrollDownImg}
        alt="scroll-down icon"
      />
    </div>
  );
};
