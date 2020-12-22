import React, { Component } from "react";
import PropTypes from "prop-types";
import haversineFormula from "../../utils/haversineFormula";
import styles from "./walkCard.module.css";
import ReviewStars from "../reviews/reviewStars/ReviewStars";

import { ReactComponent as Bookmark } from "../../assets/svgs/bookmark.svg";
import { ReactComponent as BookmarkFilled } from "../../assets/svgs/bookmarkFilled.svg";

import ImageUrl from "../.../../../utils/imageTransformationUrl";

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

  parseHTMLDescription(description) {
    return description
    .substring(description.lastIndexOf("<p>") + 3, description.lastIndexOf("</p>"))
    .replace(/<h1.*?<\/h1>/g, '')
    .replace(/<h2.*?<\/h2>/g, '')
    .replace(/<h3.*?<\/h3>/g, '')
    .replace(/<h4.*?<\/h4>/g, '')
    .replace(/<h5.*?<\/h5>/g, '')
    .replace(/(<([^>]+)>)/gi, "");
  }

  render() {
    if (this.props.searchCoordinates) {
      var distance = haversineFormula(this.props.latitude, this.props.longitude, this.props.searchCoordinates.latitude, this.props.searchCoordinates.longitude).toFixed();
    }
    const resizedImage = this.props.image !== undefined ? ImageUrl({ imageUrls: this.props.image[0], width: "512px" }) : "";
    return (
      <div>
        <a className={styles.linkContainer} href={`/walks/view/${this.props.ID}`}>
          <img className={styles.image} src={resizedImage} alt="Dog Walking Location" />
          <div className={styles.bookmarkContainer}>
            <span className={styles.distance} onClick={(e) => e.preventDefault()}>
              {this.props.searchCoordinates ? distance + " Miles Away" : null}
            </span>
            <Bookmark onClick={this.onBookmarkClick} style={{ display: this.state.bookmarkFilled | !distance ? "none" : "block" }} className={styles.bookmark} fill="#282cdd" />
            <BookmarkFilled onClick={this.onBookmarkClick} style={{ display: this.state.bookmarkFilled && distance ? "block" : "none" }} className={styles.bookmark} fill="#282cdd" />
          </div>
          <div className={styles.bookmarkContainer}>
            <h1 className={styles.title}>{this.props.title}</h1>
            <Bookmark onClick={this.onBookmarkClick} style={{ display: this.state.bookmarkFilled | distance !== undefined ? "none" : "block" }} className={styles.bookmark} fill="#282cdd" />
            <BookmarkFilled onClick={this.onBookmarkClick} style={{ display: this.state.bookmarkFilled && !distance ? "block" : "none" }} className={styles.bookmark} fill="#282cdd" />
          </div>
          <h4 className={styles.location}>{this.props.location}</h4>
          <div className={styles.ratingContainer}>
            <ReviewStars rating={this.props.rating} />
          </div>
          <p className={styles.description}>{this.parseHTMLDescription(this.props.description)}</p>
        </a>
      </div>
    );
  }
}

WalkCardVertical.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  searchCoordinates: PropTypes.object,
  image: PropTypes.array,
  title: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  bookmarkTitle: PropTypes.bool,
  ID: PropTypes.string,
};
