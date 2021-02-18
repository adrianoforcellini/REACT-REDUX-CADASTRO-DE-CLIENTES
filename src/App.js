import React from "react";
import { connect } from "react-redux";

import Routes from "./pages/Routes";

// const PrivateRoute = ({ component: { Clientes, ...rest } }) => {
//   <Route
//     {...rest}
//     render={(props) =>
//       authenticated() ? (
//         <Clientes {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />;
// };

const App = () => <Routes props={mapStateToProps} />

const mapStateToProps = (state) => ({
    Email: state.Email,  
    Senha: state.Senha,
    Authenticated: state.Authenticated,
    Logout : state.Authenticated,
  
  });
  
  export default connect(mapStateToProps)(App);
