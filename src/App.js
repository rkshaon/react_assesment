import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <Router>
      <nav>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
