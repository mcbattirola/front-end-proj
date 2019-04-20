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
    const quotes = this.props.order.quotes;
    const hired = this.props.order.quotes.some(quote => quote.hired);

    return (
      <div className="orcamento orcamento-container">
        <div className="orcamento orcamento-titulo"> {order.serviceName} </div>
        {hired ? (
          <React.Fragment>
            <Rotulo />
            <WorkerDetails
              quote={quotes.find(quote => quote.hired)}
              detailLevel="0"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>Validade: 5 dias</p>
            <hr />
            <OpenQuotes quotes={quotes} key={quotes.id} />
            {this.renderQuantidadeOrcamentos(order)}
          </React.Fragment>
        )}

        <Button
          text={order.quotes.length > 0 ? "VER ORÇAMENTOS" : "VER DETALHES"}
        />
      </div>
    );
  }

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
