import React from 'react';

const person = (props) => {
  return <div>
    <p>First Name: {props.name}</p><br />
    <p>Age: {props.age}</p><br />
    <p>City: {props.city}</p><br />
    <p>State: {props.st}</p>
  </div>
}

export default person;