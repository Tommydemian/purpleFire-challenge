import { useCarousel } from "../../../../contexts/CarouselContext";

import styles from "./SimpleCarousle.module.css";

import { desktopCarouselItems } from "../../../../data/LandingPage/carouselItemsData";

export const SimpleCarousel = () => {
  const { activeIndex } = useCarousel();

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.carousel}>
        {/* <button onClick={handlePrevClick} style={{ display: "contents" }}>
          <LeftCircledArrowIcon className={styles.arrowLeft} />
        </button> */}
        {desktopCarouselItems.map((slide, index) => (
          <img
            src={slide.item}
            alt={slide.item}
            key={slide.id}
            className={`${
              activeIndex === index ? styles.slide : styles.slideHidden
            } ${slide.id === 1 || slide.id === 6 ? styles.specialSlide : ""}`}
          />
        ))}

        {/* <button onClick={handleNextClick} style={{ display: "contents" }}>
          <RightCircledArrowIcon className={styles.arrowRight} />
        </button> */}
      </div>
    </section>
  );
};
