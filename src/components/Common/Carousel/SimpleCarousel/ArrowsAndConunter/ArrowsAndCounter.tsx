import { useCarousel } from "../../../../../contexts/CarouselContext";

import { LeftCircledArrowIcon } from "../../../../ProductDetailsPage/Icons/LeftCircledArrow";
import { RightCircledArrowIcon } from "../../../../ProductDetailsPage/Icons/RightCircledArrow";

import styles from "./ArrowsAndCounter.module.css";

export const ArrowsAndCounter = () => {
  const { handlePrevClick, handleNextClick, activeIndex, totalSlides } =
    useCarousel();

  return (
    <div className={styles.contentContainer}>
      <div className={styles.arrowWrapper}>
        <button style={{ display: "contents" }} onClick={handlePrevClick}>
          <LeftCircledArrowIcon />
        </button>
        <button style={{ display: "contents" }} onClick={handleNextClick}>
          <RightCircledArrowIcon />
        </button>
      </div>
      <div>
        <p className={styles.counterText}>{`0${
          activeIndex + 1
        } / 0${totalSlides}`}</p>
      </div>
    </div>
  );
};
