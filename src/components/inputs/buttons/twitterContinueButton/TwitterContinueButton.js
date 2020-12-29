import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Authenticate from "../../../../api/authentication";
import styles from "./twitterContinueButton.module.css";

import { ReactComponent as TwitterLogo } from "../../../../assets/svgs/twitter-square.svg";

export default class ButtonPrimary extends PureComponent {
  render() {
    const width = this.props.width !== undefined ? this.props.width : "150px";
    const textSize = this.props.textSize !== undefined ? this.props.textSize : "1rem";
    return (
      <div style={{ width: width }} className={styles.container}>
        <a style={{ minWidth: width }} className={styles.anchor} href={this.props.href} onClick={this.props.href === undefined ? (e) => e.preventDefault() : null}>
          <button
            style={{
              minWidth: width,
              minHeight: this.props.height,
              cursor: this.props.unactive ? "default" : "pointer",
              backgroundColor: !this.props.unactive ? "#00acee" : "#d8d8d8",
            }}
            className={styles.btn}
            onClick={this.props.onClick}
            onClick={!this.props.unactive ? this.props.onClick : null}
          >
            <div className={styles.logoTextContainer}>
              <TwitterLogo fill="white" className={styles.logo} />
              <span style={{ fontSize: textSize }} className={styles.buttonText}>
                Continue With Twitter
              </span>
            </div>
          </button>
        </a>
      </div>
    );
  }
}

ButtonPrimary.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  textSize: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  unactive: PropTypes.bool,
};