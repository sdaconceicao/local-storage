import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import LocalStorage from './LocalStorage';
import LocalForage from './LocalForage';
import IndexDB from './IndexDB';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li><Link to="localStorage">Local Storage</Link></li>
            <li><Link to="indexDB">IndexDB</Link></li>
            <li><Link to="localForage">LocalForage</Link></li>
          </ul>
        </header>
        <>
        <Switch>      
          <Route exact path="/localStorage" render={() => <LocalStorage />} />
          <Route exact path="/indexDB" render={() => <IndexDB />} />
          <Route exact path="/localForage" render={() => <LocalForage />} />
        </Switch>
      </>
       </Router>
    </div>
  );
}

export default App;
