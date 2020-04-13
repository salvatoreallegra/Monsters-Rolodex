import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";

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
        <CardList>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
