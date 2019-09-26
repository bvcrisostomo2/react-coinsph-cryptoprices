import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

export class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <Footer
          size="mini"
          className="footer-style"
          style={{ background: "#8a9199" }}
        >
          <FooterSection
            type="left"
            logo="© 2019 coinsphprices"
          ></FooterSection>
          <FooterSection type="left" logo="Resources">
            <FooterLinkList>
              <div style={{ color: "#fff" }}>React-MDL</div>
              <div style={{ color: "#fff" }}>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div style={{ color: "#fff" }}>Google Fonts</div>
              <div style={{ color: "#fff" }}>api.coins.asia</div>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default Footer;
