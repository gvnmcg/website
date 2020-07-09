import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MDComponent from "./MDComponent";
import Playlists from "./Playlists";

const App = () => (
  <div className="App">
    <h1>Gavin McGuire</h1>

    <Router>
      <ul>
        <li>
          <Link to="/resume"> Resume </Link>
        </li>

        <li>
          <Link to="/playlists"> Playlists</Link>
        </li>
      </ul>

      <a href="mailto:gvnmcg517@gmail.com">gvnmcg517@gmail.com</a>
      <br />
      <a href="https://github.com/gvnmcg">github.com/gvnmcg</a>

      <Switch>
        <Route path="/playlists">
          <Playlists />
        </Route>
        <Route path="/resume">
          <MDComponent />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
