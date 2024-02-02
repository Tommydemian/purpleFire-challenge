import React from "react";
import styles from "./ServiceCard.module.css";

type Props = {
  title: string;
  description: string;
};

export const ServiceCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flow flow-size-50">
      <h3 className={styles.cardTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
