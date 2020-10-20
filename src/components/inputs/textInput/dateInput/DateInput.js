import React, { PureComponent } from "react";
import styles from "./dateInput.module.css";

export default class SingleLineTextInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: "text",
    };
  }
  render() {
    return (
      <React.Fragment>
        <input
          className={styles.input}
          onFocus={() => {
            this.setState({ type: "date" });
          }}
          onBlur={() => {
            this.setState({ type: "text" });
          }}
          placeholder={this.props.placeholder}
          name={this.props.name}
          type={this.state.type}
          onChange={this.props.onChange}
        ></input>
      </React.Fragment>
    );
  }
}
