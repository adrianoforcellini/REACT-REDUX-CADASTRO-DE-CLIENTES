import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./404";
import store from "../store/index";
import Clientes from "./Clientes";
import Loginst from "./Loginst";

function authenticated() {
  let state = store.getState();
  if (state.Authenticated === true) {
    return true;
  }
  return false;
}

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={(props) =>
      authenticated() ? <Component {...props} /> : <Redirect to={{ pathname: "/loginst" }} />
    }
  />
);

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/clientes" component={Clientes} />
          <Route exact path="/" component={Home} />
          <Route exact path="/loginst" component={Loginst} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
