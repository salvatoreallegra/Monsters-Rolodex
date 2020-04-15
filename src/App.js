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
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters rolodex"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
