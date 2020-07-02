import React, { PureComponent } from "react";
import ButtonPrimary from "../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./businessesFrame.module.css";

import servicesImage from "../../assets/images/servicesImage.png";

export default class businessesFrame extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={servicesImage} alt="" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Looking For Local Dog Businesses In Your Area? Don't Worry We've Got You Coverred.</h1>
          <p className={styles.paragraph}>We have 100s of businesses waiting for you whether you need dog grooming, kennels, or someone to walk your best freind for you, they're all on here for you to find.</p>
          <ButtonPrimary text="Learn More" link="/" />
        </div>
        <img className={styles.mobileImage} src={servicesImage} alt="" />
      </div>
    );
  }
}
