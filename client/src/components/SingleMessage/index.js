import React from 'react'

const SingleMessage = ({ name, message }) =>
  <div className="sbSingleMessageBox">
    <div className="sbNameText">{name}:&nbsp;</div>
    <div className="sbMessageText">{message}</div>
  </div>;

export default SingleMessage;