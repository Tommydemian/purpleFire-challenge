import styles from "./HeroSection.module.css";
import { Header } from "../Header/Header";
import { HeroContent } from "./HeroContent/HeroContent";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.heroContent}>
        <HeroContent />
      </div>
    </section>
  );
};
