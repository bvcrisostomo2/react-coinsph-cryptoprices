import React, { Component } from "react";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  FABButton,
  Icon
} from "react-mdl";

import MarketPrices from "./marketPrices";

export class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>Area / </span>
                <strong>The Title</strong>
              </span>
            }
          >
            <Navigation>
              <a href="#">About</a>
              <a href="#">Donate</a>
            </Navigation>
          </Header>
          <MarketPrices />
        </Layout>
      </div>
    );
  }
}

export default Navbar;
