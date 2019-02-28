import React from 'react';

const Car = (props) => {
  return (
    <div>
      <h4>Year: {props.year}</h4>
      <h4>Make: {props.make}</h4>
      <h4>Model: {props.model}</h4>
      <h4>Type: {props.type}</h4>
      <h4>Color: {props.color}</h4>
    </div>
  )
}

export default Car;