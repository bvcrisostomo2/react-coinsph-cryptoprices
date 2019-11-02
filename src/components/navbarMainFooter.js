import React, { Component } from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";

import { MainContent } from "./mainContent";
import { Link } from "react-router-dom";
import { FooterComponent } from "./footerComponent";

export class NavbarMainFooter extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <Link to="/landing" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#fff" }}>Coins.ph </span>
                </Link>
                <strong>Prices</strong>
              </span>
            }
            style={{ background: "#00a075" }}
          >
            <Navigation>
              <Link to="/">Prices</Link>
              <Link to="/donate">Donate</Link>
            </Navigation>
          </Header>
          <Content>
            <MainContent />
            <FooterComponent />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NavbarMainFooter;
