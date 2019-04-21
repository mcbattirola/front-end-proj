import React, { Component } from "react";

class Stars extends Component {
  state = {};
  render() {
    const ratingStyle = {
      width: this.starsToPercent(this.props.stars) + "%"
    };

    return (
      <span className="stars-icon">
        <span className="stars-icon-selected" style={ratingStyle} />
      </span>
    );
  }

  starsToPercent = stars => {
    //makes sure its between 0 and 100
    let percentage = 20 * stars;
    if (percentage < 0) {
      return 0;
    } else if (percentage > 100) {
      return 100;
    }
    return percentage;
  };
}

export default Stars;
