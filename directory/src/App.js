import React from "react";
import "./App.scss";

import Directory from "./components/Directory/Directory"

function App() {
  return (
    <div className="app">
      <header>
        <div className="navigation-menu">
          <p>Logo</p>
        </div>
      </header>
      <Directory />
    </div>
  );
}

export default App;
