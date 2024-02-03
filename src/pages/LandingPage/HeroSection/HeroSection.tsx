import styles from "./HeroSection.module.css";
import { Header } from "../../../components/Header/Header";
import { HeroContent } from "./HeroContent/HeroContent";

export const HeroSection = () => {
  // return (
  //   <main className={styles.hero}>
  //     <div className={styles.imageBg} />
  //     <Header />
  //     <div className={`${styles.heroContent} landing-container`}>
  //       <HeroContent />
  //     </div>
  //   </main>
  // );

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <HeroContent />
        </div>
        <div className={styles.imageBg} />
      </section>
    </main>
  );
};
