import styles from "./HeroSection.module.css";
import { Header } from "../../../components/Header/Header";
import { HeroContent } from "./HeroContent/HeroContent";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageBg} />
      <Header />
      <div className={styles.heroContent}>
        <HeroContent />
      </div>
    </section>
  );
};
