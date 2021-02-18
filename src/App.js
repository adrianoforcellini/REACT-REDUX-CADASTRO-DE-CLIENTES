import React from "react";
import { connect } from "react-redux";

import Routes from "./pages/Routes";



const App = () => <Routes props={mapStateToProps} />

const mapStateToProps = (state) => ({
    Email: state.Email,  
    Senha: state.Senha,
    Authenticated: state.Authenticated,
    Logout : state.Authenticated,
  
  });
  
  export default connect(mapStateToProps)(App);
