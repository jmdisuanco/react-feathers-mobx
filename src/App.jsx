import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChatComponent from './components/ChatComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem} from 'material-ui/List';
injectTapEventPlugin();



@observer
class App extends Component {

  scrollToBottom = () => {
      const node = ReactDOM.findDOMNode(this.messagesEnd);
      node.scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {
      this.scrollToBottom();
  }

  componentDidUpdate() {
      this.scrollToBottom();
  }

  render() {
    const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  List: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};



    const { messages } = this.props.appStore
    messages.map(msg => console.log(msg.message))

    const messageList = messages.map(msg => (
      <ListItem key={msg._id}
       primaryText={msg.message}
     />
    ))

    return (
        <MuiThemeProvider>
          <div>
            <List
              cols={1}
              cellHeight={200}
              padding={1}
              style={styles.List}>
                {messageList}
                <div style={ {float:"left", clear: "both"} } ref={(el) => { this.messagesEnd = el; }}></div>
            </List>

          <ChatComponent/>
          </div>
        </MuiThemeProvider>
    );
  }

};

export default App;
