const { io } = require("./../index");

const jwt = require('jsonwebtoken')
const config = require('./../config/config')
const mongo = require('./../mongo')
const utils = require('./../utilz')

io.on("connection", (socket) => {
  console.log('a user connected');
  socket.emit("^vAr^", {
    type: "client-websocket-id", data: {
      token: jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'client-websocket-id'
      }, config.secret),
    }, success: true
  })
  socket.broadcast.emit('hi');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on("message", (message) => {
    switch (message.type) {
      case "get-jwt-token":
        login(socket, message)
        break;
      case "create-user":
        register(socket, message)
        break;
      default:
        break;
    }
  });
});

async function login(socket, message) {
  let user = await mongo.AuthenticateUser(message.data);
  if (user !== false && user !== null) {
    user.password = 'F00';
    let token = await utils.GenerateJwt(user);
    socket.emit("^vAr^", {
      type: "Looged", data: {
        access_token: token,
      }, Code: 701
    })
  } else {
    socket.emit("^vAr^", { type: "Looged", Error: 'Erro en la Authentificación', Code: 701 })
  }
}

async function register(socket, message) {
  let user = await mongo.RegisterUser(message.data)

}