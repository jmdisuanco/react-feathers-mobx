import React from 'react';
import {FloatingActionButton, TextField} from 'material-ui';
import ContentSend from 'material-ui/svg-icons/content/send';
import {sendMessage} from '../FeathersClient';

export default class ChatComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.style={
      marginRight: 20
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleKeyPress =  (event) => {
    if (event.key === 'Enter') {
      sendMessage(this.state.value)
      this.clearInput()
    }
  }

  clearInput = () =>{
    this.setState({
      value:''
    })
  }
  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <FloatingActionButton mini={true} style={this.style} onTouchTap={() => sendMessage(this.state.value)}><ContentSend/></FloatingActionButton>
      </div>
    );
  }
}
