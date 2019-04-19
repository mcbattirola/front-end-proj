import React, { Component } from "react";
import "../App.css";

class Pedido extends Component {
  state = {};

  render() {
    const pedido = this.props.pedido;
    return (
      <div className="orcamento orcamento-container">
        <div className="orcamento orcamento-titulo"> {pedido.serviceName} </div>
        <div className="orcamento orcamento-validade">Validade: 5 dias</div>
        <div className=".orcamento-divisor" />
        <hr />
        <div>fotos</div>
        {this.renderQuantidadeOrcamentos(pedido)}
        <button className="orcamento-botao">VER ORÇAMENTOS</button>
      </div>
    );
  }

  renderQuantidadeOrcamentos = pedido => {
    let texto = "";
    if (pedido.quotes.length > 0) {
      texto = "Você já tem " + pedido.quotes.length + " orçamentos!";
    } else {
      texto = "Aguardando orçamentos";
    }

    return <div>{texto}</div>;
  };
}

export default Pedido;
