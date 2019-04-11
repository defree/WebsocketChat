import React from 'react'

const SingleMessage = ({ name, message }) =>
  <p>
    <strong>{name}</strong> <em>{message}</em>
  </p>;

export default SingleMessage;