import React from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";

import MDComponent from "./components/MDComponent./MDComponent";
import Playlists from "./components/Playlists/Playlists";
import CBTApp from "./components/CBTApp/CBTApp";
import TabApp from "./TabApp";
import "./style/App.css";

const App = () => (
  <div className="App">
    <div className="header">
      {/* <img src={require("./style/bear.png")} alt="logo" width="50px"/> */}
      <h1>Gavin McGuire</h1>
    </div>

    <HashRouter>
      <div className="navigator">
        <Link to="/"> Home </Link>
        <Link to="/resume"> Resume </Link>
        <Link to="/playlists"> Playlists</Link>
        <Link to="/cbt"> CBT</Link>
        <Link to="/tab"> Guitar Tabs</Link>
        <Link to="/styles"> Styles</Link>
      </div>

      <div className="links">
        <a href="https://github.com/gvnmcg">github.com/gvnmcg</a>
        <br />
        <a href="mailto:gvnmcg517@gmail.com">mailto:gvnmcg517@gmail.com</a>
      </div>

      <div className="content">
        <Switch>
          <Route path="/resume" component={MDComponent} />
          <Route path="/playlists" component={Playlists} />
          <Route path="/cbt" component={CBTApp} />
          <Route path="/tab" component={TabApp} />
          <Route path="/styles" component={<p>In progress</p>} />
        </Switch>
      </div>
    </HashRouter>
  </div>
);

export default App;
