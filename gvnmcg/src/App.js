import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MDComponent from "./components/MDComponent";
import Playlists from "./components/Playlists";
import Art from "./components/Art";
import "./style/App.css";



const App = () => (
  <div className="App">
    <div className="header">
      <h1>Gavin McGuire</h1>
    </div>

    <Router>
      <div className="navigator">
        <Link to="/"> Home </Link>
        <Link to="/resume"> Resume </Link>
        <Link to="/playlists"> Playlists</Link>
        <Link to="/styles"> Styles</Link>
        <Link to="/art"> Art</Link>
      </div>

      <div className="links">
        <a href="https://github.com/gvnmcg">github.com/gvnmcg</a>
        <br />
        <a href="mailto:gvnmcg517@gmail.com">mailto:gvnmcg517@gmail.com</a>
      </div>

      <div className="content">
        <Switch>
        
          <Route path="/resume">
            <MDComponent />
          </Route>

          <Route path="/playlists">
            <Playlists />
          </Route>

          <Route path="/styles">
            <p>In progress</p>
          </Route>

          <Route path="/art">
            <Art />
          </Route>

        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
