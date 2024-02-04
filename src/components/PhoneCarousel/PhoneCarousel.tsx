import React from "react";
import styles from "./PhoneCarousel.module.css";

import slide1 from "../../assets/images/LandingPage/carousel/carouselpic-1.jpeg";
import slide2 from "../../assets/images/LandingPage/carousel/carouselpic-2.png";
import slide3 from "../../assets/images/LandingPage/carousel/carouselpic-3.png";
import slide4 from "../../assets/images/LandingPage/carousel/carouselpic-4.png";
import slide5 from "../../assets/images/LandingPage/carousel/carouselpic-5.png";
import slide6 from "../../assets/images/LandingPage/carousel/carouselpic-6.png";

export const PhoneCarousel = () => {
  return (
    <div className={styles.scroller}>
      <div className={styles.scrollerInner}>
        <div className={styles.carouselItem}>
          <img
            className={styles.specialCarouselImage}
            src={slide1}
            alt={slide1}
          />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselImage} src={slide2} alt={slide2} />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselImage} src={slide3} alt={slide3} />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselImage} src={slide4} alt={slide4} />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselImage} src={slide5} alt={slide5} />
        </div>
        <div className={styles.carouselItem}>
          <img
            className={styles.specialCarouselImage}
            src={slide6}
            alt={slide6}
          />
        </div>
        <div className={styles.carouselItem}>
          <img
            className={styles.specialCarouselImage}
            src={slide1}
            alt={slide1}
          />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.carouselImage} src={slide2} alt={slide2} />
        </div>
      </div>
    </div>
  );
};
