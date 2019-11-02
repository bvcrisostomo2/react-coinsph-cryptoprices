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
                  <h3 className="header-landing-1">
                    Track market prices anytime!
                  </h3>
                  <h5 className="header-landing-1">
                    A convenient way to track market prices from Coins.ph! All
                    data that comes from coins.ph is being tracked real time.
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
                    src={require("../images/bitcoin-flat.png")}
                    alt="bitcoin"
                    className="why-image"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Cell>
                <Cell col={4} tablet={8} className="why-section-2">
                  <img
                    src={require("../images/bitcoin-flat.png")}
                    alt="bitcoin"
                    className="why-image"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Cell>
                <Cell col={4} tablet={8} className="why-section-2">
                  <img
                    src={require("../images/bitcoin-flat.png")}
                    alt="bitcoin"
                    className="why-image"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Cell>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
