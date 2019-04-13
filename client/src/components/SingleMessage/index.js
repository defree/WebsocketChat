import React from 'react'

const SingleMessage = ({ name, message }) =>
  <div className="sbSingleMessageBox">
    <div className="sbNameText" style={name === 'TWRToimitus' ? {color: '#ee6b60'} : {}}>{name}:&nbsp;</div>
    <div className="sbMessageText">{message}</div>
  </div>;

export default SingleMessage;