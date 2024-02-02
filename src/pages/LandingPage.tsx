import { HeroSection } from "../components/HeroSection/HeroSection";
import styles from "./LandingPage.module.css";
export const LandingPage = () => {
  return (
    <section className={styles.bgColor}>
      <HeroSection />
    </section>
  );
};
