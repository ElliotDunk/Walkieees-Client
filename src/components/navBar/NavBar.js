import React, { Component } from "react";
import Header from "./navHeader/NavHeader";
import MainNavContainer from "./mainNavContainer/MainNavContainer";
import styles from "./navBar.module.css";

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.topSpacer}></div>
        <div className={styles.container}>
          <Header />
          <MainNavContainer />
        </div>
        <div className={styles.relativeSpacer}></div>
      </React.Fragment>
    );
  }
}
