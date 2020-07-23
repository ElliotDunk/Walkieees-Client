import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Chevron } from "../../assets/svgs/chevron.svg";
import { ReactComponent as CircleFilled } from "../../assets/svgs/circleFilled.svg";
import { ReactComponent as CircleUnfilled } from "../../assets/svgs/circleUnfilled.svg";
import styles from "./imageGallery.module.css";

export default class ImageGallery extends PureComponent {
  constructor(props) {
    super(props);
    this.imgContainer = React.createRef();
    this.state = {
      imgStyle: {
        transform: `translateX(0px)`,
      },
      translateValue: 0,
      currentImage: 0,
    };
  }

  nextImage() {
    const imgContainerWidth = this.imgContainer.current.clientWidth;
    let translateValue = this.state.translateValue;
    const newTranslateValue = translateValue++ - imgContainerWidth;
    const currentImage = this.state.currentImage;
    let nextImage = this.state.currentImage + 1;
    if (currentImage < this.props.images.length - 1) {
      this.setState({ imgStyle: { transform: `translateX(${newTranslateValue}px)` }, translateValue: newTranslateValue, currentImage: nextImage });
    }
  }

  previousImage() {
    const imgContainerWidth = this.imgContainer.current.clientWidth;
    const translateValue = this.state.translateValue;
    const newTranslateValue = translateValue + imgContainerWidth;
    let nextImage = this.state.currentImage - 1;
    if (translateValue < 0) {
      this.setState({ imgStyle: { transform: `translateX(${newTranslateValue}px)` }, translateValue: newTranslateValue, currentImage: nextImage });
    }
  }

  render() {
    const circles = [];
    for (let i = 0; i < this.props.images.length; i++) {
      circles.push(<CircleUnfilled key={i} className={styles.circle} fill="#282cdd" />);
    }
    circles[this.state.currentImage] = <CircleFilled className={styles.circle} key={999} fill="#282cdd" />;
    return (
      <div className={styles.container}>
        <div ref={this.imgContainer} className={styles.imgContainer}>
          {this.props.images.map((image, index) => (
            <img className={styles.image} style={(this.state.imgStyle, { borderRadius: this.props.borderRadius !== null ? this.props.borderRadius : "" })} key={index} src={image} alt="Cutest Dog Of The Week" />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Chevron
            onClick={() => {
              this.previousImage();
            }}
            className={styles.leftChevron}
            fill="#282cdd"
          />
          {circles}
          <Chevron
            onClick={() => {
              this.nextImage();
            }}
            className={styles.rightChevron}
            fill="#282cdd"
          />
        </div>
      </div>
    );
  }
}

ImageGallery.protoTypes = {
  images: PropTypes.array,
  borderRadius: PropTypes.string,
};
