import React from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";

import MDComponent from "./components/MDComponent/MDComponent";
import Blog from "./components/Blog/Blog";
import Album from "./components/ArtistPortfolio/Album";
import FretboardApp from "./components/TabApp/Fretbaoard";
import "./style/App.css";

/**
 * App component
 * - display sidebar
 *  - name
 *  - links to portfolio
 *  - links to git hub and email
 * - 
 */
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
          <Link to="/blog"> Portfolio: Blog </Link>
          <Link to="/artport"> Portfolio: Art  </Link>
          {/* <Link to="/playlists"> Playlists</Link> */}
        </div>
        
        <div className="links">
          <br />
          <a href="https://github.com/gvnmcg">github.com/gvnmcg</a>
          <br />
          <a href="mailto:gvnmcg517@gmail.com">mailto:gavinbmcguire@gmail.com</a>
        </div>

      </div>

      <div className="content">
        <Switch>
          <Route path="/resume" component={MDComponent} />
          <Route path="/blog" component={Blog} />
          <Route path="/artport" component={Album} />
          <Route path="/fb" component={FretboardApp} />
        </Switch>
      </div>
    </HashRouter>
  </div>
);

export default App;
