import React from "react";
import { MainButton } from "../../MainButton/MainButton";
import styles from "./NewsletterSignup.module.css";

export const NewsletterSignup = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="email@address.com"
        type="text"
      />
      <button className={styles.button}>Subscribe</button>
    </div>
  );
};
