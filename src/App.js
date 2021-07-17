import React, { Component } from 'react';
// import { CardList } from './components/card-list/card-list.component.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => console.log(result))
    .then(users => this.setState({ monsters: users}))
  }

  render() {
  // const { monsters } = this.state;
    return (
      <div className="App">
        {this.state.monsters}
      </div>
    );
  }
}

export default App;
