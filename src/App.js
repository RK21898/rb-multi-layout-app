import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';


import About from './pages/main/About';
import Home from './pages/main/Home';
import Login from './pages/main/Login';

import Navbar from './components/Navbar';

//import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="router-container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" >
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Home" >
              <Home />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Login'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
