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
        <div className="orcamento orcamento-titulo"> {order.serviceName} </div>
        {this.renderOrderByStatus(order)}
        <Button
          onClick={() => {
            this.handleButtonClick();
          }}
          text={order.quotes.length > 0 ? "VER ORÇAMENTOS" : "VER DETALHES"}
        />
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
            <p>Validade: 5 dias</p>
            <hr />
            <OpenQuotes quotes={quotes} key={quotes.id} />
            {this.renderQuantidadeOrcamentos(order)}
          </React.Fragment>
        );
      case "contratado":
        return (
          <React.Fragment>
            <Rotulo label="contratado" />
            <WorkerDetails
              quote={quotes.find(quote => quote.hired)}
              detailLevel="0"
            />
          </React.Fragment>
        );
      case "finalizado":
        return (
          <React.Fragment>
            <Rotulo label="finalizado" />
            <p>Validade: 5 dias</p>
            <hr />
            <OpenQuotes quotes={quotes} key={quotes.id} />
            {this.renderQuantidadeOrcamentos(order)}
          </React.Fragment>
        );
      case "cancelado":
        return (
          <React.Fragment>
            <Rotulo label="cancelado" />
            <p>Validade: 5 dias</p>
            <hr />
            <OpenQuotes quotes={quotes} key={quotes.id} />
            {this.renderQuantidadeOrcamentos(order)}
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
