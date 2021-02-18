import React, { Component } from "react";
import { connect } from "react-redux";

class Loginst extends Component {
  render() {
    return (
      <div className="center">
        <div className="container">
          <div className="loginst">Se não quer fazer login,</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Email: state.Email,  
  Senha: state.Senha,
  Authenticated: state.Authenticated,
  Logout : state.Authenticated,

});

export default connect(mapStateToProps)(Loginst);
