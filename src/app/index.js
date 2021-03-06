import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './landing';
import Example from './example';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path = '/' component = {Landing} />
            <Route exact path = "/example" component = {Example} />
          </div>
      </Router>
    );
  }
}

export default App;
