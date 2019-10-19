require('dotenv').config();  // loads environment variables from an .env file into process.env
const NODE_ENV = process.env.NODE_ENV || 'dev'
const HTTP_PORT = process.env.HTTP_PORT || 8000;
const HTTPS_PORT = process.env.HTTPS_PORT || 8443;

const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app).listen(HTTP_PORT, () => console.log('HTTP server running on port ' + HTTP_PORT ));

if (NODE_ENV === "prod") {
  const https = require('https');
  let ssl_credentials;  // make sure to install correct ssl certificates for https before commenting out this block
  server = https.createServer(ssl_credentials, app).listen(HTTPS_PORT, () => console.log('HTTPS server running on port ' + HTTPS_PORT ));
}

app.use(require("body-parser").text());  // node.js body parsing middleware


/************************       WEBSOCKETS       *************************************/

const io = require('socket.io').listen(server)

let users = [];
let connections = [];

io.on("connection", (socket) => {
  connections.push(socket);
  console.log(connections.length + " connections");

  socket.on("sendMessage", msg => {
    console.log("message received: ", msg)
    io.emit("receiveMessage", msg) 
  })
  
  socket.on("disconnect", () => {
    connections.pop();
    console.log("user disconnected. remaining connecions: ", connections.length);
  })

})


/**********************  CLIENT RELATED SERVING  ******************************/

if(NODE_ENV === "prod") {
  const path = require('path');
  const CLIENT_BUILD_PATH = path.join(__dirname, '/client/build');  // the path to the build directory

  app.use(express.static(CLIENT_BUILD_PATH)); // serves static files from /build folder

  app.get('*', function(req, res) {
    // returns all remaining get requests to the react app so that react-router can handle inner-app routing.
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
  });
}
