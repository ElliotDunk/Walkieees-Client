import React from "react";
import Logo from "../../logo/Logo";
import EmailSubscription from "../../emailSubscription/EmailSubscription";
import ButtonPrimary from "../../buttons/buttonPrimary/ButtonPrimary";
import LowerFooter from "../lowerFooter/lowerFooterBlock/LowerFooterBlock";
import styles from "./footerSmall.module.css";

import { ReactComponent as Envelope } from "../../../assets/svgs/envelope.svg";

export default function FooterLarge() {
  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>
        <div className={styles.spacer}></div>
        <div>
          <Logo color="white" />
          <p className={styles.infoText}>A Dogs Best Freind</p>
          <div className={styles.spacer}></div>
          <h3 className={styles.title}>About Us</h3>
          <p className={styles.infoText}>We are the one and only place for all you doggy needs</p>
          <div className={styles.spacer}></div>
          <h3 className={styles.title}>Contact Us</h3>
          <div className={styles.emailContainer}>
            <Envelope className={styles.envelope} fill="#ffffff" />
            <p className={styles.infoText}>support@walkieees.com</p>
          </div>
          <div className={styles.spacer}></div>
        </div>
        <div className={styles.spacer}></div>
        <div>
          <h3 className={styles.title}>Information</h3>
          <ul className={styles.unorderedList}>
            <a className={styles.anchor} href="/">
              <li className={styles.listItem}>About Us</li>
            </a>
            <a className={styles.anchor} href="/">
              <li className={styles.listItem}>More Search</li>
            </a>
            <a className={styles.anchor} href="/">
              <li className={styles.listItem}>Blog</li>
            </a>
            <a className={styles.anchor} href="/">
              <li className={styles.listItem}>Testimonials</li>
            </a>
            <a className={styles.anchor} href="/">
              <li className={styles.listItem}>Events</li>
            </a>
          </ul>
        </div>
        <div className={styles.spacer}></div>
        <div>
          <h3 className={styles.title}>Helpful Links</h3>
          <ul className={styles.unorderedList}>
            <a className={styles.anchor} href="/">
              <li className={styles.listItem}>Services</li>
            </a>
            <a className={styles.anchor} href="/">
              <li className={styles.listItem}>Support</li>
            </a>
            <a className={styles.anchor} href="/terms">
              <li className={styles.listItem}>Terms & Conditions</li>
            </a>
            <a className={styles.anchor} href="/privacy">
              <li className={styles.listItem}>Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div className={styles.spacer}></div>
        <div>
          <h3 className={styles.title}>Subscribe For More Info</h3>
          <div className={styles.spacer}></div>
          <form action="/" method="POST">
            <div className={styles.emailSubscriptionContainer}>
              <EmailSubscription />
            </div>
            <div className={styles.spacer}></div>
            <ButtonPrimary text="Subscribe" color="#ffffff" width="250px" textColor="#282cdd" />
          </form>
        </div>
      </div>
      <div className={styles.spacer}></div>
      <LowerFooter />
    </div>
  );
}
