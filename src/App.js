import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Frankensteing" },
        { name: "Sea Creature" },
        { name: "Covid-19 Zombie" },
      ],
    };
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
