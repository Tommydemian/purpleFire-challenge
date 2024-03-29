import { useMobileContext } from "../../../contexts/MobileContext";

import { Logo } from "../../../pages/LandingPage/LandingLogo/LandingLogo";
import { LinkList } from "./LinkListt/LinkList";
import { SustainabilityMessage } from "./SustainabilityMessage/SustainabilityMessage";
import { SocialMediaLinks } from "./SocialMediaLinks/SocialMediaLinks";
import { LegalLinks } from "./LegalLinks/LegalLinks";
import { CopyRight } from "./CopyRigth/CopyRight";

import styles from "./Footer.module.css";
import { linkListData } from "../../../data/LandingPage/footerData";

export const Footer = () => {
  const { isMobile } = useMobileContext();
  return (
    <footer>
      <div className={`landing-container ${styles.footerContentContainer} `}>
        <div className={styles.topContainer}>
          <div className={styles.logoArea}>
            <Logo section="footer" />
          </div>
          <div className={styles.linkColumns}>
            {linkListData.map((item) => {
              return (
                <LinkList title={item.title} links={item.links} key={item.id} />
              );
            })}
          </div>
          <div className={styles.sustainabilityArea}>
            <SustainabilityMessage />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          {isMobile ? (
            <>
              <SocialMediaLinks />
              <LegalLinks />
              <CopyRight />
            </>
          ) : (
            <>
              <CopyRight />
              <SocialMediaLinks />
              <LegalLinks />
            </>
          )}
        </div>
      </div>
    </footer>
  );
};
