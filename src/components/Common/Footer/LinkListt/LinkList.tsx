// Components/Common/Footer/LinkList/LinkList.tsx
import React from "react";
import styles from "./LinkList.module.css";

type Props = {
  title: string;
  links: string[];
};

export const LinkList: React.FC<Props> = ({ title, links }) => (
  <div className={styles.linkList}>
    <h3 className={styles.title}>{title}</h3>
    <ul className="flow flow-size-100" role="list">
      {links.map((link) => (
        <li key={link}>
          <a className={styles.link} href={link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
