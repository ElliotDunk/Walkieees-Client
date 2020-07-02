import React, { PureComponent } from "react";
import "./logo.module.css";

export default class Logo extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: this.props.color, fontSize: this.props.fontSize }}>Walkieees</h1>
      </React.Fragment>
    );
  }
}
