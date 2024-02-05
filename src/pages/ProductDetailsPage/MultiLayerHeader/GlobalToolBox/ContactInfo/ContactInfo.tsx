import styles from "./ContactInfo.module.css";
import headsetImg from "../../../../../assets/images/ProductDetailsPage/headset.png";

export const ContactInfo = () => {
  return (
    <section className={styles.sectionContainer} aria-labelledby="contact-info">
      <img src={headsetImg} alt="head set icon" />
      <div>
        <h3 className={styles.title} id="contact-info">
          Contact Us 24/7
        </h3>
        <address>
          <strong className={styles.phoneNumber}>+12012987481</strong>
        </address>
      </div>
    </section>
  );
};
