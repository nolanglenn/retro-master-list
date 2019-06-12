import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from './components/Form';
import List from './components/List'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Retro Master List</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to='/' className="nav-link" href="#">Home <span className="sr-only">Retro Master List</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/add-game' className="nav-link" href="#">Add Game</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
            <Route path="/" exact component={List} />
            <Route path="/add-game" component={Form} />
          </div>
        </Router>
      
    );
  }
}

export default App;
