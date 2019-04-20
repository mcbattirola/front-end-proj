import React, { Component } from "react";

class Stars extends Component {
  state = {};
  render() {
    const ratingStyle = {
      width: this.starsToPercent(this.props.stars)
    };

    return (
      <span className="stars-icon">
        <span className="stars-icon-selected" style={ratingStyle} />
      </span>
    );
  }

  starsToPercent = stars => {
    return 20 * stars;
  };
}

export default Stars;
