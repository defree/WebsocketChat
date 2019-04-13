const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

// Remember to set this
const toimitusNick = process.env.TOIMITUSNICK;

console.log('Listening for socket connections on port 3030');

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    // Check for name and message
    const jData = JSON.parse(data);
    if (jData.name && jData.message && jData.name !== 'TWRToimitus') {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          console.log("Relaying message");
          data = data.replace(toimitusNick, "TWRToimitus");
          client.send(data);
        }
      });
    }
  });
});