import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "../components/Header";
import IndexPage from "../components/IndexPage";
import AddStockPage from "../components/AddStockPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={IndexPage} />
      <Route path="/add" exact={true} component={AddStockPage} />
    </Switch>
  </Router>
);

export default AppRouter;
