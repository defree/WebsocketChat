import React, { Component } from 'react';
import MessageSend from '../MessageSend';
import SingleMessage from '../SingleMessage';

const URL = 'ws://localhost:3030';

class Chat extends Component {
  state = {
    messages: [],
  };

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = (name, messageString) => {
    // on submitting the MessageSend form, send the message, add it to the list and reset the input
    const message = { name: name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div id="sbMainWrapper">
        <div className="sbInputArea">
          <MessageSend
            ws={this.ws}
            onSubmitMessage={(name, messageString) => this.submitMessage(name, messageString)}
          />
        </div>
        <div className="sbMessageArea">
          {this.state.messages.map((message, index) =>
            <SingleMessage
              key={index}
              message={message.message}
              name={message.name}
            />,
          )}
        </div>
      </div>
    )
  }
}

export default Chat