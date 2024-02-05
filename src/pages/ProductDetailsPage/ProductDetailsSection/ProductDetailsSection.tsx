import { PageHeader } from "./PageHeader/PageHeader";
import tvImage from "../../../assets/images/ProductDetailsPage/tv.png";

export const ProductDetailsSection = () => {
  return (
    <main>
      <PageHeader />
      <img src={tvImage} alt="LG OLED TV" />

      <section>
        <div className="product-gallery">{/* Gallery component */}</div>
        <div className="product-info">{/* Info component */}</div>
        {/* Other product details */}
      </section>
    </main>
  );
};
