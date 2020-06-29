import React, { Component } from "react";
import styles from "./walkCardHorizontal.module.css";
import ReviewStars from "../../reviews/reviewStars/ReviewStars";

import { ReactComponent as Bookmark } from "../../../assets/svgs/bookmark.svg";
import { ReactComponent as BookmarkFilled } from "../../../assets/svgs/bookmarkFilled.svg";

export default class WalkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false,
    };
  }

  titleFormatter(title) {
    if (title === undefined) {
      return null;
    }
    if (title.length >= 23) {
      var newString = title.substring(0, 22) + "...";
    } else {
      newString = title;
    }
    return newString;
  }

  locationFormatter(location) {
    if (location === undefined) {
      return null;
    }
    if (location.length >= 26) {
      var newString = location.substring(0, 25) + "...";
    } else {
      newString = location;
    }
    return newString;
  }

  descriptionFormatter(description) {
    if (description === undefined) {
      return null;
    }
    if (description.length >= 105) {
      var newString = description.substring(0, 104) + "...";
    } else {
      newString = description;
    }
    return newString;
  }

  bookmarkOnClick = (e) => {
    e.preventDefault();
    const bookmarked = this.state.bookmarked;
    this.setState({ bookmarked: !bookmarked });
  };

  render() {
    const unfilledBookmark = <Bookmark onClick={this.bookmarkOnClick} fill="#282cdd" className={styles.bookmark} />;
    const filledBookmark = <BookmarkFilled onClick={this.bookmarkOnClick} fill="#282cdd" className={styles.bookmark} />;
    const bookmarkElement = this.state.bookmarked ? filledBookmark : unfilledBookmark;
    return (
      <div className={styles.container}>
        <a className={styles.linkContainer} href="/">
          <img className={styles.image} src={this.props.image} alt="" />
          <div className={styles.innerContainer}>
            <div className={styles.titleBookmarkContainer}>
              <div className={styles.title}>{this.titleFormatter(this.props.title)}</div>
              {bookmarkElement}
            </div>
            <div className={styles.location}>{this.locationFormatter(this.props.location)}</div>
            <ReviewStars className={styles.rating} rating={this.props.rating} />
            <div className={styles.description}>{this.descriptionFormatter(this.props.description)}</div>
          </div>
        </a>
      </div>
    );
  }
}
