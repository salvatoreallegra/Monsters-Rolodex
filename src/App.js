import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchbox/searchbox.component";

import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Monsters Rolodex"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
