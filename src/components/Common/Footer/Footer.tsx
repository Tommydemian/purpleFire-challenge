import { useIsMobile } from "../../../hooks/useIsMobile";

import { Logo } from "../../Logo/Logo";
import { LinkList } from "./LinkListt/LinkList";
import { SustainabilityMessage } from "./SustainabilityMessage/SustainabilityMessage";
import { SocialMediaLinks } from "./SocialMediaLinks/SocialMediaLinks";
import { LegalLinks } from "./LegalLinks/LegalLinks";
import { CopyRight } from "./CopyRigth/CopyRight";

import styles from "./Footer.module.css";
import { linkListData } from "../../../data/LandingPage/footerData";

export const Footer = () => {
  const { isMobile } = useIsMobile();
  return (
    <footer>
      <div className={`landing-container ${styles.footerContentContainer} `}>
        <div className={styles.topContainer}>
          <Logo section="footer" />
          <div className={styles.linkColumns}>
            {linkListData.map((item) => {
              return (
                <LinkList title={item.title} links={item.links} key={item.id} />
              );
            })}
          </div>
          <SustainabilityMessage />
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
