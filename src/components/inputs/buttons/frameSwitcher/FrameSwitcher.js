import React, { Component } from "react";
import PropTypes from "prop-types";

import ArrowBtn from "../arrowButton/ArrowButton";
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

WalksSearch.propTypes = {
  currentFrame: PropTypes.number,
  maxFrame: PropTypes.number,
  onBackClick: PropTypes.func,
  onNextClick: PropTypes.func,
};
