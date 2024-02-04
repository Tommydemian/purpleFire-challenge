import { TrendsContent } from "./TrendsContent/TrendsContent";
import { NewsletterSignup } from "../../../components/LandingPage/NewsletterSignup/NewsletterSignup";
import styles from "./TrendsSection.module.css";

export const TrendsSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="landing-container padding-block-section">
        <div className={styles.contentContainer}>
          <TrendsContent />
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};
