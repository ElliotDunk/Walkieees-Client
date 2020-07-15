import React, { Component } from "react";
import FetchWalk from "../../../api/fetchWalk";
import NavBar from "../../navBar/NavBar";
import ImageGallery from "../../imageGallery/ImageGallery";
import ReviewStars from "../../reviews/reviewStars/ReviewStars";
import styles from "./walksView.module.css";

export default class WalksView extends Component {
  constructor() {
    super();
    this.state = {
      walk: null,
    };
  }

  async componentDidMount() {
    const id = window.location.pathname.replace("/walks/", "");
    const walk = await FetchWalk(id);
    this.setState({ walk });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.imageFlexContainer}>
            <div className={styles.imageGalleryContainer}>
              <ImageGallery images={[this.state.walk !== null ? this.state.walk.imageUrl : ""]} />
            </div>
            <div className={styles.titleBtnContainer}>
              <div className={styles.titleFlexContainer}>
                <div className={styles.titleBlockContainer}>
                  <h1 className={styles.headerTitle}>{this.state.walk !== null ? this.state.walk.title : ""}</h1>
                  <p className={styles.headerDescription}>{this.state.walk !== null ? this.state.walk.description : ""}</p>
                  <div className={styles.reviewStarsContainer}>
                    <ReviewStars rating={this.state.walk !== null ? this.state.walk.rating : 0} />
                  </div>
                </div>
              </div>
              <div className={styles.btnContainer}></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
