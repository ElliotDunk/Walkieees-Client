import React, { PureComponent } from "react";
import styles from "./singleLineTextInput.module.css";

export default class SingleLineTextInput extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <input
          style={{
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : "rgb(246, 246, 246)",
          }}
          className={styles.input}
          placeholder={this.props.placeholder}
          name={this.props.name}
          type={this.props.type}
          onChange={this.props.onChange}
          onKeyDown={this.props.onKeyDown}
        ></input>
      </React.Fragment>
    );
  }
}
