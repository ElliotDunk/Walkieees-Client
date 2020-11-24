import React, { PureComponent } from "react";
import Logo from "../../logo/Logo";
import SearchBar from "../../searchBar/SearchBar";
import AccountBtn from "../../inputs/buttons/accountButton/AccountButton";
import styles from "./mainNavContainer.module.css";

export default class MainContainer extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <a className={styles.logo} href="/">
            <Logo />
          </a>
          <div className={styles.searchBarContainer}>
            <SearchBar />
          </div>
          <div className={styles.accountBtnContainer}>
            <AccountBtn onClick={this.props.onSignInClick} accountBoxOpen={this.props.accountBoxOpen} />
          </div>
        </div>
      </div>
    );
  }
}
