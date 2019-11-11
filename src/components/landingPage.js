import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
import { MarketPricesLanding } from "./marketPricesLanding";
export class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="landing-page-container">
          <div className="landing-section-one">
            <Grid>
              <Cell col={6}>
                <div
                  style={{
                    margin: "auto",
                    marginTop: "10vh",
                    width: "80%"
                  }}
                >
                  <img
                    src={require("../images/value.png")}
                    alt="value"
                    className="landing-image"
                  />
                  <h3 className="header-landing-1">
                    Track market prices anytime!
                  </h3>
                  <h5 className="header-landing-1">
                    A convenient way to track market prices from Coins.ph!
                  </h5>
                  <Link to="/">
                    <button className="button-landing">Check Prices!</button>
                  </Link>
                </div>
              </Cell>
              <Cell col={6}>
                <MarketPricesLanding />
                {/*<img
                  src={require("../images/bitcoin-flat.png")}
                  alt="bitcoin"
                  className="landing-img"
                />*/}
              </Cell>
            </Grid>
          </div>
          <div className="landing-section-two">
            {/*Real Time Complete No hassle*/}
            <div className="grid-section-two">
              <Grid>
                <Cell col={4} tablet={8} className="why-section-2">
                  <img
                    src={require("../images/real-time-flat.png")}
                    alt="api"
                    className="why-image"
                  />
                  <h4>Real Time Prices</h4>
                  <p>Prices are being tracked real time</p>
                </Cell>
                <Cell col={4} tablet={8} className="why-section-2">
                  <img
                    src={require("../images/api-flat.png")}
                    alt="real-time"
                    className="why-image"
                  />
                  <h4>Legitimate Data</h4>
                  <p>Data comes from coins.ph API</p>
                </Cell>
                <Cell col={4} tablet={8} className="why-section-2">
                  <img
                    src={require("../images/exchange-flat.png")}
                    alt="exchange"
                    className="why-image"
                  />
                  <h4>Complete Fiat Pairs</h4>
                  <p>Currently have BTC, ETH, XRP, and BCH to PHP</p>
                </Cell>
              </Grid>
            </div>
          </div>
          <div className="landing-section-three">
            <div className="donate-section-three">
              <h4>
                Would you like to offer a sip?{" "}
                <span role="img" aria-label="coffee">
                  ☕
                </span>
              </h4>
              <Link to="donate" className="links">
                Go to Donate Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
