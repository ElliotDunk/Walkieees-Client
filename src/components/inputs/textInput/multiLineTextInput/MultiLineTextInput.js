import React, { PureComponent } from "react";
import styles from "./multiLineTextInput.module.css";

export default class SingleLineTextInput extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <textarea className={styles.input} placeholder={this.props.placeholder} name={this.props.name} type={this.props.type} onChange={this.props.onChange} onKeyDown={this.props.onKeyDown}></textarea>
      </React.Fragment>
    );
  }
}
