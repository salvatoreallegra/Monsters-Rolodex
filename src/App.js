import React, { Component } from "react";

import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  constructor() {
    super();
    this.state = { monsters: [] };
  }
  render() {
    return (
      <div className="App">
        <h1>List of Monsters Ball</h1>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
