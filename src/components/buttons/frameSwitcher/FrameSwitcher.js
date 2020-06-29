import React, { Component } from "react";

import ArrowBtn from "../arrowBtn/ArrowBtn";
import styles from "./frameSwitcher.module.css";

export default class WalksSearch extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.arrowContainerLeft}>
          <ArrowBtn unactive={this.props.currentFrame === 1 ? false : true} onClick={this.props.onBackClick} />
        </div>
        <span className={styles.text}>
          {this.props.currentFrame} / {this.props.maxFrame}
        </span>
        <div className={styles.arrowContainerRight}>
          <ArrowBtn unactive={this.props.currentFrame === this.props.maxFrame ? false : true} onClick={this.props.onNextClick} />
        </div>
      </div>
    );
  }
}
