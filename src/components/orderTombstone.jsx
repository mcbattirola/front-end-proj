import React, { Component } from "react";
import "../App.css";
import Button from "./buttons";
import OpenQuotesTombstone from "./openQuotesTombstone";

class orderTombstone extends Component {
  state = {};

  render() {
    return (
      <div className="orcamento orcamento-container">
        <div className="orcamento orcamento-titulo">
          <div className="order-tombstone" />
        </div>
        <React.Fragment>
          <div className="container">
            <div className="order-tombstone" />
          </div>
          <hr />
          <OpenQuotesTombstone />
          <div className="order-quote-quantity" />
        </React.Fragment>
        <div className="order-buttom-container">
          <Button text={""} />
        </div>
      </div>
    );
  }
}

export default orderTombstone;
