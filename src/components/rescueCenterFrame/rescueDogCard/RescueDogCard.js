import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./rescueDogCard.module.css";

export default class RescueDogCard extends PureComponent {
  render() {
    return (
      <a className={styles.anchor} href={this.props.link}>
        <div className={styles.container}>
          <img className={styles.image} src={this.props.image} alt="Rescue Dog Center" />
          <h5 className={styles.location}>{this.props.location}</h5>
          <h2 className={styles.title}>{this.props.title.length < 27 ? this.props.title : this.props.title.substring(0, 26) + "..."}</h2>
        </div>
      </a>
    );
  }
}

RescueDogCard.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
};
