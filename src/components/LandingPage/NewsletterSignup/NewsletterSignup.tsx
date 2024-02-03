import React from "react";
import styles from "./NewsletterSignup.module.css";

export const NewsletterSignup = () => {
  return (
    <form className={styles.container}>
      <input
        className={styles.input}
        placeholder="email@address.com"
        type="email"
      />
      <button className={styles.button} type="submit">
        Subscribe
      </button>
    </form>
  );
};
