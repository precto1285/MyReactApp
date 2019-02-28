import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state = {
    name: 'Philippe',
    age: '40',
    city: 'San Diego',
    st: 'California'

  }
  render() {
    return (
      <div className="App">
        <Person name={this.state.name}
          age={this.state.age}
          city={this.state.city}
          st={this.state.st} />
      </div>
    );
  }
}

export default App;
