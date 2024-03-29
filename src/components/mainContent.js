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
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/prices" component={MarketPricesPage} />
        <Route exact path="/donate" component={DonatePage} />
      </Switch>
    );
  }
}
export default MainContent;
