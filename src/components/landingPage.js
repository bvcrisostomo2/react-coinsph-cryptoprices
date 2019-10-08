import React, { Component } from "react";

export class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="landing-page-container">
          <div className="landing-section-one">
            <p>>Hello Welcome!</p>
            <button className="button-landing">Check Prices!</button>
          </div>
          <div className="landing-section-two">
            Real Time Complete No hassle
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
