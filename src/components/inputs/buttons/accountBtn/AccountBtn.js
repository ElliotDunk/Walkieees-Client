import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ReactComponent as AccountLogo } from "../../../../assets/svgs/account-logo.svg";
import styles from "./accountBtn.module.css";

export default class AccountLink extends PureComponent {
  render() {
    return (
      <div className={styles.accountBtnContainer} onClick={this.props.onClick}>
        <span style={{ color: this.props.color || "#282cdd" }} className={styles.span}>
          Sign In
        </span>
        <div className={styles.logoContainer}>
          <AccountLogo fill={this.props.color || "#282cdd"} />
        </div>
      </div>
    );
  }
}

AccountLink.propTypes = {
  color: PropTypes.string,
};
