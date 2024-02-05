import { useCarousel } from "../../../../../contexts/CarouselContext";

import { LeftCircledArrowIcon } from "../../../../ProductDetailsPage/Icons/LeftCircledArrow";
import { RightCircledArrowIcon } from "../../../../ProductDetailsPage/Icons/RightCircledArrow";

import styles from "./CarouselArrows.module.css";

export const ArrowsAndCounter = () => {
  const { handlePrevClick, handleNextClick } = useCarousel();

  return (
    <div>
      <button style={{ display: "contents" }} onClick={handlePrevClick}>
        <LeftCircledArrowIcon />
      </button>
      <button style={{ display: "contents" }} onClick={handleNextClick}>
        <RightCircledArrowIcon />
      </button>
    </div>
  );
};
