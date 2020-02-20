import React from "react";
import "./App.scss";
import { NavLink, Route } from "react-router-dom";
import Directory from "./components/Directory/Directory";
import btcPayLogo from "./images/btcpay-directory-logo.svg"

function App() {
  const green = "#51B13E";
  const black = "#262626";
  const pickedColor = green;

  return (
    <div className="app">
      <header>
        <div className="navigation-menu">
          <img src={btcPayLogo} />
          <div className="filters">
            <NavLink
              className="filter"
              exact
              activeStyle={{ color: pickedColor }}
              to={"/"}
            >
              ALL
            </NavLink>
            <NavLink
              className="filter"
              exact
              activeStyle={{ color: pickedColor }}
              to={"/apps"}
            >
              APPS
            </NavLink>
            <NavLink
              className="filter"
              exact
              activeStyle={{ color: pickedColor }}
              to={"/hosts"}
            >
              HOSTS
            </NavLink>
            <NavLink
              className="filter"
              exact
              activeStyle={{ color: pickedColor }}
              to={"/merchants"}
            >
              MERCHANTS
            </NavLink>
            <NavLink
              className="filter"
              exact
              activeStyle={{ color: pickedColor }}
              to={"/non-profit"}
            >
              NON&#8209;PROFITS
            </NavLink>
          </div>
        </div>
        {/* <svg
          className="navigation-gradient"
          enable-background="new 0 0 100 7"
          height="7"
          viewBox="0 0 100 7"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="50.1831"
            x2="49.8171"
            y1="8.7402"
            y2="-1.7397"
          >
            <stop offset="0" stop-color="#0c0068" stop-opacity="0"></stop>
            <stop stop-color="#0c0068" stop-opacity="0" offset=".5"></stop>
            <stop offset="1" stop-color="#0c0068" stop-opacity=".2"></stop>
          </linearGradient>
          <path d="m0 0h100v7h-100z" fill="url(#a)" />
          <path
            d="m100 .916v-.916h-100v4c11.385-2 80.846-5.162 100-3.084z"
            fill="#fff"
          />
        </svg> */}
      </header>

      <div className="home-content">
        <h2>Directory</h2>
        <Route exact path={"/"}>
          <Directory />
        </Route>
        <Route exact path={"/:filterName"}>
          <Directory />
        </Route>
      </div>

      <footer>
        <div className="footer-content">
          <p>Content Released under MIT license.</p>
          <p>This website does not use cookies nor collect personal data.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
