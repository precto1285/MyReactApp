import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Philippe',
      tel: '(555) 555-5555',
      age: '40',
      address: '555 Anywhere St.',
      city: 'San Diego',
      st: 'CA',
      zip: '92101'
    }

  }
  render() {
    return (
      <div className="App">
        <Person
          name={this.state.name}
          tel={this.state.tel}
          age={this.state.age}
          address={this.state.address}
          city={this.state.city}
          st={this.state.st}
          zip={this.state.zip}
        />
      </div>
    );
  }
}

export default App;
