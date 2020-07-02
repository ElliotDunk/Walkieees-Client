import React, { PureComponent } from "react";
import fetchPopularWalks from "../../api/fetchPopularWalks";
import WalksFrame from "../walksFrame/WalksFrame";
import PrimaryButton from "../buttons/buttonPrimary/ButtonPrimary";
import styles from "./popularWalksFrame.module.css";

export default class PopularWalksFrame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      walksData: null,
      walksSize: 8,
    };
  }

  async componentDidMount() {
    this.updateWalksSize();
    window.addEventListener("resize", this.updateWalksSize);
    try {
      const walksData = await fetchPopularWalks();
      this.setState({ walksData: walksData.data });
    } catch (err) {
      console.error(err);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWalksSize);
  }

  updateWalksSize = () => {
    const walksSize = window.innerWidth > 500 ? 8 : 4;
    this.setState({ walksSize: walksSize });
  };

  render() {
    return (
      <div>
        <WalksFrame walksArr={this.state.walksData} endIndex={this.state.walksSize} />
        <div className={styles.buttonContainer}>
          <PrimaryButton text="View More" />
        </div>
      </div>
    );
  }
}
