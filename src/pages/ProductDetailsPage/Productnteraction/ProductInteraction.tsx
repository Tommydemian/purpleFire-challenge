import styles from "./ProductInteraction.module.css";
import { ProductMainButton } from "../../../components/ProductDetailsPage/ProductMainButton/ProductMainButton";

export const ProductInteraction = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="products-container">
        <div className={styles.contentContainer}>
          <div className={`${styles.textContainer} flow flow-size-50`}>
            <p className={styles.title}>USD (incl. of all taxes):</p>
            <p className={styles.amount}>$600.72</p>
            <p
              style={{ display: "inline" }}
              className={styles.amountStrikedThrough}
            >
              $800.00
            </p>
          </div>
          <div className={styles.interactionContainer}>
            <div className={styles.quantitySelector}>
              <button className={styles.selectorBtn}>-</button>
              <input value={1} type="number" />
              <button className={styles.selectorBtn}>+</button>
            </div>

            <ProductMainButton>Buy Now</ProductMainButton>
            <ProductMainButton secondary>Add to Cart</ProductMainButton>
          </div>
        </div>
      </div>
    </section>
  );
};
