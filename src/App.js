import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { id: 1, name: "Frankenstein" },
        { id: 2, name: "Sea Creature" },
        { id: 3, name: "Covid-19 Zombie" },
        { id: 4, name: "Volcano DragonFly" },
        { id: 5, name: "Chucki Reborn" },
        { id: 6, name: "Tele-Evangelist" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>List of Monsters</h1>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
