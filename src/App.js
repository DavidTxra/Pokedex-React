import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from './containers/List.js';
import Pokemon from './Pokemon.js';

function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path='/' component={List} />
        <Route path="/pokemon/:name" component={Pokemon} />
    </div>
    </Router>
  );
}

export default App;