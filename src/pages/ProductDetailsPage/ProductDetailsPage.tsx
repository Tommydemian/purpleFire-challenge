import { MultiLayerHeader } from "./MultiLayerHeader/MultiLayerHeader";
import { ProductDetailsSection } from "./ProductDetailsSection/ProductDetailsSection";

import styles from "./ProductDetailsPage.module.css";

export const ProductDetailsPage = () => {
  return (
    <div className={styles.test}>
      <MultiLayerHeader />
      <ProductDetailsSection />
    </div>
  );
};
