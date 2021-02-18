import React, { Component } from "react";
import { connect } from "react-redux";

class Clientes extends Component {
  render() {
    return <div>LISTAGEM DOS CLIENTES</div>;
  }
}


const mapStateToProps = (state) => ({
  Email: state.Email,  
  Senha: state.Senha,
  Authenticated: state.Authenticated,
  Logout : state.Authenticated,

});

export default connect(mapStateToProps)(Clientes);
