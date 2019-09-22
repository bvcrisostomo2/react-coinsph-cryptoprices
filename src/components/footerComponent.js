import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

export class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <Footer size="mini" className="footer-style">
          <FooterSection
            type="left"
            logo="© 2019 coinsphprices"
          ></FooterSection>
          <FooterSection type="left" logo="Resources">
            <FooterLinkList>
              <div>React-MDL</div>
              <div>
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
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default Footer;
