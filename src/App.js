import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Chekcout from './Chekcout';
import './App.css';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <Chekcout></Chekcout>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
