import { useIsMobile } from "../../hooks/useIsMobile";
import { Header } from "../../components/Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { TrendsSection } from "./TrendsSection/TrendsSection";
import { InspirationsSection } from "./InspirationSection/InspirationsSection";
import { Carousel } from "../../components/Common/Carousel/Carousel";
import { PhoneCarousel } from "../../components/LandingPage/PhoneCarousel/PhoneCarousel";
import { Footer } from "../../components/Common/Footer/Footer";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  const { isMobile } = useIsMobile();

  return (
    <div className={styles.bgColor}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrendsSection />
      {isMobile ? (
        <>
          <InspirationsSection />
          <PhoneCarousel />
        </>
      ) : (
        <>
          <Carousel />
          <InspirationsSection />
        </>
      )}
      <Footer />
    </div>
  );
};
