import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./contentTitle.module.css";

export default class ContentTitle extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1 className={styles.title}>{this.props.text}</h1>
      </React.Fragment>
    );
  }
}

ContentTitle.propTypes = {
  text: PropTypes.string,
};
