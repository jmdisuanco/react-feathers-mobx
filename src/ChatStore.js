import { observable } from 'mobx';

class ChatStore {
  @observable messages=[]; // array container

  newMessage(value){  //add entries to messages array
    this.messages.push(value)
  }

}
var Messages  = new ChatStore

export default Messages;
