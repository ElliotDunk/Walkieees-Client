import React, { Component } from "react";
import Validate from "../../../utils/validation";
import Authenticate from "../../../api/authentication";
import TextInput from "../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./resetPasswordBox.module.css";

export default class SignInBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        email: "",
      },
      text: "Don't worry it's easy to change!",
      textColor: "grey",
    };
    this.keyPress = this.keyPress.bind(this);
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
    const emailValidation = Validate.email(this.state.inputs.email);

    if (emailValidation.error === true) return this.setState({ text: emailValidation.message, textColor: "red" });
    //Post registration if between 200 and 300
    await Authenticate.requestResetPassword(this.state.inputs)
      .then((result) => {
        if (result === 200) return this.setState({ text: "An email has been sent to reset your password, please check your junk mailbox if you dont recieve it.", textColor: "green" });
      })
      .catch((result) => {
        console.log(result);
        if (result === 404) return this.setState({ text: "An account with this email doesn't exist", textColor: "red" });
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
      <div className={styles.container} onClick={this.props.onBackgroundClick}>
        <div className={styles.boxContainer} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>Reset Password</h2>
          <span className={styles.descriptor} style={{ color: this.state.textColor }}>
            {this.state.text}
          </span>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Email" type="email" name="email" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.continueBtnContainer}>
            <ButtonPrimary text="Continue" width="262px" height="40px" textSize="0.8rem" type="submit" onClick={this.handleButtonClick} />
          </div>
        </div>
      </div>
    );
  }
}
