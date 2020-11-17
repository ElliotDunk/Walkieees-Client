import React, { Component } from "react";
import Title from "../../../titles/contentTitle/ContentTitle";
import SingleLineTextInput from "../../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import MultiLineTextInput from "../../../inputs/textInput/multiLineTextInput/MultiLineTextInput";
import ButtonPrimary from "../../../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./supportFrame.module.css";
import Contact from "../../../../api/contact";

export default class MyWalksFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        email: "",
        firstName: "",
        lastName: "",
        message: "",
      },
      text: "",
      textColor: "green",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const inputState = this.state.inputs;
    inputState[name] = value;
    this.setState({ inputs: inputState });
  };

  handleSubmit() {
    Contact.contact(this.state.inputs)
      .then((result) => {
        this.setState({ text: "Message Sent", textColor: "Green" });
      })
      .catch((error) => {
        this.setState({ text: "Sorry the message did NOT Sent", textColor: "Red" });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.titleContainer}>
          <Title text="Support" />
        </div>
        <h4 style={{ color: this.state.textColor, display: this.state.text !== "" ? "block" : "none" }} className={styles.errorMessage}>
          {this.state.text}
        </h4>
        <div className={styles.formContainer}>
          <div className={styles.fullInputContainer}>
            <SingleLineTextInput placeholder="Email" type="email" name="email" onChange={this.handleInputChange} />
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.halfInputContainer}>
              <SingleLineTextInput placeholder="First Name" name="firstName" onChange={this.handleInputChange} />
            </div>
            <div className={styles.halfInputContainer}>
              <SingleLineTextInput placeholder="Last Name" name="lastName" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className={styles.multiLineInputContainer}>
            <MultiLineTextInput placeholder="Message" name="message" onChange={this.handleInputChange} />
          </div>
          <div className={styles.btnContainer}>
            <ButtonPrimary text="Submit" onClick={this.handleSubmit} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
