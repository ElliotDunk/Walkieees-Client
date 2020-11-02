import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/pages/index/Index";
import WalksSearch from "./components/pages/walksSearch/WalksSearch";
import WalkView from "./components/pages/walkView/WalkView";
import Registration from "./components/pages/registration/Registration";
import PrivacyPolicy from "./components/pages/privacyPolicy/PrivacyPolicy";
import Terms from "./components/pages/terms/Terms";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/#_=_">
          <Index />
        </Route>
        <Route path="/walks/search">
          <WalksSearch />
        </Route>
        <Route path="/walks/:id">
          <WalkView />
        </Route>
        <Route path="/register/:data?">
          <Registration />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
