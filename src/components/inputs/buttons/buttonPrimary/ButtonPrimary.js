import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./buttonPrimary.module.css";

export default class ButtonPrimary extends PureComponent {
  render() {
    const color = this.props.color !== undefined ? this.props.color : "#282cdd";
    const textColor = this.props.textColor !== undefined ? this.props.textColor : "white";
    const width = this.props.width !== undefined ? this.props.width : "150px";
    return (
      <div className={styles.container}>
        <a style={{ minWidth: width }} className={styles.anchor} href={this.props.href} onClick={this.props.href === undefined ? (e) => e.preventDefault() : null}>
          <button style={{ minWidth: width, backgroundColor: color, color: textColor }} className={styles.btn} onClick={this.props.onClick}>
            {this.props.text}
          </button>
        </a>
      </div>
    );
  }
}

ButtonPrimary.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
