// Not implemented yet

import { observable } from 'mobx';

class appState {
  @observable messages=[]; // array container

  newMessage(value){  //add entries to messages array
    this.messages.push(value)
  }

}
var AppState  = new appState

export default AppState;
