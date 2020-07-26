import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "./navHeader/NavHeader";
import MainNavContainer from "./mainNavContainer/MainNavContainer";
import SignInBox from "../popupBoxes/signInBox/SignInBox";
import styles from "./navBar.module.css";

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
      signInOpen: false,
    };
  }

  menuBtnClick = (e) => {
    const mobileMenuOpen = this.state.mobileMenuOpen;
    this.setState({ mobileMenuOpen: !mobileMenuOpen });
  };

  signInClick = (e) => {
    const signInOpen = this.state.signInOpen;
    this.setState({ signInOpen: !signInOpen });
    if (!signInOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  signInClose = (e) => {
    e.preventDefault();
    const signInOpen = this.state.signInOpen;
    this.setState({ signInOpen: !signInOpen });
    if (!signInOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  render() {
    const containerTranslation = this.state.mobileMenuOpen === false ? "0px" : "165px";
    return (
      <React.Fragment>
        <div style={{ display: this.state.signInOpen ? "block" : "none" }}>
          <SignInBox onBackgroundClick={this.signInClose} />
        </div>
        <div className={styles.topSpacer}></div>
        <div style={{ transform: `translateY(${containerTranslation})` }} className={styles.container}>
          <Header menuBtnClick={this.menuBtnClick} onSignInClick={this.signInClick} />
          <MainNavContainer onSignInClick={this.signInClick} />
        </div>
        <div style={{ display: this.props.relative === true ? "none" : "block" }} className={styles.relativeSpacer}></div>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  relative: PropTypes.bool,
};
