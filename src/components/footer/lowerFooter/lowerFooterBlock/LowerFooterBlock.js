import React, { PureComponent } from "react";
import styles from "./lowerFooterBlock.module.css";

import { ReactComponent as Facebook } from "../../../../assets/svgs/facebook-square.svg";
import { ReactComponent as Twitter } from "../../../../assets/svgs/twitter-square.svg";
import { ReactComponent as Instagram } from "../../../../assets/svgs/instagram-square.svg";
import { ReactComponent as Google } from "../../../../assets/svgs/google-plus-square.svg";

export default class LowerFooterBlock extends PureComponent {
  render() {
    return (
      <div>
        <hr className={styles.line} />
        <div className={styles.lowerContainer}>
          <div className={styles.socialMediaContainer}>
            <a className={styles.anchor} href="/">
              <Facebook className={styles.socialMediaBtn} fill="#ffffff" />
            </a>
            <a className={styles.anchor} href="/">
              <Twitter className={styles.socialMediaBtn} fill="#ffffff" />
            </a>
            <a className={styles.anchor} href="/">
              <Google className={styles.socialMediaBtn} fill="#ffffff" />
            </a>
            <a className={styles.anchor} href="/">
              <Instagram className={styles.socialMediaBtn} fill="#ffffff" />
            </a>
          </div>
          <span className={styles.copyright}>2020 © Walkieees.com. All Rights Reserved.</span>
        </div>
      </div>
    );
  }
}
