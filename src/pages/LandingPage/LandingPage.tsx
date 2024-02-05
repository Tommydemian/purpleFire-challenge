import { useMobileContext } from "../../contexts/MobileContext";
import { CarouselProvider } from "../../contexts/CarouselContext";

import { Header } from "../../components/Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { TrendsSection } from "./TrendsSection/TrendsSection";
import { InspirationsSection } from "./InspirationSection/InspirationsSection";
import { SimpleCarousel } from "../../components/Common/Carousel/SimpleCarousel/SimpleCarousel";
import { PhoneCarousel } from "../../components/LandingPage/PhoneCarousel/PhoneCarousel";
import { Footer } from "../../components/Common/Footer/Footer";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  const { isMobile } = useMobileContext();

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
          <CarouselProvider>
            <SimpleCarousel />
            <InspirationsSection />
          </CarouselProvider>
        </>
      )}
      <Footer />
    </div>
  );
};
