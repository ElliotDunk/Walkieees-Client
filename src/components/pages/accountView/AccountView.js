import React, { Component } from "react";
import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";
import AccountDetailsFrame from "./accountDetailsFrame/AccountDetailsFrame";
import MyWalksFrame from "./myWalksFrame/MyWalksFrame";
import SupportFrame from "./supportFrame/SupportFrame";
import styles from "./accountView.module.css";

export default class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFrame: "account",
    };
  }

  setFrame(frame) {
    this.setState({ activeFrame: frame });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.accountNavBar}>
          <div style={{ color: this.state.activeFrame === "walks" ? "#282cdd" : "rgb(81, 81, 81)" }} className={styles.navBtn} onClick={(e) => this.setFrame("walks")}>
            My Walks
          </div>
          <div style={{ color: this.state.activeFrame === "account" ? "#282cdd" : "rgb(81, 81, 81)" }} className={styles.navBtn} onClick={(e) => this.setFrame("account")}>
            Account
          </div>
          <div style={{ color: this.state.activeFrame === "support" ? "#282cdd" : "rgb(81, 81, 81)" }} className={styles.navBtn} onClick={(e) => this.setFrame("support")}>
            Support
          </div>
        </div>
        <div style={{ display: this.state.activeFrame === "account" ? "block" : "none" }}>
          <AccountDetailsFrame />
        </div>
        <div style={{ display: this.state.activeFrame === "walks" ? "block" : "none" }}>
          <MyWalksFrame />
        </div>
        <div style={{ display: this.state.activeFrame === "support" ? "block" : "none" }}>
          <SupportFrame />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
