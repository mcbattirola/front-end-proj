import React, { Component } from "react";
import Order from "../components/order";
import OrderTombstone from "../components/orderTombstone";

class OrderList extends Component {
  state = {
    filter: "",
    isLoaded: false
  };

  componentDidMount() {
    const asyncDebug = false;
    if (!asyncDebug) {
      fetch("http://5c5d8680ef282f0014c3d956.mockapi.io/api/v1/orders")
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              pedidos: result,
              filter: this.props.lastFilter,
              isLoaded: true
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    } else {
      this.setState({
        pedidos: [],
        isLoaded: true
      });
    }
  }

  render() {
    return (
      <div className="order-body">
        {this.state.isLoaded
          ? this.renderPedidos(this.state.pedidos)
          : this.renderTombstones()}
      </div>
    );
  }

  handleFilter = filter => {
    this.setState({
      filter: filter
    });
    //send selected filter to app.js so it can reutilize the same on the page back
  };

  returnFilteredInfos = pedidos => {
    let openArr = pedidos.filter(
      pedido => pedido.status === "" || pedido.status === "contratado"
    );
    let canceledArr = pedidos.filter(pedido => pedido.status === "cancelado");
    let finishedArr = pedidos.filter(pedido => pedido.status === "finalizado");

    let selectedArr;
    if (this.state.filter === "" || this.state.filter === "contratado") {
      selectedArr = openArr;
    } else if (this.state.filter === "cancelado") {
      selectedArr = canceledArr;
    } else {
      selectedArr = finishedArr;
    }

    return {
      openQuantity: openArr.length,
      finishedQuantity: finishedArr.length,
      canceledQuantity: canceledArr.length,
      filteredOrders: selectedArr
    };
  };

  renderPedidos = pedidos => {
    if (typeof pedidos === "undefined" || pedidos.length === 0) {
      return <p> Você não possui pedidos. </p>;
    }
    const filteredInfos = this.returnFilteredInfos(pedidos);
    const selectedFilterClass = "filter-selected";
    return (
      <React.Fragment>
        <div className="container">
          <div className="row row-order-list-header">
            <div className="col col-12 col-sm-12 col-md-3 col-xl-3 text-center">
              <span>MEUS ORÇAMENTOS</span>
            </div>
            <div className="col col-12 col-sm-12 col-md-9 col-xl-9">
              <div className="row justify-content-between row-filter">
                <div className="col col-4 col-xl-4">
                  <span
                    onClick={() => this.handleFilter("")}
                    className={
                      this.state.filter === "" ? selectedFilterClass : ""
                    }
                  >
                    Abertos ({filteredInfos.openQuantity}){" "}
                  </span>
                </div>
                <div className="col col-4 col-xl-4">
                  <span
                    onClick={() => this.handleFilter("finalizado")}
                    className={
                      this.state.filter === "finalizado"
                        ? selectedFilterClass
                        : ""
                    }
                  >
                    Finalizados({filteredInfos.finishedQuantity})
                  </span>
                </div>
                <div className="col col-4 col-xl-4">
                  <span
                    onClick={() => this.handleFilter("cancelado")}
                    className={
                      this.state.filter === "cancelado"
                        ? selectedFilterClass
                        : ""
                    }
                  >
                    Cancelados({filteredInfos.canceledQuantity})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="main-section">
          <div className="container container-orders">
            <div className="row orcamento-row">
              {filteredInfos.filteredOrders.map(pedido => (
                <div
                  key={pedido.id}
                  className="col col-12 col-md-6 col-lg-6 col-xl-4 top-buffer"
                >
                  <Order
                    order={pedido}
                    key={pedido.id}
                    onSelectOrder={this.props.onSelectOrder}
                    filter={this.state.filter}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };

  renderTombstones = () => {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row row-order-list-header">
            <div className="col col-12 col-xl-3">
              <span>MEUS ORÇAMENTOS</span>
            </div>
            <div className="col col-xl-9">
              <div className="row justify-content-between row-filter">
                <div className="col col-xl-4">
                  <span>Abertos( )</span>
                </div>
                <div className="col col-xl-4">
                  <span>Finalizados( )</span>
                </div>
                <div className="col col-xl-4">
                  <span>Cancelados( )</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="main-section">
          <div className="container container-orders">
            <div className="row orcamento-row">
              <div className="col col-12 col-md-6 col-lg-6 col-xl-4 top-buffer">
                <OrderTombstone />
              </div>
              <div className="col col-12 col-md-6 col-lg-6 col-xl-4 top-buffer">
                <OrderTombstone />
              </div>
              <div className="col col-12 col-md-6 col-lg-6 col-xl-4 top-buffer">
                <OrderTombstone />
              </div>
              <div className="col col-12 col-md-6 col-lg-6 col-xl-4 top-buffer">
                <OrderTombstone />
              </div>
              <div className="col col-12 col-md-6 col-lg-6 col-xl-4 top-buffer">
                <OrderTombstone />
              </div>
              <div className="col col-12 col-md-6 col-lg-6 col-xl-4 top-buffer">
                <OrderTombstone />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };
}
export default OrderList;
