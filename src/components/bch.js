import React, { Component } from "react";
import { Card, CardActions, CardText, CardTitle, Button } from "react-mdl";
export class Bch extends Component {
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
    //console.log(data);

    this.setState({
      symbol: data.markets[0].symbol,
      currency: data.markets[0].currency,
      product: data.markets[0].product,
      bid: data.markets[0].bid,
      ask: data.markets[0].ask,
      expires_in_seconds: data.markets[0].expires_in_seconds
    });
  };

  refreshPage() {
    setTimeout(
      function() {
        this.componentDidMount();
      }.bind(this),
      10000
    );
  }

  render() {
    return (
      <div className="crypto-container">
        <h5>Bitcoin Cash</h5>
        <h4 className="sell-font">Sell: {this.state.bid}</h4>
        <h4 className="buy-font">Buy: {this.state.ask}</h4>
        <p>(Price in PHP)</p>
      </div>
    );
  }
}

export default Bch;
