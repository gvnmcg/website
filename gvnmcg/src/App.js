import React from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";

import MDComponent from "./components/MDComponent/MDComponent";
import Playlists from "./components/Playlists/Playlists";
import CBTApp from "./components/CBTApp/CBTApp";
import TabApp from "./components/TabApp/TabApp";
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
          <Link to="/"> Home </Link>
          <Link to="/resume"> Resume </Link>
          <Link to="/playlists"> Playlists</Link>
          <Link to="/cbt"> CBT</Link>
          <Link to="/tab"> Fretboard ver 1</Link>
          <Link to="/fb"> Fretboard ver 2</Link>
          <Link to="/styles"> Styles</Link>
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
          <Route path="/cbt" component={CBTApp} />
          <Route path="/tab" component={TabApp} />
          <Route path="/fb" component={FretboardApp} />
        </Switch>
      </div>
    </HashRouter>
  </div>
);

export default App;
