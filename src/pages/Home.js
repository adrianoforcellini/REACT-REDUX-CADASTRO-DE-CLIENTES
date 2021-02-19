import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="login">
        <main className="main">
          <div className="form">
            <h1>Cadastro de Clientes</h1>

            <button className="button">
              <Link to={"/login"}>FAZER LOGIN</Link>
            </button>
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default Home;
