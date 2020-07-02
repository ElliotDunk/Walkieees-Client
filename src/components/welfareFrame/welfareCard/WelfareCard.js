import React, { PureComponent } from "react";
import ButtonPrimary from "../../buttons/buttonPrimary/ButtonPrimary";
import styles from "./welfareCard.module.css";

export default class WelfareCard extends PureComponent {
  constructor(props) {
    super(props);
    this.line = React.createRef();
    this.btnOne = React.createRef();
    this.btnTwo = React.createRef();
    this.btnThree = React.createRef();
    this.state = {
      activeButton: 0,
      lineWidth: 0,
    };
  }

  componentDidMount() {
    const lineWidth = this.line.current.offsetWidth;
    this.setState({ lineWidth });
  }

  componentDidUpdate() {
    if (this.line.current.offsetWidth !== this.state.lineWidth) {
      const lineWidth = this.line.current.offsetWidth;
      this.setState({ lineWidth });
    }
  }

  setButtonState = (e) => {
    this.setState({ activeButton: e });
  };

  render() {
    const lineWidth = this.state.lineWidth;
    const gap = (lineWidth - 62 - 97 - 100) / 2;
    const underlineOneTranslation = 62 + gap;
    const underlineTwoTranslation = 62 + 97 + gap * 2;
    return (
      <div>
        <h2 className={styles.title}>Find Out More Below</h2>
        <div className={styles.buttonContainer}>
          <span ref={this.btnOne} onClick={() => this.setButtonState(0)} className={styles.buttons}>
            Health
          </span>
          <span ref={this.btnTwo} onClick={() => this.setButtonState(1)} className={styles.buttons}>
            Behaviour
          </span>
          <span ref={this.btnThree} onClick={() => this.setButtonState(2)} className={styles.buttons}>
            Happiness
          </span>
        </div>
        <hr style={{ display: this.state.activeButton === 0 ? "inline-block" : "none" }} className={styles.lineOne} />
        <hr style={{ display: this.state.activeButton === 1 ? "inline-block" : "none", transform: `translateX(${underlineOneTranslation}px)` }} className={styles.lineTwo} />
        <hr style={{ display: this.state.activeButton === 2 ? "inline-block" : "none", transform: `translateX(${underlineTwoTranslation}px)` }} className={styles.lineThree} />
        <hr ref={this.line} />
        <p style={{ display: this.state.activeButton === 0 ? "inline-block" : "none" }} className={styles.mainText}>
          Some dogs are better than others at covering up any aches and pains, so they might have to count on your vigilance to spot any unusual signs.
        </p>
        <p style={{ display: this.state.activeButton === 1 ? "inline-block" : "none" }} className={styles.mainText}>
          The way a dog behaves depends on the dog's age, breed (or type), personality and past experiences. Make sure your dog is able to behave normally.
        </p>
        <p style={{ display: this.state.activeButton === 2 ? "inline-block" : "none" }} className={styles.mainText}>
          Dogs feel emotions similar to ours, but they can’t express them like we do. They show their feelings through body language, behaviour, and even health. And believe it or not, there are specific signs that indicate dog happiness.
        </p>
        <div className={styles.mainBtn}>
          <ButtonPrimary text="Learn More" color="white" textColor="#282cdd" link="/" />
        </div>
      </div>
    );
  }
}
