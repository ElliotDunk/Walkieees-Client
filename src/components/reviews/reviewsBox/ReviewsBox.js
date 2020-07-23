import React, { Component } from "react";
import ReviewStars from "../reviewStars/ReviewStars";
import styles from "./reviewsBox.module.css";

export default class ReviewsBox extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleAuthorContainer}>
          <div>
            <ReviewStars rating={3} />
            <span className={styles.title}>Great</span>
          </div>
          <div className={styles.profile}>
            <span>ED</span>
          </div>
        </div>
        <p className={styles.mainText}>Really enjoyed this work, not too short, not too long, just the right length. Best to do in nice weather, apart from that its worth it!</p>
      </div>
    );
  }
}
