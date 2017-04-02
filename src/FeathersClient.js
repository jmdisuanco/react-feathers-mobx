import io from 'socket.io-client';
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import hooks from 'feathers-hooks';
import { observable } from 'mobx';
import Messages from './ChatStore';
//import jwt from 'feathers-authentication-jwt';
const localStorage = require('localstorage-memory');

const socket = io('http://localhost:3030', { transports: ['websocket'], forceNew: true });
const client = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(authentication({ storage: localStorage }));

const messageService = client.service('messages');

messageService.on('created',function(message){
                    Messages.newMessage(message); // store message
              });

module.exports= {


}

function sendMessage(message){
    messageService.create({message:message,user:'Newbie'});
}

function authLocal(username,password){
    console.log('authenticating');
    client.authenticate({
        strategy: 'local',
        email: username,
        password: password
      })
      .then(response => {
        console.log('Authenticated!', response);
        return client.passport.verifyJWT(response.accessToken);
      })
      .then(payload => {
        console.log('JWT Payload', payload);
        return client.service('users').get(payload.userId);
      })
      .then(user => {
        client.set('user', user);
        console.log('User', client.get('user'));
      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
}
//exports.sendMessage = sendMessage;
module.exports={
  sendMessage: sendMessage,
  authLocal: authLocal
}
