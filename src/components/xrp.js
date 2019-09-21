import React, { Component } from "react";

export class Xrp extends Component {
  state = {
    symbol: undefined,
    currency: undefined,
    product: undefined,
    bid: undefined,
    ask: undefined,
    expires_in_seconds: undefined
  };

  componentDidMount() {
    this.getMarket();
    this.refreshPage();
  }

  getMarket = async () => {
    //const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    const api_call = await fetch(`https://quote.coins.ph/v1/markets`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      symbol: data.markets[19].symbol,
      currency: data.markets[19].currency,
      product: data.markets[19].product,
      bid: data.markets[19].bid,
      ask: data.markets[19].ask,
      expires_in_seconds: data.markets[19].expires_in_seconds
    });
  };

  refreshPage() {
    setTimeout(
      function() {
        this.componentDidMount();
      }.bind(this),
      3000
    );
  }

  render() {
    return (
      <div>
        {/*<h1>Symbol: {this.state.symbol}</h1>
        <h1>currency: {this.state.currency}</h1>*/}

        <h5>XRP</h5>
        <h4>Sell: {this.state.bid}</h4>
        <h4>Buy: {this.state.ask}</h4>
      </div>
    );
  }
}

export default Xrp;
