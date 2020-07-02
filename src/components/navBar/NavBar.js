import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "./navHeader/NavHeader";
import MainNavContainer from "./mainNavContainer/MainNavContainer";
import styles from "./navBar.module.css";

export default class NavBar extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className={styles.topSpacer}></div>
        <div className={styles.container}>
          <Header />
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
