import React, { Component } from "react";
import WalksAPI from "../../../api/walks";
import NavBar from "../../navBar/NavBar";
import IndexMainVideo from "../../indexMainVideo/IndexMainVideo";
import ContentTitle from "../../titles/contentTitle/ContentTitle";
import BusinessesFrame from "../../businessesFrame/businessesFrame";
import WelfareFrame from "../../welfareFrame/WelfareFrame";
import CutestDogFrame from "../../cutestDogFrame/CutestDogFrame";
import RescueCenterFrame from "../../rescueCenterFrame/RescueCenterFrame";
import Footer from "../../footer/Footer";
import styles from "./index.module.css";

import WalksSearchFrame from "../../manyWalksFrame/ManyWalksFrame";
import PrimaryButton from "../../inputs/buttons/buttonPrimary/ButtonPrimary";

export default class Index extends Component {
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
      const walksData = await WalksAPI.fetchManyWalks({ latitude: -1.08333, longitude: 53.95, maxDistance: 800000, limit: 8 });
      this.setState({ walksData: walksData.walks });
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
      <React.Fragment>
        <NavBar relative={true} />
        <IndexMainVideo />
        <div className={styles.topSpacer}></div>
        <ContentTitle text="Explore Popular Walks" />
        <div className={styles.frameContainer}>
          <WalksSearchFrame walksArr={this.state.walksData} endIndex={this.state.walksSize} />
          <div className={styles.popularWalksButtonContainer}>
            <PrimaryButton text="Create A Walk" onClick="/walks/create" />
          </div>
        </div>
        <ContentTitle text="Meet Local Dog Businesses" />
        <div className={styles.frameContainer}>
          <BusinessesFrame />
        </div>
        <div className={styles.fullFrameContainer}>
          <WelfareFrame />
        </div>
        <div className={styles.middleSpacer}></div>
        <ContentTitle text="Meet The Cutest Dog Of The Week" />
        <div className={styles.frameContainer}>
          <CutestDogFrame />
        </div>
        <ContentTitle text="Find Local Rescue Centers" />
        <div className={styles.frameContainer}>
          <RescueCenterFrame />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
