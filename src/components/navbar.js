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

import mainContent, { MainContent } from "./mainContent";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>Coins.ph</span>
                <strong> Prices</strong>
              </span>
            }
          >
            <Navigation>
              <Link to="/">About</Link>
              <Link to="/donate">Donate</Link>
            </Navigation>
          </Header>
          <MainContent />
        </Layout>
      </div>
    );
  }
}

export default Navbar;
