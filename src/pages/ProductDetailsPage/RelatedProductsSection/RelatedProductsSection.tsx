import { ProductCard } from "./ProductCard/ProductCard";
import { IndicatorList } from "./IndicatorsList/IndicatorList";

import styles from "./RelatedProductsSection.module.css";

import { relatedProductsData } from "../../../data/ProductDetailsPage/relatedProductsData";

export const RelatedProductsSection = () => {
  return (
    <section>
      <div className="products-container">
        <h2 className={styles.heading}>Related Products</h2>
        <div className={styles.columnContent}>
          {relatedProductsData.map((item) => {
            const { buttonText, iconColor, id, img, imgSpecs } = item;
            return (
              <ProductCard
                key={id}
                buttonText={buttonText}
                iconColor={iconColor}
                img={img}
                imgSpecs={imgSpecs}
                id={id}
              />
            );
          })}
        </div>
        <div className={styles.indicatorsContainer}>
          <IndicatorList />
        </div>
      </div>
    </section>
  );
};
