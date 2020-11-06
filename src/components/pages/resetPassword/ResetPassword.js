import React, { Component } from "react";
import jwt from "jsonwebtoken";
import Validate from "../../../utils/validation";
import Authenticate from "../../../api/authentication";
import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";
import TextInput from "../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./resetPassword.module.css";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        password: "",
        confirmPassword: "",
      },
      text: "Enter your new password and confirm to reset it",
      textColor: "grey",
      token: null,
    };
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    const token = window.location.href.split("resetpassword/")[1].split("#_=_")[0];
    const verfiedJwt = jwt.verify(token, "asgcyueyq726rg668");
    const value = verfiedJwt[Object.keys(verfiedJwt)[0]];
    this.setState({ token: verfiedJwt });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const inputState = this.state.inputs;
    inputState[name] = value;
    this.setState({ inputs: inputState });
  };

  handleButtonClick = async () => {
    const passwordValidation = Validate.password(this.state.inputs.password);
    const confirmPasswordValidation = Validate.confirmPassword(this.state.inputs.password, this.state.inputs.confirmPassword);

    if (passwordValidation.error === true) return this.setState({ text: passwordValidation.message, textColor: "red" });
    if (confirmPasswordValidation.error === true) return this.setState({ text: confirmPasswordValidation.message, textColor: "red" });
    if (Date.now() > this.state.token.expiration) return this.setState({ text: "The reset token has expired please start again.", textColor: "red" });
    //Post registration if between 200 and 300
    await Authenticate.resetPassword({ ...this.state.inputs, ...this.state.token })
      .then(() => {})
      .catch((result) => {
        if (result === 409) return this.setState({ text: "Please choose a different password", textColor: "red" });
        if (result !== 200) return this.setState({ text: "Registration did not complete", textColor: "red" });
      });
  };

  keyPress(e) {
    //If enter key is pressed while input is selected
    if (e.keyCode === 13) {
      this.handleButtonClick();
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar relative={false} />
        <div className={styles.boxContainer} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>Reset Your Password</h2>
          <span className={styles.descriptor} style={{ color: this.state.textColor }}>
            {this.state.text}
          </span>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Password" type="password" name="password" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Confirm Password" type="password" name="confirmPassword" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.continueBtnContainer}>
            <ButtonPrimary text="Continue" width="262px" height="40px" textSize="0.8rem" type="submit" onClick={this.handleButtonClick} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
