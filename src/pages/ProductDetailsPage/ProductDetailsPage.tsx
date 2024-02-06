import { MultiLayerHeader } from "./MultiLayerHeader/MultiLayerHeader";
import { ProductDetailsSection } from "./ProductDetailsSection/ProductDetailsSection";
import { ProductInteraction } from "./Productnteraction/ProductInteraction";
import { ProductTabsSection } from "./ProductTabsSection/ProductTabsSection";
import { RelatedProductsSection } from "./RelatedProductsSection/RelatedProductsSection";
import { Footer } from "./Footer/Footer";

import styles from "./ProductDetailsPage.module.css";

export const ProductDetailsPage = () => {
  return (
    <div className={styles.test}>
      <MultiLayerHeader />
      <ProductDetailsSection />
      <ProductInteraction />
      <ProductTabsSection />
      <RelatedProductsSection />
      <Footer />
    </div>
  );
};
