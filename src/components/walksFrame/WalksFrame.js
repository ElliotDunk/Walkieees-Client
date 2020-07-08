import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoadingCircle from "../loadingCircle/LoadingCircle";
import WalkCard from "../walkCard/WalkCard";
import styles from "./walksFrame.module.css";

export default class WalksFrame extends PureComponent {
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
                  <WalkCard searchCoordinates={this.props.searchCoordinates} image={walk.imageUrl} title={walk.title} location={walk.locationTitle} rating={3} description={walk.description} latitude={walk.location.coordinates[0]} longitude={walk.location.coordinates[1]} />
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

WalksFrame.propTypes = {
  walksArr: PropTypes.array,
  startIndex: PropTypes.number,
  endIndex: PropTypes.number,
  searchCoordinates: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
