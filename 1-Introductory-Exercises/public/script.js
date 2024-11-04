import {WebSocketClient} from '/js/src/index.js';


// const url = new URL(window.location);
// const token = url.searchParams.get('token')

const ws = new WebSocketClient();

ws.addListener('authed', () => {
  console.log('ready, lets send a message');
  ws.sendMessage({command: 'hello', payload: "hello-ws"});
});


// const webSocketConnector = new webSocketConnector('ws://localhost:8080/?token=${token}')

