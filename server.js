var express = require("express");
var ws = require("./ws");
console.log(ws);
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/ws.html");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
