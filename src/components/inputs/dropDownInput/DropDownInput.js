import React, { Component } from "react";
import styles from "./dropDownInput.module.css";
import PropTypes from "prop-types";

import { ReactComponent as DownChevron } from "../../../assets/svgs/chevron.svg";

export default class DropDownInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSortField: this.props.options[0],
      sortDropDownOpen: false,
    };
  }

  sortDropDownClick = (e) => {
    const sortDropDownOpen = this.state.sortDropDownOpen;
    this.setState({ sortDropDownOpen: !sortDropDownOpen });
  };

  sortDropDownItemClick = (e) => {
    this.setState({ activeSortField: e, sortDropDownOpen: false });
    this.props.onChange(e);
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.container} onClick={this.sortDropDownClick}>
          <p className={styles.text}>{this.state.activeSortField}</p>
          <div className={styles.arrowContainer}>
            <DownChevron fill="#282cdd" />
          </div>
        </div>
        <div style={{ display: this.state.sortDropDownOpen === true ? "block" : "none" }} className={styles.dropDownContainer}>
          {this.props.options.map((option, index) => (
            <p style={{ color: option === this.state.activeSortField ? "gray" : "#282cdd", cursor: option === this.state.activeSortField ? "auto" : "pointer" }} className={styles.dropDownText} key={index} onClick={() => this.sortDropDownItemClick(option)}>
              {option}
            </p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

DropDownInput.propTypes = {
  optinos: PropTypes.array,
  onChange: PropTypes.func,
};
