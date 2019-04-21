import React, { Component } from "react";

class OrderDetail extends Component {
  state = {};
  render() {
    const { order } = this.props; //makes code cleaner
    return (
      <React.Fragment>
        <div className="orderNavigation">
          <span onClick={this.handleBack}>
            <button>{"<-"}</button>
          </span>
          <div className="orderNavigation-text">{order.serviceName}</div>{" "}
        </div>
      </React.Fragment>
    );
  }

  handleBack = () => {
    this.props.onSelectOrder(false);
  };
}

export default OrderDetail;
