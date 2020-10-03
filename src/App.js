import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();      // Calls the Constructor method on the Component class and gives us access to this.state
    
    this.state = {
      kittens: [],
      searchField: ''
    };
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ kittens: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { kittens, searchField } = this.state;
    const filteredKittens = kittens.filter(cat => 
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Kittens Cards</h1>
        <SearchBox
          placeholder = 'Search kittens'
          handleChange = {this.handleChange}
        />
        <CardList kittens={filteredKittens} />
      </div>
    )
  }
}

export default App;
