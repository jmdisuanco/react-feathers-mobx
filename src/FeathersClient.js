import io from 'socket.io-client';
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import { observable } from 'mobx';
import Messages from './ChatStore';

const socket = io('http://localhost:3030', { transports: ['websocket'], forceNew: true });
const client = feathers()
  .configure(hooks())
  .configure(socketio(socket));

const messageService = client.service('messages');

messageService.on('created',function(message){
                    Messages.newMessage(message); // store message
              });


function sendMessage(message){
    messageService.create({message:message,user:'Newbie'});
}

exports.sendMessage = sendMessage;
