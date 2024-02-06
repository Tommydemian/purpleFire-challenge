import { NewsletterSubscription } from "./NewsLetterSubscription/NewsletterSubscription";
import styles from "./Footer.module.css";
import { footerLinks } from "../../../data/ProductDetailsPage/footerLinksData";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NewsletterSubscription />
      <section className={styles.sectionContainer}>
        <div className="products-container">
          <nav className={styles.footerNav}>
            <ul className={styles.navList} role="list">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a className={styles.link} href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <p className={styles.copy}>Copyright 2023 All Right Reserved</p>
    </footer>
  );
};
