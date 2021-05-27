import React from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";

import MDComponent from "./components/MDComponent/MDComponent";
import Playlists from "./components/Playlists/Playlists";
import FretboardApp from "./components/TabApp/Fretbaoard";
import "./style/App.css";

const App = () => (
  <div className="App">
    <HashRouter>
      <div className="sidebar">
        <div className="header">
          <h1>Gavin McGuire</h1>
        </div>
        <div className="navigator">
          <Link to="/"> _____ </Link>
          {/* <Link to="/resume"> Resume </Link> */}
          <Link to="/fb"> Fretboard App</Link>
          {/* <Link to="/playlists"> Playlists</Link> */}
        </div>
        <div className="links">
          <br />
          <a href="https://github.com/gvnmcg">github.com/gvnmcg</a>
          <br />
          <a href="mailto:gvnmcg517@gmail.com">mailto:gvnmcg517@gmail.com</a>
        </div>
      </div>

      <div className="content">
        <Switch>
          <Route path="/resume" component={MDComponent} />
          <Route path="/playlists" component={Playlists} />
          <Route path="/fb" component={FretboardApp} />
        </Switch>
      </div>
    </HashRouter>
  </div>
);

export default App;
