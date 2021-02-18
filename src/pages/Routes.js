import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./404";
// import store from "../store/index";
import { connect } from "react-redux";
// import { authenticateda } from "./Login";
import Clientes from "./Clientes";
import Loginst from "./Loginst";
// import retorno from "./Login";

function authenticated () {
//  let state = store.getState()
    // if ( state.Authenticated === true) {
      return false
  //   }else{
  //     return false
  // }
}
 

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/loginst", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
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


const mapStateToProps = (state) => ({
  Email: state.Email,  
  Senha: state.Senha,
  Authenticated: state.Authenticated,
  Logout : state.Authenticated,

});

// const mapDispatchToProps = (dispatch) => ({
//   Email: (Email) => dispatch({ type: "CHANGE_EMAIL", Email }),
//   Senha: (Senha) => dispatch({ type: "CHANGE_SENHA", Senha }),
//   Authenticated: (Authenticated) => dispatch({ type: "AUTHENTICATED", Authenticated }),
//   Logout: (Authenticated) => dispatch({ type: "LOGOUT", Authenticated }),

// });
export default connect(mapStateToProps)(Routes);
