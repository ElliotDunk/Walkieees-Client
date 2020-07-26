import React, { PureComponent } from "react";
import Logo from "../../logo/Logo";
import AccountBtn from "../../inputs/buttons/accountBtn/AccountBtn";
import styles from "./navHeader.module.css";

export default class NavHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
    };
  }

  menuBtnClick = (e) => {
    const mobileMenuOpen = this.state.mobileMenuOpen;
    this.setState({ mobileMenuOpen: !mobileMenuOpen });
    this.props.menuBtnClick();
  };

  render() {
    return (
      <header className={styles.navHeader}>
        <ol className={styles.orderedList}>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/walks">
              Walks
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/services">
              Services
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/welfare">
              Welfare
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/more">
              More
            </a>
          </li>
        </ol>
        <ul className={styles.mobileLinksListContainer}>
          <li>
            <a href="/">Walks</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Welfare</a>
          </li>
          <li>
            <a href="/">More</a>
          </li>
        </ul>
        <div className={styles.mobileNavHeader}>
          <div className={styles.mobileNavHeadInnerContainer}>
            <div onClick={this.menuBtnClick} className={`${styles.hamburger} ${styles.hamburgerCollapse} ${this.state.mobileMenuOpen ? styles.isActive : ""}`} type="button">
              <span className={styles.hamburgerBox}>
                <span className={styles.hamburgerInner}></span>
              </span>
            </div>
            <a href="/" className={styles.logo}>
              <Logo color="white" fontSize="1.5rem" />
            </a>
          </div>
          <div className={styles.accountBtnContainer}>
            <AccountBtn onClick={this.props.onSignInClick} color="#ffffff" />
          </div>
        </div>
      </header>
    );
  }
}
