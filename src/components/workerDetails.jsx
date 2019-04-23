import React, { Component } from "react";
import Avatar from "./avatar";
import Stars from "./stars";

class WorkerDetails extends Component {
  state = {};
  render() {
    const quote = this.props.quote;
    let containerClass = "worker-details-container";
    containerClass += this.props.detailLevel == 0 ? "" : "-detailed";
    return (
      <div className={containerClass}>
        <div className="worker-details-avatar">
          <Avatar
            imgSrc={quote.avatar}
            imgAlt={quote.name}
            imgTitle={quote.name}
          />
        </div>
        <div className="worker-details-name row">{quote.name}</div>
        <div className="worker-details-stars row">
          <Stars stars={quote.stars} />
          <p className="worker-details-ratings">({quote.ratings})</p>
        </div>
        {this.props.detailLevel > 0 ? (
          <React.Fragment>
            <span>{quote.servicesDone} negócios fechados</span>
            <div>{quote.price}</div>
            <hr className="worker-details-hr" />{" "}
            <p className="hire ">Contratar</p>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default WorkerDetails;
