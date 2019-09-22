import React from "react";
import { Route, Switch } from "react-router-dom";
//Route Components
import { MarketPrices } from "./marketPrices";
import { DonatePage } from "./donatePage";

export class MainContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MarketPrices} />
        <Route exact path="/donate" component={DonatePage} />
      </Switch>
    );
  }
}
export default MainContent;
