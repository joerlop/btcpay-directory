import React from "react";
import "./App.scss";
import { NavLink } from "react-router-dom";

import Directory from "./components/Directory/Directory";

function App() {
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
          <NavLink to={"/"}>
            All
          </NavLink>
          <NavLink to={"/merchants"}>
            Merchants
          </NavLink>
        </div>
        <Directory />
      </div>
      
    </div>
  );
}

export default App;
