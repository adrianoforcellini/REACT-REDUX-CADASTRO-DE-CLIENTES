import React from "react";

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

const App = () => <Routes />

export default App;
