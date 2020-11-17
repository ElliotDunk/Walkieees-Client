import React, { Component } from "react";
import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";
import Title from "../../titles/contentTitle/ContentTitle";
import SingleLineTextInput from "../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import MultiLineTextInput from "../../inputs/textInput/multiLineTextInput/MultiLineTextInput";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./walkCreate.module.css";
import Contact from "../../../api/contact";

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
      .then(() => {
        this.setState({ text: "Message Sent", textColor: "Green" });
      })
      .catch(() => {
        this.setState({ text: "Sorry the message did NOT Sent", textColor: "Red" });
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.titleContainer}>
          <Title text="Create A Walk" />
        </div>
        <h4 style={{ color: this.state.textColor, display: this.state.text !== "" ? "block" : "none" }} className={styles.errorMessage}>
          {this.state.text}
        </h4>
        <div className={styles.formContainer}>
          <div className={styles.fullInputContainer}>
            <input type="file" className={styles.fileInputBtn} />
          </div>
          <div className={styles.fullInputContainer}>
            <SingleLineTextInput placeholder="Title" type="text" name="title" onChange={this.handleInputChange} />
          </div>
          <div className={styles.multiLineInputContainer}>
            <MultiLineTextInput placeholder="Desecribe The Walk" name="walkDescription" onChange={this.handleInputChange} />
          </div>
          <div className={styles.fullInputContainer}>
            <SingleLineTextInput placeholder="Activities Here" type="text" name="activities" onChange={this.handleInputChange} />
          </div>
          <div className={styles.btnContainer}>
            <ButtonPrimary text="Create" onClick={this.handleSubmit} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
