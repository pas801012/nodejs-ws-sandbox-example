console.log("ws.js init");
var WebSocketServer = require("ws").Server,
  // wss = new WebSocketServer({ noServer: true, port: 40510 });
  wss = new WebSocketServer({ port: 40510 });

wss.on("connection", function(ws) {
  ws.on("message", function(message) {
    console.log("received: %s", message);
  });

  setInterval(() => ws.send(`${new Date()}`), 1000);
});
