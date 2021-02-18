import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/index";
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.clickOnButton = this.clickOnButton.bind(this);
  }


  clickOnButton() {
    const state = store.getState();
      if (state.Senha === 'aa' && state.Email==="aa") {
        this.props.Authenticated()
      }else{
      this.props.Logout()
      }
    }
    
  render() {
    return (
      <div className="login">
        <main className="main">
          <div className="form">
            <h1>Faça login usando sua conta</h1>
            <input
              className="input text"
              type="text"
              name="email"
              placeholder="e-mail"
              onChange={({ target }) => this.props.Email(target.value)}
            />
            <input
              className="input text"
              type="text"
              name="senha"
              placeholder="senha"
              onChange={({ target }) => this.props.Senha(target.value)}
            />
            <button className="button" type="button" onClick={() => this.clickOnButton()}> 
                         LOGIN
            </button >
            <Link to="/clientes">REDIRECT \o/</Link>  
                    </div>
        </main>
        <footer className="footer"></footer>
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


const mapDispatchToProps = (dispatch) => ({
    Email: (Email) => dispatch({ type: "CHANGE_EMAIL", Email }),
    Senha: (Senha) => dispatch({ type: "CHANGE_SENHA", Senha }),
    Authenticated: (Authenticated) => dispatch({ type: "AUTHENTICATED", Authenticated }),
    Logout: (Authenticated) => dispatch({ type: "LOGOUT", Authenticated }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
