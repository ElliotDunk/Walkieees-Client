import React from "react";
import mainImage from "../../assets/images/indexMainImage.png";
import mainVideo from "../../assets/video/indexMainVideo.mp4";
import styles from "./indexMainVideo.module.css";

export default function IndexMainVideo() {
  return (
    <div className={styles.container}>
      <video className={styles.video} src={mainVideo} poster={mainImage} autoPlay muted></video>
      <div className={styles.contentContainer}>
        <h1 className={styles.slogan}>A Dogs Best Freind</h1>
        <h1 className={styles.description}>Find Local Dog Walks & Businesses In Your Area</h1>
      </div>
    </div>
  );
}
