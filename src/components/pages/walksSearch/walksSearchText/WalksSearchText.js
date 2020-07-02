import React, { Component } from "react";
import styles from "./walksSearchText.module.css";

export default class SearchText extends Component {
  render() {
    return (
      <div>
        <h4 ref={() => this.walksText}>
          <strong className={styles.bold}>
            {this.props.walksAmount} {this.props.walksAmount > 1 ? "walks" : "walk"}
          </strong>{" "}
          found within <strong className={styles.bold}>{this.props.distance} miles</strong> of <strong className={styles.bold}>{this.props.location}</strong>
        </h4>
      </div>
    );
  }
}
