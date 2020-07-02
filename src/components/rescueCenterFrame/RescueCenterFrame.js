import React, { PureComponent } from "react";
import RescueDogCard from "./rescueDogCard/RescueDogCard";
import ButtonPrimary from "../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./rescueCenterFrame.module.css";

import RescueDog from "../../assets/images/rescueDogs/rescueDogs.png";
import RescueDog2 from "../../assets/images/rescueDogs/rescueDogs2.png";
import RescueDog3 from "../../assets/images/rescueDogs/rescueDogs3.png";
import RescueDog4 from "../../assets/images/rescueDogs/rescueDogs4.png";

export default class RescueCenterFrame extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.mobileDivider}>
            <div className={styles.card}>
              <RescueDogCard image={RescueDog} location="London" title="Firle Beacon Circuit" link="/" />
            </div>
            <div className={styles.card}>
              <RescueDogCard className={styles.card} image={RescueDog2} location="Exceter" title="Exton Park" link="/" />
            </div>
          </div>
          <div className={styles.mobileDivider}>
            <div className={styles.card}>
              <RescueDogCard className={styles.card} image={RescueDog3} location="Edinbourgh" title="River Meadows Dog Walking" link="/" />
            </div>
            <div className={styles.card}>
              <RescueDogCard className={styles.card} image={RescueDog4} location="Cardiff" title="The Hill Woodlands" link="/" />
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <ButtonPrimary text="Find More" />
        </div>
      </div>
    );
  }
}
