// Include required modules
const {HttpServer} = require('@aliceo2/web-ui');
const jwtconfig = {expiration: "1d"};
const {WebSocket, WebSocketMessage, LogManager} = require('@aliceo2/web-ui');

const logger = LogManager.getLogger('live-demo');

// create instance of http server
const http = new HttpServer({
  port: 8080
},
jwtconfig);

// Server `public` folder
http.addStaticPath('public');

http.get('/hi', (req, res) => {
    res.status(200).json({message: 'hi'})
  }, { public: false }); // turns off JWT verification



const ws = new WebSocket(http);
// Print all messages with command 'print'
ws.bind('hello', (message) => {
  console.log(message.payload);
  // ...and send back 'print-response'
  return new WebSocketMessage().setCommand('print-response').setPayload({message: 'hello-back'});
});

logger.infoMessage('HI');
