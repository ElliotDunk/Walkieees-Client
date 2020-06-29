import React, { Component } from "react";
import haversineFormula from "../../../controllers/haversineFormula";
import styles from "./walkCardVertical.module.css";
import ReviewStars from "../../reviews/reviewStars/ReviewStars";

import { ReactComponent as Bookmark } from "../../../assets/svgs/bookmark.svg";
import { ReactComponent as BookmarkFilled } from "../../../assets/svgs/bookmarkFilled.svg";

export default class WalkCardVertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkFilled: false,
    };
  }

  onBookmarkClick = (e) => {
    e.preventDefault();
    const bookmarkFilled = this.state.bookmarkFilled;
    this.setState({ bookmarkFilled: !bookmarkFilled });
  };

  render() {
    if (this.props.searchCoordinates) {
      var distance = haversineFormula(this.props.latitude, this.props.longitude, this.props.searchCoordinates.latitude, this.props.searchCoordinates.longitude).toFixed(2);
    }
    return (
      <div>
        <a className={styles.linkContainer} href="/">
          <img className={styles.image} src={this.props.image} alt="Dog Walking Location" />
          <span className={styles.distance} onClick={(e) => e.preventDefault()}>
            {this.props.searchCoordinates ? distance + "Miles Away" : null}
          </span>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{this.props.title}</h1>
            <Bookmark onClick={this.onBookmarkClick} style={{ display: this.state.bookmarkFilled ? "none" : "block" }} className={styles.bookmark} fill="#282cdd" />
            <BookmarkFilled onClick={this.onBookmarkClick} style={{ display: this.state.bookmarkFilled ? "block" : "none" }} className={styles.bookmark} fill="#282cdd" />
          </div>
          <h4 className={styles.location}>{this.props.location}</h4>
          <div className={styles.ratingContainer}>
            <ReviewStars rating={this.props.rating} />
          </div>
          <p className={styles.description}>{this.props.description}</p>
        </a>
      </div>
    );
  }
}
