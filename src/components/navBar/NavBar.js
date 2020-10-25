import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "./navHeader/NavHeader";
import MainNavContainer from "./mainNavContainer/MainNavContainer";
import SignInBox from "../popupBoxes/signInBox/SignInBox";
import RegistrationBox from "../popupBoxes/registrationBox/RegistrationBox";
import styles from "./navBar.module.css";

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
      signInOpen: false,
      registrationOpen: false,
      formEmail: "",
      formFirstName: "",
      formLastName: "",
      formPassword: "",
      formConfirmPassword: "",
      formDOB: "",
      formTerms: "",
      formEmailPreferences: "",
      loggedIn: false,
      accountBoxOpen: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sessionID")) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  componentDidUpdate() {
    if (localStorage.getItem("sessionID")) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  menuBtnClick = (e) => {
    const mobileMenuOpen = this.state.mobileMenuOpen;
    this.setState({ mobileMenuOpen: !mobileMenuOpen });
  };

  signInClick = (e) => {
    if (!this.state.loggedIn) {
      const signInOpen = this.state.signInOpen;
      this.setState({ signInOpen: !signInOpen });
      if (!signInOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    } else {
      const accountBoxOpen = this.state.accountBoxOpen;
      this.setState({ accountBoxOpen: !accountBoxOpen });
    }
  };

  signInClose = (e) => {
    e.preventDefault();
    this.setState({ signInOpen: false });
    document.body.style.overflow = "";
  };

  registrationClose = (e) => {
    e.preventDefault();
    this.setState({ registrationOpen: false });
    document.body.style.overflow = "";
  };

  registrationOpen = (e) => {
    const registrationOpen = this.state.registrationOpen;
    this.setState({ registrationOpen: !registrationOpen });
    if (!registrationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  registerClick = (e) => {
    this.signInClose(e);
    this.registrationOpen(e);
  };

  render() {
    const containerTranslation = this.state.mobileMenuOpen === false ? "0px" : "165px";
    return (
      <React.Fragment>
        <div style={{ display: this.state.signInOpen ? "block" : "none" }}>
          <SignInBox onBackgroundClick={this.signInClose} registrationClick={this.registerClick} />
        </div>
        <div style={{ display: this.state.registrationOpen ? "block" : "none" }}>
          <RegistrationBox onBackgroundClick={this.registrationClose} />
        </div>
        <div className={styles.topSpacer}></div>
        <div style={{ transform: `translateY(${containerTranslation})` }} className={styles.container}>
          <Header menuBtnClick={this.menuBtnClick} onSignInClick={this.signInClick} accountBoxOpen={this.state.accountBoxOpen} />
          <MainNavContainer onSignInClick={this.signInClick} accountBoxOpen={this.state.accountBoxOpen} />
        </div>
        <div style={{ display: this.props.relative === true ? "none" : "block" }} className={styles.relativeSpacer}></div>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  relative: PropTypes.bool,
};
