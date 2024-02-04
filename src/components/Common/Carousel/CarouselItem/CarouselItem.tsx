import React from "react";
import styles from "./CarouselItem.module.css";

type Props = {
  item: string;
  id: number;
};

export const CarouselItem: React.FC<Props> = ({ item, id }) => {
  return (
    <div className={styles.carouselItem}>
      <img
        src={item}
        alt={item}
        className={
          id === 1 || id === 6
            ? styles.specialCarouselImage
            : styles.carouselImage
        }
      />
    </div>
  );
};
