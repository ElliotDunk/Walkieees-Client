import React, { Component } from "react";
import ReviewStars from "../reviewStars/ReviewStars";
import ReviewBar from "../reviewBar/ReviewBar";
import PrimaryButton from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import ReviewsBox from "../reviewsBox/ReviewsBox";
import styles from "./reviewsFrame.module.css";

export default class ReviewsFrame extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.reviewNumber}>4</span>
        <ReviewStars rating={3} />
        <span className={styles.reviewsAmount}>29 Reviews</span>
        <div className={styles.barsContainer}>
          <div className={styles.reviewBarContainer}>
            <ReviewBar rating={5} percent={80} />
          </div>
          <div className={styles.reviewBarContainer}>
            <ReviewBar rating={4} percent={30} />
          </div>
          <div className={styles.reviewBarContainer}>
            <ReviewBar rating={3} percent={0} />
          </div>
          <div className={styles.reviewBarContainer}>
            <ReviewBar rating={2} percent={0} />
          </div>
          <div className={styles.reviewBarContainer}>
            <ReviewBar rating={1} percent={5} />
          </div>
        </div>
        <div className={styles.newButtonContainer}>
          <PrimaryButton text="New Comment" width="100%" />
        </div>
        <div className={styles.reviewBoxContainer}>
          <ReviewsBox />
        </div>
        <div className={styles.reviewBoxContainer}>
          <ReviewsBox />
        </div>
        <div className={styles.viewAllBtnContainer}>
          <PrimaryButton text="View All" />
        </div>
      </div>
    );
  }
}
