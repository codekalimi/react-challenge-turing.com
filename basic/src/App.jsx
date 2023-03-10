import {Component} from "react";

import "./App.css";
import CardListComponent from "./Components/CardList/CardList.component";
import SearchBoxComponent from "./Components/SearchBox/SearchBox.component";

/**
 * App Component
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  /**
   * Fetching data from API
   */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          this.setState(() => {
            return {monsters: users};
          });
        });
  }

  /**
   * Calling this function when onChange event happens on the form
   * @param event
   */
  onSearch = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchField: searchString,
      };
    });
  };

  render() {
    const {monsters, searchField} = this.state;
    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
        <div className="App">
          <SearchBoxComponent onSearchHandler={this.onSearch} placeholder="Search Monster"/>
          <CardListComponent monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;
