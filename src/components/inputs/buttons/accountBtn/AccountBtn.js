import React, { PureComponent } from "react";
import { ReactComponent as AccountLogo } from "../../../assets/svgs/account-logo.svg";
import styles from "./accountBtn.module.css";

export default class AccountLink extends PureComponent {
  render() {
    return (
      <a className={styles.a} href="/login">
        <div className={styles.accountBtnContainer}>
          <span style={{ color: this.props.color || "#282cdd" }} className={styles.span}>Sign In</span>
          <div className={styles.logoContainer}>
            <AccountLogo fill={this.props.color || "#282cdd"} />
          </div>
        </div>
      </a>
    );
  }
}
