import React from "react";
import styles from "./Footer.module.css";
import { NewsletterSubscription } from "./NewsLetterSubscription/NewsletterSubscription";

// const FooterLinks = () => {
//   return (
//     <nav className={styles.footerLinks}>
//       <ul>
//         <li>About Us</li>
//         <li>Information</li>
//         <li>Account</li>
//         <li>Store</li>
//         <li>Contact Us</li>
//       </ul>
//     </nav>
//   );
// };

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NewsletterSubscription />
      {/* <FooterLinks /> */}
      <p>Copyright 2023 All Right Reserved</p>
    </footer>
  );
};
