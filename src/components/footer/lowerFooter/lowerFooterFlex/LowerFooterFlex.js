import React, { PureComponent } from "react";
import styles from "./lowerFooterFlex.module.css";

import { ReactComponent as Facebook } from "../../../../assets/svgs/facebook-square.svg";
import { ReactComponent as Twitter } from "../../../../assets/svgs/twitter-square.svg";
import { ReactComponent as Instagram } from "../../../../assets/svgs/instagram-square.svg";
import { ReactComponent as Google } from "../../../../assets/svgs/google-plus-square.svg";

export default class LowerFooterFlex extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <hr className={styles.line} />
        <div className={styles.lowerContainer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.tableContainer}></td>
                <td className={styles.tableContainer}>
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
                </td>
                <td className={styles.tableContainer}>
                  <span className={styles.copyright}>2020 © Walkieees.com. All Rights Reserved.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
