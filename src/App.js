import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import authenticationCheck from "./utils/authenticationCheck";
import Index from "./components/pages/index/Index";
import WalksSearch from "./components/pages/walksSearch/WalksSearch";
import WalkView from "./components/pages/walkView/WalkView";
import Registration from "./components/pages/registration/Registration";
import AccountView from "./components/pages/accountView/AccountView";
import ResetPassword from "./components/pages/resetPassword/ResetPassword";
import PrivacyPolicy from "./components/pages/privacyPolicy/PrivacyPolicy";
import Terms from "./components/pages/terms/Terms";
import "./App.css";

function App() {
  const loggedIn = authenticationCheck();

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
        <Route path="/resetpassword/:data?">
          <ResetPassword />
        </Route>
        <Route exact path="/profile/:status?">
          {loggedIn ? <AccountView /> : <Redirect to="/" />}
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
