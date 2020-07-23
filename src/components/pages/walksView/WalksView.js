import React, { Component } from "react";
import FetchWalk from "../../../api/fetchWalk";
import FetchWalksMany from "../../../api/fetchManyWalks";
import mapboxgl from "mapbox-gl";
import moment from "moment";
import NavBar from "../../navBar/NavBar";
import ImageGallery from "../../imageGallery/ImageGallery";
import ReviewStars from "../../reviews/reviewStars/ReviewStars";
import ReviewsFrame from "../../reviews/reviewsFrame/ReviewsFrame";
import ContentTitle from "../../titles/contentTitle/ContentTitle";
import WalksFrame from "../../walksFrame/WalksFrame";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import Footer from "../../footer/Footer";
import styles from "./walksView.module.css";

import { ReactComponent as Bookmark } from "../../../assets/svgs/bookmark.svg";
import { ReactComponent as HeartUnfileld } from "../../../assets/svgs/heartUnfilled.svg";
import { ReactComponent as Share } from "../../../assets/svgs/share.svg";
import { ReactComponent as MapMarker } from "../../../assets/svgs/mapMarker.svg";

mapboxgl.accessToken = "pk.eyJ1IjoiZWxsaW90ZHVuayIsImEiOiJja2JucjVwM2IxdmN0MzVxdnBjcW4xZzZ3In0.jpsxwlAVCnNCkV6Dp6IfUg";

export default class WalksView extends Component {
  constructor() {
    super();
    this.state = {
      walk: null,
      nearbyWalks: null,
    };
  }

  async componentDidMount() {
    const id = window.location.pathname.replace("/walks/", "");
    const walk = await FetchWalk(id);
    this.setState({ walk });

    const nearbyWalks = await FetchWalksMany({ latitude: walk.location.coordinates[0], longitude: walk.location.coordinates[1], maxDistance: 5000000, limit: 5 });
    this.setState({ nearbyWalks });

    const longitude = this.state.walk !== undefined ? this.state.walk.location.coordinates[0] : "50.8225";
    const latitude = this.state.walk !== undefined ? this.state.walk.location.coordinates[1] : "0.1372";

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/elliotdunk/ckcxy31nk1bdu1inn9tng3863",
      center: [longitude, latitude],
      zoom: 12,
    });
    const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
  }

  render() {
    const latitude = this.state.walk ? this.state.walk.location.coordinates[0] : 0;
    const longitude = this.state.walk ? this.state.walk.location.coordinates[1] : 0;
    const relativeDate = moment(this.state.walk ? this.state.walk.dateCreated : Date.now()).toNow();
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.upperContainer}>
          <div className={styles.imgContainer}>
            <ImageGallery images={[this.state.walk !== null ? this.state.walk.imageUrl : ""]} />
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.titleBox}>
              <h1>{this.state.walk !== null ? this.state.walk.title : ""}</h1>
              <p>{this.state.walk !== null ? this.state.walk.description : ""}</p>
              <div className={styles.upperReviewStarsContainer}>
                <ReviewStars rating={3} filledColor="#ffffff" unfilledColor="#ffffff" starWidthHeight="25px" />
              </div>
            </div>
            <div className={styles.btnsBox}>
              <div className={styles.authorDateFlexContainer}>
                <div>
                  <span>ED</span>
                </div>
                <p>
                  Submitted By <span className={styles.authorText}>Elliot Dunk</span> {relativeDate}
                </p>
              </div>
              <div className={styles.upperBtnsContainer}>
                <div className={styles.svgContainer}>
                  <Bookmark className={styles.btnSVG} fill="#282cdd" />
                  <div>Bookmark</div>
                </div>
                <div className={styles.svgContainer}>
                  <HeartUnfileld className={styles.btnSVG} fill="#282cdd" />
                  <div>Like</div>
                </div>
                <div className={styles.svgContainer}>
                  <Share className={styles.btnSVG} fill="#282cdd" />
                  <div>Share</div>
                </div>
                <div className={styles.svgContainer}>
                  <MapMarker className={styles.btnSVG} fill="#282cdd" />
                  <div>Map</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgContainerMobile}>
            <ImageGallery images={[this.state.walk !== null ? this.state.walk.imageUrl : ""]} />
          </div>
        </div>
        <div className={styles.reviewsContentContainer}>
          <div className={styles.contentContainer}>
            <p>
              <strong>About This Walk</strong>
            </p>
            <p>A fabulous walk from Pitton, E of Salisbury, to the ruins of medieval Clarendon Palace. The first part is on the long distance Clarendon Way path that runs from Winchester to Salisbury, and returns via an alternative route around and through arable fields and woodland.</p>
            <p>
              <strong>Whats Here</strong>
            </p>
            <p>Free Parking, Off Lead Areas, On Lead Areas, Animals On Route</p>
            <p>
              <strong>Type Of Walk</strong>
            </p>
            <p>Free Parking, Off Lead Areas, On Lead Areas, Animals On Route</p>
            <p>
              <strong>More Info</strong>
            </p>
            <p>The author provided the following links to more information</p>
          </div>
          <div className={styles.reviewsFrameContainer}>
            <ContentTitle text="Reviews" />
            <ReviewsFrame />
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className={styles.mapContainer} />
        <div className={styles.nearbyWalksContainer}>
          <ContentTitle text="Nearby Walks" />
          <div className={styles.walksFrameContainer}>
            <WalksFrame searchCoordinates={{ latitude, longitude }} walksArr={this.state.nearbyWalks !== null ? this.state.nearbyWalks.walks.slice(1, 5) : null} />
          </div>
          <div className={styles.nearbyWalksBtnContainer}>
            <ButtonPrimary text="View More" />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
