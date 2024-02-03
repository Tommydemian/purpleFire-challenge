import React from "react";
import styles from "./TrendsContent.module.css";
import { MainButton } from "../../../../components/MainButton/MainButton";
import { CustomIcon } from "../../../../components/CustomIcon/CustomIcon";

export const TrendsContent = () => {
  return (
    <div className={`${styles.trendsContent} flow flow-size-200`}>
      <h2 className={styles.heading}>Be aware of the latest trends</h2>
      <p className={styles.description}>
        Stay informed of new trends, but also of our various offers.
      </p>
      <MainButton section="landing">
        Learn more
        <span>
          <CustomIcon name="ep:arrow-right-bold" style={{ color: "#A06056" }} />
        </span>
      </MainButton>
    </div>
  );
};
