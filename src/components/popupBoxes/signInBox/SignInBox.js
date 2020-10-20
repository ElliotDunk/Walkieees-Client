import React, { PureComponent } from "react";
import Validate from "../../../utils/validation";
import PostLogin from "../../../api/postLogin";
import TextInput from "../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import FacebookButton from "../../inputs/buttons/facebookContinueButton/FacebookContinueButton";
import TwitterButton from "../../inputs/buttons/twitterContinueButton copy/TwitterContinueButton";
import GoogleButton from "../../inputs/buttons/googleContinueButton/GoogleContinueButton";
import styles from "./signInBox.module.css";

export default class SignInBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        email: "",
        password: "",
      },
      text: "Login with your email & password",
      textColor: "grey",
    };
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
    if (this.state.inputs.password <= 0) return this.setState({ text: "Password cannot be blank.", textColor: "red" });
    const loginResult = await PostLogin(this.state.inputs);
    if (loginResult.status === 200) return;
    if (loginResult.status === 401) return this.setState({ text: "Email or password incorrect.", textColor: "red" });
  };

  render() {
    return (
      <div className={styles.container} onClick={this.props.onBackgroundClick}>
        <div className={styles.boxContainer} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>Welcome Back</h2>
          <span className={styles.descriptor} style={{ color: this.state.textColor }}>
            {this.state.text}
          </span>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Email" type="email" name="email" onChange={this.handleInputChange} />
          </div>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Password" type="password" name="password" onChange={this.handleInputChange} />
          </div>
          <div className={styles.continueBtnContainer}>
            <ButtonPrimary text="Continue" width="262px" height="40px" textSize="0.8rem" onClick={this.handleButtonClick} />
          </div>
          <div className={styles.lineBreakContainer}>
            <hr />
            <span>Or</span>
            <hr />
          </div>
          <div className={styles.socialMediaBtnContainer}>
            <FacebookButton width="262px" height="40px" textSize="0.8rem" />
          </div>
          <div className={styles.socialMediaBtnContainer}>
            <TwitterButton width="262px" height="40px" textSize="0.8rem" />
          </div>
          <div className={styles.socialMediaBtnContainer}>
            <GoogleButton width="262px" height="40px" textSize="0.8rem" />
          </div>
          <span className={styles.signUpText}>
            Dont have an account? <span onClick={this.props.registrationClick}>Sign Up</span>
          </span>
          <div className={styles.forgotPasswordContainer}>
            <span className={styles.forgotPasswordText}>
              Forgot your password? <span>Reset It</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
