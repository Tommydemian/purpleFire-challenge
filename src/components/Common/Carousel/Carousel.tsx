import { useState } from "react";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import styles from "./Carousel.module.css";
import { desktopCarouselItems } from "../../../data/LandingPage/carouselItemsData";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? desktopCarouselItems.length - 1 : prevIndex - 1
    );
  };

  const goRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === desktopCarouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    // <div className="carousel">
    //   <button onClick={goToPrevious}>Previous</button>
    //   <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    //   <button onClick={goToNext}>Next</button>
    // </div>
    <div className={styles.itemScroller}>
      <button onClick={goRight} className={styles.rightArrow}>
        RIGHT??????
      </button>

      <div
        className={styles.itemGroup}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {desktopCarouselItems.map(
          (item, index) =>
            index === activeIndex && (
              <CarouselItem id={item.id} item={item.item} key={item.id} />
            )
        )}
        {desktopCarouselItems.map((item, index) => (
          <CarouselItem id={item.id} item={item.item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
