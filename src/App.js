import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/pages/index/Index";
import WalksSearch from "./components/pages/walksSearch/WalksSearch";
import WalksView from "./components/pages/walksView/WalksView";
import PrivacyPolicy from "./components/pages/privacyPolicy/PrivacyPolicy";
import Terms from "./components/pages/terms/Terms";
import ValidateSession from "./session/validateSession";
import "./App.css";

function App() {
  ValidateSession();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/walks/search">
          <WalksSearch />
        </Route>
        <Route path="/walks/:id">
          <WalksView />
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
