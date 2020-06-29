import React from "react";
import Logo from "../../logo/Logo";
import AccountBtn from "../../buttons/accountBtn/AccountBtn";
import styles from "./navHeader.module.css";

import { ReactComponent as Menu } from "../../../assets/svgs/bars.svg";

export default function Header() {
  return (
    <header className={styles.navHeader}>
      <ol className={styles.orderedList}>
        <li className={styles.listItem}>
          <a className={styles.anchor} href="/walks">
            Walks
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.anchor} href="/services">
            Services
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.anchor} href="/welfare">
            Welfare
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.anchor} href="/more">
            More
          </a>
        </li>
      </ol>
      <div className={styles.mobileNavHeader}>
        <div className={styles.mobileNavHeadInnerContainer}>
          <Menu className={styles.menuBtn} fill="#ffffff" />
          <a href="/" className={styles.logo}>
            <Logo color="white" fontSize="1.5rem" />
          </a>
        </div>
        <div className={styles.accountBtnContainer}>
          <AccountBtn color="#ffffff" />
        </div>
      </div>
    </header>
  );
}
