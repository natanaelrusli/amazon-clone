import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Chekcout from './Chekcout';
import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  // Piece of code wich runs based on a given condition
  // useeffect

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Logged In
        dispatch({
          type: "SET_USER",
          user: authUser,
        })

      } else {
        // Logged Out
        dispatch({
          type: "SET_USER",
          user: null,
        })

      }
    });

    return () => {
      // Any cleanup operation here
      unsubscribe();
    };
  }, []);

  console.log('User is >>> ' , user);

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