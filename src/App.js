import React, { Component } from "react";
import Models from "./components/Models";
import Jumbo from "./components/Jumbo";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Jumbo />
        <Models />
      </div>
    );
  }
}

export default App;
