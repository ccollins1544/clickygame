import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer'
import Home from './pages/Home';
import NoMatch from './pages';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NoMatch} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  ); 
}

export default App;