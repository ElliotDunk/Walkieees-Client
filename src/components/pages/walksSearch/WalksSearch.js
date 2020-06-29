import React, { Component } from "react";
import queryString from "query-string";
import fetchWalksLocation from "../../../api/fetchWalksLocation";
import metersToMiles from "../../../controllers/metersToMiles";

import styles from "./walksSearch.module.css";
import NavBar from "../../navBar/NavBar";
import WalksFrame from "../../walksFrame/WalksFrame";
import Footer from "../../footer/Footer";
import SearchFilterBar from "../../searchFilterBar/SearchFilterBar";

export default class WalksSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walksData: null,
      searchLocation: "",
      minDistance: 0,
      maxDistance: 80000,
      limit: 0,
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
      this.setState({
        walksData: await fetchWalksLocation(searchLocation, minDistance, maxDistance, limit),
      });
    } catch (err) {
      console.error(err);
    }
  }

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
        walksData: this.keywordsFilter(keywords, walksData),
        maxDistance: distanceNum,
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

  render() {
    const walksLength = this.state.walksData !== null ? this.state.walksData.length : 0;
    const distance = metersToMiles(this.state.maxDistance);
    const capitalisedTitle = this.state.searchLocation.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    const searchText =
      this.state.walksData !== null ? (
        <h4 className={styles.walksNumber}>
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
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.upperContainer}>
            {searchText}
            {searchFilterBar}
          </div>
          <WalksFrame walksArr={this.state.walksData} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
