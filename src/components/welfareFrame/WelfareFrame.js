import React, { PureComponent } from "react";
import WelfareCard from "./welfareCard/WelfareCard";
import styles from "./welfareFrame.module.css";

import DogStandingImage from "../../assets/images/dogStanding.png";

export default class WelfareFrame extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={DogStandingImage} alt="Dog" />
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <h1 className={styles.title}>
              Take a look around at our <u>advice</u> and <u>welfare</u> pages for up-to-date <u>guidance</u> on <u>caring</u> for your beloved <u>pets</u>.
            </h1>
          </div>
          <div className={styles.rightContainer}>
            <WelfareCard center="true" />
          </div>
        </div>
      </div>
    );
  }
}
