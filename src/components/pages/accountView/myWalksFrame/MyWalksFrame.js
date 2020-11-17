import React, { Component } from "react";
import Title from "../../../titles/contentTitle/ContentTitle";
import ButtonPrimary from "../../../inputs/buttons/buttonPrimary/ButtonPrimary";
import ManyWalksFrame from "../../../manyWalksFrame/ManyWalksFrame";
import Walks from "../../../../api/walks";
import FrameSwitcher from "../../../inputs/buttons/frameSwitcher/FrameSwitcher";
import styles from "./myWalksFrame.module.css";

export default class MyWalksFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walksData: [],
      currentFrame: 1,
      walksPerFrame: 8,
    };
  }
  async componentDidMount() {
    this.setState({ walksData: await Walks.fetchUserWalks() });
  }

  onBackClick = () => {
    if (this.state.currentFrame > 1) {
      const previousFrame = this.state.currentFrame - 1;
      this.setState({ currentFrame: previousFrame });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  onNextClick = () => {
    const walksDataLength = this.state.walksData !== null || this.state.walksData !== undefined ? this.state.walksData.length : null;
    if (this.state.currentFrame < walksDataLength / this.state.walksPerFrame) {
      const nextFrame = this.state.currentFrame + 1;
      this.setState({ currentFrame: nextFrame });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.titleContainer}>
          <Title text="My Walks" />
        </div>
        <div className={styles.walksContainer}>
          <ManyWalksFrame walksArr={this.state.walksData !== null ? this.state.walksData.slice(this.state.walksPerFrame * this.state.currentFrame - this.state.walksPerFrame, this.state.walksPerFrame * this.state.currentFrame) : null} />
          <div style={{ display: this.state.walksData.length > 0 ? "none" : "block" }} className={styles.noWalksContainer}>
            <h3>You have't created any walks yet.</h3>
            <ButtonPrimary text="Create A Walk" />
          </div>
        </div>
        <div style={{ display: this.state.walksData.length > 0 ? "block" : "none" }}>
          <FrameSwitcher currentFrame={this.state.currentFrame} maxFrame={this.state.walksData !== null ? Math.ceil(this.state.walksData.length / this.state.walksPerFrame) : null} onBackClick={this.onBackClick} onNextClick={this.onNextClick} />
        </div>
      </React.Fragment>
    );
  }
}
