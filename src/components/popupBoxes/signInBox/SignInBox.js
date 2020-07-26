import React, { PureComponent } from "react";
import TextInput from "../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import FacebookButton from "../../inputs/buttons/facebookContinueButton/FacebookContinueButton";
import TwitterButton from "../../inputs/buttons/twitterContinueButton copy/TwitterContinueButton";
import GoogleButton from "../../inputs/buttons/googleContinueButton/GoogleContinueButton";
import styles from "./signInBox.module.css";

export default class SignInBox extends PureComponent {
  render() {
    return (
      <div className={styles.container} onClick={this.props.onBackgroundClick}>
        <div className={styles.boxContainer} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>Welcome Back</h2>
          <span className={styles.descriptor}>Login with your email & password</span>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Email" type="email" />
          </div>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Password" type="password" />
          </div>
          <div className={styles.primaryBtnContainer}>
            <ButtonPrimary text="Continue" width="262px" height="40px" textSize="0.8rem" />
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
            Dont have an account? <a href="/">Sign Up</a>
          </span>
          <div className={styles.forgotPasswordContainer}>
            <span className={styles.forgotPasswordText}>
              Forgot your password? <a href="/">Reset It</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
