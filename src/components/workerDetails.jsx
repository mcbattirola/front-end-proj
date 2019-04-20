import React, { Component } from "react";
import Avatar from "./avatar";
import Stars from "./stars";

class WorkerDetails extends Component {
  state = {};
  render() {
    const quote = this.props.quote;
    return (
      <div className="">
        <Avatar
          imgSrc={quote.avatar}
          imgAlt={quote.name}
          imgTitle={quote.name}
        />
        <div>{quote.name}</div>
        <div className="worker-rating">
          <Stars stars={quote.stars} />
        </div>
        {this.props.detailLevel > 0 ? (
          <React.Fragment>
            {" "}
            <div>{quote.price}</div>
            <hr /> <p>Contratar</p>{" "}
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default WorkerDetails;
