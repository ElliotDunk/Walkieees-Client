import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarFilled } from "../../../assets/svgs/starFilled.svg";
import { ReactComponent as StarUnfilled } from "../../../assets/svgs/starUnfilled.svg";
import styles from "./reviewStars.module.css";

export default class ReviewStars extends Component {
  render() {
    const rating = this.props.rating !== undefined ? this.props.rating : "0";
    const array = [];
    if (rating !== "0") {
      for (let i = 0; i < rating; i++) {
        array.push(<StarFilled fill="#282cdd" key={i * 9} className={styles.star} />);
      }
      for (let i = 5 - rating; i > 0; i--) {
        array.push(<StarUnfilled fill="#282cdd" key={i * 99} className={styles.star} />);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        array.push(<StarUnfilled fill="#d3d3d3" key={i * 999} className={styles.star} />);
      }
    }

    return <div>{array}</div>;
  }
}

ReviewStars.propTypes = {
  rating: PropTypes.number,
};
