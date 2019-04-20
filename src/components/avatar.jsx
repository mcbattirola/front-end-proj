import React, { Component } from "react";

class Avatar extends Component {
  render() {
    const imgSrc = this.props.imgSrc;
    const imgAlt = this.props.alt;
    const imgTitle = this.props.imgTitle;

    return (
      <img className="avatar" src={imgSrc} alt={imgAlt} title={imgTitle} />
    );
  }
}

export default Avatar;
