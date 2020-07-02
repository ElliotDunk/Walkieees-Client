import React, { PureComponent } from "react";
import styles from "./arrowBtn.module.css";

import { ReactComponent as Arrow } from "../../../assets/svgs/arrow.svg";

export default class ArrowBtn extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: this.props.unactive !== false ? "#282cdd" : "#d8d8d8", cursor: this.props.unactive !== false ? "pointer" : "auto" }} className={styles.container} onClick={this.props.onClick}>
        <div className={styles.arrow}>
          <Arrow fill="#ffffff" />
        </div>
      </div>
    );
  }
}
