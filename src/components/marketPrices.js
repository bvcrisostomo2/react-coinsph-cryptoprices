import React, { Component } from "react";
import Xrp from "./xrp";
import Btc from "./btc";
import Bch from "./bch";
import Eth from "./eth";

import { Grid, Cell } from "react-mdl";

export class MarketPrices extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid className="frist-grid">
            <Cell col={6} tablet={4}>
              <Xrp />
            </Cell>
            <Cell col={6} tablet={4}>
              <Btc />
            </Cell>
          </Grid>

          <Grid className="second-grd">
            <Cell col={6} tablet={4}>
              <Bch />
            </Cell>
            <Cell col={6} tablet={4}>
              <Eth />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default MarketPrices;