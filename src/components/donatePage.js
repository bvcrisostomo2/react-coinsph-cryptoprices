import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class DonatePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{
            width: "80%",
            marginTop: "12vh",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Grid>
            <Cell col={6}>
              <div style={{ margin: "auto" }}>
                <h3>Bitcoin Address</h3>
                <img
                  src={require("../images/btc-address.png")}
                  alt="QR CODE"
                  className="qr-img"
                />
                <div>
                  <p>3QVw6mC9M556bnZPaQfv7oC8ox4z7hTTUk</p>
                </div>
              </div>
            </Cell>
            <Cell col={6}>
              <div style={{ margin: "auto" }}>
                <h3>XRP Address</h3>
                <img
                  src={require("../images/xrp-address.png")}
                  alt="QR CODE"
                  className="qr-img"
                />
                <div>
                  <p>rU2mEJSLqBRkYLVTv55rFTgQajkLTnT6mA</p>
                </div>
                <div>
                  <p>Destination Tag: 246152</p>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default DonatePage;
