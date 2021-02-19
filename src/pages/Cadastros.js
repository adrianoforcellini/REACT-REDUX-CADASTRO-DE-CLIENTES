import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/index";
import { Link } from "react-router-dom";

class Cadastros extends Component {
  constructor(props) {
    super(props);
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar() {
    const state = store.getState();
    console.log(state);
  }

  render() {
    return (
      <div className="login">
        <main className="main">
          <div className="form">
            <input
              className="input text"
              type="text"
              name="senha"
              placeholder="Nome"
              onChange={({ target }) => this.props.Nome(target.value)}
              required={true}
            />
            <input
              className="input text"
              type="text"
              name="idade"
              placeholder="Idade"
              onChange={({ target }) => this.props.Idade(target.value)}
              required={true}
            />
            <input
              className="input text"
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={({ target }) => this.props.EmailDoCliente(target.value)}
              required={true}
            />
            <button className="button" type="button" onClick={() => this.cadastrar()}>
              {" "}
              Cadastrar Cliente{" "}
            </button>
            <button className="button" type="button">
              <Link to="/cadastrados">Clientes Cadastrados </Link>
            </button>
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Nome: state.Nome,
  Idade: state.Idade,
  EmailDoCliente: state.EmailDoCliente,
});

const mapDispatchToProps = (dispatch) => ({
  Nome: (Nome) => dispatch({ type: "INPUT_NOME", Nome }),
  Idade: (Idade) => dispatch({ type: "INPUT_IDADE", Idade }),
  EmailDoCliente: (EmailDoCliente) => dispatch({ type: "INPUT_EMAIL", EmailDoCliente }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastros);
