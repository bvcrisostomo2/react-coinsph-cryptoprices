import React from "react";
import { Route, Switch } from "react-router-dom";
//Route Components
import { MarketPricesPage } from "./marketPricesPage";
import { DonatePage } from "./donatePage";
import LandingPage from "./landingPage";

export class MainContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MarketPricesPage} />
        <Route exact path="/donate" component={DonatePage} />
        <Route exact path="/landing" component={LandingPage} />
      </Switch>
    );
  }
}
export default MainContent;
