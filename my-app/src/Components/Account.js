import React from 'react';

const Account = (props) => {
  return (
    <div>
      <h4>Account: {props.account}</h4>
      <h4>username: {props.username}</h4>
      <h4>email: {props.email}</h4>
      <h4>password: {props.password}</h4>
    </div>
  )
}

export default Account;