import React, { PureComponent } from "react";
import styles from "./singleLineTextInput.module.css";

export default class SingleLineTextInput extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <input className={styles.input} placeholder={this.props.placeholder} type={this.props.type}></input>
      </React.Fragment>
    );
  }
}
