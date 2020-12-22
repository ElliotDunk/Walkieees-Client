import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./loadingCircle.module.css";

export default class LoadingCircle extends PureComponent {
  render() {
    return <div className={styles.loading} style={{ width: this.props.width || "80px", height: this.props.height || "80px" }}></div>;
  }
}

LoadingCircle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
