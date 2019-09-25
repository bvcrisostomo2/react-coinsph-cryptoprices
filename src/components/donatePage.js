import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class DonatePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid>
            <Cell col={6}>
              <div style={{ margin: "auto" }}>
                <h3>Bitcoin Address</h3>
                <img
                  src={require("../images/btc-address.png")}
                  alt="QR CODE"
                  className="qr-img"
                />
                <div>3QVw6mC9M556bnZPaQfv7oC8ox4z7hTTUk</div>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default DonatePage;
