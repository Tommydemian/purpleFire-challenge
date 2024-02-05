import { PageHeader } from "./PageHeader/PageHeader";
import tvImage from "../../../assets/images/ProductDetailsPage/tv.png";
import { ProductImageCarousel } from "./ProductImageCarousel/ProductImageCarousel";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { ProductRating } from "./ProductRating/ProductRating";
import { CustomIcon } from "../../../components/Common/CustomIcon/CustomIcon";

import styles from "./ProductDetailsSection.module.css";
import { featuresData } from "../../../data/ProductDetailsPage/productFeatureListData";

export const ProductDetailsSection = () => {
  return (
    <main>
      <PageHeader />
      <div className="products-container">
        <img src={tvImage} className={styles.centralImage} alt="LG OLED TV" />
        <p className={styles.imageDesc}>
          *LG C2 42 (106cm) 4K Smart OLED evo TV
        </p>
        <ProductImageCarousel />
        <ProductDetails />
        <h2 className={styles.productTitle}>
          LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
        </h2>
        <ProductRating rating={4} />
        <ul className={styles.featureList} role="list">
          {featuresData.map((feature, index) => (
            <li className={styles.feature} key={index}>
              • {feature}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
