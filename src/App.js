import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(results => this.setState({data: results}))
    .catch(err => console.log('Error: ', err));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {data && data.results && data.results.map((people, idx) => 
          <li key={idx}>{people.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
