import { carouselImages } from "../../../../data/ProductDetailsPage/carouselImagesData";
import { RightArrowIcon } from "../../../../components/ProductDetailsPage/Icons/RightArrow";
import { LeftArrowIcon } from "../../../../components/ProductDetailsPage/Icons/LeftArrow";

import styles from "./ProductImageCarousel.module.css";

export const ProductImageCarousel = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="products-container">
        <ul className={styles.slider}>
          <li>
            <div>
              <LeftArrowIcon className={styles.leftArrow} />
            </div>
          </li>
          {carouselImages.map((image) => (
            <li key={image.id}>
              <img src={image.name} alt={`slide ${image.id}`} />
            </li>
          ))}
          <li>
            <div className={styles.rightArrow}>
              <RightArrowIcon />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
