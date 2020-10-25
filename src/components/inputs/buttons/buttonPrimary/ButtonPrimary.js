import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./buttonPrimary.module.css";
import { withRouter } from "react-router-dom";

class ButtonPrimary extends PureComponent {
  onClick = (e) => {
    if (typeof this.props.onClick === "string") {
      this.props.history.push(this.props.onClick);
    } else {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <button type={this.props.type || "button"} onClick={this.onClick} style={{ fontSize: this.props.fontSize || "", backgroundColor: this.props.color || "#282cdd", color: this.props.textColor || "white" }} className={styles.button}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default withRouter(ButtonPrimary);

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.string,
};
