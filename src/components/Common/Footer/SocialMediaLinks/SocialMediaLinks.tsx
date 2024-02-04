import { FacebookIcon } from "../../../SocialMediaIcons/Facebook";
import { TwitterIcon } from "../../../SocialMediaIcons/Twitter";
import { LinkedinIcon } from "../../../SocialMediaIcons/Linkedin";
import { InstagramIcon } from "../../../SocialMediaIcons/Instagram";

import styles from "./SocialMediaLinks.module.css";

export const SocialMediaLinks = () => {
  return (
    <nav
      aria-label="Social media links"
      className={styles.socialMediaLinksContainer}
    >
      <ul className={styles.socialMediaLinks}>
        <li>
          <a href="#" aria-label="Facebook">
            <FacebookIcon className={styles.link} />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Twitter">
            <TwitterIcon className={styles.link} />
          </a>
        </li>
        <li>
          <a href="#" aria-label="LinkedIn">
            <LinkedinIcon className={styles.link} />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Instagram">
            <InstagramIcon className={styles.link} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
