import React, { Component } from "react";
import "./App.css";
import Pedido from "./components/pedido";

class App extends Component {
  state = {
    pedidos: [
      {
        id: 1,
        serviceName: "Limpeza Residencial",
        diasValidade: 5,
        quotes: [{}, {}]
      },

      {
        id: 2,
        serviceName: "Diaristas e faxineiras",
        diasValidade: 8,
        quotes: [{}, {}]
      },
      {
        id: 3,
        serviceName: "Conserto de vazamento",
        diasValidade: 2,
        quotes: []
      }
    ]
  };
  render() {
    return <div>{this.renderPedidos(this.state.pedidos)}</div>;
  }

  renderPedidos = pedidos => {
    if (pedidos.length === 0) {
      return <p> Você não possui pedidos. </p>;
    }
    return (
      <React.Fragment>
        {pedidos.map(pedido => (
          <Pedido pedido={pedido} key={pedido.id} />
        ))}
      </React.Fragment>
    );
  };
}

export default App;
