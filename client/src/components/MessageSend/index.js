import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageSend extends Component {
  state = {
    name: '',
    message: '',
  };

  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.name, this.state.message)
          this.setState({ message: '' })
        }}
        style={{ margin: 0 }}
      >
        <div className="sbTextFieldArea">
          <div className="sbTextFieldInnerArea">
            <input
              type="text"
              id='name'
              placeholder='Syötä nimimerkki (max. 10 merkkiä)'
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              className="sbNameInput"
            />
            <input
              type="text"
              placeholder={'Syötä viesti (max. 200 merkkiä)'}
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
              className="sbTextInput"
            />
          </div>
        </div>
        <div className="sbButtonArea">
          <div className="sbButtonInnerArea">
            <button type="submit" value="Send" className="sbSubmitButton">Lähetä</button>
          </div>
        </div>
      </form>
    );
  }
}

export default MessageSend;