import React, { Component } from "react";
import PropTypes from "prop-types";
import milesToMeters from "../../utils/milesToMeters";
import DropDownInput from "../inputs/dropDownInput/DropDownInput";
import ButtonPrimary from "../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./searchFilterBar.module.css";

export default class SearchFilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDropDownValue: "Closest",
      distance: 40000,
      keywords: "",
    };
  }

  onUpdateClick = () => {
    this.props.onUpdate(this.state.sortDropDownValue, this.state.distance, this.state.keywords);
  };

  onSortChange = (value) => {
    this.setState({ sortDropDownValue: value });
  };

  onDistanceChange = (distance) => {
    const distanceMeters = milesToMeters(parseInt(distance));
    this.setState({ distance: distanceMeters });
  };

  onKeywordChange = (keywords) => {
    this.setState({ keywords: keywords });
  };

  render() {
    return (
      <div className={styles.container}>
        <form action="/">
          <div className={styles.dropDownContainer}>
            <DropDownInput options={["Closest", "Popularity", "Date Created"]} onChange={(value) => this.onSortChange(value)} />
          </div>
          <input className={styles.textInput} type="number" placeholder="Distance (Miles)" onChange={(e) => this.onDistanceChange(e.target.value)} />
          <input className={styles.textInput} type="text" placeholder="Keywords" onChange={(e) => this.onKeywordChange(e.target.value)} />
          <div className={styles.buttonContainer}>
            <ButtonPrimary text="Update" onClick={() => this.onUpdateClick()} />
          </div>
        </form>
      </div>
    );
  }
}

SearchFilterBar.propTypes = {
  onUpdate: PropTypes.func,
};
