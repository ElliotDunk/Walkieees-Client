import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";
import Title from "../../titles/contentTitle/ContentTitle";
import SingleLineTextInput from "../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import { Editor } from "@tinymce/tinymce-react";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import AddImageButton from "../../inputs/buttons/addImageButton/AddImageButton";
import styles from "./walkCreate.module.css";
import mapping from "../../../api/mapping";
import Validate from "../../../utils/validation";

export default class MyWalksFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      markerCoordinates: [],
      imageArr: [],
      errorMessage: "",
      errorColor: "green",
      locationInput: "",
      searchLocations: [],
    };
    this.handlefileChange = this.handlefileChange.bind(this);
    this.handleImageBtnClick = this.handleImageBtnClick.bind(this);
    this.handleFindClick = this.handleFindClick.bind(this);
    this.markerDragEnd = this.markerDragEnd.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/elliotdunk/ckcxy31nk1bdu1inn9tng3863",
      center: [-2.0336594438112456, 54.343560728822325],
      zoom: 4,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  componentDidUpdate() {
    if (this.state.markerCoordinates.length !== 0) {
      if (this.marker !== undefined) {
        this.marker.remove();
      }
      this.marker = new mapboxgl.Marker({ draggable: true, color: "#282cdd" })
        .setLngLat([
          this.state.markerCoordinates[0],
          this.state.markerCoordinates[1],
        ])
        .addTo(this.map);
      this.map.flyTo({
        center: [
          this.state.markerCoordinates[0],
          this.state.markerCoordinates[1],
        ],
        zoom: 15,
        speed: 1,
        curve: 2,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
      this.marker.on("dragend", this.markerDragEnd);
    }
  }

  markerDragEnd() {
    let lngLat = this.marker.getLngLat();
    this.setState({ marker: [lngLat.lng, lngLat.lat] });
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleImageBtnClick(id) {
    const imageArr = this.state.imageArr;
    if (this.state.imageArr[id] !== undefined) {
      imageArr.splice(id, 1);
      return this.setState({ imageArr: imageArr });
    }
    return document.getElementById("fileInput").click();
  }

  handlefileChange(event) {
    const imageArr = this.state.imageArr;
    if (event.target.files[0]) {
      imageArr.push(URL.createObjectURL(event.target.files[0]));
    }
    this.setState({ imageArr: imageArr });
  }

  async handleFindClick() {
    this.setState({
      searchLocations: await mapping.find({
        location: this.state.locationInput,
      }),
    });
  }

  handleLocationItemClick(location) {
    this.setState({ markerCoordinates: location.geometry.coordinates });
  }

  handleEditorChange(e) {
    this.setState({ description: e });
  }

  handleSubmit() {
    function scroll() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    const descValidation = Validate.walkDescription(this.state.description);

    if (this.state.imageArr.length <= 0) {
      this.setState({
        errorMessage: "Please upload atleast 1 photo.",
        errorColor: "red",
      });
      scroll();
    } else if (this.state.title.length <= 0) {
      this.setState({
        errorMessage: "Title can't be empty.",
        errorColor: "red",
      });
      scroll();
    } else if (descValidation.error === true) {
      this.setState({
        errorMessage: descValidation.message,
        errorColor: "red",
      });
      scroll();
    } else if (this.state.markerCoordinates.length <= 0) {
      this.setState({
        errorMessage: "Please search for a location.",
        errorColor: "red",
      });
      scroll();
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.titleContainer}>
          <Title text="Create A Walk" />
        </div>
        <h4
          style={{
            color: this.state.errorColor,
            display: this.state.errorMessage !== "" ? "block" : "none",
          }}
          className={styles.errorMessage}
        >
          {this.state.errorMessage}
        </h4>
        <div className={styles.formContainer}>
          <h3 className={styles.inputTitle}>Photos</h3>
          <p className={styles.inputDescription}>
            Add up to 5 photos to show off your walk.
          </p>
          <div className={styles.gridRow}>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={this.handlefileChange}
            />
            <div className={styles.gridItem}>
              <AddImageButton
                onClick={(e) => this.handleImageBtnClick(0)}
                thumbnail={this.state.imageArr[0]}
              />
            </div>
            <div
              style={{
                display:
                  this.state.imageArr[0] !== undefined ? "block" : "none",
              }}
              className={styles.gridItem}
            >
              <AddImageButton
                onClick={(e) => this.handleImageBtnClick(1)}
                thumbnail={this.state.imageArr[1]}
              />
            </div>
            <div
              style={{
                display:
                  this.state.imageArr[1] !== undefined ? "block" : "none",
              }}
              className={styles.gridItem}
            >
              <AddImageButton
                onClick={(e) => this.handleImageBtnClick(2)}
                thumbnail={this.state.imageArr[2]}
              />
            </div>
            <div
              style={{
                display:
                  this.state.imageArr[2] !== undefined ? "block" : "none",
              }}
              className={styles.gridItem}
            >
              <AddImageButton
                onClick={(e) => this.handleImageBtnClick(3)}
                thumbnail={this.state.imageArr[3]}
              />
            </div>
            <div
              style={{
                display:
                  this.state.imageArr[3] !== undefined ? "block" : "none",
              }}
              className={styles.gridItem}
            >
              <AddImageButton
                onClick={(e) => this.handleImageBtnClick(4)}
                thumbnail={this.state.imageArr[4]}
              />
            </div>
          </div>
          <h3 className={styles.inputTitle}>Title</h3>
          <p className={styles.inputDescription}>
            Include a title that sums up your walk and location.
          </p>
          <div className={styles.fullInputContainer}>
            <SingleLineTextInput
              backgroundColor="white"
              placeholder="Enter title"
              type="text"
              name="title"
              onChange={this.handleInputChange}
            />
          </div>
          <h3 className={styles.inputTitle}>Description</h3>
          <p className={styles.inputDescription}>
            Write a description that describes everything about your walk
            (location, length, nearby features, etc).
          </p>
          <div className={styles.multiLineInputContainer}>
            <Editor
              init={{
                selector: "textarea#format-custom",
                height: "100%",
                branding: false,
                menubar: false,
                statusbar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                formats: {
                  p_grey: { selector: "p", attributes: { class: "grey" } }, // use attributes
                  p_red: { selector: "p", attributes: { class: "red" } }, // use attributes
                },
                block_formats:
                  "Paragraph=p;Header 1=h3;Header 2=h4;Header 3=h5",
              }}
              onEditorChange={this.handleEditorChange}
            />
          </div>
          <h4 className={styles.inputTitle}>Location</h4>
          <p className={styles.inputDescription}>
            Search for the walks location, then drag the marker to pinpoint your
            walk.
          </p>
          <div
            className={`${styles.locationInputContainer} ${styles.fullInputContainer}`}
          >
            <SingleLineTextInput
              backgroundColor="white"
              placeholder="Enter location"
              type="text"
              name="locationInput"
              onChange={this.handleInputChange}
              onKeyDown={(e) => {
                if (e.keyCode === 13) return this.handleFindClick();
              }}
            />
            <div className={styles.locationBtn}>
              <ButtonPrimary
                text="Find"
                onClick={(e) => this.handleFindClick()}
              />
            </div>
          </div>
          <div
            style={{
              height: this.state.searchLocations.length > 0 ? "165px" : "0",
              border:
                this.state.searchLocations.length > 0
                  ? "rgb(202, 202, 202) 1px solid"
                  : "none",
            }}
            className={styles.locationsContainer}
          >
            {this.state.searchLocations.map((location, i) => {
              return (
                <div
                  className={styles.locationItem}
                  key={i}
                  onClick={(e) => this.handleLocationItemClick(location)}
                >
                  {location.place_name}
                </div>
              );
            })}
          </div>
          <div
            ref={(el) => (this.mapContainer = el)}
            className={styles.mapContainer}
          />
          <div className={styles.btnContainer}>
            <ButtonPrimary text="Create" onClick={this.handleSubmit} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
