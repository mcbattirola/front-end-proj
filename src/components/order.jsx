import React, { Component } from "react";
import "../App.css";
import Rotulo from "./rotulo";
import Button from "./buttons";
import WorkerDetails from "./workerDetails";
import OpenQuotes from "./openQuotes";

class Order extends Component {
  state = {};

  render() {
    const order = this.props.order;

    return (
      <div className="orcamento orcamento-container">
        <div className="orcamento orcamento-titulo">
          <span>{order.serviceName}</span>
        </div>
        {this.renderOrderByStatus(order)}
        <div className="order-buttom-container">
          <Button
            onClick={() => {
              this.handleButtonClick();
            }}
            text={order.quotes.length > 0 ? "VER ORÇAMENTOS" : "VER DETALHES"}
          />
        </div>
      </div>
    );
  }

  renderOrderByStatus = order => {
    const orderStatus = order.status;
    const quotes = this.props.order.quotes;

    switch (orderStatus) {
      default:
      case "": //open order
        return (
          <React.Fragment>
            <div className="order-remaining-time">
              <span>Validade: 5 dias</span>
            </div>
            <hr />
            <OpenQuotes quotes={quotes} key={quotes.id} />
            <div className="order-quote-quantity">
              {this.renderQuantidadeOrcamentos(order)}
            </div>
          </React.Fragment>
        );
      case "contratado":
        return (
          <React.Fragment>
            <div className="order-label-div order-remaining-time">
              <Rotulo label="contratado" />
            </div>
            <hr />
            <WorkerDetails
              quote={quotes.find(quote => quote.hired)}
              detailLevel="0"
            />
          </React.Fragment>
        );
      case "finalizado":
        return (
          <React.Fragment>
            <div className="order-label-div order-remaining-time">
              <Rotulo label="finalizado" />
            </div>

            <hr />
            <OpenQuotes quotes={quotes} key={quotes.id} />
            <div className="order-quote-quantity">
              {this.renderQuantidadeOrcamentos(order)}
            </div>
          </React.Fragment>
        );
      case "cancelado":
        return (
          <React.Fragment>
            <div className="order-label-div order-remaining-time">
              <Rotulo label="cancelado" />
            </div>

            <hr />
            <OpenQuotes quotes={quotes} key={quotes.id} />
            <div className="order-quote-quantity">
              {this.renderQuantidadeOrcamentos(order)}
            </div>
          </React.Fragment>
        );
    }
  };

  handleButtonClick = () => {
    this.props.onSelectOrder(this.props.order, this.props.filter);
  };

  renderQuantidadeOrcamentos = order => {
    let texto = "";
    if (order.quotes.length > 0) {
      texto = "Você já tem " + order.quotes.length + " orçamentos!";
    } else {
      texto = "Aguardando orçamentos";
    }

    return <div>{texto}</div>;
  };
}

export default Order;
