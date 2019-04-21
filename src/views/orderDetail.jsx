import React, { Component } from "react";
import WorkerDetails from "../components/workerDetails";

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

        <section>{this.renderQuotesList(order.quotes)}</section>
      </React.Fragment>
    );
  }

  handleBack = () => {
    this.props.onSelectOrder(false, this.props.filter);
  };

  renderQuotesList = quotes => {
    let hiredQuote = quotes.filter(quote => quote.hired);
    const hired = hiredQuote.length > 0;
    hiredQuote = hiredQuote[0];

    if (hired) {
      return (
        <React.Fragment>
          <div>
            <span>CONTRATADO:</span>
            <WorkerDetails quote={hiredQuote} detailLevel="0" />
          </div>

          <div>
            <span>RECEBIDOS</span>
            {quotes
              .filter(quote => !quote.hired)
              .map(quote => (
                <WorkerDetails quote={quote} key={quote.id} detailLevel="0" />
              ))}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div>
            <span>ORÇAMENTOS RECEBIDOS</span>
          </div>
          {quotes.map(quote => (
            <WorkerDetails quote={quote} key={quote.id} detailLevel="0" />
          ))}
        </React.Fragment>
      );
    }
  };
}

export default OrderDetail;
