import { Header } from "../../components/Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { TrendsSection } from "./TrendsSection/TrendsSection";
import { InspirationsSection } from "./InspirationSection/InspirationsSection";
// import { Carousel } from "../../components/Common/Carousel/Carousel";
import { PhoneCarousel } from "../../components/PhoneCarousel/PhoneCarousel";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={styles.bgColor}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrendsSection />
      <InspirationsSection />
      <PhoneCarousel />
    </div>
  );
};
