import React, { Component } from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";

import { MainContent } from "./mainContent";
import { Link } from "react-router-dom";
//import { FooterComponent } from "./footerComponent";

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
              <Link to="/">Prices</Link>
              <Link to="/donate">Donate</Link>
            </Navigation>
          </Header>
          <Content>
            <MainContent />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Navbar;
