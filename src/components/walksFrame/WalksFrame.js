import React, { Component } from "react";
import LoadingCircle from "../loadingCircle/LoadingCircle";
import WalkCard from "../walkCard/walkCardVertical/WalkCardVertical";
import styles from "./walksFrame.module.css";

export default class WalksFrame extends Component {
  render() {
    const dataArr = this.props.walksArr !== null ? this.props.walksArr : [];
    if (this.props.walksArr === null) {
      return (
        <div className={styles.loadingContainer}>
          <div className={styles.innerLoadingContainer}>
            <LoadingCircle />
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className={styles.container}>
            <div className={styles.gridRow}>
              {dataArr.slice(this.props.startIndex, this.props.endIndex).map((walk, index) => (
                <div key={index} className={styles.gridItem}>
                  <WalkCard searchCoordinates={this.props.searchCoordinates} image={walk.imageUrl} title={walk.title} location={walk.subTitle} rating="3" description={walk.description} latitude={walk.location.coordinates[0]} longitude={walk.location.coordinates[1]} />
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}