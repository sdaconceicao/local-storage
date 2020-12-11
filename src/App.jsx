import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Cookies from './Lessons/01-Cookies';
import LocalStorage from './Lessons/02-LocalStorage';
import IndexDB from './Lessons/03-IndexDB';
import LocalForage from './Lessons/04-LocalForage';
import PouchDB from './Lessons/05-PouchDB';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <header>
          
        </header>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li className={classes.navListItem}><Link to="cookies">Cookies</Link></li>
            <li className={classes.navListItem}><Link to="localStorage">Local Storage</Link></li>
            <li className={classes.navListItem}><Link to="indexDB">IndexDB</Link></li>
            <li className={classes.navListItem}><Link to="localForage">LocalForage</Link></li>
            <li className={classes.navListItem}><Link to="pouchDB">PouchDB</Link></li>
          </ul>
        </nav>
        <div className={classes.content}>
            <Switch>      
              <Route exact path="/cookies" render={() => <Cookies />} />
              <Route exact path="/localStorage" render={() => <LocalStorage />} />
              <Route exact path="/indexDB" render={() => <IndexDB />} />
              <Route exact path="/localForage" render={() => <LocalForage />} />
              <Route exact path="/pouchDB" render={() => <PouchDB />} />
            </Switch>
          </div>
       </Router>
    </div>
  );
}

export default App;
