import React, { Component } from "react";
import WorkerDetails from "../components/workerDetails";

class OrderDetail extends Component {
  state = {};
  render() {
    const { order } = this.props; //makes code cleaner
    return (
      <React.Fragment>
        <div className="container-fluid order-navigation">
          <div className="row row-navigation justify-content-between">
            <div className="col col-2 col-sm-4 col-md-4">
              <span onClick={this.handleBack} className="navigation-arrow">
                <img className="" src="../../images/arrow.svg" alt="Back" />
              </span>
            </div>
            <div className="col col-10 col-sm-8 col-md-8">
              <div className="row">
                <div className="col col-12 col-sm-12 col-md-4">
                  <div className="order-navigation-text text-center">
                    {order.serviceName}
                  </div>{" "}
                </div>
                <div className="col col-12 col-sm-12 col-md-4">
                  <div className="order-navigation-text order-navigation-text-last">
                    VER DETALHES
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
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
            <div className="row-order-list-header text-center">
              <span>CONTRATADO:</span>
            </div>

            <WorkerDetails quote={hiredQuote} detailLevel="1" />
          </div>

          <div>
            <span>RECEBIDOS</span>
            {quotes
              .filter(quote => !quote.hired)
              .map(quote => (
                <WorkerDetails quote={quote} key={quote.id} detailLevel="1" />
              ))}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="container">
          <div className="row-order-list-header text-center">
            <span>ORÇAMENTOS RECEBIDOS</span>
          </div>

          <div className="row">
            {quotes.map(quote => (
              <div
                key={quote.id}
                className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
              >
                <WorkerDetails quote={quote} key={quote.id} detailLevel="1" />
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
}

export default OrderDetail;
