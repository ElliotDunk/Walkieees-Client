import React, { PureComponent } from "react";
import ButtonPrimary from "../inputs/buttons/buttonPrimary/ButtonPrimary";
import ImageGallery from "../imageGallery/ImageGallery";
import styles from "./cutestDogFrame.module.css";

import CutestDogImage from "../../assets/images/cutestDog/cutestDog.png";
import CutestDogImage2 from "../../assets/images/cutestDog/cutestDog2.jpg";
import CutestDogImage3 from "../../assets/images/cutestDog/cutestDog3.jpeg";
import CutestDogImage4 from "../../assets/images/cutestDog/cutestDog4.jpg";

export default class CutestDogFrame extends PureComponent {
  constructor(props) {
    super(props);
    this.rightContainer = React.createRef();
    this.state = {
      rightContainerHeight: "0",
    };
  }

  componentDidMount() {
    this.rightContainerHeightCalc();
    window.addEventListener("resize", this.rightContainerHeightCalc);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.rightContainerHeightCalc);
  }

  rightContainerHeightCalc = () => {
    const rightContainerWidth = this.rightContainer.current.clientWidth;
    const rightContainerHeight = rightContainerWidth * 0.8;
    this.setState({ rightContainerHeight });
  };

  render() {
    const images = [CutestDogImage, CutestDogImage2, CutestDogImage3, CutestDogImage4];
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>Donny The Long Haired Mutt</h1>
          <p>Meet Donny The Long Haired Mutt, a Cavalier King Charles Spaniel aged 8 who loves nothing more than long walks in the sun with his owner Sally.</p>
          <div className={styles.flexBtn}>
            <ButtonPrimary text="Nominate Your Dog" link="/" />
          </div>
        </div>
        <div ref={this.rightContainer} style={{ height: this.state.rightContainerHeight }} className={styles.rightContainer}>
          <ImageGallery images={images} />
        </div>
        <div className={styles.blockBtn}>
          <ButtonPrimary text="Nominate Your Dog" link="/" />
        </div>
      </div>
    );
  }
}
