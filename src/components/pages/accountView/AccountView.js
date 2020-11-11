import React, { Component } from "react";
import NavBar from "../../navBar/NavBar";
import Title from "../../titles/contentTitle/ContentTitle";
import FacebookButton from "../../inputs/buttons/facebookContinueButton/FacebookContinueButton";
import TwitterButton from "../../inputs/buttons/twitterContinueButton/TwitterContinueButton";
import GoogleButton from "../../inputs/buttons/googleContinueButton/GoogleContinueButton";
import ButtonPrimary from "../../inputs/buttons/buttonPrimary/ButtonPrimary";
import Footer from "../../footer/Footer";
import styles from "./accountView.module.css";
import Account from "../../../api/account";
import Authenticate from "../../../api/authentication";
import emailSubscription from "../../../api/emailSubscription";

export default class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "account",
      accountData: {},
      errorMessage: null,
    };
    this.resetPassword = this.resetPassword.bind(this);
    this.changeEmailPreferences = this.changeEmailPreferences.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({ accountData: await Account.retrieve() });
      if (window.location.href.split("profile/")[1].startsWith("409")) return this.setState({ errorMessage: "An account is already linked with those credentials" });
      if (window.location.href.split("profile/")[1].startsWith("500")) return this.setState({ errorMessage: "An erorr has occured" });
    } catch (err) {
      console.error(err);
    }
  }

  async linkAccount(provider) {
    if (provider === "facebook") return Authenticate.facebook();
    if (provider === "twitter") return Authenticate.twitter();
    if (provider === "google") return Authenticate.google();

    this.setState({ accountData: await Account.retrieve() });
  }

  async resetPassword() {
    if (this.state.accountData !== {}) {
      await Authenticate.requestResetPassword({ email: this.state.accountData.email });
      alert("An email has been sent to you to reset your password, please check your junk mail if it doesn't arrive");
    }
  }

  async changeEmailPreferences() {
    if (this.state.accountData !== {} && this.state.accountData.marketingEmails === "On") {
      console.log(this.state.accountData.email);
      await emailSubscription.Unsubscribe(this.state.accountData.email);
      window.location.reload();
    } else if (this.state.accountData !== {} && this.state.accountData.marketingEmails === "Off") {
      await emailSubscription.subscribe(this.state.accountData.email);
      window.location.reload();
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.accountNavBar}>
          <div style={{ color: this.state.activePage === "walks" ? "#282cdd" : "rgb(81, 81, 81)" }} className={styles.navBtn}>
            My Walks
          </div>
          <div style={{ color: this.state.activePage === "account" ? "#282cdd" : "rgb(81, 81, 81)" }} className={styles.navBtn}>
            Account
          </div>
          <div style={{ color: this.state.activePage === "support" ? "#282cdd" : "rgb(81, 81, 81)" }} className={styles.navBtn}>
            Support
          </div>
        </div>
        <div className={styles.titleContainer}>
          <Title text="Details" />
        </div>
        <h4 className={styles.errorMessage}>{this.state.errorMessage}</h4>
        <div className={styles.detailsContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.dataContainer}>
              <span className={styles.dataTitle}>FIRST NAME</span>
              <div className={styles.dataField}>{this.state.accountData ? this.state.accountData.firstName : "Error"}</div>
            </div>
            <div className={styles.dataContainer}>
              <span className={styles.dataTitle}>LAST NAME</span>
              <div className={styles.dataField}>{this.state.accountData ? this.state.accountData.lastName : "Error"}</div>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.dataContainer}>
              <span className={styles.dataTitle}>EMAIL</span>
              <div className={styles.dataField}>{this.state.accountData ? this.state.accountData.email : "Error"}</div>
            </div>
            <div className={styles.dataContainer}>
              <span className={styles.dataTitle}>PASSWORD</span>
              <div className={styles.dataField}>
                {this.state.accountData ? "********" : "Error"}
                <a className={styles.resetBtn} onClick={this.resetPassword}>
                  RESET
                </a>
              </div>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.dataContainer}>
              <span className={styles.dataTitle}>DATE OF BIRTH</span>
              <div className={styles.dataField}>{this.state.accountData ? this.state.accountData.dateOfBirth : "Error"}</div>
            </div>
            <div className={styles.dataContainer}>
              <span className={styles.dataTitle}>MARKETING EMAILS</span>
              <div className={styles.dataField}>
                {this.state.accountData ? this.state.accountData.marketingEmails : "Error"}
                <a className={styles.resetBtn} onClick={this.changeEmailPreferences}>
                  {this.state.accountData.marketingEmails === "On" ? "TURN OFF" : "TURN ON"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div>
            <div className={styles.titleContainer}>
              <Title text="Link Account" />
            </div>
            <div className={styles.socialMediaBtnContainer}>
              <FacebookButton width="262px" height="40px" textSize="0.8rem" unactive={this.state.accountData.facebookID ? true : false} onClick={(e) => this.linkAccount("facebook")} />
            </div>
            <div className={styles.socialMediaBtnContainer}>
              <TwitterButton width="262px" height="40px" textSize="0.8rem" unactive={this.state.accountData.twitterID ? true : false} onClick={(e) => this.linkAccount("twitter")} />
            </div>
            <div className={styles.socialMediaBtnContainer}>
              <GoogleButton width="262px" height="40px" textSize="0.8rem" unactive={this.state.accountData.googleID ? true : false} onClick={(e) => this.linkAccount("google")} />
            </div>
          </div>
          <div>
            <div className={styles.titleContainer}>
              <Title text="Delete Account" />
            </div>
            <div className={styles.deleteBtnContainer}>
              <ButtonPrimary color="red" text="Delete Account" onClick={Account.delete} />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
