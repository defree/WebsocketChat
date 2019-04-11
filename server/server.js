const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

console.log('Listening for socket connections on port 3030');

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        console.log('Relaying message');
        client.send(data);
      }
    });
  });
});