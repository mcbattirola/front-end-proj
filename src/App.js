import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import OrderList from "./views/orderList";
import OrderDetail from "./views/orderDetail";
import ExtraInforation from "./components/extraInformation";
import Footer from "./components/footer";

class App extends Component {
  state = {
    orderListFilter: "",
    selectedOrder: false
  };
  render() {
    return (
      <React.Fragment>
        <Navbar text="Navbar" />
        <main className="main">
          {this.state.selectedOrder ? (
            <OrderDetail
              order={this.state.selectedOrder}
              onSelectOrder={this.handleSelectOrder}
              filter={this.state.orderListFilter}
            />
          ) : (
            <OrderList
              onSelectOrder={this.handleSelectOrder}
              lastFilter={this.state.orderListFilter}
            />
          )}
          <ExtraInforation />
        </main>
        <Footer />
      </React.Fragment>
    );
  }

  handleSelectOrder = (order, filter) => {
    this.setState({
      selectedOrder: order,
      orderListFilter: filter
    });
  };
}

export default App;
