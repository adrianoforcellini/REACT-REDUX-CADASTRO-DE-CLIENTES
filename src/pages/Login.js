import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/index";

// var retorno = false;
class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   email: "",
    //   senha: "",
    // };
    this.clickOnButton = this.clickOnButton.bind(this);
    // this.aauthenticated = this.aauthenticated.bind(this);
  }

  // handleChange(e) {
  //   const target = e.target;
  //   const name = target.name;
  //   this.setState({
  //     [name]: target.value,
  //   });
  // }

  // aauthenticated() {
  //   if (this.state.senha === "1" && this.state.email === "1") {
  //     retorno = true;
  //   } else {
  //     console.log(retorno);

  //   }
  // }

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
            <button onClick={() => redirect()}>REDIRECT</button>
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

 

// export function authenticated() {
//   if (retorno === true){
//   console.log('senha certa')
//   return true;

//   }else{
//     console.log('senha errada...')
//   return false;
// }
// }
export let retorno = false
// export  function authenticateda(){
// const state = store.getState();
// if ( state.Email === "aa" && state.Senha ==="aa"){
//  console.log('senha certa');
//  retorno = true;
//  console.log(retorno)
// }else{
// console.log('usuario ou senha errados')
// return false
// }
// }

function redirect (){
  window.location.href = "http://localhost:3000/clientes";

}

// export async function authenticated(){
//   await authenticateda();
// if (retorno === true){
//   console.log(retorno)
//   return true
// }
// console.log(retorno)
// return false
// }

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
