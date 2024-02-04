import React from "react";
import type { CarouselItem } from "../../../../data/LandingPage/carouselItemsData";
import styles from "../PhoneCarousel.module.css";

type Props = {
  slide: CarouselItem;
};

export const PhoneCarouselItem: React.FC<Props> = ({ slide }) => {
  return (
    <figure key={slide.id} className={styles.carouselItem}>
      <img
        className={
          slide.id === 1 || slide.id === 6
            ? styles.specialCarouselImage
            : styles.carouselImage
        }
        src={slide.item}
        alt={`Slide ${slide.id}`}
      />
    </figure>
  );
};
