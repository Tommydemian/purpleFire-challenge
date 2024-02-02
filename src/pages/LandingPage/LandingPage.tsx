import { HeroSection } from "./HeroSection/HeroSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <section className={styles.bgColor}>
      <HeroSection />
      <ServicesSection />
    </section>
  );
};
