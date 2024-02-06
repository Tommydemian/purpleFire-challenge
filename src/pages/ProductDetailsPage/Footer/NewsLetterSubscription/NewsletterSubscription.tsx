import { useState } from "react";
import styles from "./NewsletterSubscription.module.css";
import { ProductMainButton } from "../../../../components/ProductDetailsPage/ProductMainButton/ProductMainButton";
import { isValidEmail } from "../../../../utils/validateEmail";

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(true);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidEmail(email)) {
      setIsSubscribed(true);
      setIsButtonActive(false);
    } else {
      alert("Please enter a valid email address.");
    }
  };

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
          <form className={styles.form} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <ProductMainButton
              style={{
                padding: "0.3em 1em",
                fontWeight: "500",
                fontSize: "0.75rem",
                lineHeight: "0.9075rem",
              }}
              type="submit"
              isSubscribed={isSubscribed}
            >
              {isSubscribed ? "SUBSCRIBED!" : "SUBSCRIBE"}
            </ProductMainButton>
          </form>
          <button
            style={{ display: "contents" }}
            onClick={() => setIsSubscribed(false)}
          >
            <p className={styles.unsuscribe}>unsuscribe</p>
          </button>
        </div>
      </div>
    </section>
  );
};
