import React, { Component } from "react";
import Xrp from "./xrp";
import Btc from "./btc";
import Bch from "./bch";
import Eth from "./eth";

import { Grid, Cell } from "react-mdl";

export class MarketPricesPage extends Component {
  /* state = { _isMounted: false };*/

  componentDidMount() {
    /* this.setState({
      _isMounted: true
    });*/
    console.log("parent mounted");
  }
  componentWillUnmount() {
    /* this.setState({
      _isMounted: false
    });*/

    console.log("parent unmounted");
  }
  render() {
    return (
      <div>
        <div
          style={{
            height: "100%",
            width: "80%",
            marginTop: "12vh",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Grid className="first-grid">
            <Cell col={6} tablet={4}>
              <Xrp />
            </Cell>
            <Cell col={6} tablet={4}>
              <Btc />
            </Cell>
          </Grid>

          <Grid className="second-grid">
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

export default MarketPricesPage;
