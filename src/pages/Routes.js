import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./404";
import Cadastros from "./Cadastros";
import Loginst from "./Loginst";
import ClientesCadastrados from "./ClientesCadastrados";
import { authenticated } from "./Login";

const PrivateRoute = ({ component: Component }) => (
  <Route render={() => (authenticated() ? <Component /> : <Redirect to="/loginst" />)} />
);

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/cadastros" component={Cadastros} />
          <Route exact path="/" component={Home} />
          <Route exact path="/loginst" component={Loginst} />
          <Route exact path="/cadastrados" component={ClientesCadastrados} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
