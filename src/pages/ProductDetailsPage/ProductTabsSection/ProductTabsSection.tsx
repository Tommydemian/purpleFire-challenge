import { useState } from "react";
import { productTabsContent } from "../../../data/ProductDetailsPage/producTabsData";
import styles from "./ProductTabsSection.module.css";

type TabName = "description" | "specifications" | "reviews";

export const ProductTabsSection = () => {
  const [activeTab, setActiveTab] = useState<TabName>("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return <p>{productTabsContent[0].description}</p>;
      case "specifications":
        return <p>{productTabsContent[0].specifications}</p>;
      case "reviews":
        return <p>{productTabsContent[0].reviews}</p>;
      default:
        return <p>{productTabsContent[0].description}</p>;
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <div className="products-container">
        <div className={styles.tabHeaders}>
          <button
            className={activeTab === "description" ? styles.activeTab : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={activeTab === "specifications" ? styles.activeTab : ""}
            onClick={() => setActiveTab("specifications")}
          >
            Specification
          </button>
          <button
            className={activeTab === "reviews" ? styles.activeTab : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className={styles.tabContent}>{renderContent()}</div>
      </div>
    </section>
  );
};
