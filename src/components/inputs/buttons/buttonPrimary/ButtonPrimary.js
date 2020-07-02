import React, { PureComponent } from "react";
import styles from "./buttonPrimary.module.css";

export default class ButtonPrimary extends PureComponent {
  render() {
    const color = this.props.color !== undefined ? this.props.color : "#282cdd";
    const textColor = this.props.color !== undefined ? this.props.textColor : "white";
    const width = this.props.width;
    return (
      <div className={styles.container}>
        <a className={styles.anchor} href={this.props.href} onClick={this.props.href === undefined ? (e) => e.preventDefault() : null}>
          <button style={{ width: width, backgroundColor: color, color: textColor }} className={styles.btn} onClick={this.props.onClick}>
            {this.props.text}
          </button>
        </a>
      </div>
    );
  }
}
