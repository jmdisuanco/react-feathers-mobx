import { observable } from 'mobx';
import {authLocal} from './FeathersClient';
class appState {
  @observable authenticated=false; // array container
  @observable username='';
  @observable password='';


  handleUsernameChange = (event) =>{
    this.username = event.target.value;
    console.log(this.username);
  }

  handlePasswordChange = (event) =>{
    this.password = event.target.value;
  }

  handleLogin = () =>{
    authLocal(this.username,this.password)
  }

}
var AppState  = new appState

export default AppState;
