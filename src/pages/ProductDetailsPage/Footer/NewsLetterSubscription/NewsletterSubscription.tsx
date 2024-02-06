import styles from "./NewsletterSubscription.module.css";

export const NewsletterSubscription = () => {
  return (
    <section className={styles.newsletterSection}>
      <h2>Join our newsletter and get offers</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </section>
  );
};
