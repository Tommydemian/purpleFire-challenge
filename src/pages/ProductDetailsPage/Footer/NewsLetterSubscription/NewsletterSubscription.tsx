import styles from "./NewsletterSubscription.module.css";

export const NewsletterSubscription = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className="products-container">
        <div className={styles.contentContainer}>
          <div>
            <h2 className={styles.heading}>
              Join our newsletter and get offers
            </h2>
            <p className={styles.subheading}>Sign up our newsletter</p>
          </div>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  );
};
