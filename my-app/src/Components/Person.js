import React from 'react';

const person = (props) => {
  return (
    <div>
      <h4>First Name: {props.name}</h4>
      <h4>Telephone: {props.tel}</h4>
      <h4>Age: {props.age}</h4>
      <h4>Address: {props.address}</h4>
      <h4>City: {props.city}</h4>
      <h4>State: {props.st}</h4>
      <h4>Zip Code: {props.zip}</h4>
    </div>
  )
}

export default person;