import { Header } from "../../components/Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { NewsletterSignup } from "../../components/LandingPage/NewsletterSignup/NewsletterSignup";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <section className={styles.bgColor}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <section className={styles.secondayBgColor}>
        <div>
          <NewsletterSignup />
        </div>
      </section>
    </section>
  );
};
