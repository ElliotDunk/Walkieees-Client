import React, { Component } from "react";
import NavBar from "../../navBar/NavBar";
import IndexMainVideo from "../../indexMainVideo/IndexMainVideo";
import ContentTitle from "../../titles/contentTitle/ContentTitle";
import PopularWalksFrame from "../../popularWalksFrame/PopularWalksFrame";
import BussinesesFrame from "../../businessesFrame/businessesFrame";
import WelfareFrame from "../../welfareFrame/WelfareFrame";
import CutestDogFrame from "../../cutestDogFrame/CutestDogFrame";
import RescueCenterFrame from "../../rescueCenterFrame/RescueCenterFrame";
import Footer from "../../footer/Footer";
import styles from "./index.module.css";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walksData: null,
      walksSize: 8,
    };
  }

  componentDidMount() {
    this.updateWalksSize();
    window.addEventListener("resize", this.updateWalksSize);
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
        <NavBar />
        <IndexMainVideo />
        <div className={styles.topSpacer}></div>
        <ContentTitle text="Explore Popular Walks" />
        <div className={styles.frameContainer}>
          <PopularWalksFrame />
        </div>
        <ContentTitle text="Meet Local Dog Businesses" />
        <div className={styles.frameContainer}>
          <BussinesesFrame />
        </div>
        <div className={styles.fullFrameContainer}>
          <WelfareFrame />
        </div>
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
