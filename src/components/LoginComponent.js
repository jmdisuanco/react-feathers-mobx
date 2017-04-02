import React, {Component} from 'react';
import {TextField,Paper,FlatButton} from 'material-ui';
import AppState from '../AppState';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}
const style= {
  width:350,
  height:400,
  margin:"0 auto",
  marginTop:100,
  textAlign:'center',
};
const headerStyle = {
  height:56,
  backgroundColor:'#d3d3d3',
  textAlign:'center',
  paddingTop:20
}

class LoginComponent extends Component {
  render() {

    return (
      <div>
          <Paper style={style}>
            <div style={headerStyle}>Login</div>
            <div style={{paddingTop:'110px'}}>
              <TextField name="username" placeholder="username"  onKeyUp={AppState.handleUsernameChange}/>
              <TextField name="password" placeholder="password"  type="password" onKeyUp={AppState.handlePasswordChange} />
            </div>
            <br/>
            <FlatButton onTouchTap={AppState.handleLogin}>Login</FlatButton>
          </Paper>
      </div>
    );
  }
}

export default LoginComponent;
