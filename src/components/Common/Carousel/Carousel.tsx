import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import styles from "./Carousel.module.css";
import { desktopCarouselItems } from "../../../data/LandingPage/carouselItemsData";

export const Carousel = () => {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   const goToPrevious = () => {
  //     const isFirstItem = currentIndex === 0;
  //     const newIndex = isFirstItem ? images.length - 1 : currentIndex - 1;
  //     setCurrentIndex(newIndex);
  //   };

  //   const goToNext = () => {
  //     const isLastItem = currentIndex === images.length - 1;
  //     const newIndex = isLastItem ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   };

  return (
    // <div className="carousel">
    //   <button onClick={goToPrevious}>Previous</button>
    //   <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    //   <button onClick={goToNext}>Next</button>
    // </div>
    <div className={styles.itemScroller}>
      <div className={styles.itemGroup}>
        {desktopCarouselItems.map((item) => (
          <CarouselItem id={item.id} item={item.item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
