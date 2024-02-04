import React from "react";
import { PhoneCarouselItem } from "./PhoneCarouselItem/PhoneCarouselItem";
import styles from "./PhoneCarousel.module.css";
import {
  type CarouselItem,
  phoneCarouselItems,
} from "../../../data/LandingPage/carouselItemsData";

export const PhoneCarousel = () => {
  return (
    <section className={styles.scroller}>
      <div className={styles.scrollerInner}>
        {phoneCarouselItems.map((slide: CarouselItem) => (
          <PhoneCarouselItem key={slide.id} slide={slide} />
        ))}
      </div>
    </section>
  );
};
