import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "./navHeader/NavHeader";
import MainNavContainer from "./mainNavContainer/MainNavContainer";
import styles from "./navBar.module.css";

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
    };
  }

  menuBtnClick = (e) => {
    const mobileMenuOpen = this.state.mobileMenuOpen;
    this.setState({ mobileMenuOpen: !mobileMenuOpen });
  };

  render() {
    const containerTranslation = this.state.mobileMenuOpen === false ? "0px" : "165px";
    return (
      <React.Fragment>
        <div className={styles.topSpacer}></div>
        <div style={{ transform: `translateY(${containerTranslation})` }} className={styles.container}>
          <Header menuBtnClick={this.menuBtnClick} />
          <MainNavContainer />
        </div>
        <div style={{ display: this.props.relative === true ? "none" : "block" }} className={styles.relativeSpacer}></div>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  relative: PropTypes.bool,
};
