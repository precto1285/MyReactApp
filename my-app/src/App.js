import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';
import Car from './Components/Car.js';
import Account from './Components/Account.js';
class App extends Component {
  constructor() {
    super();
    this.state =
      [
        {
          name: 'Philippe',
          tel: '(555) 555-5555',
          age: '40',
          address: '555 Anywhere St.',
          city: 'San Diego',
          st: 'CA',
          zip: '92101'
        },
        {
          year: '2000',
          make: 'Toyota',
          model: 'Corolla',
          type: 'Sedan',
          color: 'Gray'
        },
        {
          account: '0001',
          username: 'panda_258',
          email: 'panda_express@gpi.org',
          password: 'wakawaka'
        }
      ]

  }
  render() {
    return (
      <div className="App">
        <hr />
        <br />
        <Person
          name={this.state[0].name}
          tel={this.state[0].tel}
          age={this.state[0].age}
          address={this.state[0].address}
          city={this.state[0].city}
          st={this.state[0].st}
          zip={this.state[0].zip}
        />
        <br />
        <hr />
        <br />
        <Car
          year={this.state[1].year}
          make={this.state[1].make}
          model={this.state[1].model}
          type={this.state[1].type}
          color={this.state[1].color}
        />
        <br />
        <hr />
        <br />
        <Account
          account={this.state[2].account}
          username={this.state[2].username}
          email={this.state[2].email}
          password={this.state[2].password}
        />
        <br />
        <hr />
      </div>
    );
  }
}

export default App;
