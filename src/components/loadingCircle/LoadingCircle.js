import React, { PureComponent } from "react";
import styles from "./loadingCircle.module.css";

export default class LoadingCircle extends PureComponent {
  render() {
    return <div className={styles.loading}></div>;
  }
}
