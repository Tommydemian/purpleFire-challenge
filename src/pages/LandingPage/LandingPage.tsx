import { Header } from "../../components/Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { TrendsSection } from "./TrendsSection/TrendsSection";
import { InspirationsSection } from "./InspirationSection/InspirationsSection";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={styles.bgColor}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrendsSection />
      <InspirationsSection />
    </div>
  );
};
