import { productDetailsData } from "../../../../data/ProductDetailsPage/productDetailsData";
import styles from "./ProductDetails.module.css";

const { availability, brand, model } = productDetailsData();

export const ProductDetails = () => {
  return (
    <div className={styles.detailsContainer}>
      <div className={`products-container ${styles.contentWrapper}`}>
        <div className={styles.lineWrapper}>
          <p className={styles.detailTitle}>Brand: </p>
          <p className={styles.detailDescription}>{brand}</p>
        </div>
        <div className={styles.lineWrapper}>
          <p className={styles.detailTitle}>Model: </p>
          <p className={styles.detailDescription}>{model}</p>
        </div>
        <div className={styles.lineWrapper}>
          <p className={styles.detailTitle}>Availability:</p>
          <p className={styles.detailDescription}>{availability}</p>
        </div>
      </div>
    </div>
  );
};
