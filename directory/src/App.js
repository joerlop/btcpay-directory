import React from "react";
import "./App.scss";
import { NavLink, Route, useRouteMatch } from "react-router-dom";

import Directory from "./components/Directory/Directory";

function App() {
  const green = "#51B13E";
  let match = useRouteMatch();

  return (
    <div className="app">
      <header>
        <div className="navigation-menu">
          <p>Logo</p>
        </div>
      </header>

      <div className="home-content">
        <h2>Directory</h2>
        <div className="filters">
          <NavLink
            className="filter"
            exact
            activeStyle={{ color: green }}
            to={"/"}
          >
            All
          </NavLink>
          <NavLink
            className="filter"
            exact
            activeStyle={{ color: green }}
            to={"/apps"}
          >
            Apps
          </NavLink>
          <NavLink
            className="filter"
            exact
            activeStyle={{ color: green }}
            to={"/hosts"}
          >
            Hosts
          </NavLink>
          <NavLink
            className="filter"
            exact
            activeStyle={{ color: green }}
            to={"/merchants"}
          >
            Merchants
          </NavLink>
          <NavLink
            className="filter"
            exact
            activeStyle={{ color: green }}
            to={"/non-profit"}
          >
            Non-profit
          </NavLink>
        </div>
        <Route exact path={"/"}>
          <Directory />
        </Route>
        <Route exact path={"/:filterName"}>
          <Directory />
        </Route>
      </div>
    </div>
  );
}

export default App;
