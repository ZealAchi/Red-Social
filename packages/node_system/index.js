//requiring path and fs modules
var path = require("path");
const fs = require("fs");
const express = require("express");
var app = express();
var http = require("http").createServer(app);
module.exports.io = require("socket.io")(http);
// const publicPath = path.resolve(__dirname, "./client/dist");
// app.use(express.static(publicPath));
const Socket = require("./socket");
Socket;

app.get("/", function (req, res) {
  res.json({ ss: "Bienvenido :D" });
//   res.sendFile(__dirname + "/index.html");
});

http.listen(80, function () {
  console.log("listening on *:80");
});
