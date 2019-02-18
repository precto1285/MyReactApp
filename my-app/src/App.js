import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state = {
    name: 'Philippe'
  }
  render() {
    return (
      <div className="App">
        <Person name={this.state.name} />
        <Person name={this.state.name} />
        <Person name={this.state.name} />
        <Person name={this.state.name} />
      </div>
    );
  }
}

export default App;
