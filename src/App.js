import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/clientes" component={ Clientes } />
        <Route exact path="/" component={ Home } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;