import React from "react";
import { Logo } from "../../Logo/Logo";
import { LinkList } from "./LinkListt/LinkList";
import { SustainabilityMessage } from "./SustainabilityMessage/SustainabilityMessage";
import { SocialMediaLinks } from "./SocialMediaLinks/SocialMediaLinks";
import { LegalLinks } from "./LegalLinks/LegalLinks";
import { CopyRight } from "./CopyRigth/CopyRight";

import styles from "./Footer.module.css";
import { linkListData } from "../../../data/LandingPage/footerData";

export const Footer = () => {
  return (
    <footer>
      <div className="landing-container padding-block-400">
        <Logo section="footer" />
        <div id="grid" className={styles.linkColumns}>
          {linkListData.map((item) => {
            return (
              <LinkList title={item.title} links={item.links} key={item.id} />
            );
          })}
        </div>
        <SustainabilityMessage />
        <SocialMediaLinks />
        <LegalLinks />
        <CopyRight />
      </div>
    </footer>
  );
};
