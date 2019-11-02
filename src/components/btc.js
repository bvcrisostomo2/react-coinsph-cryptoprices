import React, { Component } from "react";

export class Btc extends Component {
  state = {
    symbol: undefined,
    currency: undefined,
    product: undefined,
    bid: undefined,
    ask: undefined,
    expires_in_seconds: undefined,
    timer: undefined
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
    //console.log(data);

    this.setState({
      symbol: data.markets[8].symbol,
      currency: data.markets[8].currency,
      product: data.markets[8].product,
      bid: data.markets[8].bid,
      ask: data.markets[8].ask,
      expires_in_seconds: data.markets[8].expires_in_seconds
    });
  };

  refreshPage() {
    this.timer = setTimeout(
      function() {
        this.componentDidMount();
      }.bind(this),
      5000
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="crypto-container">
        <h5>Bitcoin</h5>
        <h4 className="sell-font">Sell: {this.state.bid}</h4>
        <h4 className="buy-font">Buy: {this.state.ask}</h4>
        <p>(Price in PHP)</p>
      </div>
    );
  }
}

export default Btc;
