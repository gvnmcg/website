import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MDComponent from "./components/MDComponent";
import Playlists from "./components/Playlists";
import CBTApp from "./CBTApp";
import TabApp from "./TabApp";
import "./style/App.css";

const App = () => (
  <div className="App">
    <div className="header">
      {/* <img src={require("./style/bear.png")} alt="logo" width="50px"/> */}
      <h1>Gavin McGuire</h1>
    </div>

    <Router>
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
          <Route path="/resume">
            <MDComponent />
          </Route>

          <Route path="/playlists">
            <Playlists />
          </Route>

          <Route path="/cbt">
            <CBTApp />
          </Route>

          <Route path="/tab">
            <TabApp />
          </Route>

          <Route path="/styles">
            <p>In progress</p>
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
