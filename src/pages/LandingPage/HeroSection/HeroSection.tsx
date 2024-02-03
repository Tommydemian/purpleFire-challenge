import styles from "./HeroSection.module.css";
import { HeroContent } from "./HeroContent/HeroContent";

export const HeroSection = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <HeroContent />
        </div>
        <div className={styles.imageBg} />
      </section>
    </main>
  );
};
