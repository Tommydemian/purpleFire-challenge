import React from "react";
import { ProductMainButton } from "../../../../components/ProductDetailsPage/ProductMainButton/ProductMainButton";
import { ButtonCartIcon } from "../../../../components/ProductDetailsPage/Icons/ButtonCart";
import { CustomIcon } from "../../../../components/Common/CustomIcon/CustomIcon";

import styles from "./ProductCard.module.css";

import type { RelatedProductData } from "../../../../data/ProductDetailsPage/relatedProductsData";

type Props = RelatedProductData;

export const ProductCard: React.FC<Props> = ({
  buttonText,
  iconColor,
  img,
  id,
  imgSpecs,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.interactionContainer}>
          <button
            className={id === 1 ? styles.greenButton : styles.orangeButton}
          >
            {buttonText}
          </button>
          <div className={styles.iconWrapper}>
            <CustomIcon
              name="ph:heart-fill"
              style={{ color: iconColor, height: "10px", width: "10px" }}
            />
          </div>
        </div>
        <img src={img} alt={img} />
        <div className={styles.buttonContainer}>
          <ProductMainButton addToCart>
            <ButtonCartIcon />
            Add to Cart
          </ProductMainButton>
        </div>
      </div>
      <p className={styles.title}>{imgSpecs.title}</p>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{imgSpecs.price}</p>
        {imgSpecs.prevPrice && (
          <p className={styles.prevPrice}>{imgSpecs.prevPrice}</p>
        )}
      </div>
    </div>
  );
};
