import React, { Component } from "react";

export default class SearchText extends Component {
  render() {
    return (
      <div>
        <h4 ref={() => this.walksText}>
          <strong style={{ fontWeight: 500 }}>
            {this.props.walksAmount} {this.props.walksAmount > 1 ? "walks" : "walk"}
          </strong>{" "}
          found within <strong style={{ fontWeight: 500 }}>{this.props.distance} miles</strong> of <strong style={{ fontWeight: 500 }}>{this.props.location}</strong>
        </h4>
      </div>
    );
  }
}
