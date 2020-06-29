import React from "react";
import styles from "./rescueDogCard.module.css";

export default function RescueDogCard(props) {
  const title = props.title.length < 27 ? props.title : props.title.substring(0, 26) + "...";
  return (
    <a className={styles.anchor} href={props.link}>
      <div className={styles.container}>
        <img className={styles.image} src={props.image} alt="Rescue Dog Center" />
        <h5 className={styles.location}>{props.location}</h5>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </a>
  );
}
