import React, { Component } from "react";
import queryString from "query-string";
import fetchWalksLocation from "../../../api/fetchWalksLocation";
import metersToMiles from "../../../controllers/metersToMiles";

import styles from "./walksSearch.module.css";
import NavBar from "../../navBar/NavBar";
import WalksFrame from "../../walksFrame/WalksFrame";
import Footer from "../../footer/Footer";
import SearchFilterBar from "../../searchFilterBar/SearchFilterBar";
import FrameSwitcher from "../../buttons/frameSwitcher/FrameSwitcher";

export default class WalksSearch extends Component {
  constructor(props) {
    super(props);
    this.walksText = React.createRef();
    this.state = {
      walksData: null,
      searchCoordinates: [],
      searchLocation: "",
      minDistance: 0,
      maxDistance: 80000,
      limit: 0,
      walksPerFrame: 8,
      currentFrame: 1,
    };
  }
  async componentDidMount() {
    const parsedQueryParams = queryString.parse(window.location.search);
    const searchLocation = parsedQueryParams.location !== undefined ? parsedQueryParams.location : this.state.searchLocation;
    const minDistance = parsedQueryParams.minDist !== undefined ? parsedQueryParams.minDist : this.state.minDistance;
    const maxDistance = parsedQueryParams.maxDist !== undefined ? parsedQueryParams.maxDist : this.state.maxDistance;
    const limit = parsedQueryParams.limit !== undefined ? parsedQueryParams.limit : this.state.limit;

    this.setState({ searchLocation, minDistance, maxDistance, limit });

    try {
      const walksData = await fetchWalksLocation(searchLocation, minDistance, maxDistance, limit);
      this.setState({
        walksData: walksData.data,
        searchCoordinates: walksData.coordinates,
      });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidUpdate = () => {};

  setQueryStates() {
    const parsedQueryParams = queryString.parse(window.location.search);
    const searchLocation = parsedQueryParams.location !== undefined ? parsedQueryParams.location : this.state.searchLocation;
    const minDistance = parsedQueryParams.minDist !== undefined ? parsedQueryParams.minDist : this.state.minDistance;
    const maxDistance = parsedQueryParams.maxDist !== undefined ? parsedQueryParams.maxDist : this.state.maxDistance;
    const limit = parsedQueryParams.limit !== undefined ? parsedQueryParams.limit : this.state.limit;
    this.setState({ searchLocation, minDistance, maxDistance, limit });
  }

  searchFilterUpdateEvent = async (sort, distance, keywords) => {
    var distanceNum = distance !== undefined && !isNaN(parseInt(distance)) ? parseInt(distance) : this.state.maxDistance;
    try {
      const walksData = await fetchWalksLocation(this.state.searchLocation, 0, distanceNum);
      this.setState({
        walksData: this.keywordsFilter(keywords, walksData.data),
        searchCoordinates: walksData.coordinates,
        maxDistance: distanceNum,
        currentFrame: 1,
      });
    } catch (err) {
      console.error(err);
    }
  };

  keywordsFilter(keywords, walksData) {
    const keywordsArr = keywords.toLowerCase().split(" ");
    const keywordsArrLength = keywordsArr.length;
    const walksDataLength = walksData.length;
    let sortedData = [];

    for (let i = 0; i < walksDataLength; i++) {
      for (let n = 0; n < keywordsArrLength; n++) {
        if (walksData[i].description.toLowerCase().includes(keywordsArr[n])) {
          sortedData.push(walksData[i]);
          break;
        }
      }
    }
    return sortedData;
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
    window.scrollTo({ top: this.walksText.current, behavior: "smooth" });
  };

  render() {
    const walksLength = this.state.walksData !== null ? this.state.walksData.length : 0;
    const distance = metersToMiles(this.state.maxDistance);
    const capitalisedTitle = this.state.searchLocation.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    const searchText =
      this.state.walksData !== null ? (
        <h4 ref={() => this.walksText} className={styles.walksNumber}>
          <strong style={{ fontWeight: 500 }}>
            {walksLength} {walksLength > 1 ? "walks" : "walk"}
          </strong>{" "}
          found within <strong style={{ fontWeight: 500 }}>{distance} miles</strong> of <strong style={{ fontWeight: 500 }}>{capitalisedTitle}</strong>
        </h4>
      ) : null;
    const searchFilterBar =
      this.state.walksData !== null ? (
        <div style={{ height: this.state.walksData.length === 0 ? "calc(100vh - 105px - 426px)" : "auto" }}>
          <SearchFilterBar onUpdate={this.searchFilterUpdateEvent} />
        </div>
      ) : null;
    const frameSwitcher =
      this.state.walksData !== null ? (
        <div style={{ display: this.state.walksData.length !== 0 ? "block" : "none" }}>
          <FrameSwitcher currentFrame={this.state.currentFrame} maxFrame={this.state.walksData !== null ? Math.ceil(this.state.walksData.length / this.state.walksPerFrame) : null} onBackClick={this.onBackClick} onNextClick={this.onNextClick} />
        </div>
      ) : null;
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.upperContainer}>
            {searchText}
            {searchFilterBar}
          </div>
          <WalksFrame searchCoordinates={this.state.searchCoordinates} walksArr={this.state.walksData !== null ? this.state.walksData.slice(this.state.walksPerFrame * this.state.currentFrame - this.state.walksPerFrame, this.state.walksPerFrame * this.state.currentFrame) : null} />
          {frameSwitcher}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
