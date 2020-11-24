import React, { Component } from "react";
import PropTypes from "prop-types";
import Authenticate from "../../../../api/authentication";
import { ReactComponent as AccountLogo } from "../../../../assets/svgs/account-logo.svg";
import { ReactComponent as DownArrow } from "../../../../assets/svgs/chevron.svg";
import styles from "./accountButton.module.css";
import authenticationCheck from "../../../../utils/authenticationCheck";

export default class AccountLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: true,
    };
  }

  dropDownClick = () => {
    const dropDownOpen = this.state.dropDownOpen;

    this.setState({ dropDownOpen: !dropDownOpen });
  };

  logOut = () => {
    Authenticate.logout();
  };

  render() {
    const text = authenticationCheck() !== false ? "My Account" : "Sign In";
    const dropDownStyle = this.props.accountBoxOpen ? { display: "block" } : { display: "none" };
    const walksBtnStyle = this.state.searchType === "Walks" ? { color: "gray", cursor: "default" } : { color: "#282cdd" };
    const businessesBtnStyle = this.state.searchType === "Businesses" ? { color: "gray", cursor: "default" } : { color: "#282cdd" };
    return (
      <div className={styles.accountBtnContainer} onClick={this.props.onClick}>
        <span style={{ color: this.props.color || "#282cdd" }} className={styles.span}>
          {text}
        </span>
        <div className={styles.logoContainer} onClick={() => this.dropDownClick()}>
          <AccountLogo style={{ display: authenticationCheck() !== false ? "none" : "block" }} fill={this.props.color || "#282cdd"} />
          <DownArrow style={{ display: authenticationCheck() !== false ? "block" : "none" }} className={styles.accountLogo} fill={this.props.color || "#282cdd"} />
        </div>
        <div style={dropDownStyle} className={styles.dropDownBox}>
          <p style={walksBtnStyle} className={styles.dropDownText} onClick={() => (window.location.href = "/profile")}>
            Profile
          </p>
          <div className={styles.lineBreak}></div>
          <p style={businessesBtnStyle} className={styles.dropDownText} onClick={() => this.logOut()}>
            Log Out
          </p>
        </div>
      </div>
    );
  }
}

AccountLink.propTypes = {
  color: PropTypes.string,
};
