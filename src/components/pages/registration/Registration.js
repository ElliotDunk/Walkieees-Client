import React, { Component } from "react";
import jwt from "jsonwebtoken";
import Validate from "../../../utils/validation";
import Authenticate from "../../../api/authentication";
import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";
import TextInput from "../../inputs/textInput/singleLineTextInput/SingleLineTextInput";
import DateInput from "../../inputs/textInput/dateInput/DateInput";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import styles from "./registration.module.css";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        dob: "",
        terms: "",
        marketingEmails: "false",
      },
      text: "It's great to have you!",
      textColor: "grey",
      authData: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    try {
      const token = window.location.href.split("register/")[1].split("#_=_")[0];
      const verfiedJwt = jwt.verify(token, "asgcyueyq726rg668");
      const key = Object.keys(verfiedJwt)[0];
      const value = verfiedJwt[Object.keys(verfiedJwt)[0]];
      this.setState({ authData: { [key]: value } });
    } catch {}
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const inputState = this.state.inputs;
    inputState[name] = value;
    this.setState({ inputs: inputState });
  };

  handleCheckboxChange = (event) => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    const inputState = this.state.inputs;
    inputState[name] = value;
    this.setState({ inputs: inputState });
  };

  handleButtonClick = async () => {
    const emailValidation = Validate.email(this.state.inputs.email);
    const firstNameValidation = Validate.name(this.state.inputs.firstName);
    const lastNameValidation = Validate.name(this.state.inputs.lastName);
    const passwordValidation = Validate.password(this.state.inputs.password);
    const confirmPasswordValidation = Validate.confirmPassword(this.state.inputs.password, this.state.inputs.confirmPassword);
    const DOBValidation = Validate.DOB(this.state.inputs.dob);
    const termsValidation = Validate.terms(this.state.inputs.terms);

    if (emailValidation.error === true) return this.setState({ text: emailValidation.message, textColor: "red" });
    if (firstNameValidation.error === true) return this.setState({ text: firstNameValidation.message, textColor: "red" });
    if (lastNameValidation.error === true) return this.setState({ text: lastNameValidation.message, textColor: "red" });
    if (passwordValidation.error === true) return this.setState({ text: passwordValidation.message, textColor: "red" });
    if (confirmPasswordValidation.error === true) return this.setState({ text: confirmPasswordValidation.message, textColor: "red" });
    if (DOBValidation.error === true) return this.setState({ text: DOBValidation.message, textColor: "red" });
    if (termsValidation.error === true) return this.setState({ text: termsValidation.message, textColor: "red" });
    //Post registration if between 200 and 300
    await Authenticate.registerAuth({ ...this.state.inputs, ...this.state.authData })
      .then(() => {})
      .catch((result) => {
        if (result === 409) return this.setState({ text: "This email is already registered", textColor: "red" });
        if (result !== 201) return this.setState({ text: "Registration did not complete", textColor: "red" });
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
          <h2 className={styles.title}>Register</h2>
          <span className={styles.descriptor} style={{ color: this.state.textColor }}>
            {this.state.text}
          </span>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Email" type="email" name="email" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="First Name" type="Text" name="firstName" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Last Name" type="Text" name="lastName" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Password" type="password" name="password" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.textInputContainer}>
            <TextInput placeholder="Confirm Password" type="password" name="confirmPassword" onChange={this.handleInputChange} onKeyDown={this.keyPress} />
          </div>
          <div className={styles.textInputContainer}>
            <DateInput placeholder="Date Of Birth" type="date" name="dob" onChange={this.handleInputChange} />
          </div>
          <div className={styles.checkboxInputContainer}>
            <input type="checkbox" name="terms" id="terms" onChange={this.handleCheckboxChange} />
            <label htmlFor="terms">I agree to the Terms Of Service</label>
          </div>
          <div className={styles.checkboxInputContainer}>
            <input type="checkbox" name="marketingEmails" id="marketingEmails" onChange={this.handleCheckboxChange} />
            <label htmlFor="marketingEmails">I agree to marketing emails</label>
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