import React, { Component } from "react";
import styles from "./reviewBar.module.css";

import { ReactComponent as Star } from "../../../assets/svgs/starFilled.svg";

export default class reviewBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.ratingStarContainer}>
          <span className={styles.rating}>{this.props.rating || ""}</span>
          <Star fill="#282cdd" className={styles.ratingStar} />
        </div>
        <div className={styles.fullBar}>
          <div style={{ width: this.props.percent + "%" || 0 + "%" }} className={styles.ratingBar}></div>
        </div>
        <span className={styles.percent}>{this.props.percent + "%" || ""}</span>
      </div>
    );
  }
}
